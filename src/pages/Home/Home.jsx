import HeroSection from "../../components/HeroSection/HeroSection";
import SocialFooter from "../../components/SocialFooter/SocialFooter";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container no-scrollbar">
      <HeroSection />
      <SocialFooter />
    </div>
  );
}
