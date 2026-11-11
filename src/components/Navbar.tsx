import { useState, useEffect } from 'react';
import { ZanaariLogo } from './ZanaariLogo';
import { Menu, X, Share2 } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon, SnapchatIcon, LinkedInIcon, XTwitterIcon } from './SocialIcons';

interface NavbarProps {
  onOpenInquire: () => void;
  onOpenLogoShowcase?: () => void;
}

export function Navbar({ onOpenInquire, onOpenLogoShowcase }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [socialsDropdownOpen, setSocialsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Selected Works', href: '#projects' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Infinity Mandate', href: '#philosophy' },
    { label: 'Founders [06]', href: '#founders' },
    { label: 'Socials', href: '#socials' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-[#E5E7EB] py-3 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
            : 'bg-white/80 backdrop-blur-sm border-b border-[#E5E7EB]/70 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark with Monogram Lockup (Targeted Elements) */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="flex items-center gap-3.5 group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black"
              title="Zanaari Projects Limited — Home"
            >
              <ZanaariLogo
                size={22}
                strokeWidth={9}
                className="text-[#0A0A0A] transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-['Syne'] font-bold text-sm sm:text-base tracking-[0.26em] text-[#0A0A0A] uppercase transition-colors group-hover:text-[#4B5563]">
                ZANAARI PROJECTS
              </span>
            </a>

            {/* Quick Infinity Emblem Inspector Trigger */}
            {onOpenLogoShowcase && (
              <button
                onClick={onOpenLogoShowcase}
                className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[9px] font-mono tracking-widest text-[#6B7280] hover:text-[#0A0A0A] border border-[#E5E7EB] hover:border-[#0A0A0A] transition-colors"
                title="Inspect Infinity Architecture (∞)"
              >
                ∞ EMBLEM
              </button>
            )}
          </div>

          {/* Zone 2: Navigation Links (Clean Single-Line Text, No Pills) */}
          <nav className="hidden md:flex items-center gap-6 text-[11px] font-medium tracking-[0.2em] uppercase text-[#6B7280]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#0A0A0A] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#0A0A0A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Social Quick Actions & 1 Primary Action */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            {/* Quick Header Social Buttons */}
            <div className="hidden lg:flex items-center gap-1.5 pr-2 border-r border-[#E5E7EB]">
              <a
                href="https://wa.me/4479460880?text=Hello%20Zanaari%20Projects,%20inquiry%20from%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-[#6B7280] hover:text-[#0A0A0A] hover:bg-[#F9F9FB] rounded transition-colors"
                title="WhatsApp Direct Executive Line"
                aria-label="WhatsApp Executive Chat"
              >
                <WhatsAppIcon size={16} />
              </a>
              <a
                href="https://instagram.com/zanaari.projects"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-[#6B7280] hover:text-[#0A0A0A] hover:bg-[#F9F9FB] rounded transition-colors"
                title="Instagram Portfolio Feed"
                aria-label="Instagram Portfolio"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://snapchat.com/add/zanaari"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-[#6B7280] hover:text-[#0A0A0A] hover:bg-[#F9F9FB] rounded transition-colors"
                title="Snapchat Site Stories"
                aria-label="Snapchat Site Stories"
              >
                <SnapchatIcon size={16} />
              </a>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={onOpenInquire}
              className="inline-flex items-center justify-center px-4 sm:px-5 py-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-white bg-[#0A0A0A] hover:bg-[#262626] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              INQUIRE
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#0A0A0A] hover:bg-[#F9F9FB] rounded focus:outline-none focus:ring-1 focus:ring-black"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white/98 backdrop-blur-xl md:hidden pt-24 px-8 pb-10 flex flex-col justify-between overflow-y-auto">
          <div className="flex flex-col gap-5 pt-2">
            <div className="text-[10px] tracking-[0.25em] text-[#6B7280] uppercase pb-2 border-b border-[#E5E7EB]">
              Navigation Index
            </div>
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-['Syne'] text-xl font-bold tracking-[0.15em] text-[#0A0A0A] hover:text-[#6B7280] uppercase flex items-center justify-between py-2 border-b border-[#E5E7EB]/50"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#6B7280]">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-6 pt-6">
            {/* Social Buttons in Mobile Drawer */}
            <div className="pt-4 border-t border-[#E5E7EB]">
              <span className="text-[10px] font-mono tracking-widest text-[#6B7280] uppercase block mb-3">
                Official Socials & Direct Lines
              </span>
              <div className="grid grid-cols-5 gap-2">
                <a
                  href="https://wa.me/4479460880"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#F9F9FB] border border-[#E5E7EB] flex items-center justify-center text-[#0A0A0A]"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon size={18} />
                </a>
                <a
                  href="https://instagram.com/zanaari.projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#F9F9FB] border border-[#E5E7EB] flex items-center justify-center text-[#0A0A0A]"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href="https://snapchat.com/add/zanaari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#F9F9FB] border border-[#E5E7EB] flex items-center justify-center text-[#0A0A0A]"
                  aria-label="Snapchat"
                >
                  <SnapchatIcon size={18} />
                </a>
                <a
                  href="https://linkedin.com/company/zanaari-projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#F9F9FB] border border-[#E5E7EB] flex items-center justify-center text-[#0A0A0A]"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon size={18} />
                </a>
                <a
                  href="https://x.com/ZanaariProjects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#F9F9FB] border border-[#E5E7EB] flex items-center justify-center text-[#0A0A0A]"
                  aria-label="X (Twitter)"
                >
                  <XTwitterIcon size={18} />
                </a>
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquire();
              }}
              className="w-full py-3.5 text-xs font-semibold tracking-[0.25em] uppercase text-white bg-[#0A0A0A] hover:bg-[#262626] transition-colors"
            >
              INITIATE INQUIRY
            </button>
            <div className="text-[10px] tracking-widest text-center text-[#6B7280] uppercase font-mono">
              LONDON • LAGOS • DUBAI
            </div>
          </div>
        </div>
      )}
    </>
  );
}
