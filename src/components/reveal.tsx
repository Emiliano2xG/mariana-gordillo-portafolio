import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const reducedMotion =
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useInViewOnce<T extends HTMLElement>(rootMargin = "0px 0px -10% 0px") {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(true);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined" || reducedMotion) {
      setSeen(true);
      setPending(false);
      return;
    }

    const rect = node.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    if (inView) {
      setSeen(true);
      setPending(false);
      return;
    }

    setSeen(false);
    setPending(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          setPending(false);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, seen, pending };
}

type RevealVariant = "up" | "scale" | "left" | "fade";

export function Reveal({
  children,
  delay = 0,
  variant = "fade",
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  variant?: RevealVariant;
  className?: string;
  as?: React.ElementType;
}) {
  const { ref, seen, pending } = useInViewOnce<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={cn(
        "reveal",
        variant === "up" && "reveal-up",
        variant === "scale" && "reveal-scale",
        variant === "left" && "reveal-left",
        pending && "is-pending",
        seen && "is-visible",
        className,
      )}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
