import { useState } from 'react';
import { ZanaariLogo } from './ZanaariLogo';
import { Eye, Layers, Compass, Sparkles, X } from 'lucide-react';

interface InfinityLogoShowcaseProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InfinityLogoShowcase({ isOpen, onClose }: InfinityLogoShowcaseProps) {
  const [viewMode, setViewMode] = useState<'standard' | 'infinity' | 'blueprint'>('infinity');

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-3xl bg-white border border-[#0A0A0A] p-6 sm:p-10 shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#E5E7EB] mb-8">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-[#6B7280]">
              <span>GEOMETRIC ARCHIVE // 2026</span>
              <span>·</span>
              <span className="text-[#0A0A0A] font-bold">THE INFINITY ARCHITECTURE</span>
            </div>
            <h3 className="font-['Syne'] text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#0A0A0A] mt-1">
              THE ZANAARI INFINITY EMBLEM (∞)
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#6B7280] hover:text-[#0A0A0A] hover:bg-[#F9F9FB] rounded focus:outline-none focus:ring-1 focus:ring-black"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* View Mode Segmented Controls */}
        <div className="flex items-center gap-2 mb-8 p-1 bg-[#F9F9FB] border border-[#E5E7EB] w-fit">
          <button
            onClick={() => setViewMode('infinity')}
            className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-all ${
              viewMode === 'infinity'
                ? 'bg-[#0A0A0A] text-white shadow-xs'
                : 'text-[#6B7280] hover:text-[#0A0A0A]'
            }`}
          >
            Infinity Flow (∞)
          </button>
          <button
            onClick={() => setViewMode('blueprint')}
            className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-all ${
              viewMode === 'blueprint'
                ? 'bg-[#0A0A0A] text-white shadow-xs'
                : 'text-[#6B7280] hover:text-[#0A0A0A]'
            }`}
          >
            Architectural Blueprint
          </button>
          <button
            onClick={() => setViewMode('standard')}
            className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-all ${
              viewMode === 'standard'
                ? 'bg-[#0A0A0A] text-white shadow-xs'
                : 'text-[#6B7280] hover:text-[#0A0A0A]'
            }`}
          >
            Clean Vector
          </button>
        </div>

        {/* Center Architectural Stage */}
        <div className="relative aspect-[16/9] w-full bg-[#FAFAFA] border border-[#E5E7EB] flex flex-col items-center justify-center p-8 overflow-hidden mb-8">
          {/* Subtle Blueprint Grid in blueprint mode */}
          {viewMode === 'blueprint' && (
            <div className="absolute inset-0 bg-grid-subtle opacity-70 pointer-events-none" />
          )}

          {/* Infinity Flow Glow or Highlight */}
          {viewMode === 'infinity' && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-36 rounded-full border border-dashed border-[#0A0A0A]/20 transform rotate-12 scale-110" />
              <div className="w-72 h-36 rounded-full border border-dashed border-[#0A0A0A]/20 transform -rotate-12 scale-110" />
            </div>
          )}

          {/* Logo Rendering */}
          <div className="relative z-10 transition-transform duration-500 scale-125 sm:scale-150">
            <ZanaariLogo
              size={64}
              strokeWidth={viewMode === 'blueprint' ? 4 : 8.5}
              color="#0A0A0A"
              animated={true}
            />
          </div>

          {/* Geometric Crosshair Marks in Blueprint Mode */}
          {viewMode === 'blueprint' && (
            <>
              <div className="absolute top-4 left-4 text-[9px] font-mono text-[#6B7280]">
                ANGULAR CO-ORDINATE: 45.00° CANTILEVER
              </div>
              <div className="absolute bottom-4 right-4 text-[9px] font-mono text-[#6B7280]">
                GOLDEN RATIO SYMMETRY // MODULAR 1:1.77
              </div>
            </>
          )}

          {viewMode === 'infinity' && (
            <div className="absolute bottom-4 text-center text-[10px] font-mono tracking-widest text-[#0A0A0A] uppercase bg-white/90 px-3 py-1 border border-[#E5E7EB]">
              CONTINUOUS UNBROKEN HORIZON: NIGERIA ⟷ DUBAI ⟷ GLOBAL GROUP
            </div>
          )}
        </div>

        {/* The 3 Pillars of the Infinity Symbol */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs border-t border-[#E5E7EB] pt-6 mb-6">
          <div>
            <h5 className="font-['Syne'] font-bold text-sm uppercase text-[#0A0A0A] mb-1">
              01. The Infinity Loop
            </h5>
            <p className="text-[#4B5563] leading-relaxed">
              Unbroken continuity. In architectural engineering and private capital, this ensures every development generates perpetual dividends and outlives its builders.
            </p>
          </div>

          <div>
            <h5 className="font-['Syne'] font-bold text-sm uppercase text-[#0A0A0A] mb-1">
              02. The Interlocking X
            </h5>
            <p className="text-[#4B5563] leading-relaxed">
              Precision truss bracing. Two geometric paths intertwining without structural conflict, representing the synthesis of private institutional capital and civic public good.
            </p>
          </div>

          <div>
            <h5 className="font-['Syne'] font-bold text-sm uppercase text-[#0A0A0A] mb-1">
              03. The Expansive Brackets
            </h5>
            <p className="text-[#4B5563] leading-relaxed">
              Cantilever wings. Rooted deep in Nigerian sovereign soil, reaching outwards to Dubai and international corridors as we scale into Zanaari Group Limited.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end border-t border-[#E5E7EB] pt-4">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-semibold tracking-[0.2em] uppercase bg-[#0A0A0A] text-white hover:bg-[#262626] transition-colors"
          >
            DISMISS DOSSIER
          </button>
        </div>
      </div>
    </div>
  );
}
