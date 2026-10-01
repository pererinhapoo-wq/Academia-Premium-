import React, { useState } from 'react';
import { FACILITY_SPACES, ASSETS } from '../data/gymData';
import { Check, Compass, Maximize2, Shield, Sparkles } from 'lucide-react';

interface FacilityTourProps {
  onOpenGalleryItem?: (item: any) => void;
}

export const FacilityTourSection: React.FC<FacilityTourProps> = () => {
  const [selectedSpaceId, setSelectedSpaceId] = useState(FACILITY_SPACES[0].id);

  const selectedSpace = FACILITY_SPACES.find((s) => s.id === selectedSpaceId) || FACILITY_SPACES[0];

  // Helper to pick contextual photo or fallback
  const getSpaceImage = (id: string) => {
    switch (id) {
      case 'musculacao':
        return ASSETS.hero;
      case 'funcional':
        return ASSETS.gymDetail;
      case 'recuperacao':
        return ASSETS.recovery;
      case 'avaliacao':
        return ASSETS.hero;
      case 'vestiarios':
        return ASSETS.recovery;
      default:
        return ASSETS.gymDetail;
    }
  };

  return (
    <section id="estrutura" className="py-24 bg-[#050B17] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-blue-400 font-semibold mb-3">
              <span>Arquitetura & Engenharia</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              A Estrutura AUREA
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-md font-light">
            Mais de 1.400 m² pensados para proporcionar isolamento acústico, luz circadiana e circulação fluida sem aglomerações.
          </p>
        </div>

        {/* Space Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {FACILITY_SPACES.map((space) => {
            const isSelected = space.id === selectedSpaceId;
            return (
              <button
                key={space.id}
                onClick={() => setSelectedSpaceId(space.id)}
                className={`px-4 py-2.5 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer border ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/20'
                    : 'bg-[#081023] text-slate-400 hover:text-white border-slate-800 hover:border-slate-700'
                }`}
              >
                {space.name.split(' ')[0]} {space.name.split(' ')[1] || ''}
              </button>
            );
          })}
        </div>

        {/* Main Architectural Showcase Container */}
        <div className="bg-[#070E1F] rounded-lg border border-slate-800 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Image Carrier (7 cols) */}
            <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[440px] bg-slate-900 overflow-hidden group">
              <img
                src={getSpaceImage(selectedSpace.id)}
                alt={selectedSpace.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070E1F] via-transparent to-transparent opacity-80" />

              {/* In-Image Tag */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-white">
                <span className="font-mono bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                  {selectedSpace.category}
                </span>
                <span className="font-mono bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10 tabular-nums">
                  {selectedSpace.areaSize}
                </span>
              </div>
            </div>

            {/* Right Information Panel (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
                  <span>AMBIENTE {FACILITY_SPACES.findIndex((s) => s.id === selectedSpace.id) + 1} DE {FACILITY_SPACES.length}</span>
                  <span className="text-blue-400">TOUR VIRTUAL</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 font-display">
                  {selectedSpace.name}
                </h3>

                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {selectedSpace.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Destaques Construtivos & Conforto
                  </div>
                  <ul className="space-y-2">
                    {selectedSpace.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/90 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Tecnologia & Maquinário:</span>
                  <span className="text-white font-mono font-medium">{selectedSpace.techEquipments}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Dimensão Física:</span>
                  <span className="text-white font-mono font-medium">{selectedSpace.areaSize}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
