import React from 'react';
import { Baby, BookOpen, Users, GraduationCap } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "Early Years",
      subtitle: "Ages 3–5",
      description: "Nurturing Curiosity\nPlay-based, activity-driven learning that builds curiosity, creativity, and social skills.",
      features: "• Play Learning • Sensory Skills • Social Growth",
      icon: <Baby size={32} />,
    },
    {
      title: "Primary",
      subtitle: "Grades 1–5",
      description: "Building Strong Foundations\nCore academics with critical thinking, creativity, and global awareness.",
      features: "• Core Subjects • Critical Thinking • Collaborative Learning",
      icon: <BookOpen size={32} />,
    },
    {
      title: "Middle School",
      subtitle: "Grades 6–8",
      description: "Expanding Horizons\nDevelops independence, problem-solving, and self-directed learning through real-world projects.",
      features: "• AI Projects • Progress Tracking • Independent Learning",
      icon: <Users size={32} />,
    },
    {
      title: "Senior School",
      subtitle: "Grades 9–12",
      description: "Shaping Future Leaders\nFuture-focused curriculum preparing students for college, careers, and leadership.",
      features: "• College Prep • Leadership Skills • Advanced Learning",
      icon: <GraduationCap size={32} />,
    },
  ];

  return (
    <section className="relative w-full bg-white font-sans overflow-hidden">
      
      {/* --- Top Section (Blue Header) --- */}
      <div className="relative w-full bg-blue-200 pt-20 px-6 text-center pb-32">
        
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/10 pointer-events-none"></div>

        {/* Header Text */}
        <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
          Educational Programs
        </h2>
        
        {/* Abstract decorative circles */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-full"></div>

        {/* --- Wave Curve Separator (Fixed) --- */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0]">
            <svg 
                className="relative block w-[calc(100%+1.3px)] h-[120px] md:h-[180px]" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1200 180" 
                preserveAspectRatio="none"
            >
                {/* More dramatic wave curve for increased wavy look */}
                <path 
                    d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,180 L0,180 Z" 
                    fill="#ffffff"
                ></path>
            </svg>
        </div>
      </div>

      {/* --- Cards Container --- */}
      {/* Negative margin pulls the cards up over the wave */}
      <div className="container mx-auto px-6 -mt-24 relative z-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          
          {programs.map((program, index) => (
            <div key={index} className="group relative bg-white rounded-2xl p-8 pt-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center">
              
              {/* Floating Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                {program.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-2 mt-4">
                {program.title}
              </h3>
              <p className="text-sm font-semibold text-blue-500 mb-3">
                {program.subtitle}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-3 whitespace-pre-line">
                {program.description}
              </p>
              <p className="text-gray-500 text-xs leading-relaxed mb-6 font-medium bg-gray-50 py-1 px-3 rounded-md w-full">
                {program.features}
              </p>
              
              {/* Explore Program Button */}
              <button className="mt-auto bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full text-sm font-bold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Explore Program
              </button>
            </div>
          ))}

        </div>
      </div>

      {/* --- Bottom Decorations --- */}
      <div className="hidden lg:block absolute bottom-0 left-0 pointer-events-none">
        <div className="w-48 h-48 bg-blue-100 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="hidden lg:block absolute bottom-0 right-0 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 200 200" className="opacity-10 text-blue-600 fill-current transform translate-x-1/4 translate-y-1/4">
          <path d="M45,-78C58,-71,68,-58,76,-44C84,-30,90,-15,88,-1C86,13,76,26,66,38C56,50,46,61,33,68C20,75,4,78,-11,76C-26,74,-41,67,-53,58C-65,49,-74,38,-79,25C-84,12,-85,-3,-80,-17C-75,-31,-64,-46,-51,-58C-38,-70,-23,-79,-4,-80C15,-81,32,-85,45,-78Z" transform="translate(100 100)" />
        </svg>
      </div>

    </section>
  );
};

export default Programs;