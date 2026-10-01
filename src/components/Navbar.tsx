import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Eye, EyeOff } from 'lucide-react';

interface NavbarProps {
  onOpenAssessment: () => void;
  isFocusMode: boolean;
  onToggleFocusMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAssessment,
  isFocusMode,
  onToggleFocusMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Conceito', href: '#conceito' },
    { label: 'Método', href: '#metodo' },
    { label: 'Áreas', href: '#areas' },
    { label: 'Estrutura', href: '#estrutura' },
    { label: 'Jornada', href: '#jornada' },
    { label: 'Equipe', href: '#treinadores' },
    { label: 'Planos', href: '#planos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050B17]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Zone 1: Single text element Brand wordmark */}
        <a
          href="#"
          className="text-lg md:text-xl font-bold tracking-tight text-white flex items-center gap-2 group focus:outline-none"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
          <span className="font-display tracking-wider">AUREA <span className="text-slate-400 font-light">PERFORMANCE</span></span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-wider text-slate-300 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-blue-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-blue-400 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions (Focus Mode + CTA + Mobile Toggle) */}
        <div className="flex items-center gap-3">
          {/* Focus Mode Button */}
          <button
            onClick={onToggleFocusMode}
            title={isFocusMode ? 'Desativar Modo Foco' : 'Ativar Modo Foco (reduz brilho e esconde elementos decorativos)'}
            className={`inline-flex items-center gap-2 px-3 py-2 text-xs rounded transition-all duration-200 cursor-pointer border whitespace-nowrap ${
              isFocusMode
                ? 'bg-blue-950/70 border-blue-500 text-blue-300 shadow-sm'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            {isFocusMode ? (
              <>
                <EyeOff className="w-3.5 h-3.5 text-blue-400" />
                <span className="hidden sm:inline">Modo Foco: <strong className="text-white font-medium">Ativo</strong></span>
                <span className="sm:hidden font-medium text-white">Foco ON</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden sm:inline">Modo Foco</span>
                <span className="sm:hidden">Foco</span>
              </>
            )}
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenAssessment}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded transition-all duration-200 shadow-md shadow-blue-600/20 active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <span>Agendar Avaliação</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-blue-200" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070E1E] border-b border-slate-800 px-6 py-6 transition-all duration-300 animate-fadeIn">
          {/* Mobile Focus Mode Toggle in Drawer */}
          <div className="pb-4 mb-4 border-b border-slate-800 flex items-center justify-between">
            <div className="text-xs text-slate-300 flex items-center gap-2">
              {isFocusMode ? <EyeOff className="w-4 h-4 text-blue-400" /> : <Eye className="w-4 h-4 text-slate-400" />}
              <span>Modo Foco (Leitura Limpa)</span>
            </div>
            <button
              onClick={() => {
                onToggleFocusMode();
              }}
              className={`px-3 py-1 text-xs rounded border cursor-pointer font-medium ${
                isFocusMode
                  ? 'bg-blue-600 text-white border-blue-500'
                  : 'bg-slate-900 text-slate-400 border-slate-700'
              }`}
            >
              {isFocusMode ? 'Ativado' : 'Desativado'}
            </button>
          </div>

          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-800/60 hover:text-blue-400 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-slate-500">→</span>
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAssessment();
                }}
                className="w-full py-3 text-center text-xs uppercase tracking-wider font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded transition-colors"
              >
                Agendar Avaliação
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

