import { useState } from "react";
import dynamic from "next/dynamic";

import ContextualSearchSection from "../../components/aboutPage/contextualSearch";
import AboutHeroSection from "../../components/aboutPage/HeroSection";
import SimulateSection from "../../components/aboutPage/simulateSection";
import RemixEntitiesSection from "../../components/aboutPage/remixSection";
import ContactSection from "../../components/aboutPage/ContactSection";
import Footer from "../../components/aboutPage/Footer";
import CaptionSection from "../../components/aboutPage/CaptionSection";
import GenerativeSimulation from "../../components/aboutPage/generate";
import Story from "../../components/aboutPage/Story";

const SignupModal = dynamic(() =>
  import("../../components/aboutPage/SignupModal")
);

export default function AboutPage() {
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const toggleSignupModal = () => {
    setSignupModalOpen(!signupModalOpen);
  };

  return (
    <div className="font-manrope">
      <AboutHeroSection toggleSignupModal={toggleSignupModal} />
      <Story />
      <CaptionSection />
      <ContextualSearchSection />
      <GenerativeSimulation />
      <SimulateSection />
      <RemixEntitiesSection />
      <ContactSection toggleSignupModal={toggleSignupModal} />
      <Footer />
      <SignupModal isOpen={signupModalOpen} closeModal={toggleSignupModal} />
    </div>
  );
}
