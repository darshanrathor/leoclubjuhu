import SplashScreen from "@/src/components/SplashScreen";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import WhyJoin from "@/src/components/WhyJoin";
import ProjectsCarousel from "@/src/components/ProjectsCarousel";
import CorporatePartnerships from "@/src/components/CorporatePartnerships";
import Awards from "@/src/components/Awards";
import Testimonials from "@/src/components/Testimonials";
import SocialFeeds from "@/src/components/SocialFeeds";
import BusinessesTeaser from "@/src/components/BusinessesTeaser";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main>
      {/* Splash shown once on load */}
      <SplashScreen />

      {/* Navbar is fixed — floats above everything always */}
      <Navbar />

      {/* Page sections */}
      <Hero />
      <About />
      <WhyJoin />
      <ProjectsCarousel />
      <CorporatePartnerships />
      <Awards />
      <Testimonials />
      <SocialFeeds />
      <BusinessesTeaser />
      <Contact />
      <Footer />
    </main>
  );
}
