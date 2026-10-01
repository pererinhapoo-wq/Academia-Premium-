import React from 'react';
import { TESTIMONIALS } from '../data/gymData';
import { Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#070D1C] relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-blue-400 font-semibold mb-3">
            <span>Resultados Comprovados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            A Voz de Quem Treina Conosco
          </h2>
          <p className="text-slate-300 text-base font-light">
            Depoimentos reais de alunos que integraram a AUREA às suas rotinas e alcançaram resultados mensuráveis de saúde, força e performance.
          </p>
        </div>

        {/* 3 Sophisticated Testimonial Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#050B17] rounded-lg border border-slate-800/90 p-7 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-6 font-mono">
                  <span>{item.timeframe}</span>
                  <span className="text-blue-400 font-medium">VERIFICADO</span>
                </div>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800">
                <div className="text-xs text-emerald-400 font-mono mb-3 bg-emerald-950/30 px-3 py-1.5 rounded border border-emerald-800/40">
                  {item.metricsResult}
                </div>

                <div>
                  <div className="text-sm font-bold text-white font-display">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {item.role}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 font-mono">
                    Objetivo: {item.goal}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
