import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Programs from '../components/Programs';
import CTA from '../components/CTA';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Programs />
      
      <Features />
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;