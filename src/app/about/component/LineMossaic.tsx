export default function LineMosaic() {
  return (
    <svg
      viewBox="0 0 400 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto opacity-20"
    >
      <g stroke="#A0AEC0" strokeWidth="1" fill="none">
        <rect x="10" y="10" width="60" height="30" rx="15" />
        <circle cx="120" cy="25" r="15" />
        <circle cx="180" cy="25" r="20" />
        <rect x="220" y="10" width="60" height="30" rx="15" />
        <path d="M50 80 C80 100, 120 60, 160 80" />
        <circle cx="200" cy="90" r="25" />
      </g>
    </svg>
  );
}
