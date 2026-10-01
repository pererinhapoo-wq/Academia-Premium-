import React from 'react';
import { ArrowRight, Activity, ShieldCheck, ChevronDown } from 'lucide-react';
import { ASSETS } from '../data/gymData';

interface HeroProps {
  onOpenAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAssessment }) => {
  return (
    <section id="conceito" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden transition-colors">
      {/* Subtle ambient lighting gradients */}
      <div className="ambient-glow absolute top-10 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="ambient-glow absolute -bottom-20 right-10 w-[500px] h-[500px] bg-slate-800/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle grid lines background overlay */}
      <div className="decorative-element absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Editorial Top Marker */}
        <div className="flex items-center gap-3 text-xs tracking-widest text-slate-400 uppercase mb-8">
          <span className="w-8 h-[1px] bg-blue-500" />
          <span>Centro de Performance Esportiva & Biomecânica</span>
          <span className="text-slate-600 hidden sm:inline">/</span>
          <span className="text-slate-400 hidden sm:inline">São Paulo</span>
        </div>

        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Proposition (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
              Performance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                não acontece
              </span>{' '}
              <br />
              <span className="relative inline-block text-blue-400">
                por acaso.
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-transparent" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8 font-light">
              Treinamento inteligente, acompanhamento próximo e uma estrutura criada para quem leva evolução a sério.
            </p>

            {/* CTAs & Secondary Info */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenAssessment}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded transition-all duration-200 shadow-lg shadow-blue-600/25 active:scale-98 whitespace-nowrap cursor-pointer"
              >
                <span>Agendar Avaliação Inicial</span>
                <ArrowRight className="w-4 h-4 text-blue-200" />
              </button>

              <a
                href="#metodo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/60 rounded transition-all duration-200 whitespace-nowrap"
              >
                <span>Conhecer o Método</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Quiet Operational Metrics */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-6 text-slate-300">
              <div>
                <div className="text-2xl font-bold text-white tabular-nums">18</div>
                <div className="text-xs text-slate-400 mt-0.5">Alunos máx. simultâneos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white tabular-nums">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">Treinos periodizados</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-2xl font-bold text-blue-400 tabular-nums">45 dias</div>
                <div className="text-xs text-slate-400 mt-0.5">Ciclo de reavaliação</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with Telemetry Overlays (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-slate-700/60 bg-slate-900/40 shadow-2xl shadow-black/50 group">
              {/* Main Visual Asset */}
              <div className="aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] w-full overflow-hidden relative">
                <img
                  src={ASSETS.hero}
                  alt="Instalações de alta performance da Aurea"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B17] via-[#050B17]/20 to-transparent" />
              </div>

              {/* Floating Performance Indicator Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#070E1E]/90 backdrop-blur-md rounded border border-slate-700/80 shadow-xl">
                <div className="flex items-center justify-between text-xs text-slate-400 pb-2 mb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="font-mono text-slate-300 text-[11px]">SISTEMA BIOMÉTRICO ATIVO</span>
                  </div>
                  <span className="text-slate-400 font-mono text-[11px] tabular-nums">FLUXO: CALIBRADO</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <div className="text-[11px] text-slate-400">Potência Neuromuscular</div>
                    <div className="text-sm font-semibold text-white tabular-nums flex items-baseline gap-1">
                      <span>98.4%</span>
                      <span className="text-[10px] text-emerald-400">Eficiência</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Assimetria Bilateral</div>
                    <div className="text-sm font-semibold text-white tabular-nums flex items-baseline gap-1">
                      <span>&lt; 2.1%</span>
                      <span className="text-[10px] text-blue-400">Equilibrada</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Subtle Corner Accent */}
            <div className="decorative-element absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-blue-500/40 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
