import { BookOpen, GraduationCap, Users, Award, Sparkles } from 'lucide-react';
import aiChipBg from '../assets/ai-chip-intelligence-technology-deep-learning.jpg';
import childImage from '../assets/child.webp.webp';

function CurriculumOverview() {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-6">
            <span className="text-black">British Curriculum</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-black">
              British Curriculum Excellence
            </span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">Following rigorous standards of the UK National Curriculum</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">World-Class British Education Online</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our curriculum follows the UK National Curriculum framework, adapted for online delivery. 
              Students receive internationally recognized qualifications and develop skills valued by 
              universities and employers worldwide.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div>
                  <h4 className="font-semibold text-gray-900">Core Subjects</h4>
                  <p className="text-gray-600">English, Mathematics, Science with specialized instruction</p>
                </div>
              </div>
              <div className="flex items-start">
                <div>
                  <h4 className="font-semibold text-gray-900">Foundation Subjects</h4>
                  <p className="text-gray-600">History, Geography, Art, Music, Computing and more</p>
                </div>
              </div>
              <div className="flex items-start">
                <div>
                  <h4 className="font-semibold text-gray-900">Assessment Framework</h4>
                  <p className="text-gray-600">Regular assessments aligned with UK standards</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-full">
            <img 
              src={childImage}
              alt="Child Learning"
              className="w-full h-auto max-h-96 object-contain rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurriculumOverview;