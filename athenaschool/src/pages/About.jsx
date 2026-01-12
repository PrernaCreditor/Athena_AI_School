import CurriculumOverview from '../components/CurriculumOverview';
import AgeSpecificPrograms from '../components/AgeSpecificPrograms';
import TeacherQualifications from '../components/TeacherQualifications';
import LearningMethodology from '../components/LearningMethodology';
import TrustElements from '../components/TrustElements';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Our School</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover our commitment to excellence in British curriculum education</p>
        </div>
        
        <CurriculumOverview />
        
        <div className="py-12">
          <AgeSpecificPrograms />
        </div>
        
        <TeacherQualifications />
        
        <div className="py-12">
          <LearningMethodology />
        </div>
        
        <TrustElements />
      </div>
    </div>
  );
}

export default About;