import { useId } from "react";

export function PhoneLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <rect width="48" height="48" rx="12" fill="#34C759" />
      <path
        fill="#fff"
        d="M33.6 29.3c-1.1-.5-2.2-1-3.3-1.4-.8-.3-1.1-.2-1.6.4l-.9 1.1c-.3.4-.7.4-1.2.2-1.4-.5-2.7-1.3-3.9-2.4-1.2-1.1-2.1-2.4-2.7-3.8-.2-.5-.1-.9.3-1.2l1.1-.9c.6-.5.7-.9.4-1.6-.4-1.1-.9-2.2-1.4-3.3-.4-.8-.9-1-1.7-.7l-1.7.6c-.8.3-1.4 1-1.5 1.9-.3 2.2.2 4.5 1.5 6.8 1.5 2.7 3.6 5 6.2 6.6 2.3 1.4 4.7 2.1 7 1.9.9-.1 1.7-.7 2.1-1.5l.7-1.7c.3-.8.1-1.3-.7-1.7Z"
      />
    </svg>
  );
}

export function WhatsAppLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <rect width="48" height="48" rx="12" fill="#25D366" />
      <path
        fill="#fff"
        d="M24.1 13.2c-6 0-10.8 4.8-10.8 10.8 0 1.9.5 3.7 1.4 5.3l-1.5 5.5 5.6-1.5c1.5.8 3.3 1.3 5.2 1.3 6 0 10.8-4.8 10.8-10.8S30 13.2 24.1 13.2Zm6.1 15.2c-.3.7-1.5 1.3-2.1 1.4-.5.1-1.2.1-1.9-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4.1-4.8-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2.1 1-2.4c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.6.8 2 .8 2.1.1.2.1.3 0 .5-.1.2-.2.3-.3.5l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l.6-.7c.2-.2.4-.2.6-.1.3.1 1.6.8 1.9.9.3.1.5.2.6.3.1.2.1.9-.2 1.6Z"
      />
    </svg>
  );
}

export function InstagramLogo({ size = 28 }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id={`ig-${id}`} x1="8" y1="44" x2="40" y2="4" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F58529" />
          <stop offset=".4" stopColor="#DD2A7B" />
          <stop offset=".8" stopColor="#8134AF" />
          <stop offset="1" stopColor="#515BD4" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill={`url(#ig-${id})`} />
      <rect x="14" y="14" width="20" height="20" rx="6" fill="none" stroke="#fff" strokeWidth="2.2" />
      <circle cx="24" cy="24" r="5.2" fill="none" stroke="#fff" strokeWidth="2.2" />
      <circle cx="31.2" cy="16.8" r="1.5" fill="#fff" />
    </svg>
  );
}

export function GoogleMapsLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <rect width="48" height="48" rx="12" fill="#F5F5F5" />
      <path fill="#188038" d="M24 8c-6.6 0-12 5.3-12 12 0 8.4 12 20 12 20s4.2-4 7.3-9.2L24 22.5V8Z" />
      <path fill="#FBBC04" d="M24 8v14.5l7.3 8.3C34.8 25.4 36 21.4 36 20c0-6.7-5.4-12-12-12Z" />
      <path fill="#4285F4" d="M24 22.5 16.7 30.8C19.8 36 24 40 24 40V22.5Z" />
      <path fill="#EA4335" d="M24 22.5 31.3 30.8C28.2 36 24 40 24 40V22.5Z" />
      <circle cx="24" cy="20" r="4.2" fill="#fff" />
      <circle cx="24" cy="20" r="2.2" fill="#4285F4" />
    </svg>
  );
}

const marks = {
  phone: PhoneLogo,
  whatsapp: WhatsAppLogo,
  instagram: InstagramLogo,
  maps: GoogleMapsLogo,
};

export default function BrandMark({ name, size = 28 }) {
  const Icon = marks[name];
  if (!Icon) return null;
  return <Icon size={size} />;
}
