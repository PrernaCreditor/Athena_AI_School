import { GraduationCap, Lightbulb, Users, Target, BookOpen, Brain, Award, Star, Globe, Zap, Heart, Rocket } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-full">
                <GraduationCap size={60} />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About AI School</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
              Revolutionizing education with AI-powered personalized learning experiences
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-current text-white w-full h-20">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
          </svg>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-5 rounded-full mb-6 shadow-lg">
              <Target size={36} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  At AI School, we believe that every student is unique and deserves a learning experience tailored specifically to them. 
                  We leverage cutting-edge artificial intelligence to create personalized educational pathways that adapt to each learner's pace, 
                  style, and interests, making education more effective and enjoyable.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <Zap size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Personalized Learning</h4>
                      <p className="text-gray-600">Customized educational paths for each student</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                      <Heart size={24} className="text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Student-Centered</h4>
                      <p className="text-gray-600">Focused on individual student needs and growth</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-5 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl border border-green-100">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                      <Rocket size={24} className="text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Future Ready</h4>
                      <p className="text-gray-600">Preparing students for tomorrow's challenges</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-12 text-white text-center shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-105">
                <div className="flex justify-center mb-6">
                  <Star size={64} className="text-yellow-300" />
                </div>
                <blockquote className="text-2xl md:text-3xl font-light italic mb-6 leading-relaxed">
                  "Education is not the filling of a vessel, but the kindling of a flame."
                </blockquote>
                <cite className="text-blue-200 text-xl">- Socrates</cite>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-10 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at AI School
            </p>
          </div>
          
          <div className="relative h-[500px] w-full max-w-4xl mx-auto overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-200 rounded-full opacity-15 blur-xl"></div>
              <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-purple-200 rounded-full opacity-15 blur-xl"></div>
              <div className="absolute bottom-1/4 left-1/2 w-44 h-44 bg-indigo-200 rounded-full opacity-15 blur-xl"></div>
            </div>
            
            {/* Center Element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl z-10">
              <div className="text-white text-center p-3">
                <Target size={32} />
                <p className="font-bold mt-1 text-xs">CORE VALUES</p>
              </div>
            </div>
            
            {/* Value Cards arranged in circular formation */}
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Innovation - Top */}
              <div className="absolute top-[8%] left-1/2 transform -translate-x-1/2 w-48">
                <div className="bg-white bg-opacity-95 backdrop-blur-sm p-2 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500 transform hover:-translate-y-1">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-100 p-2 rounded-lg mr-2">
                      <Brain size={20} className="text-blue-600" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Innovation</h3>
                  </div>
                  <p className="text-gray-600 text-xs">
                    We continuously innovate to bring the latest technologies and teaching methods to our students.
                  </p>
                </div>
              </div>
              
              {/* Community - Top Right */}
              <div className="absolute top-[20%] right-[8%] w-48">
                <div className="bg-white bg-opacity-95 backdrop-blur-sm p-2 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-green-500 transform hover:-translate-y-1">
                  <div className="flex items-center mb-2">
                    <div className="bg-green-100 p-2 rounded-lg mr-2">
                      <Users size={20} className="text-green-600" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Community</h3>
                  </div>
                  <p className="text-gray-600 text-xs">
                    We foster a collaborative learning environment where students, teachers, and parents work together.
                  </p>
                </div>
              </div>
              
              {/* Excellence - Bottom Right */}
              <div className="absolute bottom-[20%] right-[8%] w-48">
                <div className="bg-white bg-opacity-95 backdrop-blur-sm p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-purple-500 transform hover:-translate-y-1">
                  <div className="flex items-center mb-2">
                    <div className="bg-purple-100 p-2 rounded-lg mr-2">
                      <Award size={20} className="text-purple-600" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Excellence</h3>
                  </div>
                  <p className="text-gray-600 text-xs">
                    We strive for excellence in every aspect of our educational offerings and student support.
                  </p>
                </div>
              </div>
              
              {/* Learning - Bottom */}
              <div className="absolute bottom-[8%] left-1/2 transform -translate-x-1/2 w-48">
                <div className="bg-white bg-opacity-95 backdrop-blur-sm p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-yellow-500 transform hover:-translate-y-1">
                  <div className="flex items-center mb-2">
                    <div className="bg-yellow-100 p-2 rounded-lg mr-2">
                      <BookOpen size={20} className="text-yellow-600" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Learning</h3>
                  </div>
                  <p className="text-gray-600 text-xs">
                    We believe in lifelong learning and encourage curiosity and continuous growth.
                  </p>
                </div>
              </div>
              
              {/* Global Perspective - Bottom Left */}
              <div className="absolute bottom-[20%] left-[8%] w-48">
                <div className="bg-white bg-opacity-95 backdrop-blur-sm p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-red-500 transform hover:-translate-y-1">
                  <div className="flex items-center mb-2">
                    <div className="bg-red-100 p-2 rounded-lg mr-2">
                      <Globe size={20} className="text-red-600" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Global Perspective</h3>
                  </div>
                  <p className="text-gray-600 text-xs">
                    We prepare students to be global citizens with an understanding of diverse cultures and perspectives.
                  </p>
                </div>
              </div>
              
              {/* Creativity - Top Left */}
              <div className="absolute top-[20%] left-[8%] w-48">
                <div className="bg-white bg-opacity-95 backdrop-blur-sm p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-indigo-500 transform hover:-translate-y-1">
                  <div className="flex items-center mb-2">
                    <div className="bg-indigo-100 p-2 rounded-lg mr-2">
                      <Lightbulb size={20} className="text-indigo-600" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Creativity</h3>
                  </div>
                  <p className="text-gray-600 text-xs">
                    We nurture creative thinking and problem-solving skills in our students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {/* <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-blue-200">Students</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Expert Educators</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Countries</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Satisfaction Rate</div>
            </div>
          </div>
        </div> */}
      

      {/* Call to Action */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Learning Experience?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of students who have already transformed their learning journey with AI School.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl">
              Start Your Journey
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;