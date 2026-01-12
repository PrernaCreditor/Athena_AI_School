import { useState, useEffect } from 'react';

function Hero() {
  const scrollToEnquiry = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden flex items-center py-12 px-4 md:px-8 pt-24">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Find your <span className="text-indigo-600">path.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
            Personalized online schooling designed for the modern learner
          </p>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0">
            Experience education tailored to your child's unique needs, interests, and learning style. Our AI-powered platform adapts to create the perfect learning journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              className="bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl"
              onClick={scrollToEnquiry}
            >
              Enquire Now
            </button>
            <button className="px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-semibold text-lg hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Right Visual Section */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-lg h-96 md:h-[450px]">
            {/* Abstract pathway */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-16 md:h-20 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full opacity-50"></div>
            </div>
            
            {/* Curved path */}
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 500 300" preserveAspectRatio="none">
                <path 
                  d="M 50 250 Q 150 100 250 150 Q 350 200 450 100" 
                  fill="none" 
                  stroke="rgba(99, 102, 241, 0.3)" 
                  strokeWidth="8" 
                  strokeDasharray="10,10"
                />
              </svg>
            </div>
            
            {/* Human figures along the path */}
            <div className="absolute top-[20%] left-[10%] transition-transform duration-1000 hover:scale-110">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">A</div>
            </div>
            <div className="absolute top-[40%] left-[30%] transition-transform duration-1000 hover:scale-110">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">B</div>
            </div>
            <div className="absolute top-[60%] left-[50%] transition-transform duration-1000 hover:scale-110">
              <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold">C</div>
            </div>
            <div className="absolute top-[30%] left-[70%] transition-transform duration-1000 hover:scale-110">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">D</div>
            </div>
            <div className="absolute top-[70%] left-[85%] transition-transform duration-1000 hover:scale-110">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">E</div>
            </div>
            
            {/* Central focal point */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl animate-pulse">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">Path</div>
                <div className="text-xs opacity-80">Your Journey</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
