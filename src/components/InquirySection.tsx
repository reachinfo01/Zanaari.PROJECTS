import { useState, FormEvent } from 'react';
import { InquiryFormData } from '../types/portfolio';
import { CheckCircle2, Send, Download, RefreshCw, Shield, Clock } from 'lucide-react';

interface InquirySectionProps {
  initialProjectScope?: string;
}

export function InquirySection({ initialProjectScope = '' }: InquirySectionProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    organization: '',
    projectScope: initialProjectScope || 'Commercial High-Rise',
    budgetTier: '$50M - $150M',
    location: 'London & UK',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    submittedAt: string;
    data: InquiryFormData;
  } | null>(null);

  const budgetTiers = [
    { id: '$10M - $50M', label: '$10M – $50M', desc: 'Bespoke Development' },
    { id: '$50M - $150M', label: '$50M – $150M', desc: 'Signature Commercial' },
    { id: '$150M - $500M', label: '$150M – $500M', desc: 'Major Infrastructure / Hub' },
    { id: '$500M+', label: '$500M+', desc: 'Masterplanned Consortia' },
  ];

  const projectScopes = [
    'Commercial High-Rise',
    'Industrial Logistics & Freight',
    'Mixed-Use Masterplan',
    'Civic Infrastructure & PPP',
    'Capital Advisory & Co-Development',
  ];

  const locations = [
    'London & UK Corridor',
    'Lagos & West Africa Coastal',
    'Dubai & GCC Region',
    'North America & Global',
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.organization.trim()) newErrors.organization = 'Organization / entity is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid corporate email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      newErrors.message = 'Please provide at least 15 characters outlining project scope.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const refNumber = Math.floor(1000 + Math.random() * 9000);
      setSubmittedData({
        referenceId: `ZPL-2026-${refNumber}`,
        submittedAt: new Date().toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        data: { ...formData },
      });
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      organization: '',
      projectScope: 'Commercial High-Rise',
      budgetTier: '$50M - $150M',
      location: 'London & UK',
      message: '',
    });
    setErrors({});
  };

  const handleDownloadSummary = () => {
    if (!submittedData) return;
    const content = `================================================
ZANAARI PROJECTS LIMITED // INQUIRY CONFIRMATION
A DIVISION OF ZANAARI GROUP LIMITED
================================================
Reference Code:  ${submittedData.referenceId}
Timestamp:       ${submittedData.submittedAt}
Status:          Under Direct Review by Executive Practice

Principal:       ${submittedData.data.fullName}
Organization:    ${submittedData.data.organization}
Corporate Email: ${submittedData.data.email}
Project Scope:   ${submittedData.data.projectScope}
Budget Tier:     ${submittedData.data.budgetTier}
Target Location: ${submittedData.data.location}

Project Narrative:
${submittedData.data.message}

Turnaround Covenant: Under 24 Business Hours
Global Offices: London • Lagos • Dubai
================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${submittedData.referenceId}-Zanaari-Inquiry.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="inquiry" className="py-20 sm:py-28 bg-[#F9F9FB] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E5E7EB] mb-12">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.25em] text-[#6B7280] uppercase mb-3">
              <span className="text-[#0A0A0A] font-bold">—</span>
              <span>04 / COMMISSION & INQUIRY</span>
            </div>
            <h2 className="font-['Syne'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#0A0A0A]">
              INITIATE ENGAGEMENT
            </h2>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-[#6B7280] uppercase">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[#0A0A0A]" />
              <span>&lt;24H RESPONSE COVENANT</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-[#0A0A0A]" />
              <span>INSTITUTIONAL NDA STRICT</span>
            </div>
          </div>
        </div>

        {/* Clean Architectural Contact Card */}
        <div className="bg-white border border-[#0A0A0A] p-8 sm:p-12 lg:p-16 shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative">
          {/* Architectural Hairline Corners */}
          <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#0A0A0A]" />
          <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#0A0A0A]" />
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#0A0A0A]" />
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#0A0A0A]" />

          {!submittedData ? (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-[11px] font-mono tracking-widest uppercase text-[#0A0A0A] mb-2 font-semibold"
                  >
                    Principal Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Alistair Sterling"
                    className={`w-full px-4 py-3 bg-[#F9F9FB] border ${
                      errors.fullName ? 'border-red-500' : 'border-[#E5E7EB]'
                    } focus:border-[#0A0A0A] focus:bg-white text-sm text-[#0A0A0A] outline-none transition-colors font-medium`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-red-600 font-mono">{errors.fullName}</p>
                  )}
                </div>

                {/* Organization */}
                <div>
                  <label
                    htmlFor="organization"
                    className="block text-[11px] font-mono tracking-widest uppercase text-[#0A0A0A] mb-2 font-semibold"
                  >
                    Organization / Entity *
                  </label>
                  <input
                    id="organization"
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Sterling Capital Partners Ltd"
                    className={`w-full px-4 py-3 bg-[#F9F9FB] border ${
                      errors.organization ? 'border-red-500' : 'border-[#E5E7EB]'
                    } focus:border-[#0A0A0A] focus:bg-white text-sm text-[#0A0A0A] outline-none transition-colors font-medium`}
                  />
                  {errors.organization && (
                    <p className="mt-1.5 text-xs text-red-600 font-mono">{errors.organization}</p>
                  )}
                </div>

                {/* Corporate Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[11px] font-mono tracking-widest uppercase text-[#0A0A0A] mb-2 font-semibold"
                  >
                    Corporate Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="a.sterling@sterlingcapital.com"
                    className={`w-full px-4 py-3 bg-[#F9F9FB] border ${
                      errors.email ? 'border-red-500' : 'border-[#E5E7EB]'
                    } focus:border-[#0A0A0A] focus:bg-white text-sm text-[#0A0A0A] outline-none transition-colors font-medium`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-600 font-mono">{errors.email}</p>
                  )}
                </div>

                {/* Target Region */}
                <div>
                  <label
                    htmlFor="location"
                    className="block text-[11px] font-mono tracking-widest uppercase text-[#0A0A0A] mb-2 font-semibold"
                  >
                    Development Territory
                  </label>
                  <select
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F9F9FB] border border-[#E5E7EB] focus:border-[#0A0A0A] focus:bg-white text-sm text-[#0A0A0A] outline-none transition-colors font-medium cursor-pointer"
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Scope Selector */}
              <div className="mb-8">
                <label className="block text-[11px] font-mono tracking-widest uppercase text-[#0A0A0A] mb-3 font-semibold">
                  Project Classification / Scope
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                  {projectScopes.map((scope) => (
                    <button
                      type="button"
                      key={scope}
                      onClick={() => setFormData({ ...formData, projectScope: scope })}
                      className={`p-3 text-xs text-left border transition-all cursor-pointer ${
                        formData.projectScope === scope
                          ? 'border-[#0A0A0A] bg-[#0A0A0A] text-white'
                          : 'border-[#E5E7EB] bg-[#F9F9FB] text-[#374151] hover:border-[#9CA3AF]'
                      }`}
                    >
                      <span className="block font-medium truncate">{scope}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Tier Selector */}
              <div className="mb-8">
                <label className="block text-[11px] font-mono tracking-widest uppercase text-[#0A0A0A] mb-3 font-semibold">
                  Capital Allocation / Budget Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {budgetTiers.map((tier) => (
                    <button
                      type="button"
                      key={tier.id}
                      onClick={() => setFormData({ ...formData, budgetTier: tier.id })}
                      className={`p-4 text-left border transition-all cursor-pointer ${
                        formData.budgetTier === tier.id
                          ? 'border-[#0A0A0A] bg-[#0A0A0A] text-white shadow-xs'
                          : 'border-[#E5E7EB] bg-[#F9F9FB] text-[#374151] hover:border-[#9CA3AF]'
                      }`}
                    >
                      <span className="font-mono font-bold text-sm block tabular-nums">
                        {tier.label}
                      </span>
                      <span
                        className={`text-[10px] block mt-1 tracking-wider uppercase ${
                          formData.budgetTier === tier.id ? 'text-white/80' : 'text-[#6B7280]'
                        }`}
                      >
                        {tier.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Message / Project Brief */}
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-[11px] font-mono tracking-widest uppercase text-[#0A0A0A] mb-2 font-semibold"
                >
                  Project Brief & Technical Requirements *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline key site parameters, target square meters, delivery timeline, or institutional objectives..."
                  className={`w-full px-4 py-3 bg-[#F9F9FB] border ${
                    errors.message ? 'border-red-500' : 'border-[#E5E7EB]'
                  } focus:border-[#0A0A0A] focus:bg-white text-sm text-[#0A0A0A] outline-none transition-colors font-medium leading-relaxed`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-600 font-mono">{errors.message}</p>
                )}
              </div>

              {/* Submission Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#E5E7EB]">
                <div className="flex items-center gap-4 text-[11px] font-mono text-[#6B7280] tracking-wider uppercase">
                  <span>CONFIDENTIAL DISCLOSURE // ENCRYPTED</span>
                  <span>·</span>
                  <a
                    href="https://wa.me/4479460880?text=Hello%20Zanaari%20Projects,%20I%20have%20an%20urgent%20commission%20inquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A0A0A] font-semibold hover:underline"
                  >
                    Direct WhatsApp Desk ↗
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://wa.me/4479460880?text=Hello%20Zanaari%20Projects,%20direct%20project%20inquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:inline-flex items-center justify-center px-4 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase border border-[#E5E7EB] hover:border-[#0A0A0A] bg-white text-[#0A0A0A] transition-colors"
                  >
                    Quick WhatsApp ↗
                  </a>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-3 px-8 py-3.5 text-xs font-semibold tracking-[0.22em] uppercase bg-[#0A0A0A] text-white hover:bg-[#262626] active:scale-[0.99] transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw size={14} className="animate-spin" />
                        <span>ENCRYPTING & SUBMITTING...</span>
                      </>
                    ) : (
                      <>
                        <span>TRANSMIT INQUIRY</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          ) : (
            /* Sleek Confirmation State */
            <div className="py-8 animate-fade-in">
              <div className="flex items-center gap-3 text-emerald-600 mb-4">
                <CheckCircle2 size={28} />
                <span className="font-mono text-xs font-bold tracking-widest uppercase">
                  TRANSMISSION VERIFIED & ARCHIVED
                </span>
              </div>

              <h3 className="font-['Syne'] text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#0A0A0A] mb-2">
                COMMISSION INQUIRY REGISTERED
              </h3>
              <p className="text-sm text-[#4B5563] max-w-2xl leading-relaxed mb-8">
                Your dossier has been routed to the Senior Partner in charge of the{' '}
                <span className="font-semibold text-[#0A0A0A]">{submittedData.data.projectScope}</span>{' '}
                practice. A formal project assessment and direct advisory response will be delivered within 24 business hours.
              </p>

              {/* Summary Card */}
              <div className="bg-[#F9F9FB] border border-[#E5E7EB] p-6 mb-8 max-w-2xl">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono mb-4 pb-4 border-b border-[#E5E7EB]">
                  <div>
                    <span className="text-[#6B7280] block text-[10px] uppercase">Reference ID</span>
                    <span className="font-bold text-[#0A0A0A] text-sm">{submittedData.referenceId}</span>
                  </div>
                  <div>
                    <span className="text-[#6B7280] block text-[10px] uppercase">Registered At</span>
                    <span className="font-bold text-[#0A0A0A]">{submittedData.submittedAt}</span>
                  </div>
                  <div>
                    <span className="text-[#6B7280] block text-[10px] uppercase">Budget Tier</span>
                    <span className="font-bold text-[#0A0A0A]">{submittedData.data.budgetTier}</span>
                  </div>
                </div>

                <div className="text-xs space-y-1 text-[#4B5563]">
                  <div>
                    <span className="text-[#6B7280]">Principal:</span> {submittedData.data.fullName} (
                    {submittedData.data.organization})
                  </div>
                  <div>
                    <span className="text-[#6B7280]">Email:</span> {submittedData.data.email}
                  </div>
                  <div>
                    <span className="text-[#6B7280]">Location:</span> {submittedData.data.location}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handleDownloadSummary}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-[0.18em] uppercase bg-[#0A0A0A] text-white hover:bg-[#262626] transition-colors"
                >
                  <Download size={14} />
                  <span>DOWNLOAD DOSSIER RECEIPT</span>
                </button>

                <button
                  onClick={handleReset}
                  className="px-6 py-3 text-xs font-semibold tracking-[0.18em] uppercase border border-[#E5E7EB] text-[#0A0A0A] hover:bg-[#F9F9FB] transition-colors"
                >
                  SUBMIT ANOTHER INQUIRY
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
