import { MapPin } from "lucide-react";
import { business, contact, isSet, links } from "../data/siteData";
import Reveal from "./Reveal";

export default function MapSection() {
  const hasEmbed = isSet(contact.googleMapsEmbed);

  return (
    <section id="map" className="py-16 md:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Sangli</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Find us
          </h2>
          {isSet(business.address) ? (
            <p className="mt-4 text-sm leading-relaxed text-muted">{business.address}</p>
          ) : null}
        </Reveal>

        <Reveal delay={80} className="mt-10 overflow-hidden rounded-[1.8rem] border border-line bg-surface shadow-sm">
          {hasEmbed ? (
            <iframe
              title={`${business.name} location`}
              src={contact.googleMapsEmbed}
              className="h-[22rem] w-full border-0 md:h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <div className="flex h-[20rem] flex-col items-center justify-center bg-sky-soft/50 px-6 text-center md:h-[26rem]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-surface text-sky-deep shadow-sm">
                <MapPin size={24} />
              </div>
              <p className="mt-5 font-display text-2xl text-ink">{business.location}</p>
              <a
                href={links.maps}
                target={isSet(contact.googleMaps) ? "_blank" : undefined}
                rel={isSet(contact.googleMaps) ? "noreferrer" : undefined}
                className="btn btn-primary mt-6"
              >
                Open Google Maps
              </a>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
