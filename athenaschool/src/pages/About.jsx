import { GraduationCap, Lightbulb, Users, Target, BookOpen, Brain } from 'lucide-react';

function About() {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center">
            <GraduationCap size={40} className="mr-4 text-blue-600" /> About AI School
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to our innovative learning platform designed to empower students through personalized education
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Target size={24} className="mr-2 text-blue-600" /> Our Mission
          </h2>
          <p className="text-gray-600 mb-6">
            At AI School, we believe that no two learners are alike, so their educational journey shouldn't be either. 
            We provide a personalized learning experience that adapts to each student's unique needs, interests, and learning style.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Lightbulb size={24} className="mr-2 text-blue-600" /> What Makes Us Different
          </h2>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li className="flex items-start">
              <Brain size={18} className="mr-2 mt-1 text-blue-600" />
              <span>AI-powered personalized learning paths</span>
            </li>
            <li className="flex items-start">
              <Users size={18} className="mr-2 mt-1 text-blue-600" />
              <span>Expert faculty dedicated to student success</span>
            </li>
            <li className="flex items-start">
              <BookOpen size={18} className="mr-2 mt-1 text-blue-600" />
              <span>Flexible scheduling to fit your family's lifestyle</span>
            </li>
            <li className="flex items-start">
              <GraduationCap size={18} className="mr-2 mt-1 text-blue-600" />
              <span>Comprehensive curriculum designed for the modern world</span>
            </li>
            <li className="flex items-start">
              <Target size={18} className="mr-2 mt-1 text-blue-600" />
              <span>Progress tracking and detailed analytics</span>
            </li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-2xl text-center">
            <div className="flex justify-center mb-4">
              <GraduationCap size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2">Quality Education</h3>
            <p>World-class curriculum designed by education experts</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-6 rounded-2xl text-center">
            <div className="flex justify-center mb-4">
              <Lightbulb size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p>Cutting-edge technology enhancing the learning experience</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-6 rounded-2xl text-center">
            <div className="flex justify-center mb-4">
              <Users size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2">Community</h3>
            <p>Join a global community of learners and educators</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;