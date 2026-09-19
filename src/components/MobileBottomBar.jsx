import { contact, isSet, links } from "../data/siteData";
import BrandMark from "./BrandMarks";

const actions = [
  {
    id: "phone",
    label: "Contact",
    href: links.phone,
    mark: "phone",
    ready: isSet(contact.phone),
  },
  {
    id: "map",
    label: "Map",
    href: links.maps,
    mark: "maps",
    ready: isSet(contact.googleMaps),
  },
  {
    id: "instagram",
    label: "Instagram",
    href: links.instagram,
    mark: "instagram",
    ready: isSet(contact.instagram),
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: links.whatsapp,
    mark: "whatsapp",
    ready: isSet(contact.whatsapp),
  },
  {
    id: "group",
    label: "Group",
    href: links.whatsappGroup,
    mark: "whatsapp",
    ready: isSet(contact.whatsappGroup),
  },
];

function ActionLink({ item, compact = false }) {
  const external = item.ready && item.href.startsWith("http");

  return (
    <a
      href={item.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={
        compact
          ? "flex h-12 w-12 items-center justify-center overflow-hidden rounded-full shadow-sm"
          : "flex min-h-12 w-full flex-col items-center justify-center gap-1 rounded-xl px-0.5 py-2 text-ink transition-colors hover:bg-blush-soft"
      }
      aria-label={item.label}
    >
      <span className={compact ? "flex overflow-hidden rounded-full" : "flex overflow-hidden rounded-[0.7rem]"}>
        <BrandMark name={item.mark} size={compact ? 40 : 22} />
      </span>
      {!compact && (
        <span className="max-w-full truncate text-[0.58rem] font-medium tracking-wide">
          {item.label}
        </span>
      )}
    </a>
  );
}

export default function MobileBottomBar() {
  return (
    <>
      <nav
        aria-label="Quick actions"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-line/80 bg-cream/90 px-1 pt-1 shadow-[0_-12px_30px_-18px_rgba(44,41,42,0.35)] backdrop-blur-xl lg:hidden"
        style={{ paddingBottom: "max(0.4rem, env(safe-area-inset-bottom))" }}
      >
        <div className="mx-auto grid max-w-lg grid-cols-5">
          {actions.map((item) => (
            <ActionLink key={item.id} item={item} />
          ))}
        </div>
      </nav>

      <nav
        aria-label="Quick actions"
        className="fixed bottom-6 right-6 z-40 hidden flex-col gap-2 lg:flex"
      >
        {actions.map((item) => (
          <ActionLink key={item.id} item={item} compact />
        ))}
      </nav>
    </>
  );
}
