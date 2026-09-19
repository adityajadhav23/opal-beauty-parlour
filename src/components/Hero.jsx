import { ArrowRight } from "lucide-react";
import { business } from "../data/siteData";
import Reveal from "./Reveal";
import SalonStage from "./SalonStage";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="blob -left-16 top-24 h-56 w-56 bg-blush-soft opacity-80" />
      <div className="blob right-0 top-40 h-72 w-72 bg-sky-soft opacity-90" />
      <div className="blob bottom-10 left-1/3 h-40 w-40 bg-blush-soft/80" />

      <div className="container-page relative grid items-center gap-10 pb-16 lg:grid-cols-2 lg:gap-10 lg:pb-24">
        <Reveal>
          <p className="eyebrow !gap-2">{business.tagline}</p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]">
            Feel Beautiful.
            <span className="mt-1 block italic text-blush">Feel Confident.</span>
          </h1>
          <p className="mt-5 font-display text-2xl italic text-sky-deep md:text-3xl">
            {business.motto}.
          </p>
          <p className="mt-4 max-w-md text-muted">
            Women’s salon care in {business.city} since {business.foundedYear}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="btn btn-primary">
              Explore Services
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Visit Us
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SalonStage />
        </Reveal>
      </div>
    </section>
  );
}
