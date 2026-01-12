import { BookOpen, GraduationCap, Users, Award } from 'lucide-react';

function CurriculumOverview() {
  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">British Curriculum Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Following the rigorous standards of the UK National Curriculum</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">World-Class British Education Online</h3>
            <p className="text-gray-600 mb-6">
              Our curriculum follows the UK National Curriculum framework, adapted for online delivery. 
              Students receive internationally recognized qualifications and develop skills valued by 
              universities and employers worldwide.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4 mt-1">
                  <BookOpen size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Core Subjects</h4>
                  <p className="text-gray-600">English, Mathematics, Science with specialized instruction</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4 mt-1">
                  <Users size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Foundation Subjects</h4>
                  <p className="text-gray-600">History, Geography, Art, Music, Computing and more</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4 mt-1">
                  <Award size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Assessment Framework</h4>
                  <p className="text-gray-600">Regular assessments aligned with UK standards</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
            <div className="text-center">
              <GraduationCap size={60} className="mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Recognized Qualifications</h3>
              <p className="mb-6 opacity-90">
                Our students earn qualifications recognized by universities and institutions worldwide, 
                preparing them for success in top institutions.
              </p>
              <div className="bg-white/20 rounded-lg p-4 text-left">
                <h4 className="font-semibold mb-2">Key Stage Progression:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Foundation Stage (Ages 3-5)</li>
                  <li>• Key Stage 1 (Ages 5-7)</li>
                  <li>• Key Stage 2 (Ages 7-11)</li>
                  <li>• Key Stage 3 (Ages 11-14)</li>
                  <li>• Key Stage 4 (Ages 14-16)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurriculumOverview;