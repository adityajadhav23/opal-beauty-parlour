import { gallery } from "../data/siteData";
import Reveal from "./Reveal";

const aspectClass = {
  tall: "aspect-[3/4]",
  wide: "aspect-[4/3]",
  square: "aspect-square",
};

export default function Gallery() {
  return (
    <section id="gallery" className="bg-surface py-16 md:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Inside Opal</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Gallery
          </h2>
        </Reveal>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((item, index) => (
            <Reveal key={item.id} delay={index * 60} className="mb-4 break-inside-avoid">
              <figure className="gallery-item group relative overflow-hidden rounded-[1.4rem]">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className={`w-full object-cover ${aspectClass[item.span] ?? aspectClass.square}`}
                  width={720}
                  height={900}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-4 pb-4 pt-10 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
