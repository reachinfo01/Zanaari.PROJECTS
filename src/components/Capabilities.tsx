import { useState } from 'react';
import { CapabilityItem } from '../types/portfolio';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

const CAPABILITIES_DATA: CapabilityItem[] = [
  {
    number: '01',
    title: 'Architectural Design & Masterplanning',
    summary:
      'Conception of iconic urban skylines, mixed-use destinations, and biophilic residential masterplans engineered for timeless civic distinction and generational value.',
    disciplines: [
      'Comprehensive Urban Masterplanning & Zoning',
      'High-Rise Commercial & Residential Architecture',
      'Biophilic Courtyards & Microclimatic Atriums',
      'Parametric Facade Optimization & Daylight Modeling',
      'Spatial Programming & Commercial Yield Optimization',
    ],
    methodology:
      'Integration of generative parametric computation with vernacular materials and passive bioclimatic envelopes to minimize operational carbon from day one.',
    activePortfolioMetric: '310,000 SQM Masterplanned',
    representativeWorks: 'The Atrium Residences, One Horizon Tower, Mayfair Private Residences',
  },
  {
    number: '02',
    title: 'Civil Infrastructure & Industrial Logistics',
    summary:
      'Engineering the critical arteries of global trade: intermodal logistics superhubs, automated cold-storage networks, maritime freight corridors, and resilient municipal infrastructure.',
    disciplines: [
      'Automated High-Bay Logistics & Freight Terminals',
      'Heavy-Duty Structural Steel & Superflat Laser Screeding',
      'Port-Adjacent Free Trade Zone Development',
      'Multimodal Transit Corridors & Arterial Bridges',
      'Autonomous Vehicle Fleet & EV Grid Infrastructure',
    ],
    methodology:
      'Design-Build and EPC delivery models leveraging digital twin telemetry and modular steel prefabrication to compress construction cycles by up to 28%.',
    activePortfolioMetric: '185,000 SQM Industrial Grade',
    representativeWorks: 'The Matrix Logistics Hub, Atlantic Gateway Freight Park, Lekki Port Free Zone Terminals',
  },
  {
    number: '03',
    title: 'Capital Allocation & Real Estate Development',
    summary:
      'Structuring institutional joint ventures, development financing, and public-private partnerships (PPP) with sovereign wealth funds, pension capital, and premier asset managers.',
    disciplines: [
      'Public-Private Partnership (PPP) Concessions',
      'Institutional Co-Investment & Mezzanine Financing',
      'Site Acquisition & Sovereign Land Entitlements',
      'Risk Mitigation & Guaranteed Maximum Price (GMP)',
      'Life-Cycle Asset Governance & Institutional Exit Planning',
    ],
    methodology:
      'Disciplined underwriting combining rigorous downside downside risk covenants with upside exposure in high-growth commercial and trade hubs.',
    activePortfolioMetric: '$450M+ Capital Orchestrated',
    representativeWorks: 'Zanaari Sovereign Infrastructure Fund, Central Civic Concession, London Core Fund',
  },
  {
    number: '04',
    title: 'Sustainable Engineering & Urban Revitalization',
    summary:
      'Deep decarbonization of the built environment: net-zero carbon concrete formulations, renewable microgrids, and urban wetland restoration for flood mitigation and biodiversity.',
    disciplines: [
      'Net-Zero Carbon Mass Timber & Low-Clinker Concrete',
      'Civic Stormwater Retention & Urban Wetland Ecology',
      'On-Site Photovoltaic Microgrids & BESS Storage',
      'BREEAM Outstanding, LEED Platinum & WELL Certifications',
      'Post-Occupancy Thermal & Energy Performance Auditing',
    ],
    methodology:
      'Life-Cycle Assessment (LCA) modeling tracking embodied and operational carbon across a 60-year horizon, ensuring assets exceed ESG compliance mandates.',
    activePortfolioMetric: '42,000 tCO2e Embodied Carbon Avoided',
    representativeWorks: 'Central Civic Park, Victoria Island Green Spine, Zero-Carbon Industrial Standard',
  },
];

export function Capabilities() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="capabilities" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E5E7EB] mb-12">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.25em] text-[#6B7280] uppercase mb-3">
              <span className="text-[#0A0A0A] font-bold">—</span>
              <span>03 / SECTORS & CAPABILITIES</span>
            </div>
            <h2 className="font-['Syne'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#0A0A0A]">
              TECHNICAL CORE
            </h2>
          </div>

          <div className="text-xs font-mono text-[#6B7280] uppercase tracking-wider max-w-sm">
            End-to-end integration across architecture, civil engineering, and institutional capital underwriting.
          </div>
        </div>

        {/* 4 Full-Width Numbered List Items Separated by 1px Borders */}
        <div className="border-b border-[#E5E7EB]">
          {CAPABILITIES_DATA.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={item.number}
                className={`border-t border-[#E5E7EB] transition-colors duration-300 ${
                  isExpanded ? 'bg-[#F9F9FB]' : 'hover:bg-[#FCFCFD]'
                }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full py-8 sm:py-10 px-4 sm:px-8 flex items-center justify-between gap-6 text-left focus:outline-none focus:ring-1 focus:ring-black cursor-pointer group"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-6 sm:gap-12 flex-1">
                    <span className="font-mono text-base sm:text-lg font-bold text-[#6B7280] group-hover:text-[#0A0A0A] transition-colors">
                      {item.number}
                    </span>

                    <h3 className="font-['Syne'] text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-[#0A0A0A] group-hover:text-[#4B5563] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <span className="hidden md:inline font-mono text-xs text-[#6B7280] uppercase tracking-wider">
                      {item.activePortfolioMetric}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-[#E5E7EB] group-hover:border-[#0A0A0A] flex items-center justify-center text-[#0A0A0A] transition-colors">
                      {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </div>
                </button>

                {/* Expanded Content Panel */}
                {isExpanded && (
                  <div className="px-4 sm:px-8 pb-10 pt-2 animate-fade-in border-t border-[#E5E7EB]/50">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
                      {/* Left: Summary & Methodology */}
                      <div className="lg:col-span-7 space-y-6">
                        <div>
                          <span className="text-[10px] font-mono tracking-widest uppercase text-[#6B7280] block mb-2">
                            Discipline Scope & Executive Overview
                          </span>
                          <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                            {item.summary}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-[#E5E7EB]/60">
                          <span className="text-[10px] font-mono tracking-widest uppercase text-[#6B7280] block mb-2">
                            Delivery Methodology & Quality Standards
                          </span>
                          <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                            {item.methodology}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-mono text-[#0A0A0A] pt-2">
                          <span className="text-[#6B7280]">Representative Works:</span>
                          <span className="font-medium">{item.representativeWorks}</span>
                        </div>
                      </div>

                      {/* Right: Technical Services Breakdown */}
                      <div className="lg:col-span-5 bg-white p-6 border border-[#E5E7EB]">
                        <span className="text-[10px] font-mono tracking-widest uppercase text-[#6B7280] block mb-4">
                          Key Technical Services & Deliverables
                        </span>
                        <ul className="space-y-3">
                          {item.disciplines.map((discipline, dIdx) => (
                            <li
                              key={dIdx}
                              className="flex items-start gap-3 text-xs text-[#374151]"
                            >
                              <span className="w-1.5 h-1.5 bg-[#0A0A0A] rounded-none shrink-0 mt-1.5" />
                              <span className="leading-snug">{discipline}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-mono">
                          <span className="text-[#6B7280]">SECTOR METRIC</span>
                          <span className="font-bold text-[#0A0A0A]">
                            {item.activePortfolioMetric}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
