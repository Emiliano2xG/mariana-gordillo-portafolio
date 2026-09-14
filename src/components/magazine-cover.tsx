import { useCallback, useEffect, useState } from "react";

import type { MagazineEdition } from "@/data/profile";
import { canPauseOnHover, cn } from "@/lib/utils";

const ROTATE_MS = 8000;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function RotatingMagazineCovers({ editions }: { editions: MagazineEdition[] }) {
  const [index, setIndex] = useState(0);
  const [incoming, setIncoming] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const current = editions[index];
  const next = incoming !== null ? editions[incoming] : current;

  const turnTo = useCallback(
    (to: number) => {
      if (to === index || incoming !== null || !editions[to]) return;
      if (prefersReducedMotion()) {
        setIndex(to);
        return;
      }
      setIncoming(to);
    },
    [editions, incoming, index],
  );

  useEffect(() => {
    const clearIfMobile = () => {
      if (!canPauseOnHover()) setPaused(false);
    };
    clearIfMobile();
    window.addEventListener("resize", clearIfMobile);
    return () => window.removeEventListener("resize", clearIfMobile);
  }, []);

  useEffect(() => {
    if (paused || incoming !== null || editions.length < 2) return;
    if (prefersReducedMotion()) return;

    const id = window.setInterval(() => {
      turnTo((index + 1) % editions.length);
    }, ROTATE_MS);

    return () => window.clearInterval(id);
  }, [paused, incoming, editions.length, index, turnTo]);

  if (!current || !next) return null;

  return (
    <div
      className="w-full max-w-[280px] shrink-0 lg:max-w-[300px]"
      onMouseEnter={() => {
        if (canPauseOnHover()) setPaused(true);
      }}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="magazine-stage">
        <div className="magazine-book">
          <a
            href={next.href}
            target="_blank"
            rel="noreferrer noopener"
            className="magazine-cover"
          >
            <img src={next.image} alt={`Portada · ${next.edition}. ${next.theme}`} />
          </a>

          {incoming !== null ? (
            <div
              className="magazine-flip"
              onAnimationEnd={() => {
                setIndex(incoming);
                setIncoming(null);
              }}
            >
              <div className="magazine-face">
                <img src={current.image} alt="" />
              </div>
              <div className="magazine-face magazine-face-back" aria-hidden />
            </div>
          ) : null}

          <span className="magazine-spine" aria-hidden />
        </div>
      </div>

      <div className="mt-6">
        <p className="text-tiny text-muted-foreground">{current.edition}</p>
        <p className="text-small mt-2 leading-snug">{current.theme}</p>
        <p className="text-tiny mt-2 tracking-widest text-muted-foreground">{current.date}</p>
      </div>

      {editions.length > 1 ? (
        <div className="mt-5 flex items-center gap-2">
          {editions.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Ver ${item.edition}`}
              aria-current={i === index}
              onClick={() => turnTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index ? "w-6 bg-foreground" : "w-1.5 bg-foreground/25 hover:bg-foreground/50",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
