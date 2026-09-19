import { business, isSet } from "../data/siteData";
import LogoMark from "./LogoMark";

export default function BrandLogo({ className = "h-11 w-11" }) {
  if (isSet(business.logo)) {
    return (
      <img
        src={business.logo}
        alt={business.name}
        className={`${className} rounded-full bg-white object-contain shadow-sm`}
      />
    );
  }

  return <LogoMark className={className} />;
}
