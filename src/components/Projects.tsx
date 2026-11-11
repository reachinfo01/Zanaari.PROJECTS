import { useState, useMemo } from 'react';
import { Project } from '../types/portfolio';
import { PROJECTS_DATA } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export function Projects({ onSelectProject }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Mixed-Use',
    'Industrial & Trade',
    'Commercial',
    'Civic Infrastructure',
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#F9F9FB] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Category Header with Project Counter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E5E7EB] mb-12">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.25em] text-[#6B7280] uppercase mb-3">
              <span className="text-[#0A0A0A] font-bold">—</span>
              <span>01 / FEATURED PORTFOLIO</span>
            </div>
            <h2 className="font-['Syne'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#0A0A0A]">
              SELECTED WORKS
            </h2>
          </div>

          {/* Interactive Filter Tabs (Functional Segmented Controls) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-[#E5E7EB]">
            {categories.map((category) => {
              const count =
                category === 'All'
                  ? PROJECTS_DATA.length
                  : PROJECTS_DATA.filter((p) => p.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    activeCategory === category
                      ? 'bg-[#0A0A0A] text-white shadow-xs'
                      : 'text-[#6B7280] hover:text-[#0A0A0A] hover:bg-[#F3F4F6]'
                  }`}
                >
                  <span>{category}</span>
                  <span className="ml-1.5 opacity-60 font-mono text-[9px]">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2x2 Asymmetric Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project, index) => {
            // Asymmetric rhythm: index 0 and 3 have different height ratios
            const aspectClass =
              index % 3 === 0
                ? 'aspect-[4/3] sm:aspect-[16/11]'
                : 'aspect-[4/3] sm:aspect-[16/10]';

            return (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
                aspectClass={aspectClass}
              />
            );
          })}
        </div>

        {/* Bottom Portfolio Index Footer */}
        <div className="mt-14 pt-8 border-t border-[#E5E7EB] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#6B7280] uppercase tracking-wider">
          <div>
            SHOWING {filteredProjects.length} OF {PROJECTS_DATA.length} SIGNATURE DEVELOPMENTS
          </div>
          <div className="flex items-center gap-4">
            <span>BIM LOD 500 STANDARDS</span>
            <span>·</span>
            <span>ALL SITES STRICTLY INSTITUTIONAL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
