import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/gymData';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const activeItem = activeLightboxIndex !== null ? GALLERY_ITEMS[activeLightboxIndex] : null;

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => ((prev! + 1) % GALLERY_ITEMS.length));
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev! === 0 ? GALLERY_ITEMS.length - 1 : prev! - 1));
    }
  };

  return (
    <section className="py-24 bg-[#050B17] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-blue-400 font-semibold mb-3">
              <span>Registro Visual & Arquitetura</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Galeria Editorial
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-md font-light">
            Composição assimétrica dos ambientes, atletas e detalhes biomecânicos da AUREA PERFORMANCE. Toque em qualquer imagem para ampliar.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(idx)}
              className={`relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900 group cursor-pointer ${
                idx === 0
                  ? 'md:col-span-2 md:row-span-2 min-h-[380px] md:min-h-[500px]'
                  : idx === 3
                  ? 'md:row-span-2 min-h-[320px] md:min-h-[500px]'
                  : 'min-h-[260px]'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B17] via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

              {/* Hover Badge Info */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider block mb-0.5">
                    {item.category}
                  </span>
                  <div className="text-sm font-bold text-white font-display">
                    {item.title}
                  </div>
                </div>
                <div className="p-2 rounded bg-black/50 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 text-white/80 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar galeria"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white rounded-full bg-black/40 hover:bg-black/80 transition-colors cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white rounded-full bg-black/40 hover:bg-black/80 transition-colors cursor-pointer"
            aria-label="Próxima"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full">
            <div className="rounded-lg overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="w-full max-h-[75vh] object-contain mx-auto"
              />
              <div className="p-4 bg-[#070D1C] border-t border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="text-blue-400 font-mono text-[11px] block">{activeItem.category}</span>
                  <div className="text-sm font-bold text-white mt-0.5">{activeItem.title}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{activeItem.caption}</div>
                </div>
                <div className="text-slate-500 font-mono">
                  {activeLightboxIndex! + 1} / {GALLERY_ITEMS.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
