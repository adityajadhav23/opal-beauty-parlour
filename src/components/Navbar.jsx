import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { business, navLinks } from "../data/siteData";
import BrandLogo from "./BrandLogo";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line/80 bg-cream/80 shadow-sm backdrop-blur-xl"
          : "bg-cream/40 backdrop-blur-md"
      }`}
    >
      <nav className="container-page flex h-[4.25rem] items-center justify-between md:h-[4.6rem]">
        <a href="#home" className="flex items-center gap-2.5">
          <BrandLogo className="h-11 w-11" />
          <span className="leading-tight">
            <span className="block font-display text-xl font-semibold tracking-tight text-ink md:text-[1.35rem]">
              {business.shortName}
            </span>
            <span className="hidden text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted sm:block">
              {business.motto}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-blush"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#contact" className="btn btn-primary nav-cta !px-5 !py-2.5 text-sm">
            Visit Us
          </a>
          <button
            type="button"
            className="menu-btn h-11 w-11 items-center justify-center rounded-full border border-blush/40 bg-surface text-ink shadow-sm"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-cream/95 backdrop-blur-xl lg:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-blush-soft"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                className="btn btn-primary w-full"
                onClick={() => setOpen(false)}
              >
                Visit Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
