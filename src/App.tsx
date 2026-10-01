import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PerformanceExperience } from './components/PerformanceExperience';
import { MethodSection } from './components/MethodSection';
import { TrainingAreasSection } from './components/TrainingAreasSection';
import { FacilityTourSection } from './components/FacilityTourSection';
import { StudentJourneySection } from './components/StudentJourneySection';
import { TrainersSection } from './components/TrainersSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PlansSection } from './components/PlansSection';
import { AssessmentCallout } from './components/AssessmentCallout';
import { LocationHoursSection } from './components/LocationHoursSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
import { AssessmentModal } from './components/AssessmentModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<string | undefined>(undefined);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [showFocusToast, setShowFocusToast] = useState(false);

  const handleToggleFocusMode = () => {
    setIsFocusMode((prev) => {
      const next = !prev;
      if (next) {
        setShowFocusToast(true);
        setTimeout(() => setShowFocusToast(false), 4500);
      } else {
        setShowFocusToast(false);
      }
      return next;
    });
  };

  const handleOpenAssessment = (planName?: string) => {
    setSelectedPlanForModal(planName);
    setIsAssessmentOpen(true);
  };

  const handleCloseAssessment = () => {
    setIsAssessmentOpen(false);
    setSelectedPlanForModal(undefined);
  };

  return (
    <div
      className={`min-h-screen text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300 ${
        isFocusMode ? 'focus-mode-active bg-[#060A12]' : 'bg-[#050B17]'
      }`}
    >
      {/* Focus Mode Temporary Status Banner */}
      {showFocusToast && isFocusMode && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#091122]/95 border border-blue-500/50 backdrop-blur-md px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-3.5 text-xs animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-slate-200">
            <strong>Modo Foco Tipográfico:</strong> entrelinha ampliada e margens imersivas para leitura limpa.
          </span>
          <button
            onClick={() => setIsFocusMode(false)}
            className="text-blue-400 hover:text-blue-300 font-semibold underline text-[11px] cursor-pointer ml-1"
          >
            Desativar
          </button>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        onOpenAssessment={() => handleOpenAssessment()}
        isFocusMode={isFocusMode}
        onToggleFocusMode={handleToggleFocusMode}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenAssessment={() => handleOpenAssessment()} />
        <PerformanceExperience />
        <MethodSection />
        <TrainingAreasSection />
        <FacilityTourSection />
        <StudentJourneySection />
        <TrainersSection />
        <TestimonialsSection />
        <PlansSection onSelectPlan={(plan) => handleOpenAssessment(plan)} />
        <AssessmentCallout onOpenAssessment={() => handleOpenAssessment()} />
        <LocationHoursSection />
        <GallerySection />
      </main>

      {/* Footer */}
      <Footer onOpenAssessment={() => handleOpenAssessment()} />

      {/* Interactive Modal */}
      <AssessmentModal
        isOpen={isAssessmentOpen}
        onClose={handleCloseAssessment}
        preselectedPlan={selectedPlanForModal}
      />

      {/* Floating CTA & Scroll Controls */}
      <FloatingActions onOpenAssessment={() => handleOpenAssessment()} />
    </div>
  );
}
