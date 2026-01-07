import { Baby, BookOpen, GraduationCap, Users } from 'lucide-react';

function Programs() {
  return (
    <div id="programs" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI School Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">A world where curiosity leads the way</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column - Early Years and Primary */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 p-4 rounded-xl text-white flex-shrink-0">
                    <Baby size={40} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Early Years</h3>
                    <h4 className="text-xl font-semibold text-blue-600 mb-3">Nurturing Curiosity and Exploration</h4>
                    <p className="text-gray-600 mb-4">Our Early Years program provides an age-appropriate, activity-based academic plan. It fosters a love for learning through interactive activities to ignite curiosity for a lifelong learning foundation.</p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                      Explore Early Years <span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 p-4 rounded-xl text-white flex-shrink-0">
                    <BookOpen size={40} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Primary</h3>
                    <h4 className="text-xl font-semibold text-green-600 mb-3">Building Strong Foundations</h4>
                    <p className="text-gray-600 mb-4">In our Primary Program, learners are encouraged to explore a wide range of subjects while developing core academic and social skills through critical thinking, creativity and collaboration.</p>
                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center">
                      Explore Primary Program <span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Middle School and Senior School */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 p-4 rounded-xl text-white flex-shrink-0">
                    <GraduationCap size={40} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Middle School</h3>
                    <h4 className="text-xl font-semibold text-purple-600 mb-3">Expanding Horizons</h4>
                    <p className="text-gray-600 mb-4">Our Middle School program, covering grades 6th to 8th (ages 11-13), focuses on developing essential life skills like independent thinking, problem-solving, and self-directed study.</p>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center">
                      Explore Middle School <span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-4 rounded-xl text-white flex-shrink-0">
                    <Users size={40} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Senior School</h3>
                    <h4 className="text-xl font-semibold text-orange-600 mb-3">Shaping Future Leaders</h4>
                    <p className="text-gray-600 mb-4">The Senior School program prepares learners with a strong academic curriculum, future - focused approach, and skills to build confidence to excel in their chosen fields.</p>
                    <button className="bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center">
                      Explore Senior School <span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs;