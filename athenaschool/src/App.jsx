import Navigation from './components/Navigation';
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
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Stats />
      <Programs />
      <CTA />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
