import { useState, useEffect } from 'react';
import { ZanaariLogo } from './ZanaariLogo';
import { ArrowUp, Mail, Phone, MapPin, Globe } from 'lucide-react';

export function Footer() {
  const [times, setTimes] = useState({
    utc: '',
    london: '',
    lagos: '',
    dubai: '',
  });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();

      const formatTime = (timeZone: string) =>
        new Intl.DateTimeFormat('en-GB', {
          timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now);

      setTimes({
        utc: formatTime('UTC'),
        london: formatTime('Europe/London'),
        lagos: formatTime('Africa/Lagos'),
        dubai: formatTime('Asia/Dubai'),
      });
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0A0A0A] text-white pt-20 sm:pt-28 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Header Lockup: Large Brandmark and Descriptor */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 border-b border-white/15">
          <div className="flex items-start sm:items-center gap-6">
            <ZanaariLogo size={42} strokeWidth={8.5} color="#FFFFFF" className="shrink-0" />
            <div>
              <div className="text-[11px] font-mono tracking-[0.25em] text-white/60 uppercase mb-1">
                A DIVISION OF ZANAARI GROUP LIMITED
              </div>
              <h2 className="font-['Syne'] text-3xl sm:text-5xl font-extrabold uppercase tracking-[0.14em] text-white">
                ZANAARI PROJECTS
              </h2>
              <div className="text-xs font-semibold tracking-[0.3em] uppercase text-white/80 mt-1">
                LIMITED // CAPITAL & ARCHITECTURAL WORKS
              </div>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start lg:self-end inline-flex items-center gap-2 px-4 py-2.5 border border-white/20 text-xs font-mono uppercase tracking-widest text-white hover:bg-white hover:text-[#0A0A0A] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Dedicated Social Channels & Instant Direct Messaging Bar */}
        <div className="py-8 border-b border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-white/50 block mb-1">
              CONNECT & FOLLOW // VERIFIED DIGITAL ARCHIVE
            </span>
            <span className="font-['Syne'] text-base sm:text-lg font-bold uppercase tracking-wider text-white">
              Official Social Channels & Direct Lines
            </span>
          </div>

          {/* Social Buttons: Instagram, Snap, WhatsApp, LinkedIn, X */}
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="https://wa.me/4479460880?text=Hello%20Zanaari%20Projects,%20inquiry%20from%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white hover:text-[#0A0A0A] border border-white/20 text-white text-xs font-mono uppercase tracking-wider transition-all"
            >
              <span>WhatsApp</span>
              <span className="text-white/40 group-hover:text-[#0A0A0A] text-[10px]">↗</span>
            </a>
            <a
              href="https://instagram.com/zanaari.projects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white hover:text-[#0A0A0A] border border-white/20 text-white text-xs font-mono uppercase tracking-wider transition-all"
            >
              <span>Instagram</span>
              <span className="text-white/40 group-hover:text-[#0A0A0A] text-[10px]">↗</span>
            </a>
            <a
              href="https://snapchat.com/add/zanaari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white hover:text-[#0A0A0A] border border-white/20 text-white text-xs font-mono uppercase tracking-wider transition-all"
            >
              <span>Snapchat</span>
              <span className="text-white/40 group-hover:text-[#0A0A0A] text-[10px]">↗</span>
            </a>
            <a
              href="https://linkedin.com/company/zanaari-projects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white hover:text-[#0A0A0A] border border-white/20 text-white text-xs font-mono uppercase tracking-wider transition-all"
            >
              <span>LinkedIn</span>
              <span className="text-white/40 group-hover:text-[#0A0A0A] text-[10px]">↗</span>
            </a>
            <a
              href="https://x.com/ZanaariProjects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white hover:text-[#0A0A0A] border border-white/20 text-white text-xs font-mono uppercase tracking-wider transition-all"
            >
              <span>X (Twitter)</span>
              <span className="text-white/40 group-hover:text-[#0A0A0A] text-[10px]">↗</span>
            </a>
          </div>
        </div>

        {/* Multi-Column Layout: Navigation, Global Offices, Direct Contacts, Social Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-16 border-b border-white/15">
          {/* Col 1: Navigation & Architecture (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/50 mb-4">
              PORTFOLIO ARCHIVE
            </h3>
            <ul className="space-y-2.5 text-xs font-medium text-white/80">
              <li>
                <a href="#projects" className="hover:text-white hover:underline transition-colors">
                  01. Selected Works
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white hover:underline transition-colors">
                  02. Technical Sectors
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-white hover:underline transition-colors">
                  03. The Infinity Mandate
                </a>
              </li>
              <li>
                <a href="#founders" className="hover:text-white hover:underline transition-colors">
                  04. The Six Founders (Directorate)
                </a>
              </li>
              <li>
                <a href="#socials" className="hover:text-white hover:underline transition-colors">
                  05. Socials & Verified Channels
                </a>
              </li>
              <li>
                <a href="#inquiry" className="hover:text-white hover:underline transition-colors">
                  06. Commission Advisory
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2 & 3: Global Offices (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/50 mb-4">
              OPERATING HUBS // NIGERIA HQ & DUBAI EXPANSION
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-white/80">
              {/* Lagos HQ */}
              <div className="space-y-1.5 p-3 bg-white/[0.04] border border-white/20">
                <div className="font-['Syne'] font-bold uppercase tracking-wider text-white text-sm">
                  Lagos, Nigeria
                </div>
                <div className="text-[10px] font-mono text-emerald-400">Global Corporate HQ</div>
                <p className="text-white/70 text-[11px] leading-relaxed">
                  22 Walter Carrington Cresc,
                  <br />
                  Victoria Island, Lagos
                </p>
                <div className="font-mono text-[10px] text-white/60 pt-2">
                  LOS: {times.lagos || '--:--:--'}
                </div>
              </div>

              {/* Abuja Directorate */}
              <div className="space-y-1.5 p-3 bg-white/[0.04] border border-white/20">
                <div className="font-['Syne'] font-bold uppercase tracking-wider text-white text-sm">
                  Abuja, Nigeria
                </div>
                <div className="text-[10px] font-mono text-white/50">FCT Directorate</div>
                <p className="text-white/70 text-[11px] leading-relaxed">
                  Central Business District,
                  <br />
                  Abuja FCT, Nigeria
                </p>
                <div className="font-mono text-[10px] text-white/60 pt-2">
                  ABJ: {times.lagos || '--:--:--'}
                </div>
              </div>

              {/* Dubai Expansion */}
              <div className="space-y-1.5 p-3 bg-white/[0.04] border border-white/20">
                <div className="font-['Syne'] font-bold uppercase tracking-wider text-white text-sm">
                  Dubai, UAE
                </div>
                <div className="text-[10px] font-mono text-white/50">Strategic Expansion Hub</div>
                <p className="text-white/70 text-[11px] leading-relaxed">
                  Gate Precinct 4, DIFC
                  <br />
                  & Downtown Dubai, UAE
                </p>
                <div className="font-mono text-[10px] text-white/60 pt-2">
                  DXB: {times.dubai || '--:--:--'}
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Direct Contacts & Media (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/50 mb-4">
              DIRECT CHANNELS
            </h3>
            <div className="space-y-3 text-xs text-white/80">
              <div>
                <span className="text-[10px] font-mono text-white/50 block uppercase">
                  Institutional Inquiries
                </span>
                <a
                  href="mailto:inquiries@zanaari-projects.com"
                  className="font-mono text-white hover:underline"
                >
                  inquiries@zanaari-projects.com
                </a>
              </div>

              <div>
                <span className="text-[10px] font-mono text-white/50 block uppercase">
                  Executive Switchboard
                </span>
                <span className="font-mono text-white">+44 (0) 20 7946 0880</span>
              </div>

              <div className="pt-2">
                <span className="text-[10px] font-mono text-white/50 block uppercase mb-1.5">
                  Publications & Indexes
                </span>
                <div className="flex flex-wrap gap-3 text-[11px] text-white/70">
                  <span className="hover:text-white cursor-pointer">Financial Times</span>
                  <span>·</span>
                  <span className="hover:text-white cursor-pointer">Architectural Review</span>
                  <span>·</span>
                  <span className="hover:text-white cursor-pointer">Bloomberg</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Synchronized Time Clocks Bar */}
        <div className="py-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/70">
          <div className="flex items-center gap-2">
            <Globe size={14} className="text-white" />
            <span className="uppercase tracking-widest text-white/50">OPERATING TIMECODES:</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[11px] tabular-nums">
            <div>
              <span className="text-white/40 mr-1.5">UTC:</span>
              <span className="text-white font-bold">{times.utc || '--:--:--'}</span>
            </div>
            <div>
              <span className="text-white/40 mr-1.5">LONDON (GMT):</span>
              <span className="text-white font-bold">{times.london || '--:--:--'}</span>
            </div>
            <div>
              <span className="text-white/40 mr-1.5">LAGOS (WAT):</span>
              <span className="text-white font-bold">{times.lagos || '--:--:--'}</span>
            </div>
            <div>
              <span className="text-white/40 mr-1.5">DUBAI (GST):</span>
              <span className="text-white font-bold">{times.dubai || '--:--:--'}</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] font-mono text-white/50">
          <div>
            © 2026 ZANAARI PROJECTS LIMITED. A DIVISION OF ZANAARI GROUP LIMITED. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6 uppercase">
            <a href="#" className="hover:text-white transition-colors">
              Terms of Engagement
            </a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">
              Institutional Privacy
            </a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">
              ESG Covenants
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
