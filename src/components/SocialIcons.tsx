interface SocialIconProps {
  size?: number;
  className?: string;
  color?: string;
}

export function InstagramIcon({ size = 18, className = '', color = 'currentColor' }: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="Instagram"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 18, className = '', color = 'currentColor' }: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="WhatsApp"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M9.5 9.5c.3-.6.6-.6.9-.6h.6c.2 0 .4.1.5.3l.8 1.8c.1.3.1.5 0 .7l-.4.6c-.1.2-.2.3 0 .6.5.9 1.3 1.7 2.2 2.2.3.2.4.1.6 0l.6-.4c.2-.1.4-.1.7 0l1.8.8c.2.1.3.3.3.5v.6c0 .3 0 .6-.6.9-.7.4-2.1.5-4.4-.7-2.3-1.3-3.6-3.7-3.7-3.9-.2-.3-.9-1.2-.9-2.3s.6-1.6.8-1.8z" />
    </svg>
  );
}

export function SnapchatIcon({ size = 18, className = '', color = 'currentColor' }: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="Snapchat"
    >
      {/* Ghost outline silhouette */}
      <path d="M12 2.5c-3 0-5.5 2.2-5.5 5.5 0 1.2.3 2.5.3 3.5 0 .8-.5 1.5-1.3 1.8-.8.3-1.5.8-1.5 1.7 0 .8.6 1.4 1.5 1.5.5.1 1.2.3 1.5.8.3.6.1 1.5-.5 2-.5.4-.8 1-.8 1.7 0 1.1 1.1 1.8 2.8 1.8.8 0 1.8-.2 2.5-.5.7-.3 1.3-.3 2 0 .7.3 1.7.5 2.5.5 1.7 0 2.8-.7 2.8-1.8 0-.7-.3-1.3-.8-1.7-.6-.5-.8-1.4-.5-2 .3-.5 1-.7 1.5-.8.9-.1 1.5-.7 1.5-1.5 0-.9-.7-1.4-1.5-1.7-.8-.3-1.3-1-1.3-1.8 0-1 .3-2.3.3-3.5 0-3.3-2.5-5.5-5.5-5.5z" />
      <path d="M9.5 9.5a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4z" fill={color} />
      <path d="M14.5 9.5a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4z" fill={color} />
    </svg>
  );
}

export function LinkedInIcon({ size = 18, className = '', color = 'currentColor' }: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="LinkedIn"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function XTwitterIcon({ size = 18, className = '', color = 'currentColor' }: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="X (Twitter)"
    >
      <path d="M4 4l16 16m0-16L4 20" />
    </svg>
  );
}
