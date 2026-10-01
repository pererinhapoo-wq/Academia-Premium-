import React, { useState } from 'react';
import { TRAINERS, ASSETS } from '../data/gymData';
import { Award, BookOpen, ChevronRight, GraduationCap } from 'lucide-react';

export const TrainersSection: React.FC = () => {
  const [selectedTrainerId, setSelectedTrainerId] = useState(TRAINERS[0].id);

  const activeTrainer = TRAINERS.find((t) => t.id === selectedTrainerId) || TRAINERS[0];

  return (
    <section id="treinadores" className="py-24 bg-[#050B17] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-blue-400 font-semibold mb-3">
              <span>Corpo Técnico & Fisiologia</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Os Especialistas
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-md font-light">
            Nossa equipe é formada por mestres e especialistas em biomecânica, sem intermediários desqualificados.
          </p>
        </div>

        {/* Editorial Layout: Left Photo Spotlight + Right Curated Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Portrait Showcase with Fine Hairline Silver Frame (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-lg overflow-hidden border border-slate-700/60 bg-slate-900 h-full min-h-[460px] relative group">
              <img
                src={activeTrainer.image}
                alt={activeTrainer.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B17] via-[#050B17]/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-1">
                  {activeTrainer.specialtyTag}
                </span>
                <div className="text-2xl font-bold text-white font-display">
                  {activeTrainer.name}
                </div>
                <div className="text-sm text-slate-300 font-light">
                  {activeTrainer.role}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Details & Selector Tabs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#081023] rounded-lg border border-slate-800 p-6 sm:p-10">
            {/* Trainer Selector Tabs */}
            <div className="grid grid-cols-3 gap-2 pb-6 border-b border-slate-800">
              {TRAINERS.map((t) => {
                const isSelected = t.id === selectedTrainerId;
                return (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTrainerId(t.id)}
                    className={`p-3 text-left rounded transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-blue-600/20 border-blue-500 text-white'
                        : 'bg-[#050B17] border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold truncate font-display">{t.name}</div>
                    <div className="text-[10px] text-slate-400 truncate mt-0.5">{t.role.split(' ')[0]}</div>
                  </button>
                );
              })}
            </div>

            {/* In-Depth Profile Content */}
            <div className="py-6">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
                <GraduationCap className="w-4 h-4" />
                <span>FORMAÇÃO & RIGOR CIENTÍFICO</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {activeTrainer.name}
              </h3>
              <div className="text-sm text-slate-400 mb-6 font-mono">
                {activeTrainer.role} — {activeTrainer.specialtyTag}
              </div>

              <p className="text-base text-slate-300 font-light leading-relaxed mb-8">
                {activeTrainer.bio}
              </p>

              <div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Certificações e Áreas de Atuação
                </div>
                <div className="space-y-2.5">
                  {activeTrainer.credentials.map((cred, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Methodology Note */}
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono">SUPERVISÃO SEMANAL COORDENADA</span>
              <span className="text-slate-300">Presença diária nas sessões</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
