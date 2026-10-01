import React, { useState } from 'react';
import { STUDENT_JOURNEY } from '../data/gymData';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

export const StudentJourneySection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="jornada" className="py-24 bg-[#070D1C] relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-blue-400 font-semibold mb-3">
            <span>A Trajetória do Aluno</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            A Experiência do Aluno
          </h2>
          <p className="text-slate-300 text-base font-light">
            Da primeira conversa ao alcance da sua máxima potência: conheça as 6 fases que compõem sua jornada na AUREA PERFORMANCE.
          </p>
        </div>

        {/* Interactive Progress Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-10">
          {STUDENT_JOURNEY.map((item, idx) => {
            const isCurrent = idx === activeStepIndex;
            const isCompleted = idx < activeStepIndex;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3.5 text-left rounded transition-all duration-200 border cursor-pointer ${
                  isCurrent
                    ? 'bg-blue-600/20 border-blue-500 text-white shadow-sm'
                    : isCompleted
                    ? 'bg-[#0A1329] border-slate-700/80 text-slate-300'
                    : 'bg-[#050B17]/60 border-slate-800 text-slate-500 hover:text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isCurrent ? 'text-blue-400' : 'text-slate-500'}`}>
                    {item.step}
                  </span>
                  {isCompleted && <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
                </div>
                <div className="text-xs font-semibold truncate">
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Highlight Card */}
        <div className="bg-[#050B17] rounded-lg border border-slate-800 p-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1">
                FASE {STUDENT_JOURNEY[activeStepIndex].step} DE 06
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {STUDENT_JOURNEY[activeStepIndex].title}
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-400 bg-slate-900 px-4 py-2 rounded border border-slate-800">
              {STUDENT_JOURNEY[activeStepIndex].detail}
            </div>
          </div>

          <div className="py-8">
            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-3xl">
              {STUDENT_JOURNEY[activeStepIndex].description}
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs text-slate-400">
            <span className="font-mono">SUPERVISÃO TÉCNICA DIRETA</span>
            <div className="flex items-center gap-3">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="px-3 py-1.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                Anterior
              </button>
              <button
                disabled={activeStepIndex === STUDENT_JOURNEY.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(STUDENT_JOURNEY.length - 1, prev + 1))}
                className="px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1"
              >
                <span>Próxima</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
