import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Solutions from '@/components/Solutions';
import HowItWorks from '@/components/HowItWorks';
import Portfolio from '@/components/Portfolio';
import Plans from '@/components/Plans';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';

function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-ink-950">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Solutions />
        <HowItWorks />
        <Portfolio />
        <Plans />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
