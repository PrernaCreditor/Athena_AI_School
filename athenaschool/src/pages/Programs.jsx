import CourseFinder from '../components/CourseFinder';
import FeeCalculator from '../components/FeeCalculator';
import AdmissionTracker from '../components/AdmissionTracker';
import Footer from '../components/Footer';

function Programs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-24 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Programs</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">Explore our comprehensive British curriculum programs and resources</p>
        </div>
        
        <div className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-blue-200">
            <CourseFinder />
          </div>
        </div>
        
        <div className="py-12 bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl my-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-blue-200">
            <FeeCalculator />
          </div>
        </div>
        
        <div className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-blue-200">
            <AdmissionTracker />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Programs;