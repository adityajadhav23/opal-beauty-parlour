export default function LogoMark({ className = "h-9 w-9" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="18" fill="#F6E9EB" />
      <path
        d="M32 10C24 18 16 26.5 16 36.5C16 45.7 23.2 53 32 53C40.8 53 48 45.7 48 36.5C48 26.5 40 18 32 10Z"
        fill="#C97B84"
      />
      <path
        d="M32 18C27.2 23.5 22 29.2 22 36C22 41.5 26.5 46 32 46C37.5 46 42 41.5 42 36C42 29.2 36.8 23.5 32 18Z"
        fill="#E8C4C8"
      />
      <circle cx="28" cy="32" r="3.5" fill="#FDF8F9" opacity="0.75" />
    </svg>
  );
}
