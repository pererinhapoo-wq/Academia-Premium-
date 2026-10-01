import React, { useState } from 'react';
import { TRAINING_AREAS, ASSETS } from '../data/gymData';
import { Dumbbell, Zap, RefreshCw, HeartPulse, Sparkles, UserCheck, ArrowRight, ShieldCheck } from 'lucide-react';

export const TrainingAreasSection: React.FC = () => {
  const [activeAreaId, setActiveAreaId] = useState<string>(TRAINING_AREAS[0].id);

  const activeArea = TRAINING_AREAS.find((a) => a.id === activeAreaId) || TRAINING_AREAS[0];

  const getAreaIcon = (id: string) => {
    switch (id) {
      case 'performance':
        return <Zap className="w-4 h-4 text-blue-400" />;
      case 'forca':
        return <Dumbbell className="w-4 h-4 text-blue-400" />;
      case 'mobilidade':
        return <RefreshCw className="w-4 h-4 text-blue-400" />;
      case 'condicionamento':
        return <HeartPulse className="w-4 h-4 text-blue-400" />;
      case 'funcional':
        return <Sparkles className="w-4 h-4 text-blue-400" />;
      case 'personalizado':
        return <UserCheck className="w-4 h-4 text-blue-400" />;
      default:
        return <Zap className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="areas" className="py-24 bg-[#070D1C] relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-blue-400 font-semibold mb-3">
            <span>Dimensões de Treinamento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Áreas de Treinamento
          </h2>
          <p className="text-slate-300 text-base font-light">
            Estruturadas para responder a diferentes estímulos metabólicos e mecânicos. Explore cada disciplina e entenda o foco técnico aplicado.
          </p>
        </div>

        {/* Master-Detail Interactive Exploration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Navigation: List with individual micro-states (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {TRAINING_AREAS.map((area) => {
              const isActive = area.id === activeAreaId;
              return (
                <button
                  key={area.id}
                  onClick={() => setActiveAreaId(area.id)}
                  className={`w-full text-left p-4 rounded transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                    isActive
                      ? 'bg-[#0E1A3A] border-blue-500 shadow-md text-white'
                      : 'bg-[#091125]/70 border-slate-800/80 hover:border-slate-700 hover:bg-[#091125] text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2 rounded ${isActive ? 'bg-blue-600/30 text-blue-400' : 'bg-slate-800/60 text-slate-400'}`}>
                      {getAreaIcon(area.id)}
                    </div>
                    <div>
                      <div className="text-sm font-bold tracking-wide font-display">{area.title}</div>
                      <div className="text-xs text-slate-400 line-clamp-1">{area.subtitle}</div>
                    </div>
                  </div>
                  <div className={`text-xs font-mono transition-transform ${isActive ? 'translate-x-1 text-blue-400' : 'text-slate-600'}`}>
                    →
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Showcase: Marquee Presentation with Technical Specs (7 cols) */}
          <div className="lg:col-span-7 bg-[#050B17] rounded-lg border border-slate-800 p-6 sm:p-8 relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                  ESPECIFICAÇÃO TÉCNICA
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {activeArea.title}
                </h3>
                <div className="text-sm text-slate-400 mt-0.5">
                  {activeArea.subtitle}
                </div>
              </div>

              <div className="p-3 bg-[#0A1329] rounded border border-slate-800 self-start sm:self-auto text-right">
                <span className="text-[10px] text-slate-400 uppercase font-mono block">MÉTRICA OBSERVADA</span>
                <span className="text-xs sm:text-sm font-semibold text-emerald-400 font-mono">
                  {activeArea.metrics}
                </span>
              </div>
            </div>

            <div className="py-6">
              <p className="text-base text-slate-300 leading-relaxed font-light mb-6">
                {activeArea.description}
              </p>

              <div className="mb-6">
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Equipamentos & Tecnologia Específica
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeArea.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-[#091227] text-slate-200 text-xs rounded border border-slate-800"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#091227]/60 rounded border border-slate-800/80">
                <div className="text-xs text-slate-400 uppercase font-mono mb-1">FOCO BIOMECÂNICO</div>
                <div className="text-sm font-medium text-slate-100">{activeArea.focus}</div>
              </div>
            </div>

            {/* Visual Micro Snapshot */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono">SUPERVISÃO TÉCNICA EM SALÃO</span>
              <span className="text-blue-400 font-semibold">Integrada ao Plano Individual</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
