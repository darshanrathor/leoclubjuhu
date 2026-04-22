import SplashScreen from "@/src/components/SplashScreen";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Projects from "@/src/components/Projects";
import Team from "@/src/components/Team";
import Gallery from "@/src/components/Gallery";
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
      <Projects />
      <Team />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
