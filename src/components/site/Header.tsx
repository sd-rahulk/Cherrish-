import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/location", label: "Visit" },
];

export function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        transparent
          ? "bg-transparent text-ivory"
          : "border-b border-border bg-background/90 text-foreground backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight">Cherish</span>
          <span className="hidden text-[0.65rem] uppercase tracking-[0.3em] opacity-60 md:inline">
            Photography
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm tracking-wide opacity-80 transition-opacity hover:opacity-100"
              activeProps={{ className: "opacity-100" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/book"
            className={cn(
              "rounded-sm border px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-colors",
              transparent
                ? "border-ivory text-ivory hover:bg-ivory hover:text-ink"
                : "border-foreground bg-foreground text-background hover:bg-primary hover:border-primary",
            )}
          >
            Book a Session
          </Link>
        </nav>

        <button
          aria-label="Menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background text-foreground md:hidden">
          <div className="flex flex-col gap-1 px-6 py-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="border-b border-border/60 py-3 text-base"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/book" className="mt-4 bg-foreground py-3 text-center text-sm uppercase tracking-[0.2em] text-background">
              Book a Session
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
