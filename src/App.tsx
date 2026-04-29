import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { StartSection } from "./components/StartSection";
import { Services } from "./components/Services";
import { FeaturesChess } from "./components/FeaturesChess";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { CtaFooter } from "./components/CtaFooter";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="bg-black">
          <StartSection />
          <Services />
          <FeaturesChess />
          <FeaturesGrid />
          <Stats />
          <Testimonials />
          <CtaFooter />
        </div>
      </div>
    </div>
  );
}

export default App;
