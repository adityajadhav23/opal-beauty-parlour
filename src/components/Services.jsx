import {
  BadgeCheck,
  Crown,
  Droplets,
  Feather,
  Flower2,
  Gem,
  Hand,
  Heart,
  HeartHandshake,
  Leaf,
  Minus,
  Scissors,
  Sofa,
  Sparkle,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { services } from "../data/siteData";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const icons = {
  BadgeCheck,
  Crown,
  Droplets,
  Feather,
  Flower2,
  Gem,
  Hand,
  Heart,
  HeartHandshake,
  Leaf,
  Minus,
  Scissors,
  Sofa,
  Sparkle,
  Sparkles,
  WandSparkles,
};

export function ServiceIcon({ name, size = 22, className = "" }) {
  const Icon = icons[name] ?? Sparkles;
  return <Icon size={size} className={className} strokeWidth={1.6} />;
}

export default function Services() {
  return (
    <section id="services" className="relative bg-surface py-16 md:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">The menu</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Services
          </h2>
        </Reveal>

        <div className="mt-12 space-y-12">
          {services.map((group, groupIndex) => (
            <div key={group.category}>
              <Reveal delay={groupIndex * 40}>
                <h3 className="font-display text-2xl text-ink md:text-3xl">{group.category}</h3>
              </Reveal>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item, index) => (
                  <Reveal key={item.id} delay={index * 50}>
                    <TiltCard className="card flex h-full items-center gap-4 p-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blush-soft text-blush">
                        <ServiceIcon name={item.icon} />
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-ink">{item.name}</h4>
                        {item.description ? (
                          <p className="mt-1 text-sm text-muted">{item.description}</p>
                        ) : null}
                        {item.price ? (
                          <p className="mt-1 text-sm font-medium text-sky-deep">
                            Starting from ₹{item.price}
                          </p>
                        ) : null}
                      </div>
                    </TiltCard>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
