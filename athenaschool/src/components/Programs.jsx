import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function Programs() {
  const programs = [
    {
      id: 1,
      title: "Early Years",
      subtitle: "Nurturing Curiosity & Exploration",
      description: "Age-appropriate, activity-based academic plan fostering a love for learning through interactive activities to ignite curiosity.",
      color: "from-blue-500 to-blue-400",
      bgColor: "bg-gradient-to-br from-blue-50/40 via-white to-white",
      accentColor: "text-blue-600",
      age: "Ages 3-5",
      features: ["Play-based Learning", "Sensory Activities", "Social Development"],
      stats: [
      ],
      highlight: "Interactive Learning Zone",
      // New properties for advanced design
      gradientStart: "#3b82f6",
      gradientEnd: "#60a5fa",
      pattern: "bubbles",
      animation: "float",
      badge: "Most Popular"
    },
    {
      id: 2,
      title: "Primary",
      subtitle: "Building Strong Foundations",
      description: "Encouraging exploration of diverse subjects while developing core academic and social skills through critical thinking.",
      color: "from-blue-950 to-blue-900",
      bgColor: "bg-gradient-to-br from-blue-50/30 via-white to-white",
      accentColor: "text-blue-950",
      age: "Grades 1-5",
      features: ["Core Academic Skills", "Creative Thinking", "Collaborative Learning"],
      stats: [
        { label: "Core Subjects", value: "8+" },
        { label: "Critical Thinking", value: "Daily" },
        { label: "Global Awareness", value: "Integrated" }
      ],
      highlight: "Foundation Lab",
      gradientStart: "#6366f1",
      gradientEnd: "#818cf8",
      pattern: "grid",
      animation: "pulse",
      badge: "Foundational"
    },
    {
      id: 3,
      title: "Middle School",
      subtitle: "Expanding Horizons",
      description: "Focus on essential life skills like independent thinking, problem-solving, and self-directed study for young adolescents.",
      color: "from-blue-950 to-blue-900",
      bgColor: "bg-gradient-to-br from-blue-50/40 via-white to-white",
      accentColor: "text-blue-950",
      age: "Grades 6-8",
      features: ["Independent Thinking", "Problem Solving", "Self-Directed Study"],
      stats: [
        { label: "Problem Solving", value: "Daily" },
        { label: "AI Projects", value: "15+/Year" },
        { label: "Progress Tracking", value: "Real-time" }
      ],
      highlight: "Innovation Hub",
      gradientStart: "#8b5cf6",
      gradientEnd: "#a78bfa",
      pattern: "circuits",
      animation: "glow",
      badge: "Tech-Integrated"
    },
    {
      id: 4,
      title: "Senior School",
      subtitle: "Shaping Future Leaders",
      description: "Strong academic curriculum with future-focused approach to build confidence and excellence in chosen fields.",
      color: "from-blue-500 to-blue-400",
      bgColor: "bg-gradient-to-br from-blue-50/30 via-white to-white",
      accentColor: "text-blue-600",
      age: "Grades 9-12",
      features: ["Career Preparation", "Leadership Skills", "Advanced Curriculum"],
      stats: [
        { label: "College Acceptance", value: "98%" },
        { label: "Leadership Roles", value: "Guaranteed" },
        { label: "Startup Projects", value: "2+/Year" }
      ],
      highlight: "Leadership Academy",
      gradientStart: "#10b981",
      gradientEnd: "#34d399",
      pattern: "waves",
      animation: "shimmer",
      badge: "Elite Program"
    }
  ];

  // Advanced Card Component with Interactive Elements
  const AdvancedProgramCard = ({ program }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [activeStat, setActiveStat] = useState(null);

    // Pattern backgrounds
    const patterns = {
      bubbles: (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-current"></div>
          <div className="absolute top-12 right-8 w-12 h-12 rounded-full bg-current"></div>
          <div className="absolute bottom-8 left-12 w-20 h-20 rounded-full bg-current"></div>
        </div>
      ),
      grid: (
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 gap-2 h-full">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="border border-current rounded-sm"></div>
            ))}
          </div>
        </div>
      ),
      circuits: (
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="circuit" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M20,0 L40,0 L40,40 L0,40 L0,20 L20,20 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="20" cy="20" r="3" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>
      ),
      waves: (
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <path d="M0,20 Q20,0 40,20 T80,20 T120,20 T160,20 T200,20 T240,20 T280,20" 
                  fill="none" stroke="currentColor" strokeWidth="2"/>
            <path d="M0,40 Q20,60 40,40 T80,40 T120,40 T160,40 T200,40 T240,40 T280,40" 
                  fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      )
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group h-full"
      >
        {/* Glow Effect */}
        <div className={`absolute -inset-4 bg-gradient-to-br ${program.color} rounded-3xl opacity-0 blur-2xl`} />
        
        {/* 3D Card with Glass Morphism */}
        <div className="relative h-full bg-blue-50 border border-white/50 rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50">
          
          {/* Card Content */}
          <div className="relative h-full p-5">
            
            {/* Pattern Background */}
            <div className={`absolute inset-0 ${program.accentColor}`}>
              {patterns[program.pattern]}
            </div>
            
            {/* Floating Badge */}
            {program.badge && (
              <motion.div 
                animate={{ rotate: isHovered ? [0, -5, 5, 0] : 0 }}
                transition={{ duration: 0.5 }}
                className={`absolute top-6 right-6 px-4 py-2 rounded-full bg-gradient-to-r ${program.color} text-white text-xs font-bold tracking-wide shadow-lg z-10`}
              >
                {program.badge}
              </motion.div>
            )}
            
            {/* Header Section */}
            <div className="relative flex items-start gap-4 mb-5">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-3">
                  <span className="text-xs font-semibold text-gray-600">{program.age}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{program.title}</h3>
                <p className="text-xs font-medium text-gray-600">{program.subtitle}</p>
              </div>
            </div>
            
            {/* Description with Expandable Feature */}
            <motion.div 
              animate={isHovered ? { height: "auto" } : {}}
              className="relative mb-5"
            >
              <p className="text-gray-600 leading-relaxed text-xs mb-3">
                {program.description}
              </p>
            </motion.div>
            
            {/* Interactive Stats */}
            <div className="grid grid-cols-3 gap-2 mb-5">
              {program.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setActiveStat(index)}
                  onMouseLeave={() => setActiveStat(null)}
                  className={`relative p-2 rounded-lg bg-white/80 backdrop-blur-sm border ${
                    activeStat === index 
                      ? `border-${program.accentColor.replace('text-', '')}/50 shadow-md`
                      : 'border-gray-200'
                  } transition-all duration-300 cursor-pointer`}
                >
                  <div className="mb-2">
                    <span className="text-xs text-gray-500">{stat.label}</span>
                  </div>
                  <div className="text-sm font-bold text-gray-900">{stat.value}</div>
                </motion.div>
              ))}
            </div>
            
            {/* Features as Interactive Chips */}
            <div className="flex flex-wrap gap-2">
              {program.features.map((feature, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    program.accentColor
                  } bg-${program.accentColor.replace('text-', '')}/10 border border-${program.accentColor.replace('text-', '')}/20 backdrop-blur-sm`}
                >
                  {feature}
                </motion.span>
              ))}
            </div>
            
            {/* Hover Reveal CTA */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-white via-white to-transparent"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-2 rounded-lg bg-gradient-to-r ${program.color} text-white font-semibold text-xs shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    <span>Explore Program</span>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
            <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${program.color} opacity-10 rounded-full`} />
          </div>
          <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden">
            <div className={`absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br ${program.color} opacity-10 rounded-full`} />
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div id="programs" className="pt-24">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
        
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 font-semibold text-sm mb-6 shadow-lg"
          >
            <span>AI-Enhanced Learning Pathways</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            <span className="relative">
              <span className="text-black">
                Immersive Learning
              </span>
            </span>
            <br />
            <span className="text-black">Environments</span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Each program features a uniquely designed AI-enhanced environment with interactive learning tools and real-time progress tracking
          </p>
        </motion.div>
        
        {/* Programs Grid - Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={index === 0 || index === 3 ? 'lg:row-span-1' : ''}
            >
              <AdvancedProgramCard program={program} />
            </motion.div>
          ))}
        </div>
        
        {/* Interactive Comparison Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-xl"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Program Comparison</h3>
              <p className="text-gray-600">Interactive overview of our learning pathways</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200">
                Reset
              </button>
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-gray-800 to-blue-600 text-white text-sm font-medium hover:shadow-lg">
                Compare All
              </button>
            </div>
          </div>
          
          {/* Comparison Chart */}
          <div className="grid grid-cols-5 gap-4">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-500 mb-4">Metrics</div>
              {['AI Integration', 'Teacher Ratio', 'Tech Usage', 'Project Based', 'Parent Reviews'].map((metric) => (
                <div key={metric} className="text-sm text-gray-600 h-12 flex items-center">
                  {metric}
                </div>
              ))}
            </div>
            
            {programs.map((program) => (
              <div key={program.id} className="text-center">
                <div className={`text-sm font-bold ${program.accentColor} mb-4`}>
                  {program.title.split(' ')[0]}
                </div>
                {[85, 90, 70, 80, 95].map((value, idx) => (
                  <div key={idx} className="h-12 flex items-center justify-center">
                    <div className="w-full max-w-24">
                      <div className={`h-2 rounded-full bg-gradient-to-r ${program.color} opacity-20`}>
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${value}%` }}
                          transition={{ delay: idx * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${program.color}`}
                        />
                      </div>
                      <span className="text-xs font-semibold mt-1">{value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Floating CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block relative group/cta"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-900 via-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-30 group-hover/cta:opacity-50 transition duration-500" />
            <button className="relative bg-gradient-to-r from-gray-900 via-blue-600 to-indigo-600 text-white px-12 py-5 rounded-3xl font-bold text-lg shadow-2xl">
              <span>Start Your Journey Today</span>
            </button>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-500 mt-6 text-sm"
          >
            Experience AI-powered education with personalized learning paths
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}


export default Programs;