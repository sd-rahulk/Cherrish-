import { Link } from "@tanstack/react-router";
import { services } from "@/lib/services";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-4xl">Cherish</p>
            <p className="mt-1 text-[0.7rem] uppercase tracking-[0.3em] opacity-60">
              Photography · Bengaluru
            </p>
            <p className="mt-8 max-w-sm text-sm leading-relaxed opacity-70">
              An editorial photography studio in HSR Layout. Weddings, portraits,
              and the kind of pictures you keep on a shelf.
            </p>
            <div className="mt-8 flex gap-4 opacity-80">
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="mailto:hello@cherishphotography.in" aria-label="Email"><Mail size={18} /></a>
              <a href="tel:+919880482555" aria-label="Phone"><Phone size={18} /></a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow !text-ivory/60">Services</p>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="opacity-80 hover:opacity-100">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow !text-ivory/60">Visit</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/location" className="opacity-80 hover:opacity-100">Studio</Link></li>
              <li><Link to="/about" className="opacity-80 hover:opacity-100">About us</Link></li>
              <li><Link to="/reviews" className="opacity-80 hover:opacity-100">Reviews</Link></li>
              <li><Link to="/book" className="opacity-80 hover:opacity-100">Book a session</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="eyebrow !text-ivory/60">Studio</p>
            <p className="mt-5 text-sm leading-relaxed opacity-80">
              Creative Environs, 24th Main Rd<br />
              2nd Sector, ITI Layout, HSR Layout<br />
              Bengaluru, Karnataka 560102
            </p>
            <p className="mt-5 text-sm leading-relaxed opacity-80">
              Open every day · By appointment<br />
              <a href="tel:+919880482555">+91 98804 82555</a>
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-ivory/15 pt-8 text-xs opacity-60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Cherish Photography. All rights reserved.</p>
          <p className="font-display text-sm tracking-wide">Frame · Story · Keep</p>
        </div>
      </div>
    </footer>
  );
}
