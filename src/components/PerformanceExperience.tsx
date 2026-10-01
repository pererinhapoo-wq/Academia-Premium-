import React, { useState } from 'react';
import { PERFORMANCE_METRICS } from '../data/gymData';
import { TrendingUp, Activity, BarChart3, Gauge, CheckCircle2 } from 'lucide-react';

export const PerformanceExperience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'forca' | 'vo2' | 'mobilidade'>('forca');

  const chartData = {
    forca: {
      title: "Progressão de Carga & Eficiência Neuromuscular",
      metric: "+38% ganho de força pico em 12 semanas",
      description: "Monitoramento de deslocamento de barra (VBT) e torque isométrico registrado a cada sessão.",
      points: [45, 52, 58, 64, 71, 79, 86, 92, 100],
      labels: ["Sem 1", "Sem 2", "Sem 4", "Sem 6", "Sem 8", "Sem 10", "Sem 12"],
      detailStats: [
        { label: "Volume Total Semanal", val: "14.820 kg" },
        { label: "Velocidade Média Concêntrica", val: "0.82 m/s" },
        { label: "Equilíbrio de Torque Bilateral", val: "99.1%" },
      ],
    },
    vo2: {
      title: "Consumo de Oxigênio & Potência Limiar (VO2 Max)",
      metric: "+19.4% no limiar anaeróbico individual",
      description: "Determinação precisa das zonas aeróbicas com esteiras Woodway e teste ergoespirométrico.",
      points: [38, 41, 45, 50, 56, 62, 69, 75, 84],
      labels: ["Sem 1", "Sem 2", "Sem 4", "Sem 6", "Sem 8", "Sem 10", "Sem 12"],
      detailStats: [
        { label: "VO2 Máximo Estimado", val: "54.2 ml/kg/min" },
        { label: "Frequência de Recuperação (1 min)", val: "-38 bpm" },
        { label: "Eficiência de Limiar 2", val: "88% FC máx" },
      ],
    },
    mobilidade: {
      title: "Amplitude Articular & Recuperação Tecidual",
      metric: "89% de redução em assimetrias miofasciais",
      description: "Goniometria digital e testes de controle motor dinâmico com reavaliação periódica.",
      points: [30, 42, 55, 68, 74, 81, 88, 94, 98],
      labels: ["Sem 1", "Sem 2", "Sem 4", "Sem 6", "Sem 8", "Sem 10", "Sem 12"],
      detailStats: [
        { label: "Dorsiflexão de Tornozelo", val: "38° (+12°)" },
        { label: "Mobilidade Glenoumeral", val: "172° (+18°)" },
        { label: "Score FMS Funcional", val: "19 / 21 pts" },
      ],
    },
  };

  const current = chartData[activeTab];

  return (
    <section className="py-24 bg-[#070D1C] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-blue-400 font-semibold mb-3">
            <span>Métricas & Ciência do Movimento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
            Seu treino. Seus dados. <br />
            <span className="text-slate-400">Sua evolução.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Não acreditamos em suposições ou planos estáticos. Cada aluno possui um prontuário de performance digital onde mapeamos ganhos reais de força, mobilidade, potência e composição corporal.
          </p>
        </div>

        {/* 4 Demonstrated Quantitative Proof Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PERFORMANCE_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="focus-reading-card p-6 rounded bg-[#0A1329] border border-slate-800/90 relative overflow-hidden group hover:border-slate-700 transition-colors"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight tabular-nums mb-2 font-display">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mb-2">
                {metric.label}
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">
                {metric.detail}
              </div>
              <div className="decorative-element absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-blue-500/10 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Interactive Biometric Visual Display */}
        <div className="bg-[#050B17] rounded-lg border border-slate-800 p-6 md:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-1">
                DEMONSTRAÇÃO DE DASHBOARD DO ALUNO
              </div>
              <div className="text-lg md:text-xl font-bold text-white">
                {current.title}
              </div>
            </div>

            {/* Interactive Segmented Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded border border-slate-800 self-start lg:self-auto">
              <button
                onClick={() => setActiveTab('forca')}
                className={`px-4 py-2 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'forca'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Força & Carga
              </button>
              <button
                onClick={() => setActiveTab('vo2')}
                className={`px-4 py-2 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'vo2'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Capacidade VO2
              </button>
              <button
                onClick={() => setActiveTab('mobilidade')}
                className={`px-4 py-2 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'mobilidade'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Mobilidade Articular
              </button>
            </div>
          </div>

          {/* Visual Graph Representation */}
          <div className="pt-8 pb-6">
            <div className="flex items-baseline justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">
                  {current.metric}
                </span>
              </div>
              <span className="text-xs text-slate-400 font-mono">Dados auditados a cada 45 dias</span>
            </div>

            <p className="text-sm text-slate-300 mb-6 font-light max-w-2xl">
              {current.description}
            </p>

            {/* Elegant SVG Progress Chart */}
            <div className="h-44 sm:h-52 w-full relative">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 800 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Grid horizontal guidelines */}
                <line x1="0" y1="40" x2="800" y2="40" stroke="#1E293B" strokeDasharray="3 3" />
                <line x1="0" y1="90" x2="800" y2="90" stroke="#1E293B" strokeDasharray="3 3" />
                <line x1="0" y1="140" x2="800" y2="140" stroke="#1E293B" strokeDasharray="3 3" />

                {/* Path line calculation */}
                {(() => {
                  const points = current.points;
                  const stepX = 800 / (points.length - 1);
                  const coords = points.map((p, i) => {
                    const x = i * stepX;
                    const y = 180 - (p / 100) * 150;
                    return { x, y };
                  });

                  const dPath = coords.reduce((acc, curr, i) => {
                    return i === 0 ? `M ${curr.x} ${curr.y}` : `${acc} L ${curr.x} ${curr.y}`;
                  }, '');

                  const dArea = `${dPath} L 800 190 L 0 190 Z`;

                  return (
                    <>
                      <path d={dArea} fill="url(#areaGradient)" />
                      <path d={dPath} fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
                      {coords.map((pt, i) => (
                        <g key={i}>
                          <circle cx={pt.x} cy={pt.y} r="4" fill="#050B17" stroke="#60A5FA" strokeWidth="2" />
                        </g>
                      ))}
                    </>
                  );
                })()}
              </svg>

              {/* X Axis Labels */}
              <div className="flex justify-between text-[11px] font-mono text-slate-500 pt-3">
                {current.labels.map((lbl, idx) => (
                  <span key={idx} className="tabular-nums">{lbl}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Sub Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
            {current.detailStats.map((item, idx) => (
              <div key={idx} className="p-3.5 bg-slate-900/60 rounded border border-slate-800">
                <div className="text-xs text-slate-400 mb-1">{item.label}</div>
                <div className="text-base font-semibold text-white tabular-nums">{item.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
