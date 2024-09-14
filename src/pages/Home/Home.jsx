import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import SocialFooter from "../../components/SocialFooter/SocialFooter";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container no-scrollbar">
      <HeroSection />
      <Footer />
      <SocialFooter />
    </div>
  );
}
