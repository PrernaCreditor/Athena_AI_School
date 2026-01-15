import { BookOpen, GraduationCap, Users, Award, Sparkles } from 'lucide-react';
import aiChipBg from '../assets/ai-chip-intelligence-technology-deep-learning.jpg';

function CurriculumOverview() {
  return (
    <div className="py-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-6">
            <Sparkles className="w-4 h-4 text-sky-500" />
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
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-sky-100 to-sky-50 rounded-full flex items-center justify-center text-sky-600 font-bold mr-4 mt-1 border border-sky-200">
                  <BookOpen size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Core Subjects</h4>
                  <p className="text-gray-600">English, Mathematics, Science with specialized instruction</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-50 to-sky-50 rounded-full flex items-center justify-center text-blue-950 font-bold mr-4 mt-1 border border-blue-200">
                  <Users size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Foundation Subjects</h4>
                  <p className="text-gray-600">History, Geography, Art, Music, Computing and more</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-sky-100 to-sky-50 rounded-full flex items-center justify-center text-sky-600 font-bold mr-4 mt-1 border border-sky-200">
                  <Award size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Assessment Framework</h4>
                  <p className="text-gray-600">Regular assessments aligned with UK standards</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl p-8 text-black relative overflow-hidden shadow-2xl" style={{
            backgroundImage: `url(${aiChipBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat'
          }}>
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-xl"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex p-4 rounded-2xl bg-black/20 backdrop-blur-sm mb-6 border border-black/30">
                <GraduationCap size={60} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Recognized Qualifications</h3>
              <p className="mb-6 leading-relaxed">
                Our students earn qualifications recognized by universities and institutions worldwide, 
                preparing them for success in top institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurriculumOverview;