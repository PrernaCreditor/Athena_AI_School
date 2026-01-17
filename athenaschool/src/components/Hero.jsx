import React from 'react';
import { Brain, Settings, Target, Headset, MessageCircleQuestion } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center font-sans">
      
      {/* --- Background Effects --- */}
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-black opacity-10 mix-blend-overlay z-0"></div>
      
      {/* Abstract Grid/Dots Pattern (Simulated) */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle, #1e3a8a 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      {/* Decorative Side Lines (Bottom Left) */}
      <div className="absolute bottom-10 left-10 hidden md:block opacity-50">
        <svg width="200" height="150" viewBox="0 0 200 150" fill="none" stroke="#1e3a8a" strokeWidth="2">
          <path d="M190 140 L150 100 L50 100 L10 60" />
          <path d="M140 140 L110 110" />
          <path d="M80 140 L60 120" />
          <circle cx="10" cy="60" r="3" fill="#1e3a8a" />
        </svg>
      </div>

      {/* Vertical Dotted Line (Left & Right) */}
      <div className="absolute left-6 top-1/4 bottom-1/4 w-1 border-l-2 border-dotted border-blue-950/20 hidden md:block"></div>
      <div className="absolute right-6 top-1/4 bottom-1/4 w-1 border-r-2 border-dotted border-blue-950/20 hidden md:block"></div>

      {/* --- Main Content Container --- */}
      <div className="container mx-auto px-6 py-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        {/* --- Left Column: Text --- */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-blue-950 tracking-tight drop-shadow-lg">
            Athena AI School
          </h1>
          <div className="h-1 w-32 bg-blue-950 my-4 rounded-full lg:hidden"></div>
          <p className="text-lg md:text-2xl text-blue-800 tracking-widest font-light uppercase mt-2">
            Find your path
          </p>
          
          <p className="text-base md:text-lg text-gray-600 mt-4 max-w-2xl">
            Personalized online schooling designed for modern learner
          </p>
          
          <p className="text-sm md:text-base text-gray-500 mt-3 max-w-xl">
            Experience education tailored to your child's unique needs, interests, and learning style. Our AI-powered platform adapts to create a perfect learning journey.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
              Enquire Now
            </button>
            <button className="px-8 py-3 bg-blue-950/10 hover:bg-blue-950/20 border border-blue-950/30 rounded-full text-blue-950 backdrop-blur-md transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* --- Right Column: Robot & Icons --- */}
        <div className="relative flex justify-center items-center">
          
          {/* The Glowing Rings Background */}
          <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-blue-950/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] border border-blue-950/20 rounded-full shadow-[0_0_50px_rgba(30,58,138,0.5)]"></div>
          
          {/* Main Gemini Image */}
          <img 
            src="/src/assets/gemini.webp.webp" 
            alt="Athena AI School" 
            className="relative z-10 w-[800px] drop-shadow-2xl object-contain"
          />

          {/* Floating Icons (Positioned in semi-circular pattern around the image) */}
          <FloatingIcon icon={<Brain size={24} />} position="top-0 left-1/4" delay="0s" />
          <FloatingIcon icon={<Settings size={24} />} position="top-8 left-1/2 -translate-x-1/2" delay="1s" />
          <FloatingIcon icon={<Target size={24} />} position="top-0 right-1/4" delay="2s" />
          <FloatingIcon icon={<Headset size={24} />} position="top-16 right-8" delay="1.5s" />
          <FloatingIcon icon={<MessageCircleQuestion size={24} />} position="top-16 left-8" delay="2.5s" />

        </div>

      </div>
    </section>
  );
};

// Helper Component for the floating bubbles
const FloatingIcon = ({ icon, position, delay }) => {
  return (
    <div 
      className={`absolute ${position} w-12 h-12 md:w-16 md:h-16 bg-blue-950/10 backdrop-blur-md border border-blue-950/30 rounded-full flex items-center justify-center text-blue-950 shadow-[0_0_15px_rgba(30,58,138,0.3)] animate-pulse z-20`}
      style={{ animationDelay: delay }}
    >
      {icon}
    </div>
  );
};

export default Hero;