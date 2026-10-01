import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, Clock, User, Phone, Mail, Target, Award, ArrowRight } from 'lucide-react';
import { AssessmentFormValues } from '../types';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPlan?: string;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({
  isOpen,
  onClose,
  preselectedPlan,
}) => {
  const [formData, setFormData] = useState<AssessmentFormValues>({
    name: '',
    phone: '',
    email: '',
    goal: '',
    experience: '',
    preferredTime: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof AssessmentFormValues, string>>>({});

  useEffect(() => {
    if (preselectedPlan) {
      setFormData((prev) => ({
        ...prev,
        notes: `Interesse inicial no plano ${preselectedPlan}.`,
      }));
    }
  }, [preselectedPlan]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Partial<Record<keyof AssessmentFormValues, string>> = {};
    if (!formData.name.trim()) errs.name = 'Nome obrigatório';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Telefone válido obrigatório';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'E-mail válido obrigatório';
    if (!formData.goal) errs.goal = 'Selecione seu objetivo principal';
    if (!formData.experience) errs.experience = 'Informe seu nível de experiência';
    if (!formData.preferredTime) errs.preferredTime = 'Selecione o melhor turno';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      goal: '',
      experience: '',
      preferredTime: '',
      notes: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#070E20] border border-slate-700/80 rounded-xl shadow-2xl p-6 sm:p-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation Success State */
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-display">
              Solicitação Recebida com Sucesso
            </h3>

            <p className="text-sm text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
              Obrigado, <strong className="text-white">{formData.name}</strong>. Nossa equipe entrará em contato via WhatsApp no número <strong className="text-white">{formData.phone}</strong> para confirmar a data e o horário da sua avaliação.
            </p>

            <div className="p-4 bg-[#0A142E] rounded border border-slate-800 max-w-md mx-auto text-left text-xs text-slate-300 space-y-1.5 mb-8">
              <div><span className="text-slate-500">Objetivo:</span> {formData.goal}</div>
              <div><span className="text-slate-500">Experiência:</span> {formData.experience}</div>
              <div><span className="text-slate-500">Horário preferencial:</span> {formData.preferredTime}</div>
              {preselectedPlan && <div><span className="text-slate-500">Plano de interesse:</span> {preselectedPlan}</div>}
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer"
            >
              Concluir
            </button>
          </div>
        ) : (
          /* Assessment Form */
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
                <span>Agendamento de Diagnóstico</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Agendar Avaliação Inicial
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                90 minutos dedicados a entender seus dados anatômicos, metabólicos e metas de rendimento.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Name */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Nome Completo *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full pl-9 pr-3 py-2.5 bg-[#050B17] border rounded text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                      errors.name ? 'border-red-500' : 'border-slate-800'
                    }`}
                  />
                </div>
                {errors.name && <span className="text-[11px] text-red-400 mt-1 block">{errors.name}</span>}
              </div>

              {/* Row 2: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Telefone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2.5 bg-[#050B17] border rounded text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                        errors.phone ? 'border-red-500' : 'border-slate-800'
                      }`}
                    />
                  </div>
                  {errors.phone && <span className="text-[11px] text-red-400 mt-1 block">{errors.phone}</span>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    E-mail *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2.5 bg-[#050B17] border rounded text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                        errors.email ? 'border-red-500' : 'border-slate-800'
                      }`}
                    />
                  </div>
                  {errors.email && <span className="text-[11px] text-red-400 mt-1 block">{errors.email}</span>}
                </div>
              </div>

              {/* Row 3: Objetivo & Experiência */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Objetivo Principal *
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className={`w-full px-3 py-2.5 bg-[#050B17] border rounded text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                      errors.goal ? 'border-red-500' : 'border-slate-800'
                    }`}
                  >
                    <option value="">Selecione seu objetivo...</option>
                    <option value="Alta Performance Esportiva">Alta Performance Esportiva</option>
                    <option value="Ganho de Força e Hipertrofia">Ganho de Força e Hipertrofia</option>
                    <option value="Eliminação de Dores & Mobilidade">Eliminação de Dores & Mobilidade</option>
                    <option value="Condicionamento Aeróbico & Saúde">Condicionamento Aeróbico & Saúde</option>
                    <option value="Preparação para Prova / Maratona">Preparação para Prova / Maratona</option>
                  </select>
                  {errors.goal && <span className="text-[11px] text-red-400 mt-1 block">{errors.goal}</span>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Experiência com Treinamento *
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className={`w-full px-3 py-2.5 bg-[#050B17] border rounded text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                      errors.experience ? 'border-red-500' : 'border-slate-800'
                    }`}
                  >
                    <option value="">Selecione sua experiência...</option>
                    <option value="Iniciante (pouco ou nenhum treino)">Iniciante (pouco ou nenhum treino)</option>
                    <option value="Intermediário (treina regularmente há 1+ ano)">Intermediário (treina regularmente há 1+ ano)</option>
                    <option value="Avançado (treino contínuo e consistente)">Avançado (treino contínuo e consistente)</option>
                    <option value="Atleta / Praticante de alto rendimento">Atleta / Praticante de alto rendimento</option>
                  </select>
                  {errors.experience && <span className="text-[11px] text-red-400 mt-1 block">{errors.experience}</span>}
                </div>
              </div>

              {/* Row 4: Melhor Horário */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Melhor Horário para Atendimento *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Manhã (06h às 11h)', 'Tarde (12h às 17h)', 'Noite (18h às 22h)'].map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setFormData({ ...formData, preferredTime: slot })}
                      className={`p-2.5 text-xs rounded border transition-colors cursor-pointer text-center ${
                        formData.preferredTime === slot
                          ? 'bg-blue-600 text-white border-blue-500'
                          : 'bg-[#050B17] text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {slot.split(' ')[0]}
                    </button>
                  ))}
                </div>
                {errors.preferredTime && (
                  <span className="text-[11px] text-red-400 mt-1 block">{errors.preferredTime}</span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  Dados protegidos sob sigilo profissional.
                </span>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider rounded transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-blue-600/30"
                >
                  <span>Confirmar Solicitação</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
