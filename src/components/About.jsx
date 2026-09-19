import { about, business } from "../data/siteData";
import AboutStage from "./AboutStage";
import Owner from "./Owner";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <AboutStage />
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="eyebrow">{about.eyebrow}</p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                {about.title}
              </h2>
              <p className="mt-5 font-display text-2xl italic text-blush">{business.motto}.</p>
              <div className="mt-4 space-y-3 text-muted">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
            <div className="mt-8">
              <Owner />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
