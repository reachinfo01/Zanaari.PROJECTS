import { useEffect, useState } from 'react';
import { ZanaariLogo } from './ZanaariLogo';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 14) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 110);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          onComplete();
        }, 600);
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  const handleSkip = () => {
    setIsFading(true);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between bg-white text-[#0A0A0A] px-8 py-12 transition-opacity duration-700 ease-out select-none ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Top preloader label */}
      <div className="w-full flex justify-between items-center text-[11px] uppercase tracking-[0.25em] text-[#6B7280]">
        <span>ZANAARI GROUP // DIVISION OF CAPITAL & WORKS</span>
        <span className="font-mono tabular-nums">EST. 2014 — LONDON • LAGOS • DUBAI</span>
      </div>

      {/* Center drawing mark and typography */}
      <div className="flex flex-col items-center text-center max-w-md">
        <div className="relative p-6 mb-8">
          <ZanaariLogo size={52} strokeWidth={8} animated={true} color="#0A0A0A" />
        </div>

        <h1 className="font-['Syne'] text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#0A0A0A] mb-2 uppercase">
          ZANAARI PROJECTS
        </h1>

        <p className="text-[11px] font-medium tracking-[0.22em] text-[#6B7280] uppercase mb-8">
          Architectural Archive • Infrastructure • 2026 Portfolio
        </p>

        {/* Minimalist progress bar */}
        <div className="w-48 h-[1px] bg-[#E5E7EB] relative overflow-hidden mb-3">
          <div
            className="absolute top-0 left-0 bottom-0 bg-[#0A0A0A] transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#6B7280]">
          <span>LOADING GEOMETRY</span>
          <span className="tabular-nums">{progress}%</span>
        </div>
      </div>

      {/* Bottom skip action & coordinates */}
      <div className="w-full flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-[#6B7280]">
        <span>51°30'26"N 0°07'39"W</span>
        <button
          onClick={handleSkip}
          className="text-[#0A0A0A] hover:underline cursor-pointer focus:outline-none focus:ring-1 focus:ring-black px-2 py-1"
        >
          Skip Intro →
        </button>
      </div>
    </div>
  );
}
