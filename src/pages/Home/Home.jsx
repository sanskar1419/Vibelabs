import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import Newsletter from "../../components/Newsletter/Newsletter";
import SocialFooter from "../../components/SocialFooter/SocialFooter";
import WebsiteInfo from "../../components/WebsiteInfo/WebsiteInfo";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container no-scrollbar">
      <HeroSection />
      <WebsiteInfo />
      <Newsletter />
      <Footer />
      <SocialFooter />
    </div>
  );
}
