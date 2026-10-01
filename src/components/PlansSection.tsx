import React from 'react';
import { PLANS } from '../data/gymData';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

interface PlansSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="planos" className="py-24 bg-[#050B17] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-blue-400 font-semibold mb-3">
              <span>Programas & Associação</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Planos Sob Medida
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-md font-light">
            Valores demonstrativos. Todos os novos membros realizam a avaliação inicial prévia antes de iniciar o plano.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => {
            const isFeatured = plan.isFeatured;
            return (
              <div
                key={plan.id}
                className={`rounded-lg p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? 'bg-[#0A142D] border-2 border-blue-500/80 shadow-2xl shadow-blue-600/10 lg:-translate-y-2'
                    : 'bg-[#080F21] border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Featured Indicator Ribbon */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-8 bg-blue-600 text-white text-[11px] font-mono uppercase tracking-widest px-3 py-1 rounded shadow-md font-semibold">
                    MAIS RECOMENDADO
                  </div>
                )}

                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white tracking-wider font-display">
                      {plan.name}
                    </h3>
                    <div className="text-xs font-mono text-slate-400">
                      VAGAS LIMITADAS
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 min-h-[32px] mb-6 leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-2 pb-6 border-b border-slate-800">
                    <span className="text-3xl sm:text-4xl font-bold text-white tabular-nums font-mono">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{plan.period}</span>
                  </div>

                  <div className="text-[11px] text-blue-400 font-mono mb-6">
                    {plan.assessmentFrequency}
                  </div>

                  {/* Ideal For */}
                  <div className="mb-6 p-3 bg-slate-900/60 rounded border border-slate-800 text-xs text-slate-300">
                    <span className="font-semibold text-white block mb-0.5">Perfil ideal:</span>
                    {plan.idealFor}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Inclusões do Programa
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div>
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-3.5 px-4 rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isFeatured
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                    }`}
                  >
                    <span>Selecionar Plano {plan.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-slate-500 text-center mt-2.5">
                    Requer agendamento de avaliação inicial
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
