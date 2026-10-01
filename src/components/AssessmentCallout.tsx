import React from 'react';
import { ArrowRight, ShieldCheck, Clock, FileText } from 'lucide-react';

interface AssessmentCalloutProps {
  onOpenAssessment: () => void;
}

export const AssessmentCallout: React.FC<AssessmentCalloutProps> = ({ onOpenAssessment }) => {
  return (
    <section className="py-20 bg-[#070D1C] relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="bg-gradient-to-r from-[#0A142D] via-[#0D1B3D] to-[#0A142D] rounded-xl border border-blue-500/40 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div className="ambient-glow absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: Heading and Manifesto (7 cols) */}
            <div className="lg:col-span-7">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-3 block">
                DIAGNÓSTICO INICIAL OBRIGATÓRIO
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
                Comece entendendo <br />
                <span className="text-blue-400">onde você está.</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-6">
                Antes de prescrever o primeiro exercício, nosso corpo clínico e biomecânico realiza uma avaliação detalhada de 90 minutos para mapear seu histórico, limitações articulares e limiares metabólicos.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Sessão de 90 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Laudo com dados reais</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Sem compromisso de adesão</span>
                </div>
              </div>
            </div>

            {/* Right Column: Prominent Call-to-Action (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center">
              <div className="bg-[#050B17]/80 backdrop-blur-md p-6 rounded-lg border border-slate-700/80 w-full max-w-md">
                <div className="text-xs text-slate-400 font-mono mb-2">AGENDAMENTO INDIVIDUAL</div>
                <div className="text-base font-bold text-white mb-2">
                  Próximos horários disponíveis esta semana
                </div>
                <p className="text-xs text-slate-300 mb-6 font-light">
                  Preencha o formulário rápido para que nosso concierge entre em contato via WhatsApp e confirme o melhor dia.
                </p>

                <button
                  onClick={onOpenAssessment}
                  className="w-full py-3.5 px-6 rounded text-xs uppercase tracking-wider font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 cursor-pointer active:scale-98"
                >
                  <span>Agendar Avaliação</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
