import React from 'react';
import { MapPin, Clock, Phone, Mail, Car, Shield, Navigation } from 'lucide-react';

export const LocationHoursSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#070D1C] relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-blue-400 font-semibold mb-3">
            <span>Presença & Atendimento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Localização & Horários
          </h2>
          <p className="text-slate-300 text-base font-light">
            Instalada em endereço nobre e de fácil acesso na zona oeste/sul de São Paulo, com segurança privada e estacionamento com manobrista para todos os membros.
          </p>
        </div>

        {/* 2-Column Layout: Info Grid + Architectural Map UI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Data Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {/* Address */}
            <div className="p-6 bg-[#050B17] rounded-lg border border-slate-800">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-blue-600/20 text-blue-400 rounded">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-mono text-slate-400">Endereço Principal</div>
                  <div className="text-base font-bold text-white mt-1">
                    Alameda Gabriel Monteiro da Silva, 1420
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Jardim Paulistano / Jardins — São Paulo, SP
                  </div>
                  <div className="text-[11px] text-slate-500 mt-2 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-blue-400" />
                    <span>Estacionamento privativo com manobrista gratuito</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="p-6 bg-[#050B17] rounded-lg border border-slate-800">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-blue-600/20 text-blue-400 rounded">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <div className="text-xs uppercase font-mono text-slate-400 mb-2">
                    Horários de Funcionamento
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-800/80">
                      <span className="text-slate-300">Segunda a Sexta</span>
                      <span className="text-white font-mono font-medium">06h00 às 22h00</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/80">
                      <span className="text-slate-300">Sábados</span>
                      <span className="text-white font-mono font-medium">08h00 às 18h00</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-300">Domingos e Feriados</span>
                      <span className="text-white font-mono font-medium">09h00 às 14h00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Channels */}
            <div className="p-6 bg-[#050B17] rounded-lg border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span>Telefone & Concierge</span>
                </div>
                <div className="text-xs font-mono text-white font-semibold">
                  +55 (11) 3089-4200
                </div>
                <div className="text-[11px] text-emerald-400 font-mono mt-0.5">
                  WhatsApp: (11) 98721-4000
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span>Contato Direto</span>
                </div>
                <div className="text-xs font-mono text-white font-semibold truncate">
                  contato@aurea.com.br
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                  Atendimento em até 2h úteis
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Stylized Architectural Map UI (7 cols) */}
          <div className="lg:col-span-7 bg-[#050B17] rounded-lg border border-slate-800 overflow-hidden relative min-h-[380px] flex flex-col justify-between">
            {/* Stylized Dark Map Graphic Representation */}
            <div className="relative w-full h-full min-h-[340px] bg-[#030712] p-6 flex flex-col justify-between overflow-hidden">
              {/* Geometric Street Grid Simulation */}
              <svg className="decorative-element absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="streetGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1E293B" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#streetGrid)" />
                {/* Diagonal Main Avenues */}
                <path d="M -50 150 L 800 350" stroke="#334155" strokeWidth="8" fill="none" />
                <path d="M 250 -50 L 450 600" stroke="#334155" strokeWidth="6" fill="none" />
                <path d="M -50 400 L 900 100" stroke="#1E293B" strokeWidth="4" fill="none" />
              </svg>

              {/* Top Map Bar */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="bg-[#070E20]/90 backdrop-blur-md px-3.5 py-1.5 rounded border border-slate-700/80 text-xs font-mono text-slate-300 flex items-center gap-2">
                  <Navigation className="w-3.5 h-3.5 text-blue-400" />
                  <span>SÃO PAULO — JARDINS</span>
                </div>
                <div className="bg-[#070E20]/90 backdrop-blur-md px-3 py-1 rounded border border-slate-700/80 text-[11px] font-mono text-slate-400">
                  LAT: -23.5701 · LON: -46.6811
                </div>
              </div>

              {/* Pin Center Marker */}
              <div className="relative z-10 my-auto self-center text-center">
                <div className="relative inline-flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-16 w-16 rounded-full bg-blue-500 opacity-30" />
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-blue-500/50 border-2 border-white">
                    <span className="font-display font-bold text-xs">AP</span>
                  </div>
                </div>
                <div className="mt-3 bg-[#070E20]/95 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-700 shadow-xl inline-block">
                  <div className="text-xs font-bold text-white font-display">AUREA PERFORMANCE</div>
                  <div className="text-[11px] text-slate-400">Al. Gabriel Monteiro da Silva, 1420</div>
                </div>
              </div>

              {/* Bottom Transit Helper */}
              <div className="relative z-10 bg-[#070E20]/90 backdrop-blur-md p-3 rounded border border-slate-700/80 flex items-center justify-between text-xs text-slate-300">
                <span>Acesso rápido via Av. Brigadeiro Faria Lima & Av. Rebouças</span>
                <span className="text-blue-400 font-semibold cursor-pointer hover:underline">
                  Ver no Waze / Maps →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
