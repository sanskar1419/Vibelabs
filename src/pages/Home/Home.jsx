import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import Newsletter from "../../components/Newsletter/Newsletter";
import SocialFooter from "../../components/SocialFooter/SocialFooter";
import TeamSection from "../../components/TeamSection/TeamSection";
import WebsiteInfo from "../../components/WebsiteInfo/WebsiteInfo";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container no-scrollbar">
      <HeroSection />
      <WebsiteInfo />
      <TeamSection />
      <Newsletter />
      <Footer />
      <SocialFooter />
    </div>
  );
}
