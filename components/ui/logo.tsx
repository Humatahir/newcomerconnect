import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex"
      aria-label="Cruip"
    >
      <svg className="h-8 w-8" viewBox="0 0 32 32">
        <defs>
          <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
            <stop stopColor="#3B82F6" stopOpacity=".8" offset="0%" />
            <stop stopColor="#06B6D4" offset="100%" />
          </linearGradient>
        </defs>
        <rect fill="#3B82F6" width="32" height="32" rx="16" />
        <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16A16 16 0 010 16c0-7.248 4.81-13.43 11.703-15.403L16 16l2.277-15.84z" fill="url(#logo-a)" />
      </svg>
      <span className="ml-3 text-lg font-bold">Newcomer Connect</span>
    </Link>
  );
}
