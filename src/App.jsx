import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import MobileBottomBar from "./components/MobileBottomBar";
import CursorGlow from "./components/CursorGlow";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-cream text-ink">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-surface focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <CursorGlow />
      <Navbar />
      <main className="pb-24 lg:pb-0">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact />
        <MapSection />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
