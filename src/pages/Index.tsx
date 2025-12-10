import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhatWeDoSection } from "@/components/WhatWeDoSection";
import { PlatformsSection } from "@/components/PlatformsSection";
import { WhoWeServeSection } from "@/components/WhoWeServeSection";
import { SecuritySection } from "@/components/SecuritySection";
import { AboutSection } from "@/components/AboutSection";
import { PublishersSection } from "@/components/PublishersSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <PlatformsSection />
        <WhoWeServeSection />
        <SecuritySection />
        <AboutSection />
        <PublishersSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
