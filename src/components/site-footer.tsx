import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[660px] px-8 py-10">
      <p className="text-small text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
