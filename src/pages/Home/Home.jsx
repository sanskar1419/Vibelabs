import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import Newsletter from "../../components/Newsletter/Newsletter";
import SocialFooter from "../../components/SocialFooter/SocialFooter";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container no-scrollbar">
      <HeroSection />
      <Newsletter />
      <Footer />
      <SocialFooter />
    </div>
  );
}
