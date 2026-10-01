import React, { useState, useEffect } from 'react';
import { ArrowUp, Calendar } from 'lucide-react';

interface FloatingActionsProps {
  onOpenAssessment: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenAssessment }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Floating Schedule Button */}
      <button
        onClick={onOpenAssessment}
        className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-xl shadow-blue-600/30 transition-all active:scale-95 cursor-pointer border border-blue-400/30"
        aria-label="Agendar Avaliação"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Agendar Avaliação</span>
        <span className="sm:hidden">Avaliação</span>
      </button>

      {/* Floating Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="p-2.5 bg-[#070E20]/90 backdrop-blur-md hover:bg-slate-800 text-slate-300 hover:text-white rounded-full shadow-lg border border-slate-700/80 transition-colors cursor-pointer"
        aria-label="Voltar ao início da página"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
};
