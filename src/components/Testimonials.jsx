import { Quote } from "lucide-react";
import { testimonials, testimonialsEnabled } from "../data/siteData";
import Reveal from "./Reveal";

export default function Testimonials() {
  if (!testimonialsEnabled) return null;

  return (
    <section className="py-16 md:py-24" aria-label="Testimonials">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Clients</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Kind words
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.id} delay={index * 80}>
              <blockquote className="card card-3d h-full p-7">
                <Quote className="text-blush" size={22} />
                <p
                  className={`mt-4 leading-relaxed text-ink ${
                    item.placeholder ? "italic text-muted" : ""
                  }`}
                >
                  “{item.quote}”
                </p>
                <footer className="mt-6">
                  <cite className="not-italic text-sm font-medium text-ink">{item.name}</cite>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
