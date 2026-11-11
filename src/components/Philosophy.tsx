import { useState } from 'react';
import { MetricItem } from '../types/portfolio';
import { ChevronRight, X, ShieldCheck, TrendingUp, Building2, Calendar } from 'lucide-react';

const METRICS_DATA: MetricItem[] = [
  {
    id: 'assets',
    value: '₦720B+',
    label: 'Capital Under Dev',
    subtext: 'Institutional Real Estate & Infrastructure',
    description:
      'Capital deployed across prime urban centers in Nigeria (Lagos, Abuja) and strategic expansion corridors in Dubai and London, backed by sovereign institutions, pension consortia, and private family offices.',
    breakdown: [
      { label: 'Commercial & Mixed-Use Towers', value: '₦350B' },
      { label: 'High-Tech Logistics & Industrial Parks', value: '₦230B' },
      { label: 'Civic Infrastructure & Public Concessions', value: '₦140B' },
    ],
  },
  {
    id: 'sites',
    value: '24+',
    label: 'Active Sites',
    subtext: 'Concurrent Developments',
    description:
      'Twenty-four active urban masterplans and construction sites managed under ISO 9001 frameworks and rigorous structural engineering oversight.',
    breakdown: [
      { label: 'Lagos Free Zone & Coastal Corridors (Nigeria)', value: '11 Sites' },
      { label: 'Abuja Federal Capital Territory (Nigeria)', value: '6 Sites' },
      { label: 'Dubai & DIFC Strategic Corridor (UAE Expansion)', value: '4 Sites' },
      { label: 'London Institutional Liaison Sites (UK)', value: '3 Sites' },
    ],
  },
  {
    id: 'delivery',
    value: '98.6%',
    label: 'On-Time Delivery',
    subtext: 'Milestone Execution Rate',
    description:
      'Strict adherence to institutional delivery timelines through vertically integrated architectural design, EPC supply chains, and digital BIM project governance.',
    breakdown: [
      { label: 'BIM Level 3 Digital Twin Tracking', value: '100% Adoption' },
      { label: 'Zero Critical Structural Deviations', value: 'Audited' },
      { label: 'Lost Time Injury Frequency Rate (LTIFR)', value: '< 0.05' },
    ],
  },
  {
    id: 'pipeline',
    value: '2026–30',
    label: 'Active Horizon',
    subtext: 'Generational Horizon Projects',
    description:
      'Committed delivery cycles throughout the 2026–2030 programmatic horizon, prioritizing net-zero carbon concrete, passive bioclimatic envelopes, and high-density urban transit nodes.',
    breakdown: [
      { label: 'Under Construction (Phase Completion)', value: '6 Major Hubs' },
      { label: 'Permitted & Groundbreaking (2026)', value: '8 Developments' },
      { label: 'Capital Allocation Target (2026–2028)', value: '₦550B Target' },
    ],
  },
];

export function Philosophy() {
  const [selectedMetric, setSelectedMetric] = useState<MetricItem | null>(null);

  const getMetricIcon = (id: string) => {
    switch (id) {
      case 'assets':
        return <TrendingUp className="text-[#0A0A0A]" size={18} />;
      case 'sites':
        return <Building2 className="text-[#0A0A0A]" size={18} />;
      case 'delivery':
        return <ShieldCheck className="text-[#0A0A0A]" size={18} />;
      default:
        return <Calendar className="text-[#0A0A0A]" size={18} />;
    }
  };

  return (
    <section id="philosophy" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.25em] text-[#6B7280] uppercase mb-8">
          <span className="text-[#0A0A0A] font-bold">—</span>
          <span>02 / THE INFINITY MANDATE & PHILOSOPHY</span>
        </div>

        {/* Mission Statement in Editorial Italic / Serif-Accented Font */}
        <div className="max-w-4xl mb-12">
          <blockquote className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl lg:text-5xl italic font-normal text-[#0A0A0A] leading-[1.3] text-balance">
            “Our emblem is the architectural symbol of infinity (∞)—an unbroken continuum of monumental engineering, patient institutional capital, and generational value creation. Rooted in Nigeria with expansive horizons across Dubai and beyond, we build enduring landmarks that outlive generations.”
          </blockquote>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono tracking-widest uppercase text-[#6B7280]">
            <span className="font-bold text-[#0A0A0A]">ZANAARI GROUP MANDATE</span>
            <span>·</span>
            <span>HEADQUARTERED IN NIGERIA // EXPANDING GLOBALLY</span>
            <span>·</span>
            <span className="text-[#0A0A0A] font-semibold">THE INFINITY PRINCIPLE (∞)</span>
          </div>
        </div>

        {/* The Infinity Concept Architectural Card */}
        <div className="p-6 sm:p-8 bg-[#F9F9FB] border border-[#E5E7EB] mb-16 sm:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="border-b md:border-b-0 md:border-r border-[#E5E7EB] pb-4 md:pb-0 md:pr-6">
              <span className="font-mono text-[10px] text-[#6B7280] uppercase tracking-wider block mb-1">
                01. THE INFINITE CONTINUUM (∞)
              </span>
              <h4 className="font-['Syne'] font-bold text-sm uppercase text-[#0A0A0A] mb-2">
                Unbroken Value Lifecycle
              </h4>
              <p className="text-[#4B5563] leading-relaxed">
                The interlocking geometry represents perpetual lifecycle resilience. Every development is designed to generate compound economic and social returns across 60+ year institutional horizons.
              </p>
            </div>

            <div className="border-b md:border-b-0 md:border-r border-[#E5E7EB] pb-4 md:pb-0 md:pr-6">
              <span className="font-mono text-[10px] text-[#6B7280] uppercase tracking-wider block mb-1">
                02. NIGERIAN FOUNDATION
              </span>
              <h4 className="font-['Syne'] font-bold text-sm uppercase text-[#0A0A0A] mb-2">
                Domestic Sovereign Power
              </h4>
              <p className="text-[#4B5563] leading-relaxed">
                Firmly anchored in Lagos and Abuja, driving industrial logistics, ports, and commercial skylines that power the powerhouse economy of Sub-Saharan Africa in Nigerian Naira.
              </p>
            </div>

            <div>
              <span className="font-mono text-[10px] text-[#6B7280] uppercase tracking-wider block mb-1">
                03. GLOBAL GROUP EXPANSION
              </span>
              <h4 className="font-['Syne'] font-bold text-sm uppercase text-[#0A0A0A] mb-2">
                Dubai & Beyond
              </h4>
              <p className="text-[#4B5563] leading-relaxed">
                As Zanaari Projects expands into Zanaari Group Limited, our Dubai and international offices bridge capital conduits, cutting-edge engineering consortia, and cross-border trade.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Metrics Section Header */}
        <div id="metrics" className="pt-8 border-t border-[#E5E7EB]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="text-[11px] font-semibold tracking-[0.22em] text-[#0A0A0A] uppercase">
              Impact & Capital Performance Indicators
            </span>
            <span className="text-[11px] text-[#6B7280] font-mono tracking-wider">
              [ CLICK ANY METRIC FOR AUDIT BREAKDOWN ]
            </span>
          </div>

          {/* Interactive 4-Column Stat Strip Separated by Thin Vertical Dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#E5E7EB] bg-[#F9F9FB] divide-y sm:divide-y-0 sm:divide-x divide-[#E5E7EB]">
            {METRICS_DATA.map((metric) => (
              <button
                key={metric.id}
                onClick={() => setSelectedMetric(metric)}
                className="p-8 sm:p-10 text-left group hover:bg-[#FFFFFF] transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-black relative cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-widest text-[#6B7280] uppercase">
                    INDICATOR // {metric.id.toUpperCase()}
                  </span>
                  {getMetricIcon(metric.id)}
                </div>

                <div className="font-['Syne'] text-4xl sm:text-5xl font-bold tracking-tight text-[#0A0A0A] tabular-nums mb-2 group-hover:translate-x-0.5 transition-transform">
                  {metric.value}
                </div>

                <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0A0A0A] mb-1">
                  {metric.label}
                </div>

                <div className="text-[11px] text-[#6B7280] leading-snug mb-4">
                  {metric.subtext}
                </div>

                <div className="inline-flex items-center gap-1 text-[10px] font-mono tracking-wider text-[#0A0A0A] uppercase group-hover:underline">
                  <span>View Details</span>
                  <ChevronRight size={12} className="transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Metric Detail Modal */}
      {selectedMetric && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-xl bg-white border border-[#0A0A0A] p-8 sm:p-10 shadow-2xl">
            <div className="flex items-start justify-between pb-4 border-b border-[#E5E7EB] mb-6">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#6B7280]">
                  PORTFOLIO AUDIT REPORT // 2026
                </span>
                <h3 className="font-['Syne'] text-2xl font-bold uppercase tracking-tight text-[#0A0A0A] mt-1">
                  {selectedMetric.label}
                </h3>
              </div>
              <button
                onClick={() => setSelectedMetric(null)}
                className="p-2 text-[#6B7280] hover:text-[#0A0A0A] hover:bg-[#F9F9FB] rounded focus:outline-none focus:ring-1 focus:ring-black"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="font-['Syne'] text-5xl font-extrabold text-[#0A0A0A] tabular-nums mb-4">
              {selectedMetric.value}
            </div>

            <p className="text-sm text-[#4B5563] leading-relaxed mb-8">
              {selectedMetric.description}
            </p>

            <div className="border-t border-[#E5E7EB] pt-6 mb-8">
              <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0A0A0A] mb-4">
                Allocation & Metric Breakdown
              </h4>
              <div className="space-y-3">
                {selectedMetric.breakdown.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2 border-b border-[#F3F4F6] text-xs"
                  >
                    <span className="text-[#4B5563]">{item.label}</span>
                    <span className="font-mono font-bold text-[#0A0A0A] tabular-nums">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedMetric(null)}
                className="px-6 py-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase bg-[#0A0A0A] text-white hover:bg-[#262626] transition-colors"
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
