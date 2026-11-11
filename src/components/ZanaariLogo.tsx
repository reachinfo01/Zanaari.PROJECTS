interface ZanaariLogoProps {
  className?: string;
  size?: number;
  width?: number;
  height?: number;
  animated?: boolean;
  strokeWidth?: number;
  color?: string;
}

export function ZanaariLogo({
  className = '',
  size = 28,
  width,
  height,
  animated = false,
  strokeWidth = 8.5,
  color = 'currentColor',
}: ZanaariLogoProps) {
  const actualWidth = width || Math.round(size * 1.75);
  const actualHeight = height || size;

  return (
    <svg
      width={actualWidth}
      height={actualHeight}
      viewBox="0 0 160 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Zanaari Interlocking Monogram"
      role="img"
    >
      {/* Continuous Stroke 1: Bottom-Left to Top-Right */}
      <path
        d="M 20 54 L 20 72 L 62 72 L 98 18 L 140 18 L 140 36"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        className={animated ? 'animate-draw' : ''}
      />

      {/* Segmented Stroke 2A: Top-Left Segment */}
      <path
        d="M 20 36 L 20 18 L 62 18 L 71 31"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        className={animated ? 'animate-draw' : ''}
      />

      {/* Segmented Stroke 2B: Bottom-Right Segment */}
      <path
        d="M 89 58 L 98 72 L 140 72 L 140 54"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        className={animated ? 'animate-draw' : ''}
      />
    </svg>
  );
}

// Full lockup component matching the uploaded official logo with typography
export function ZanaariFullLogo({
  size = 48,
  color = 'currentColor',
  subtext = 'PROJECTS LIMITED',
  className = '',
}: {
  size?: number;
  color?: string;
  subtext?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <ZanaariLogo size={size} color={color} />
      <div className="mt-3 text-center">
        <div className="font-['Syne'] font-bold text-xl sm:text-2xl tracking-[0.38em] uppercase text-current pl-[0.38em]">
          ZANAARI
        </div>
        <div className="flex items-center justify-center gap-2 mt-1.5 text-[9px] sm:text-[10px] font-mono tracking-[0.28em] text-current/60 uppercase">
          <span className="w-5 h-[1px] bg-current/40 inline-block" />
          <span>{subtext}</span>
          <span className="w-5 h-[1px] bg-current/40 inline-block" />
        </div>
      </div>
    </div>
  );
}
