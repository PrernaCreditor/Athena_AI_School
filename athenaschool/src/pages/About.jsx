import CurriculumOverview from '../components/CurriculumOverview';
import AgeSpecificPrograms from '../components/AgeSpecificPrograms';
import TeacherQualifications from '../components/TeacherQualifications';
import LearningMethodology from '../components/LearningMethodology';
import TrustElements from '../components/TrustElements';
import Footer from '../components/Footer';

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-24 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600  transform rotate-1 opacity-10"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">About Our School</h1>
            <p className="text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto mb-8 font-light">Discover our commitment to excellence in British curriculum education</p>
            
            <div className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white p-1 rounded-full mt-8">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-1 rounded-full">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full">
                  <span className="text-lg font-semibold">Leading British Curriculum Online Education</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden border border-gray-100 hover:border-blue-200">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-4"></span>
                Our Mission
              </h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  We strive to provide world-class British curriculum education that transcends geographical boundaries, making quality learning accessible to students everywhere.
                </p>
                <p>
                  Our mission is to nurture curious, confident, and capable learners who are prepared to thrive in an ever-evolving global landscape.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-600 rounded-2xl shadow-xl p-8 text-white transform hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden border border-gray-100 hover:border-blue-200">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full translate-y-16 -translate-x-16 opacity-30"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="w-2 h-8 bg-white rounded-full mr-4"></span>
                Our Vision
              </h2>
              <div className="space-y-4 text-white">
                <p>
                  To be the leading provider of innovative online British curriculum education, empowering students to reach their full potential through personalized learning experiences.
                </p>
                <p>
                  We envision a world where every child has access to exceptional education that prepares them for success in life and career.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-20 bg-gradient-to-br from-blue-50 to-indigo-50 py-12 rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746.477 3.332.977 4.5 1.753v13C19.832 18.477 18.246 18 16.5 18c-1.746.477-3.332.977-4.5 1.753"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">British Standards</h3>
                <p className="text-slate-600">Rigorous academic standards following the UK curriculum framework</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Teachers</h3>
                <p className="text-slate-600">Highly qualified educators with extensive experience in online learning</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Innovation</h3>
                <p className="text-slate-600">Cutting-edge technology platforms for immersive learning experiences</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Global Community</h3>
                <p className="text-slate-600">Connect with peers from diverse backgrounds worldwide</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-2">
         
          
          <div className="mb-12">
            <CurriculumOverview />
          </div>
          
          <div className="mb-12">
            <AgeSpecificPrograms />
          </div>
        </div>
        
        <div className="mb-20">
          <TeacherQualifications />
        </div>
        
        <div className="mb-20">
          <div className="bg-blue-600 rounded-3xl p-1">
            <div className="bg-white rounded-3xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">Our Learning Methodology</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    Personalized Learning
                  </h3>
                  <p className="text-slate-700 mb-6">
                    We tailor our approach to each student's unique learning style, pace, and interests, ensuring optimal engagement and comprehension.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    Interactive Engagement
                  </h3>
                  <p className="text-slate-700">
                    Our lessons incorporate interactive elements, collaborative projects, and hands-on activities to make learning engaging and memorable.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    Continuous Assessment
                  </h3>
                  <p className="text-slate-700 mb-6">
                    Regular assessments and feedback loops help us monitor progress and adapt instruction to meet each student's evolving needs.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    Global Perspective
                  </h3>
                  <p className="text-slate-700">
                    We integrate international perspectives and cultural awareness into our curriculum to prepare students for success in a connected world.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-500">
                <h4 className="text-xl font-bold text-slate-900 mb-2">Our Commitment</h4>
                <p className="text-slate-700 italic">
                  "We believe that every student learns differently, and our role is to discover and nurture their unique potential through evidence-based teaching strategies and cutting-edge technology."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <TrustElements />
      </div>
      
      <Footer />
    </div>
  );
}

export default About;