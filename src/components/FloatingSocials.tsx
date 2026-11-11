import { useState } from 'react';
import { WhatsAppIcon, InstagramIcon, SnapchatIcon } from './SocialIcons';
import { MessageCircle, X } from 'lucide-react';

export function FloatingSocials() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2.5">
      {/* Expanded Quick Social Buttons */}
      {isOpen && (
        <div className="flex flex-col gap-2 p-2 bg-white/95 backdrop-blur-md border border-[#0A0A0A] shadow-xl animate-fade-in mb-1">
          <a
            href="https://wa.me/4479460880?text=Hello%20Zanaari%20Projects,%20inquiry%20from%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3.5 py-2 hover:bg-[#F9F9FB] text-xs font-mono uppercase text-[#0A0A0A] transition-colors"
          >
            <WhatsAppIcon size={16} className="text-[#0A0A0A]" />
            <span>WhatsApp Executive Line</span>
          </a>

          <a
            href="https://instagram.com/zanaari.projects"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3.5 py-2 hover:bg-[#F9F9FB] text-xs font-mono uppercase text-[#0A0A0A] transition-colors border-t border-[#E5E7EB]"
          >
            <InstagramIcon size={16} className="text-[#0A0A0A]" />
            <span>Instagram Feed</span>
          </a>

          <a
            href="https://snapchat.com/add/zanaari"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3.5 py-2 hover:bg-[#F9F9FB] text-xs font-mono uppercase text-[#0A0A0A] transition-colors border-t border-[#E5E7EB]"
          >
            <SnapchatIcon size={16} className="text-[#0A0A0A]" />
            <span>Snapchat Live Stories</span>
          </a>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 bg-[#0A0A0A] text-white hover:bg-[#262626] active:scale-95 shadow-lg border border-white/20 transition-all cursor-pointer"
        aria-label="Direct Socials & Messaging"
      >
        {isOpen ? (
          <>
            <X size={16} />
            <span className="text-[10px] font-mono tracking-widest uppercase">CLOSE</span>
          </>
        ) : (
          <>
            <MessageCircle size={16} />
            <span className="text-[10px] font-mono tracking-widest uppercase font-semibold">
              DIRECT LINES / SOCIALS
            </span>
          </>
        )}
      </button>
    </div>
  );
}
