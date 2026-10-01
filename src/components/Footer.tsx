import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenAssessment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAssessment }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030712] border-t border-slate-800/90 text-slate-400 pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-lg font-bold text-white tracking-wider font-display">
                AUREA <span className="text-slate-400 font-light">PERFORMANCE</span>
              </span>
            </div>

            <p className="text-sm text-slate-300 font-light max-w-sm leading-relaxed">
              "Performance não acontece por acaso."
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Centro de treinamento esportivo de alto padrão focado em biomecânica, tecnologia de dados e acompanhamento individualizado.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenAssessment}
                className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white rounded border border-blue-500/30 transition-colors text-xs font-semibold cursor-pointer"
              >
                Agendar Avaliação Inicial
              </button>
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-3">
            <div className="text-xs uppercase font-mono tracking-wider text-white font-semibold">
              Navegação
            </div>
            <ul className="space-y-2">
              <li><a href="#conceito" className="hover:text-blue-400 transition-colors">Conceito</a></li>
              <li><a href="#metodo" className="hover:text-blue-400 transition-colors">O Método AUREA</a></li>
              <li><a href="#areas" className="hover:text-blue-400 transition-colors">Áreas de Treinamento</a></li>
              <li><a href="#estrutura" className="hover:text-blue-400 transition-colors">Estrutura & Espaços</a></li>
              <li><a href="#jornada" className="hover:text-blue-400 transition-colors">Jornada do Aluno</a></li>
              <li><a href="#treinadores" className="hover:text-blue-400 transition-colors">Corpo Técnico</a></li>
              <li><a href="#planos" className="hover:text-blue-400 transition-colors">Planos & Valores</a></li>
            </ul>
          </div>

          {/* Horários */}
          <div className="space-y-3">
            <div className="text-xs uppercase font-mono tracking-wider text-white font-semibold">
              Horários
            </div>
            <div className="space-y-2 text-slate-400">
              <div>
                <span className="text-slate-200 block font-medium">Segunda a Sexta</span>
                <span>06h00 às 22h00</span>
              </div>
              <div>
                <span className="text-slate-200 block font-medium">Sábados</span>
                <span>08h00 às 18h00</span>
              </div>
              <div>
                <span className="text-slate-200 block font-medium">Domingos & Feriados</span>
                <span>09h00 às 14h00</span>
              </div>
              <div className="pt-2 text-[11px] text-blue-400 font-mono">
                Acesso com biometria facial
              </div>
            </div>
          </div>

          {/* Contato & Redes */}
          <div className="space-y-3">
            <div className="text-xs uppercase font-mono tracking-wider text-white font-semibold">
              Contato & Redes
            </div>
            <div className="space-y-1.5 text-slate-400">
              <div className="text-white font-medium">São Paulo, SP</div>
              <div>Al. Gabriel Monteiro da Silva, 1420</div>
              <div className="font-mono text-slate-300 pt-1">+55 (11) 3089-4200</div>
              <div className="font-mono text-slate-300">contato@aurea.com.br</div>
            </div>

            <div className="pt-3">
              <div className="text-[11px] uppercase tracking-wider text-slate-500 mb-2">Presença Digital</div>
              <div className="flex items-center gap-3">
                <span className="hover:text-blue-400 transition-colors cursor-pointer">Instagram</span>
                <span className="text-slate-600">·</span>
                <span className="hover:text-blue-400 transition-colors cursor-pointer">LinkedIn</span>
                <span className="text-slate-600">·</span>
                <span className="hover:text-blue-400 transition-colors cursor-pointer">Strava</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <div>
            © {new Date().getFullYear()} AUREA PERFORMANCE. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span>Privacidade & Dados</span>
            <span>Termos de Associação</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
