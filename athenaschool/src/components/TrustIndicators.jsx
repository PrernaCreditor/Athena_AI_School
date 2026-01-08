import { Award, Users, Star, Globe } from 'lucide-react';

function TrustIndicators() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Parents and Educators Worldwide</h2>
          <p className="text-lg text-gray-600">Recognized for excellence in online education</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {/* Accreditation/Award Badges */}
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md">
            <div className="bg-blue-100 p-3 rounded-full mb-3">
              <Award size={32} className="text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-center">Accredited Institution</h3>
            <p className="text-sm text-gray-600 text-center">Education Quality Certified</p>
          </div>
          
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md">
            <div className="bg-green-100 p-3 rounded-full mb-3">
              <Globe size={32} className="text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-center">Global Recognition</h3>
            <p className="text-sm text-gray-600 text-center">International Standards</p>
          </div>
          
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md">
            <div className="bg-purple-100 p-3 rounded-full mb-3">
              <Star size={32} className="text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-center">5-Star Rating</h3>
            <p className="text-sm text-gray-600 text-center">Parent Satisfaction</p>
          </div>
          
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md">
            <div className="bg-indigo-100 p-3 rounded-full mb-3">
              <Users size={32} className="text-indigo-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-center">10K+ Students</h3>
            <p className="text-sm text-gray-600 text-center">Global Community</p>
          </div>
        </div>
        
        {/* Logos Section */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-8">Featured In</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-80 grayscale hover:grayscale-0 transition-all">
            <div className="text-2xl font-bold text-gray-700">Times Education</div>
            <div className="text-2xl font-bold text-gray-700">Education Today</div>
            <div className="text-2xl font-bold text-gray-700">EdTech Review</div>
            <div className="text-2xl font-bold text-gray-700">Learning Weekly</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustIndicators;