import Navigation from "@/components/Navigation";
import NewHeroSection from "@/components/NewHeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import GetStartedSection from "@/components/GetStartedSection";
import RoadmapSection from "@/components/RoadmapSection";
import MissionContactSection from "@/components/MissionContactSection";
import NewFooter from "@/components/NewFooter";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <NewHeroSection />
        <HowItWorksSection />
        <GetStartedSection />
        <RoadmapSection />
        <MissionContactSection />
      </main>
      <NewFooter />
    </div>
  );
};

export default LandingPage;