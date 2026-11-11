import { useEffect } from 'react';
import { X } from 'lucide-react';
import { InquirySection } from './InquirySection';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedScope?: string;
}

export function InquiryModal({ isOpen, onClose, preselectedScope = '' }: InquiryModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-4xl bg-white border border-[#0A0A0A] shadow-2xl my-auto animate-fade-in max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB] bg-[#F9F9FB]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#6B7280]">
            <span className="font-bold text-[#0A0A0A]">ZANAARI PROJECTS</span>
            <span>·</span>
            <span>COMMISSION ADVISORY</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#6B7280] hover:text-[#0A0A0A] hover:bg-[#E5E7EB] transition-colors"
            aria-label="Close Inquiry Modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-2 sm:p-6">
          <InquirySection initialProjectScope={preselectedScope} />
        </div>
      </div>
    </div>
  );
}
