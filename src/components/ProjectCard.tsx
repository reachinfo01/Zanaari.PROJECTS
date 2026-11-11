import { useState } from 'react';
import { Project } from '../types/portfolio';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  aspectClass?: string;
}

export function ProjectCard({ project, onSelect, aspectClass = 'aspect-[4/3]' }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  const imgSrc = imgError ? project.fallbackImage : project.imageSrc;

  return (
    <article
      onClick={() => onSelect(project)}
      className="group relative flex flex-col bg-white border border-[#E5E7EB] hover:border-[#0A0A0A] transition-colors duration-300 cursor-pointer overflow-hidden"
    >
      {/* Top Card Kicker: Unboxed Clean Metadata (Zero-Pill Rule) */}
      <div className="p-5 sm:p-6 pb-4 flex items-center justify-between text-[11px] font-mono tracking-widest uppercase text-[#6B7280] border-b border-[#E5E7EB]/70">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#0A0A0A]">PRJ // {project.number}</span>
          <span aria-hidden="true">·</span>
          <span>{project.category}</span>
        </div>
        <span className="text-[#0A0A0A] font-medium">{project.status}</span>
      </div>

      {/* Image Container with Zoom Hover Effect & Architectural Framing */}
      <div className={`relative ${aspectClass} w-full overflow-hidden bg-[#F9F9FB]`}>
        <img
          src={imgSrc}
          alt={project.title}
          referrerPolicy="no-referrer"
          onError={() => {
            if (!imgError) setImgError(true);
          }}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Contrast Scrim for Text/Marks */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300" />

        {/* Architectural Hairline Corners */}
        <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-white/70 pointer-events-none" />
        <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-white/70 pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-white/70 pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-white/70 pointer-events-none" />

        {/* Floating Quick Action Indicator */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-[#0A0A0A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 shadow-sm">
          <ArrowUpRight size={16} />
        </div>
      </div>

      {/* Content & Specifications Footer */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#0A0A0A] group-hover:text-[#4B5563] transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#6B7280] line-clamp-2 leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Specifications Matrix (Area, Year, Location) */}
        <div className="mt-6 pt-5 border-t border-[#E5E7EB]">
          <div className="grid grid-cols-3 gap-2 text-xs mb-4">
            <div>
              <span className="block text-[10px] font-mono tracking-wider uppercase text-[#6B7280]">
                Scale
              </span>
              <span className="font-semibold text-[#0A0A0A] text-[11px] truncate block">
                {project.area}
              </span>
            </div>
            <div>
              <span className="block text-[10px] font-mono tracking-wider uppercase text-[#6B7280]">
                Location
              </span>
              <span className="font-semibold text-[#0A0A0A] text-[11px] truncate block">
                {project.location.split(',')[0]}
              </span>
            </div>
            <div>
              <span className="block text-[10px] font-mono tracking-wider uppercase text-[#6B7280]">
                Horizon
              </span>
              <span className="font-semibold text-[#0A0A0A] text-[11px]">
                {project.year}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-[#F3F4F6]">
            <span className="text-[11px] font-mono tracking-wider text-[#6B7280] uppercase">
              {project.esgRating.split('//')[0].trim()}
            </span>

            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.15em] uppercase text-[#0A0A0A] group-hover:translate-x-1 transition-transform">
              <span>View Project</span>
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
