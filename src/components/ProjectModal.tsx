import { useState, useEffect } from 'react';
import { Project } from '../types/portfolio';
import { X, ArrowRight, ShieldCheck, MapPin, Layers, Award } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquireAboutProject: (projectTitle: string) => void;
}

export function ProjectModal({ project, onClose, onInquireAboutProject }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'engineering' | 'esg'>('overview');
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const currentImg = imgError ? project.fallbackImage : project.imageSrc;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/75 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="relative w-full max-w-5xl bg-white border border-[#0A0A0A] shadow-2xl my-auto overflow-hidden animate-fade-in">
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#E5E7EB] bg-[#F9F9FB]">
          <div className="flex items-center gap-3 text-[11px] font-mono tracking-widest uppercase text-[#6B7280]">
            <span className="font-bold text-[#0A0A0A]">PROJECT DOSSIER // {project.number}</span>
            <span>·</span>
            <span>{project.category}</span>
            <span>·</span>
            <span className="text-[#0A0A0A]">{project.status}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#6B7280] hover:text-[#0A0A0A] hover:bg-[#E5E7EB] transition-colors focus:outline-none focus:ring-1 focus:ring-black"
            aria-label="Close Project Modal (ESC)"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="max-h-[82vh] overflow-y-auto">
          {/* Main Visual Image Hero */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F9F9FB] border-b border-[#E5E7EB]">
            <img
              src={currentImg}
              alt={project.title}
              referrerPolicy="no-referrer"
              onError={() => {
                if (!imgError) setImgError(true);
              }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-white">
              <div className="text-xs font-mono tracking-widest uppercase text-white/75 mb-1">
                {project.location} · {project.year}
              </div>
              <h2
                id="modal-project-title"
                className="font-['Syne'] text-2xl sm:text-4xl font-bold uppercase tracking-tight"
              >
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-white/85 max-w-2xl font-light mt-1">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-[#E5E7EB] border-b border-[#E5E7EB] bg-[#F9F9FB] text-xs">
            <div className="p-4 sm:p-5">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#6B7280] block mb-1">
                Total Area
              </span>
              <span className="font-bold text-[#0A0A0A] text-sm">{project.area}</span>
            </div>
            <div className="p-4 sm:p-5">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#6B7280] block mb-1">
                Project Value
              </span>
              <span className="font-bold text-[#0A0A0A] text-sm tabular-nums">{project.value}</span>
            </div>
            <div className="p-4 sm:p-5">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#6B7280] block mb-1">
                Location
              </span>
              <span className="font-bold text-[#0A0A0A] text-sm truncate block">{project.location}</span>
            </div>
            <div className="p-4 sm:p-5">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#6B7280] block mb-1">
                Sustainability Rating
              </span>
              <span className="font-bold text-[#0A0A0A] text-sm truncate block">{project.esgRating}</span>
            </div>
          </div>

          {/* Content Tabs Navigation (Clean Segmented Tabs) */}
          <div className="px-6 sm:px-8 pt-6 border-b border-[#E5E7EB] flex items-center gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-3 text-xs font-semibold tracking-[0.18em] uppercase transition-colors relative ${
                activeTab === 'overview'
                  ? 'text-[#0A0A0A] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#0A0A0A]'
                  : 'text-[#6B7280] hover:text-[#0A0A0A]'
              }`}
            >
              Architectural Concept
            </button>
            <button
              onClick={() => setActiveTab('engineering')}
              className={`pb-3 text-xs font-semibold tracking-[0.18em] uppercase transition-colors relative ml-4 ${
                activeTab === 'engineering'
                  ? 'text-[#0A0A0A] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#0A0A0A]'
                  : 'text-[#6B7280] hover:text-[#0A0A0A]'
              }`}
            >
              Structural & Technical
            </button>
            <button
              onClick={() => setActiveTab('esg')}
              className={`pb-3 text-xs font-semibold tracking-[0.18em] uppercase transition-colors relative ml-4 ${
                activeTab === 'esg'
                  ? 'text-[#0A0A0A] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#0A0A0A]'
                  : 'text-[#6B7280] hover:text-[#0A0A0A]'
              }`}
            >
              ESG & Covenants
            </button>
          </div>

          {/* Tab Panes */}
          <div className="p-6 sm:p-8">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#6B7280] mb-2">
                    Spatial Program & Urban Context
                  </h3>
                  <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                    {project.architecturalOverview}
                  </p>
                </div>

                <div className="border-t border-[#E5E7EB] pt-6">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#6B7280] mb-4">
                    Key Institutional Partners & Consortia
                  </h3>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-[#0A0A0A]">
                    {project.keyPartners.map((partner, i) => (
                      <span key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#0A0A0A]" />
                        <span>{partner}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'engineering' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#6B7280] mb-2">
                    Structural Framework & Facade Engineering
                  </h3>
                  <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                    {project.structuralEngineering}
                  </p>
                </div>

                <div className="border-t border-[#E5E7EB] pt-6">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#6B7280] mb-4">
                    Technical Specification Matrix
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-3 bg-[#F9F9FB] border border-[#E5E7EB]">
                      <span className="text-[#6B7280] block text-[10px] font-mono uppercase">
                        Structural Grid
                      </span>
                      <span className="font-semibold text-[#0A0A0A]">
                        {project.specifications.structuralGrid}
                      </span>
                    </div>
                    <div className="p-3 bg-[#F9F9FB] border border-[#E5E7EB]">
                      <span className="text-[#6B7280] block text-[10px] font-mono uppercase">
                        Facade System
                      </span>
                      <span className="font-semibold text-[#0A0A0A]">
                        {project.specifications.facadeSystem}
                      </span>
                    </div>
                    <div className="p-3 bg-[#F9F9FB] border border-[#E5E7EB]">
                      <span className="text-[#6B7280] block text-[10px] font-mono uppercase">
                        Lead Architecture Practice
                      </span>
                      <span className="font-semibold text-[#0A0A0A]">
                        {project.specifications.leadArchitect}
                      </span>
                    </div>
                    <div className="p-3 bg-[#F9F9FB] border border-[#E5E7EB]">
                      <span className="text-[#6B7280] block text-[10px] font-mono uppercase">
                        Delivery Method
                      </span>
                      <span className="font-semibold text-[#0A0A0A]">
                        {project.specifications.deliveryMethod}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'esg' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#6B7280] mb-2">
                    Sustainability & Generational Resilience
                  </h3>
                  <div className="space-y-3 mt-4">
                    {project.sustainabilityHighlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#374151]">
                        <span className="font-mono text-xs font-bold text-[#0A0A0A] shrink-0 mt-0.5">
                          0{idx + 1}.
                        </span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-[#F9F9FB] border border-[#E5E7EB] mt-6 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#6B7280] block">
                      Certified Credentials
                    </span>
                    <span className="text-xs font-bold text-[#0A0A0A]">
                      {project.specifications.certifications}
                    </span>
                  </div>
                  <ShieldCheck className="text-[#0A0A0A]" size={24} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer Bar */}
        <div className="px-6 sm:px-8 py-4 border-t border-[#E5E7EB] bg-[#F9F9FB] flex flex-wrap items-center justify-between gap-4">
          <div className="text-[11px] text-[#6B7280] font-mono">
            REF: ZPL-PRJ-{project.number} // PROPRIETARY ARCHIVE
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#4B5563] hover:text-[#0A0A0A] uppercase transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquireAboutProject(project.title);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-[0.2em] uppercase bg-[#0A0A0A] text-white hover:bg-[#262626] transition-colors"
            >
              <span>Inquire About Project</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
