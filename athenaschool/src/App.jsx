import Hero from './components/Hero';
import Stats from './components/Stats';
import Programs from './components/Programs';
import CTA from './components/CTA';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <div className="pt-16">
        <Stats />
        <Programs />
        <CTA />
        <Features />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App
