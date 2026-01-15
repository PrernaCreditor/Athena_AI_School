import { Award, Users, Star, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

function TrustIndicators() {
  const [currentLogo, setCurrentLogo] = useState(0);
  const logos = [
    "Times Education",
    "Education Today", 
    "EdTech Review",
    "Learning Weekly"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % logos.length);
    }, 800); // Change every 800ms (less than 1 second)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Parents and Educators Worldwide</h2>
          <p className="text-lg text-gray-600">Recognized for excellence in online education</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {/* Content without cards */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="p-3 rounded-full mb-3">
              <Award size={32} className="text-black" />
            </div>
            <h3 className="font-bold text-black mb-1">Accredited Institution</h3>
            <p className="text-sm text-black">Education Quality Certified</p>
          </div>
          
          <div className="flex flex-col items-center justify-center text-center">
            <div className="p-3 rounded-full mb-3">
              <Globe size={32} className="text-black" />
            </div>
            <h3 className="font-bold text-black mb-1">Global Recognition</h3>
            <p className="text-sm text-black">International Standards</p>
          </div>
          
          <div className="flex flex-col items-center justify-center text-center">
            <div className="p-3 rounded-full mb-3">
              <Star size={32} className="text-black" />
            </div>
            <h3 className="font-bold text-black mb-1">5-Star Rating</h3>
            <p className="text-sm text-black">Parent Satisfaction</p>
          </div>
          
          <div className="flex flex-col items-center justify-center text-center">
            <div className="p-3 rounded-full mb-3">
              <Users size={32} className="text-black" />
            </div>
            <h3 className="font-bold text-black mb-1">10K+ Students</h3>
            <p className="text-sm text-black">Global Community</p>
          </div>
        </div>
        
        {/* Moving Logos Section */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-black text-center mb-8">Featured In</h3>
          <div className="flex justify-center items-center h-16">
            <div className="text-3xl font-bold text-black transition-all duration-300 ease-in-out">
              {logos[currentLogo]}
            </div>
          </div>
          {/* Logo indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {logos.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentLogo ? "bg-blue-600 w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustIndicators;