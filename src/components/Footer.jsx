import { business, contact, isSet, links, navLinks } from "../data/siteData";
import BrandLogo from "./BrandLogo";
import BrandMark from "./BrandMarks";

const social = [
  { href: links.instagram, label: "Instagram", mark: "instagram", ready: isSet(contact.instagram) },
  { href: links.whatsapp, label: "WhatsApp", mark: "whatsapp", ready: isSet(contact.whatsapp) },
  { href: links.phone, label: "Phone", mark: "phone", ready: isSet(contact.phone) },
  { href: links.maps, label: "Map", mark: "maps", ready: isSet(contact.googleMaps) },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page grid gap-10 py-12 md:grid-cols-3">
        <div>
          <a href="#home" className="inline-flex items-center gap-2.5">
            <BrandLogo className="h-12 w-12" />
            <span className="font-display text-2xl text-ink">{business.name}</span>
          </a>
          <p className="mt-3 italic text-blush">{business.motto}</p>
          {isSet(business.address) ? (
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{business.address}</p>
          ) : (
            <p className="mt-1 text-sm text-muted">
              {business.location} · Since {business.foundedYear}
            </p>
          )}
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Quick links
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-ink transition-colors hover:text-blush">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Connect
          </p>
          <div className="mt-4 flex gap-3">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.ready && item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.ready ? "noreferrer" : undefined}
                aria-label={item.label}
                className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full shadow-sm"
              >
                <BrandMark name={item.mark} size={44} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-sm text-muted">
        © 2026 {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
