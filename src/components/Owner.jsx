import { isSet, owner } from "../data/siteData";
import BrandMark from "./BrandMarks";
import Reveal from "./Reveal";

export default function Owner() {
  return (
    <Reveal delay={80} className="card overflow-hidden">
      <div className="relative aspect-[4/5] max-h-[26rem] w-full overflow-hidden bg-blush-soft">
        <img
          src={owner.photo.src}
          alt={owner.photo.alt}
          className="h-full w-full object-cover"
          style={{ objectPosition: owner.photo.position || "center 62%" }}
          width={720}
          height={900}
        />
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-deep">
          {owner.heading}
        </p>
        <h3 className="mt-2 font-display text-2xl text-ink sm:text-3xl">{owner.name}</h3>
        <p className="mt-1 text-sm text-blush">{owner.role}</p>
        {owner.bio ? <p className="mt-3 text-sm text-muted">{owner.bio}</p> : null}
        {isSet(owner.instagram) ? (
          <a
            href={owner.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-blush"
          >
            <span className="overflow-hidden rounded-md">
              <BrandMark name="instagram" size={18} />
            </span>
            Instagram
          </a>
        ) : null}
      </div>
    </Reveal>
  );
}
