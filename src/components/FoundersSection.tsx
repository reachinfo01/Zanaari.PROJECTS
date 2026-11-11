import React, { useState, useEffect } from 'react';
import { Camera, X, ArrowUpRight, Award, Briefcase, FileText, Check } from 'lucide-react';

export interface Founder {
  id: string;
  slotNumber: string;
  name: string;
  title: string;
  division: string;
  contribution: string;
  mandateDetails: string[];
  initials: string;
  location: string;
}

const DEFAULT_FOUNDERS: Founder[] = [
  {
    id: 'founder-1',
    slotNumber: '01',
    name: 'Co-Founder & Group Chief Executive',
    title: 'Managing Director & Strategic Mandate',
    division: 'Executive Governance & Capital Direction',
    contribution:
      'Architect of the Zanaari Infinity Mandate. Orchestrates institutional sovereign partnerships, oversees ₦720B+ portfolio capital allocation, and leads the long-term roadmap from Nigerian infrastructure roots into global group expansion.',
    mandateDetails: [
      'Strategic leadership of Zanaari Projects Limited and parent group expansion',
      'High-level sovereign concessions and federal infrastructure negotiation',
      'Long-range capital preservation and institutional investor alignment',
    ],
    initials: '01',
    location: 'Lagos & Abuja, Nigeria',
  },
  {
    id: 'founder-2',
    slotNumber: '02',
    name: 'Co-Founder & Principal Architect',
    title: 'Director of Architectural Design & Masterplanning',
    division: 'Monumental Form & Biophilic Systems',
    contribution:
      'Translates the geometric infinity philosophy into physical monolithic structures. Spearheads high-density urban skylines, biophilic microclimatic atriums, and timeless civic architecture across West Africa and Dubai.',
    mandateDetails: [
      'Concept direction for Atrium Residences & One Horizon Tower',
      'Parametric facade optimization and passive cooling in tropical climates',
      'Generational architectural distinction and civic masterplanning',
    ],
    initials: '02',
    location: 'Lagos & Dubai',
  },
  {
    id: 'founder-3',
    slotNumber: '03',
    name: 'Co-Founder & Chief Infrastructure Engineer',
    title: 'Director of Civil Engineering & Industrial Logistics',
    division: 'Heavy Industrial & Maritime Port Systems',
    contribution:
      'Directs EPC structural engineering, automated intermodal logistics hubs, and deep-sea port freight corridors. Pioneer of superflat laser-screeded slabs and clear-span steel truss engineering in Nigeria.',
    mandateDetails: [
      'Lead infrastructure engineer for The Matrix Logistics Hub (115,000 SQM)',
      'Coastal soil stabilization and marine vibro-compaction frameworks',
      'Autonomous fleet & multimodal railway freight integration',
    ],
    initials: '03',
    location: 'Lagos Free Zone, Nigeria',
  },
  {
    id: 'founder-4',
    slotNumber: '04',
    name: 'Co-Founder & Director of Capital Markets',
    title: 'Head of Institutional Syndication & Debt Structuring',
    division: 'Project Finance & Sovereign Facilities',
    contribution:
      'Underwrites complex multi-billion Naira project finance facilities and structures institutional debt and equity consortia with pension administrators, sovereign wealth funds, and Dubai capital syndicates.',
    mandateDetails: [
      'Structuring of ₦720B+ development financing facilities',
      'Cross-border capital bridge between Nigeria, the Gulf, and London',
      'Downside risk mitigation and covenant compliance underwriting',
    ],
    initials: '04',
    location: 'Lagos & London',
  },
  {
    id: 'founder-5',
    slotNumber: '05',
    name: 'Co-Founder & Chief Operating Officer',
    title: 'Director of Project Execution & Supply Chain',
    division: 'BIM Level 3 & Field Delivery Assurance',
    contribution:
      'Oversees execution across 24+ active sites concurrently, enforcing ISO 9001 quality controls, zero-incident safety protocols, and maintaining our certified 98.6% on-time milestone delivery covenant.',
    mandateDetails: [
      'BIM digital twin integration across all EPC procurement chains',
      'Management of 3,500+ site personnel and specialized engineering contractors',
      'Supply chain localization and low-carbon materials deployment',
    ],
    initials: '05',
    location: 'Lagos & Active Sites',
  },
  {
    id: 'founder-6',
    slotNumber: '06',
    name: 'Co-Founder & Legal / Sovereign Director',
    title: 'Director of Concessions & Regulatory Entitlements',
    division: 'Statutory Governance & International Charters',
    contribution:
      'Secures critical statutory entitlements, sovereign gazettes, and public-private partnership (PPP) concession charters. Formulates the legal foundation powering our expansion into Dubai DIFC and global jurisdictions.',
    mandateDetails: [
      '30-year concession structuring for major civic infrastructure assets',
      'Sovereign regulatory compliance, tax treaties, and cross-border governance',
      'Strategic corporate structuring for the transition into Zanaari Group Limited',
    ],
    initials: '06',
    location: 'Abuja FCT & Dubai',
  },
];

export function FoundersSection() {
  const [founders, setFounders] = useState<Founder[]>(DEFAULT_FOUNDERS);
  const [selectedFounder, setSelectedFounder] = useState<Founder | null>(null);
  const [uploadedPhotos, setUploadedPhotos] = useState<Record<string, string>>({});

  // Load custom photos from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('zanaari_founders_photos');
      if (saved) {
        setUploadedPhotos(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const handlePhotoUpload = (founderId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      const updated = { ...uploadedPhotos, [founderId]: base64 };
      setUploadedPhotos(updated);
      try {
        localStorage.setItem('zanaari_founders_photos', JSON.stringify(updated));
      } catch {
        // storage quota fallback
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = (founderId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = { ...uploadedPhotos };
    delete updated[founderId];
    setUploadedPhotos(updated);
    try {
      localStorage.setItem('zanaari_founders_photos', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  return (
    <section id="founders" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E5E7EB] mb-12">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.25em] text-[#6B7280] uppercase mb-3">
              <span className="text-[#0A0A0A] font-bold">—</span>
              <span>06 / THE SIX FOUNDING PARTNERS</span>
            </div>
            <h2 className="font-['Syne'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#0A0A0A]">
              THE FOUNDING DIRECTORATE
            </h2>
          </div>

          <div className="text-xs font-mono text-[#6B7280] uppercase tracking-wider max-w-md">
            Six visionary partners united by the Infinity Mandate. Rooted in Nigerian infrastructure excellence, engineered for boundless group expansion.
          </div>
        </div>

        {/* 6 Founders Grid (3 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder) => {
            const photo = uploadedPhotos[founder.id];

            return (
              <div
                key={founder.id}
                onClick={() => setSelectedFounder(founder)}
                className="group relative flex flex-col justify-between bg-[#F9F9FB] border border-[#E5E7EB] hover:border-[#0A0A0A] transition-all duration-300 p-6 sm:p-7 cursor-pointer hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
              >
                {/* Hairline corner accents */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#0A0A0A]/30 pointer-events-none" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#0A0A0A]/30 pointer-events-none" />

                <div>
                  {/* Top Bar with Slot Number & Location */}
                  <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-[#6B7280] uppercase pb-4 mb-5 border-b border-[#E5E7EB]">
                    <span className="font-bold text-[#0A0A0A]">FOUNDER // {founder.slotNumber}</span>
                    <span>{founder.location}</span>
                  </div>

                  {/* Photo Space / Portrait Placeholder */}
                  <div className="relative aspect-[4/3] w-full bg-white border border-[#E5E7EB] mb-5 overflow-hidden group-hover:border-[#0A0A0A] transition-colors">
                    {photo ? (
                      <img
                        src={photo}
                        alt={founder.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      /* Architectural Abstract Silhouette Placeholder */
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#F3F4F6]/60">
                        <div className="w-16 h-16 rounded-full border border-[#0A0A0A]/20 flex items-center justify-center text-[#0A0A0A] font-['Syne'] font-bold text-lg mb-2">
                          {founder.slotNumber}
                        </div>
                        <span className="font-['Syne'] text-xs font-semibold uppercase text-[#0A0A0A] tracking-wider">
                          FOUNDER PORTRAIT SLOT
                        </span>
                        <span className="text-[10px] font-mono text-[#6B7280] uppercase mt-1">
                          Click below to upload picture
                        </span>
                      </div>
                    )}

                    {/* Upload / Replace Action Badge */}
                    <label
                      onClick={(e) => e.stopPropagation()}
                      className="absolute bottom-2.5 right-2.5 px-2.5 py-1.5 bg-black/80 hover:bg-black text-white text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5 cursor-pointer backdrop-blur-sm transition-colors shadow-sm"
                      title="Upload custom founder photo"
                    >
                      <Camera size={12} />
                      <span>{photo ? 'Change' : 'Upload'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handlePhotoUpload(founder.id, e)}
                      />
                    </label>

                    {photo && (
                      <button
                        onClick={(e) => handleRemovePhoto(founder.id, e)}
                        className="absolute top-2.5 right-2.5 p-1 bg-black/60 hover:bg-black text-white rounded text-[10px] transition-colors"
                        title="Remove uploaded photo"
                        aria-label="Remove photo"
                      >
                        <X size={12} />
                      </button>
                    )}
                  </div>

                  {/* Founder Title & Role */}
                  <h3 className="font-['Syne'] text-lg sm:text-xl font-bold uppercase tracking-tight text-[#0A0A0A] leading-snug">
                    {founder.name}
                  </h3>
                  <div className="text-xs font-semibold tracking-wider uppercase text-[#6B7280] mt-1 mb-2 font-mono">
                    {founder.title}
                  </div>
                  <div className="text-[11px] font-mono text-[#0A0A0A] uppercase tracking-wider mb-4 pb-3 border-b border-[#E5E7EB]">
                    {founder.division}
                  </div>

                  {/* Contribution Highlight */}
                  <p className="text-xs text-[#4B5563] leading-relaxed line-clamp-3">
                    {founder.contribution}
                  </p>
                </div>

                {/* Bottom Action Trigger */}
                <div className="pt-5 mt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-mono">
                  <span className="text-[10px] text-[#6B7280] uppercase">
                    ACTIVE DIRECTORATE
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-[#0A0A0A] group-hover:translate-x-1 transition-transform uppercase tracking-wider">
                    <span>Explore Mandate</span>
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Founders Consensus */}
        <div className="mt-14 p-6 sm:p-8 bg-[#F9F9FB] border border-[#0A0A0A] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-[#0A0A0A] bg-white flex items-center justify-center font-['Syne'] font-bold text-lg text-[#0A0A0A]">
              ∞
            </div>
            <div>
              <h4 className="font-['Syne'] text-sm sm:text-base font-bold uppercase tracking-wider text-[#0A0A0A]">
                The Six Pillars of Zanaari Projects Limited
              </h4>
              <p className="text-xs text-[#6B7280] mt-0.5 font-light">
                Every major infrastructure asset and sovereign concession requires the collective consensus of all six founding partners.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-[#0A0A0A] font-semibold uppercase tracking-wider">
              NIGERIA • DUBAI • GLOBAL
            </span>
          </div>
        </div>
      </div>

      {/* Founder Profile Modal */}
      {selectedFounder && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedFounder(null);
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-white border border-[#0A0A0A] p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="flex items-start justify-between pb-4 border-b border-[#E5E7EB] mb-6">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#6B7280]">
                  FOUNDING DIRECTORATE // {selectedFounder.slotNumber}
                </span>
                <h3 className="font-['Syne'] text-2xl font-bold uppercase tracking-tight text-[#0A0A0A] mt-1">
                  {selectedFounder.name}
                </h3>
                <div className="text-xs font-mono text-[#6B7280] uppercase tracking-wider mt-0.5">
                  {selectedFounder.title} · {selectedFounder.location}
                </div>
              </div>

              <button
                onClick={() => setSelectedFounder(null)}
                className="p-1.5 text-[#6B7280] hover:text-[#0A0A0A] hover:bg-[#F9F9FB] rounded focus:outline-none focus:ring-1 focus:ring-black"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Portrait with Upload Option */}
            <div className="relative aspect-[16/9] w-full bg-[#F9F9FB] border border-[#E5E7EB] mb-6 overflow-hidden">
              {uploadedPhotos[selectedFounder.id] ? (
                <img
                  src={uploadedPhotos[selectedFounder.id]}
                  alt={selectedFounder.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-full border border-[#0A0A0A]/20 flex items-center justify-center text-[#0A0A0A] font-['Syne'] font-bold text-lg mb-2">
                    {selectedFounder.slotNumber}
                  </div>
                  <span className="font-['Syne'] text-xs font-semibold uppercase text-[#0A0A0A]">
                    FOUNDER PORTRAIT SLOT
                  </span>
                  <span className="text-[10px] font-mono text-[#6B7280] uppercase mt-1">
                    Upload your high-res executive photograph anytime
                  </span>
                </div>
              )}

              <label className="absolute bottom-3 right-3 px-3 py-1.5 bg-black/80 hover:bg-black text-white text-xs font-mono uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md transition-colors">
                <Camera size={14} />
                <span>Upload New Picture</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handlePhotoUpload(selectedFounder.id, e)}
                />
              </label>
            </div>

            {/* Strategic Mandate & Contribution */}
            <div className="space-y-6">
              <div>
                <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#6B7280] mb-2">
                  Strategic Contribution to the Group
                </h4>
                <p className="text-sm text-[#374151] leading-relaxed">
                  {selectedFounder.contribution}
                </p>
              </div>

              <div className="border-t border-[#E5E7EB] pt-6">
                <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#6B7280] mb-3">
                  Core Directorate Responsibilities
                </h4>
                <div className="space-y-2.5">
                  {selectedFounder.mandateDetails.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#4B5563]">
                      <span className="w-1.5 h-1.5 bg-[#0A0A0A] shrink-0 mt-1.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-6 border-t border-[#E5E7EB] flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedFounder(null)}
                className="px-6 py-2.5 text-xs font-semibold tracking-[0.2em] uppercase bg-[#0A0A0A] text-white hover:bg-[#262626] transition-colors"
              >
                CLOSE DOSSIER
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
