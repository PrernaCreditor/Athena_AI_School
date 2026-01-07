import { Baby, BookOpen, GraduationCap, Users } from 'lucide-react';

function Programs() {
  return (
    <div id="programs" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">21K School Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">A world where curiosity leads the way</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <div className="text-center text-white">
                <Baby size={60} className="mx-auto mb-2" />
                <div className="text-xl font-bold">Early Years</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nurturing Curiosity and Exploration</h3>
              <p className="text-gray-600 mb-4">Our Early Years program provides an age-appropriate, activity-based academic plan. It fosters a love for learning through interactive activities to ignite curiosity for a lifelong learning foundation.</p>
              <button className="w-full bg-blue-100 text-blue-700 py-2 px-4 rounded-lg font-semibold hover:bg-blue-200 transition-colors flex items-center justify-center">
                Explore Early Years <span className="ml-2">→</span>
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <div className="text-center text-white">
                <BookOpen size={60} className="mx-auto mb-2" />
                <div className="text-xl font-bold">Primary</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Building Strong Foundations</h3>
              <p className="text-gray-600 mb-4">In our Primary Program, learners are encouraged to explore a wide range of subjects while developing core academic and social skills through critical thinking, creativity and collaboration.</p>
              <button className="w-full bg-green-100 text-green-700 py-2 px-4 rounded-lg font-semibold hover:bg-green-200 transition-colors flex items-center justify-center">
                Explore Primary Program <span className="ml-2">→</span>
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <div className="text-center text-white">
                <GraduationCap size={60} className="mx-auto mb-2" />
                <div className="text-xl font-bold">Middle School</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expanding Horizons</h3>
              <p className="text-gray-600 mb-4">Our Middle School program, covering grades 6th to 8th (ages 11-13), focuses on developing essential life skills like independent thinking, problem-solving, and self-directed study.</p>
              <button className="w-full bg-purple-100 text-purple-700 py-2 px-4 rounded-lg font-semibold hover:bg-purple-200 transition-colors flex items-center justify-center">
                Explore Middle School <span className="ml-2">→</span>
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
              <div className="text-center text-white">
                <Users size={60} className="mx-auto mb-2" />
                <div className="text-xl font-bold">Senior School</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Shaping Future Leaders</h3>
              <p className="text-gray-600 mb-4">The Senior School program prepares learners with a strong academic curriculum, future - focused approach, and skills to build confidence to excel in their chosen fields.</p>
              <button className="w-full bg-orange-100 text-orange-700 py-2 px-4 rounded-lg font-semibold hover:bg-orange-200 transition-colors flex items-center justify-center">
                Explore Senior School <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs;