import { business, contact, isSet, links } from "../data/siteData";
import BrandMark from "./BrandMarks";
import Reveal from "./Reveal";

const channels = [
  {
    id: "phone",
    label: "Phone",
    detail: contact.phoneDisplay,
    value: contact.phone,
    href: links.phone,
    mark: "phone",
  },
  {
    id: "backup",
    label: "Backup phone",
    detail: contact.backupPhoneDisplay,
    value: contact.backupPhone,
    href: links.backupPhone,
    mark: "phone",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    detail: contact.phoneDisplay,
    value: contact.whatsapp,
    href: links.whatsapp,
    mark: "whatsapp",
  },
  {
    id: "instagram",
    label: "Instagram",
    detail: "@opal_beauty_parlour",
    value: contact.instagram,
    href: links.instagram,
    mark: "instagram",
  },
  {
    id: "maps",
    label: "Google Maps",
    detail: "Get directions",
    value: contact.googleMaps,
    href: links.maps,
    mark: "maps",
  },
  {
    id: "group",
    label: "WhatsApp Group",
    detail: "Join the group",
    value: contact.whatsappGroup,
    href: links.whatsappGroup,
    mark: "whatsapp",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-surface py-16 md:py-24">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.2fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Visit</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Contact
            </h2>
            <div className="mt-6 rounded-[1.4rem] bg-cream p-6">
              <p className="font-display text-3xl text-ink">{business.name}</p>
              <p className="mt-1 italic text-blush">{business.motto}</p>
              {isSet(business.address) ? (
                <p className="mt-3 text-sm leading-relaxed text-muted">{business.address}</p>
              ) : (
                <p className="mt-3 text-muted">{business.location}</p>
              )}
              {isSet(business.hours) ? (
                <p className="mt-3 text-sm text-muted">{business.hours}</p>
              ) : null}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map((item, index) => {
              const ready = isSet(item.value);
              return (
                <Reveal key={item.id} delay={index * 50}>
                  <a
                    href={item.href}
                    target={ready && item.href.startsWith("http") ? "_blank" : undefined}
                    rel={ready ? "noreferrer" : undefined}
                    className="card card-3d flex h-full items-center gap-4 p-5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl shadow-sm">
                      <BrandMark name={item.mark} size={48} />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-ink">{item.label}</span>
                      <span className="mt-1 block text-xs text-muted">{item.detail}</span>
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
