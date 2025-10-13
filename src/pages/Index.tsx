import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import QuoteSection from "@/components/QuoteSection";
import FeatureCards from "@/components/FeatureCards";
import CompanyOverview from "@/components/CompanyOverview";
import FacilityFacts from "@/components/FacilityFacts";
import Gallery from "@/components/Gallery";
import Mission from "@/components/Mission";
import PartnersCarousel from "@/components/PartnersCarousel";
import Certifications from "@/components/Certifications";
import JoinMission from "@/components/JoinMission";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <QuoteSection />
      <FeatureCards />
      <CompanyOverview />
      <FacilityFacts />
      <Gallery />
      <Mission />
      <PartnersCarousel />
      <Certifications />
      <JoinMission />
      <Footer />
    </div>
  );
};

export default Index;
