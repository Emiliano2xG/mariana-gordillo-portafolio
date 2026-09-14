import { Bookmark, ChevronLeft, ChevronRight, Heart, MessageCircle, MoreHorizontal, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import type { InstagramPost } from "@/data/profile";
import { canPauseOnHover, cn } from "@/lib/utils";

const ROTATE_MS = 8000;

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
    </svg>
  );
}

function MediaCarousel({ images, alt }: { images: string[]; alt: string }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const goTo = (next: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(images.length - 1, next));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="relative bg-neutral-100">
      <div
        ref={scrollerRef}
        onScroll={() => {
          const el = scrollerRef.current;
          if (!el) return;
          setIndex(Math.round(el.scrollLeft / el.clientWidth));
        }}
        className="ig-scroller flex aspect-square snap-x snap-mandatory overflow-x-auto"
      >
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${alt} · ${i + 1} de ${images.length}`}
            className="h-full w-full shrink-0 snap-center object-cover"
            draggable={false}
          />
        ))}
      </div>

      {images.length > 1 ? (
        <>
          {index > 0 && (
            <button
              type="button"
              aria-label="Imagen anterior"
              onClick={() => goTo(index - 1)}
              className="absolute top-1/2 left-1.5 grid size-7 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-neutral-800 shadow"
            >
              <ChevronLeft className="size-4" />
            </button>
          )}
          {index < images.length - 1 && (
            <button
              type="button"
              aria-label="Imagen siguiente"
              onClick={() => goTo(index + 1)}
              className="absolute top-1/2 right-1.5 grid size-7 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-neutral-800 shadow"
            >
              <ChevronRight className="size-4" />
            </button>
          )}

          <span className="absolute top-3 right-3 rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-white">
            {index + 1}/{images.length}
          </span>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`Ir a la imagen ${i + 1}`}
                onClick={() => goTo(i)}
                className={cn(
                  "size-1.5 rounded-full transition-all",
                  i === index ? "w-3 bg-white" : "bg-white/50",
                )}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export function InstagramPostCard({ post }: { post: InstagramPost }) {
  const [expanded, setExpanded] = useState(false);
  const long = post.caption.length > 120;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[18px] border border-black/10 bg-white font-sans text-neutral-900 shadow-[0_12px_32px_rgba(44,31,18,0.06)]">
      <header className="flex shrink-0 items-center gap-2 px-3 py-2.5">
        <span className="rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-[1.5px]">
          <span className="block rounded-full bg-white p-[1.5px]">
            <img src={post.images[0]} alt="" className="size-7 rounded-full object-cover" />
          </span>
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold">{post.account}</p>
          <p className="flex items-center gap-1 text-[10px] text-neutral-500">
            <InstagramGlyph className="size-2.5" />
            {post.images.length > 1 ? "Carrusel" : "Foto"}
          </p>
        </div>
        <MoreHorizontal className="size-4 shrink-0 text-neutral-400" />
      </header>

      <MediaCarousel
        images={post.images}
        alt={
          post.images.length > 1
            ? `Carrusel de ${post.account}`
            : `Publicación de ${post.account}`
        }
      />

      <div className="flex min-h-0 flex-1 flex-col px-3 pt-2.5 pb-3">
        <div className="flex shrink-0 items-center gap-3">
          <Heart className="size-5" />
          <MessageCircle className="size-5" />
          <Send className="size-5" />
          <Bookmark className="ml-auto size-5" />
        </div>

        <div className="mt-2 flex min-h-[4.5rem] flex-1 flex-col">
          <p
            className={cn(
              "text-[12px] leading-5 text-neutral-700",
              expanded ? "whitespace-pre-line" : "line-clamp-3",
            )}
          >
            <span className="font-semibold text-neutral-900">{post.account}</span> {post.caption}
          </p>
          {long ? (
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              className="mt-1 self-start text-[11px] text-neutral-400"
            >
              {expanded ? "menos" : "más"}
            </button>
          ) : null}
        </div>

        <p className="mt-auto line-clamp-2 min-h-7 pt-1.5 text-[11px] leading-4 text-[#C13584]">
          {post.hashtags.join(" ")}
        </p>
      </div>
    </article>
  );
}

export function RotatingInstagramPosts({ posts }: { posts: InstagramPost[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const post = posts[index];

  useEffect(() => {
    const clearIfMobile = () => {
      if (!canPauseOnHover()) setPaused(false);
    };
    clearIfMobile();
    window.addEventListener("resize", clearIfMobile);
    return () => window.removeEventListener("resize", clearIfMobile);
  }, []);

  useEffect(() => {
    if (paused || posts.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % posts.length);
    }, ROTATE_MS);

    return () => window.clearInterval(id);
  }, [paused, posts.length]);

  if (!post) return null;

  return (
    <div
      className="relative z-10 w-full max-w-[300px] shrink-0"
      onMouseEnter={() => {
        if (canPauseOnHover()) setPaused(true);
      }}
      onMouseLeave={() => setPaused(false)}
    >
      <div key={post.id} className="post-fade">
        <InstagramPostCard post={post} />
      </div>

      {posts.length > 1 ? (
        <div className="mt-5 flex items-center gap-2">
          {posts.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Ver publicación ${i + 1} de ${posts.length}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
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
