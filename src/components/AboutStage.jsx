import { business, gallery } from "../data/siteData";
import { usePointerOffset } from "../hooks/usePointerOffset";

const mainPhoto = gallery.find((item) => item.id === "products");
const insetPhoto = gallery.find((item) => item.id === "wash");

export default function AboutStage() {
  const { ref, offset } = usePointerOffset();

  return (
    <div className="about-stage" ref={ref}>
      <div
        className="about-stack"
        style={{
          transform: `perspective(1200px) rotateX(${offset.y * -7}deg) rotateY(${offset.x * 10}deg)`,
        }}
      >
        {insetPhoto ? (
          <figure className="about-photo about-photo-inset">
            <img src={insetPhoto.src} alt={insetPhoto.alt} width={640} height={480} />
          </figure>
        ) : null}

        {mainPhoto ? (
          <figure className="about-photo about-photo-main">
            <img src={mainPhoto.src} alt={mainPhoto.alt} width={720} height={900} />
          </figure>
        ) : null}

        {business.logo ? (
          <img src={business.logo} alt="" className="about-logo-seal" />
        ) : null}

        <div className="about-year">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-blush">Since</p>
          <p className="font-display text-3xl leading-none text-ink">{business.foundedYear}</p>
          <p className="mt-1 text-xs text-muted">{business.city}</p>
        </div>
      </div>
    </div>
  );
}
