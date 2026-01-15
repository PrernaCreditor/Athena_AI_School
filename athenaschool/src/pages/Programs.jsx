import CourseFinder from '../components/CourseFinder';
import FeeCalculator from '../components/FeeCalculator';
import AdmissionTracker from '../components/AdmissionTracker';

function Programs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore our comprehensive British curriculum programs and resources</p>
        </div>
        
        <div className="py-12">
          <CourseFinder />
        </div>
        
        <div className="py-12">
          <FeeCalculator />
        </div>
        
        <AdmissionTracker />
      </div>
    </div>
  );
}

export default Programs;