import { useState } from 'react';
import { ArrowDown, Maximize2 } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface HeroProps {
  onExploreClick: () => void;
}

export function Hero({ onExploreClick }: HeroProps) {
  const [imgError, setImgError] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  // Modular path as requested with local asset fallback
  const rawPath = imgError
    ? 'src/assets/images/hero_architectural_cinematic_1794393268619.jpg'
    : 'assets/projects/hero-cover.jpg';
  const heroImagePath = getAssetUrl(rawPath);

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-[#E5E7EB]">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Top Architectural Category Kicker */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8 text-[11px] font-medium tracking-[0.25em] text-[#6B7280] uppercase">
          <div className="flex items-center gap-2">
            <span className="text-[#0A0A0A] font-bold">—</span>
            <span>ARCHITECTURE • INFRASTRUCTURE • CAPITAL // NIGERIA HQ</span>
          </div>
          <div className="flex items-center gap-4 font-mono text-[10px] text-[#6B7280]">
            <span className="hidden sm:inline">6°26'15"N 3°25'00"E // LAGOS • DUBAI • ABUJA</span>
            <span className="text-[#0A0A0A] font-semibold tracking-widest">[ 2026 INDEX — 01 ]</span>
          </div>
        </div>

        {/* Monumental Editorial Headline */}
        <div className="mb-10 sm:mb-14 max-w-5xl">
          <h1 className="font-['Syne'] text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0A0A0A] uppercase leading-[1.05] text-balance">
            SHAPING SPACES. <br className="hidden sm:block" />
            BUILDING ENDURING VALUE.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#4B5563] max-w-2xl font-light leading-relaxed">
            Zanaari Projects Limited conceives, engineers, and delivers monumental commercial, industrial, 
            and civic infrastructure. Founded and headquartered in Nigeria, scaling across Dubai and global corridors.
          </p>
        </div>

        {/* Dual Actions Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#E5E7EB]">
          <button
            onClick={onExploreClick}
            className="group inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] uppercase text-[#0A0A0A] hover:text-[#4B5563] transition-colors cursor-pointer"
          >
            <span>Explore Selected Works</span>
            <ArrowDown
              size={14}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </button>

          <div className="flex items-center gap-6 text-[11px] text-[#6B7280] tracking-[0.18em] uppercase font-mono">
            <span className="font-bold text-[#0A0A0A]">PORTFOLIO VALUATION: ₦720B+</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:inline">TIER-1 CIVIC COVENANTS</span>
          </div>
        </div>

        {/* Full-Width Cinematic Hero Image Banner with 1px Architectural Hairline Framing */}
        <div className="mt-8 relative group overflow-hidden border border-[#0A0A0A]/15 bg-[#F9F9FB]">
          <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden relative">
            <img
              src={heroImagePath}
              alt="Zanaari Projects — Monumental Architectural Pavilion"
              referrerPolicy="no-referrer"
              onError={() => {
                if (!imgError) setImgError(true);
              }}
              className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                isZoomed ? 'scale-105' : 'group-hover:scale-[1.02]'
              }`}
            />

            {/* Subtle architectural gradient scrim for high contrast and legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

            {/* Architectural Hairline Crosshairs / Corner Marks */}
            <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-white/60 pointer-events-none" />
            <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-white/60 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-white/60 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-white/60 pointer-events-none" />

            {/* Cinematic Overlay Caption & Coordinates */}
            <div className="absolute bottom-4 left-6 right-6 sm:bottom-6 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-white/70 mb-1 font-mono">
                  KEY ARCHITECTURAL STUDY // 2026
                </div>
                <div className="font-['Syne'] text-lg sm:text-2xl font-bold tracking-[0.1em] uppercase">
                  MONOLITHIC CORPORATE HEADQUARTERS & REFLECTING PAVILION
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono tracking-widest uppercase text-white/80 hidden sm:inline">
                  CANTILEVER REINFORCED CONCRETE & CURTAIN WALL
                </span>
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="p-2 bg-black/40 hover:bg-black/70 backdrop-blur-sm border border-white/30 text-white rounded transition-colors"
                  aria-label="Toggle Hero Zoom View"
                  title="Toggle Architectural View"
                >
                  <Maximize2 size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
