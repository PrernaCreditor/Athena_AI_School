import Hero from '../components/Hero';
import EnquireTab from '../components/EnquireTab';
import TrustIndicators from '../components/TrustIndicators';
import LiveChatWidget from '../components/LiveChatWidget';
import Stats from '../components/Stats';
import Programs from '../components/Programs';
import CTA from '../components/CTA';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CurriculumOverview from '../components/CurriculumOverview';
import AgeSpecificPrograms from '../components/AgeSpecificPrograms';
import TeacherQualifications from '../components/TeacherQualifications';
import LearningMethodology from '../components/LearningMethodology';
import Accordion from '../components/Accordion';
import TrustElements from '../components/TrustElements';
import CourseFinder from '../components/CourseFinder';
import FeeCalculator from '../components/FeeCalculator';
import AdmissionTracker from '../components/AdmissionTracker';
import AffordableAccredited from '../components/AffordableAccredited';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <EnquireTab />
      <Hero />
      <AffordableAccredited />
      
      {/* Stats Section */}
      <div className="py-12 bg-white relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Stats />
      </div>
      
      {/* Programs Section */}
      <div className="py-12 bg-white relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Programs />
      </div>
      
      {/* Features Section */}
      <div className="py-12 bg-white relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Features />
      </div>
      
      {/* Testimonials Section */}
      <div className="py-12 bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials />
        </div>
      </div>
      
      {/* Curriculum Overview */}
      <div className="py-12 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CurriculumOverview />
      </div>
      
      {/* Trust Indicators */}
      <TrustIndicators />
      
      {/* Contact Section */}
      <div className="py-12 bg-white relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Contact />
      </div>
      
      <CTA />
      <Footer />
      <LiveChatWidget />
    </div>
  );
}

export default Home;