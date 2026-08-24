import { useRef, useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Services } from "./components/Services";
import { WhyChoose } from "./components/WhyChoose";
import { CTASection } from "./components/CTASection";
import { TeamBenefits } from "./components/TeamBenefits";
import { ConsultationDialog } from "./components/ConsultationDialog";
import { Footer } from "./components/Footer";
import { FloatingWhatsAppButton } from "./components/FloatingWhatsAppButton";

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const consultationTriggerRef = useRef<HTMLElement | null>(null);

  const openConsultation = (trigger: HTMLElement) => {
    consultationTriggerRef.current = trigger;
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen w-full">
      <Header />
      <main>
        <HeroSection onBookConsultation={openConsultation} />
        <Services onBookConsultation={openConsultation} />
        <WhyChoose />
        <CTASection onBookConsultation={openConsultation} />
        <TeamBenefits />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <ConsultationDialog
        open={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        returnFocusRef={consultationTriggerRef}
      />
    </div>
  );
}
