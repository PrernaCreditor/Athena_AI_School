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

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <EnquireTab />
      <Hero />
      
      {/* Stats Section */}
      <div className="relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
       
      </div>
      
      {/* Programs Section */}
      <div className="py-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Programs />
        </div>
      </div>
      
      {/* Features Section
      <div className="relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-1000"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>
        
        <div className="py-12 bg-white relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Features />
        </div>
      </div> */}
      
      {/* Testimonials Section
      <div className="py-12 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-52 h-52 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
        <div className="absolute bottom-1/4 right-0 w-56 h-56 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials />
        </div>
      </div> */}
      
      {/* Curriculum Overview */}
      <div className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl my-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-blue-200">
          <CurriculumOverview />
        </div>
      </div>
      
      {/* Trust Indicators
      <TrustIndicators /> */}
      
      {/* Contact Section */}
      <div className="relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 -right-20 w-68 h-68 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        <div className="py-12 bg-white relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Contact />
        </div>
      </div>
      
      <CTA />
      <Footer />
      <LiveChatWidget />
    </div>
  );
}

export default Home;