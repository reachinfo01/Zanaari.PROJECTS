import React, { useState, type ReactElement } from 'react';
import {
  InstagramIcon,
  WhatsAppIcon,
  SnapchatIcon,
  LinkedInIcon,
  XTwitterIcon,
} from './SocialIcons';
import { ArrowUpRight, Copy, Check, MessageSquareCode, QrCode } from 'lucide-react';

interface SocialChannel {
  id: string;
  name: string;
  handle: string;
  description: string;
  url: string;
  category: string;
  icon: (props: { size?: number; className?: string }) => ReactElement;
  actionText: string;
}

const SOCIAL_CHANNELS: SocialChannel[] = [
  {
    id: 'whatsapp',
    name: 'WhatsApp Business',
    handle: '+44 (0) 7946 0880',
    description: 'Direct institutional messaging with our Senior Partners & Development Directors for expedited advisory.',
    url: 'https://wa.me/4479460880?text=Hello%20Zanaari%20Projects%20Team,%20I%20would%20like%20to%20inquire%20about%20a%20project.',
    category: 'Direct Partner Line',
    icon: WhatsAppIcon,
    actionText: 'Message on WhatsApp',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@zanaari.projects',
    description: 'Curated architectural photography, structural drone footage, and material monographs from active sites.',
    url: 'https://instagram.com/zanaari.projects',
    category: 'Visual Showcase',
    icon: InstagramIcon,
    actionText: 'View Instagram Feed',
  },
  {
    id: 'snapchat',
    name: 'Snapchat',
    handle: '@zanaari',
    description: 'Unfiltered daily dispatches from our engineering crews, structural pours, and on-site ceremonies.',
    url: 'https://snapchat.com/add/zanaari',
    category: 'Live Site Feeds',
    icon: SnapchatIcon,
    actionText: 'Subscribe on Snap',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'Zanaari Projects Limited',
    description: 'Institutional announcements, joint-venture announcements, EPC tender updates, and ESG disclosures.',
    url: 'https://linkedin.com/company/zanaari-projects',
    category: 'Corporate Archive',
    icon: LinkedInIcon,
    actionText: 'Connect on LinkedIn',
  },
  {
    id: 'xtwitter',
    name: 'X (Twitter)',
    handle: '@ZanaariProjects',
    description: 'Macro real estate underwriting, infrastructure capital flows, and urban planning commentary.',
    url: 'https://x.com/ZanaariProjects',
    category: 'Market Dispatches',
    icon: XTwitterIcon,
    actionText: 'Follow on X',
  },
];

export function SocialsSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeQr, setActiveQr] = useState<SocialChannel | null>(null);

  const handleCopy = (channel: SocialChannel) => {
    navigator.clipboard.writeText(channel.handle);
    setCopiedId(channel.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section id="socials" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E5E7EB] mb-12">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.25em] text-[#6B7280] uppercase mb-3">
              <span className="text-[#0A0A0A] font-bold">—</span>
              <span>05 / DIGITAL CHANNELS & SOCIALS</span>
            </div>
            <h2 className="font-['Syne'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#0A0A0A]">
              CONNECT ACROSS PLATFORMS
            </h2>
          </div>

          <p className="text-xs font-mono text-[#6B7280] uppercase tracking-wider max-w-md">
            Follow our structural progress, stream behind-the-scenes engineering footage, or open an encrypted executive chat channel.
          </p>
        </div>

        {/* Social Buttons Grid (5 Distinct High-Contrast Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOCIAL_CHANNELS.map((channel) => {
            const Icon = channel.icon;
            const isCopied = copiedId === channel.id;

            return (
              <div
                key={channel.id}
                className="group relative flex flex-col justify-between bg-[#F9F9FB] border border-[#E5E7EB] hover:border-[#0A0A0A] p-7 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
              >
                {/* Hairline corner accents */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#0A0A0A]/30 pointer-events-none" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#0A0A0A]/30 pointer-events-none" />

                <div>
                  {/* Top Bar with Icon & Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-none bg-white border border-[#E5E7EB] group-hover:border-[#0A0A0A] flex items-center justify-center text-[#0A0A0A] transition-colors">
                      <Icon size={20} />
                    </div>

                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#6B7280]">
                      {channel.category}
                    </span>
                  </div>

                  {/* Channel Name & Handle */}
                  <h3 className="font-['Syne'] text-xl font-bold uppercase tracking-tight text-[#0A0A0A] mb-1">
                    {channel.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-mono text-xs font-semibold text-[#0A0A0A]">
                      {channel.handle}
                    </span>
                    <button
                      onClick={() => handleCopy(channel)}
                      className="text-[#6B7280] hover:text-[#0A0A0A] p-1 transition-colors"
                      title="Copy handle"
                      aria-label={`Copy ${channel.name} handle`}
                    >
                      {isCopied ? (
                        <Check size={14} className="text-emerald-600" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                    {isCopied && (
                      <span className="text-[10px] font-mono text-emerald-600">Copied!</span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#4B5563] leading-relaxed mb-6">
                    {channel.description}
                  </p>
                </div>

                {/* Action Buttons Row */}
                <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between gap-3">
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-[11px] font-semibold tracking-[0.16em] uppercase bg-[#0A0A0A] text-white hover:bg-[#262626] transition-colors text-center"
                  >
                    <span>{channel.actionText}</span>
                    <ArrowUpRight size={13} />
                  </a>

                  <button
                    onClick={() => setActiveQr(channel)}
                    className="p-2.5 bg-white border border-[#E5E7EB] hover:border-[#0A0A0A] text-[#0A0A0A] transition-colors"
                    title="View QR Code"
                    aria-label={`View QR code for ${channel.name}`}
                  >
                    <QrCode size={16} />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Quick Direct Message Callout Card */}
          <div className="flex flex-col justify-between bg-[#0A0A0A] text-white p-7 border border-[#0A0A0A]">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  <MessageSquareCode size={20} />
                </div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-white/50">
                  CONFIDENTIAL DESK
                </span>
              </div>

              <h3 className="font-['Syne'] text-xl font-bold uppercase tracking-tight text-white mb-2">
                Need Instant Consultation?
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mb-6">
                Our executive WhatsApp line connects institutional investors and developers directly with project leads in London, Lagos, and Dubai.
              </p>
            </div>

            <a
              href="https://wa.me/4479460880?text=Hello%20Zanaari%20Projects,%20requesting%20executive%20briefing."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-[11px] font-semibold tracking-[0.2em] uppercase bg-white text-[#0A0A0A] hover:bg-white/90 transition-colors text-center"
            >
              <WhatsAppIcon size={16} />
              <span>LAUNCH WHATSAPP CHAT</span>
            </a>
          </div>
        </div>

        {/* QR Code Modal */}
        {activeQr && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div className="bg-white border border-[#0A0A0A] p-8 max-w-sm w-full text-center shadow-2xl relative">
              <div className="text-[10px] font-mono tracking-widest uppercase text-[#6B7280] mb-1">
                INSTANT SCAN // MOBILE CONNECTION
              </div>
              <h4 className="font-['Syne'] text-xl font-bold uppercase text-[#0A0A0A] mb-4">
                {activeQr.name}
              </h4>

              {/* Minimalist QR Code Placeholder Graphic */}
              <div className="w-48 h-48 mx-auto p-4 bg-[#F9F9FB] border border-[#E5E7EB] flex flex-col items-center justify-center mb-4">
                <QrCode size={120} className="text-[#0A0A0A]" />
                <span className="text-[10px] font-mono text-[#6B7280] mt-2">
                  {activeQr.handle}
                </span>
              </div>

              <p className="text-xs text-[#4B5563] mb-6">
                Scan with your phone camera to open {activeQr.name} directly.
              </p>

              <button
                onClick={() => setActiveQr(null)}
                className="w-full py-2.5 text-xs font-semibold tracking-[0.2em] uppercase bg-[#0A0A0A] text-white hover:bg-[#262626] transition-colors"
              >
                CLOSE
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
