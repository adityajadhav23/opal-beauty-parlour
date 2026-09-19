import { business, images } from "../data/siteData";
import { usePointerOffset } from "../hooks/usePointerOffset";

export default function SalonStage() {
  const { ref, offset } = usePointerOffset();

  return (
    <div className="salon-stage" ref={ref}>
      <div
        className="salon-stage-inner"
        style={{
          transform: `rotateX(${offset.y * -10}deg) rotateY(${offset.x * 16}deg)`,
        }}
      >
        <div className="stage-glow" />

        <div className="mirror">
          <div className="mirror-glass media-frame">
            <img src={images.hero.src} alt={images.hero.alt} width={720} height={900} />
          </div>
          <div className="mirror-shine" />
        </div>

        <div className="prop-track" style={{ transform: `translate3d(${offset.x * 18}px, ${offset.y * -12}px, 40px)` }}>
          <div className="prop perfume" aria-hidden="true" />
        </div>
        <div className="prop-track" style={{ transform: `translate3d(${offset.x * -16}px, ${offset.y * 14}px, 30px)` }}>
          <div className="prop compact" aria-hidden="true" />
        </div>
        <div className="prop-track" style={{ transform: `translate3d(${offset.x * 22}px, ${offset.y * 10}px, 50px)` }}>
          <div className="prop lipstick" aria-hidden="true" />
        </div>
        <div className="prop-track" style={{ transform: `translate3d(${offset.x * 26}px, ${offset.y * -16}px, 70px)` }}>
          <div className="prop pearl pearl-a" aria-hidden="true" />
        </div>
        <div className="prop-track" style={{ transform: `translate3d(${offset.x * -20}px, ${offset.y * 18}px, 55px)` }}>
          <div className="prop pearl pearl-b" aria-hidden="true" />
        </div>

        <div
          className="since-chip"
          style={{ transform: `translate3d(${offset.x * 14}px, ${offset.y * -10}px, 80px)` }}
        >
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-blush">
            Since
          </p>
          <p className="font-display text-2xl leading-none text-ink">{business.foundedYear}</p>
        </div>
      </div>
    </div>
  );
}
