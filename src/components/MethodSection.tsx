import React, { useState } from 'react';
import { METHOD_STEPS } from '../data/gymData';
import { CheckCircle2, ChevronRight, Compass, ShieldCheck } from 'lucide-react';

export const MethodSection: React.FC = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);
  const activeStep = METHOD_STEPS[selectedStepIndex];

  return (
    <section id="metodo" className="py-24 bg-[#050B17] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-blue-400 font-semibold mb-3">
              <span>Metodologia Exclusiva</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              O Método AUREA
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-md font-light">
            Quatro etapas sequenciais projetadas para eliminar o improviso e transformar cada hora de treino em progresso mensurável.
          </p>
        </div>

        {/* Desktop Horizontal Step Selector Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {METHOD_STEPS.map((step, idx) => {
            const isSelected = idx === selectedStepIndex;
            return (
              <button
                key={step.number}
                onClick={() => setSelectedStepIndex(idx)}
                className={`text-left p-4 sm:p-5 rounded transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? 'bg-[#0E1A38] border-blue-500 shadow-lg shadow-blue-500/10'
                    : 'bg-[#091024]/60 border-slate-800/80 hover:border-slate-700 hover:bg-[#091024]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-blue-400' : 'text-slate-500'}`}>
                    {step.number}
                  </span>
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-blue-400' : 'bg-slate-700'}`} />
                </div>
                <div className="text-lg font-bold text-white mb-1 font-display">
                  {step.title}
                </div>
                <div className="text-xs text-slate-400 line-clamp-1">
                  {step.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Active Step Panel */}
        <div className="bg-[#081023] rounded-lg border border-slate-800 p-6 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Stage Definition (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-xs font-mono text-blue-400 uppercase tracking-widest mb-3">
                <span>ETAPA {activeStep.number}</span>
                <span className="text-slate-600">/</span>
                <span>{activeStep.duration}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {activeStep.title} — {activeStep.tagline}
              </h3>

              <p className="text-base text-slate-300 font-light leading-relaxed mb-8">
                {activeStep.description}
              </p>

              <div className="space-y-3">
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Entregáveis e Protocolos Desta Fase
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeStep.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded bg-[#0A142D] border border-slate-800/80 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Process Visual Anchor (5 cols) */}
            <div className="lg:col-span-5 bg-[#050B17] rounded border border-slate-800 p-6 flex flex-col justify-between h-full">
              <div className="pb-4 mb-4 border-b border-slate-800">
                <span className="text-[11px] font-mono text-slate-500 uppercase">CICLO CONTÍNUO DE EXCELÊNCIA</span>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  Precisão Biomecânica Aplicada
                </div>
              </div>

              {/* Step indicator sequence */}
              <div className="space-y-4 py-2">
                {METHOD_STEPS.map((step, idx) => (
                  <div
                    key={step.number}
                    className={`flex items-center gap-3 transition-opacity ${
                      idx === selectedStepIndex ? 'opacity-100' : 'opacity-35'
                    }`}
                  >
                    <span className="text-xs font-mono text-blue-400 font-bold w-6">{step.number}</span>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-white">{step.title}</div>
                      <div className="text-[11px] text-slate-400">{step.duration}</div>
                    </div>
                    {idx === selectedStepIndex && (
                      <span className="text-[10px] text-blue-400 font-mono">EM FOCO</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>Passo seguinte</span>
                <button
                  onClick={() => setSelectedStepIndex((prev) => (prev + 1) % METHOD_STEPS.length)}
                  className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-semibold cursor-pointer"
                >
                  <span>Avançar</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
