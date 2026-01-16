import { Monitor, BarChart3, Play, Users } from 'lucide-react';
import skillImage from '../assets/skill.wep.webp';

function Features() {
  return (
    <div id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden mt-12">
            <div className="rounded-[4rem] bg-gradient-to-br from-blue-50 to-white p-2">
              <img 
                src={skillImage} 
                alt="Online Learning" 
                className="w-full h-96 object-cover rounded-[3.5rem]"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">No two learners are alike, so why should their journey be?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our Online Learning School provides a seamless, tech-driven learning experience. With features such as progress tracking, on-demand access to materials, and interactive tools, our learners and expert faculty are always supported. Our Online Learning School's ease of use provides a holistic learning experience.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4 mt-1">
                  <BarChart3 size={16} />
                </div>
                <span className="text-lg text-gray-700">Progress tracking and analytics</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4 mt-1">
                  <Play size={16} />
                </div>
                <span className="text-lg text-gray-700">On-demand access to materials</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4 mt-1">
                  <Monitor size={16} />
                </div>
                <span className="text-lg text-gray-700">Interactive learning tools</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4 mt-1">
                  <Users size={16} />
                </div>
                <span className="text-lg text-gray-700">Expert faculty support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;