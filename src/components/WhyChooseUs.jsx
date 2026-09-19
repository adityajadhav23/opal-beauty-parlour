import { whyChooseUs } from "../data/siteData";
import Reveal from "./Reveal";
import { ServiceIcon } from "./Services";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="blob right-0 top-10 h-64 w-64 bg-sky-soft" />
      <div className="container-page relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">The Opal way</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Why Opal
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <Reveal key={item.id} delay={index * 80}>
              <article className="card card-3d h-full px-6 py-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-soft text-sky-deep shadow-inner">
                  <ServiceIcon name={item.icon} size={26} />
                </div>
                <h3 className="mt-5 font-display text-2xl text-ink">{item.title}</h3>
                {item.description ? (
                  <p className="mt-3 text-sm text-muted">{item.description}</p>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
