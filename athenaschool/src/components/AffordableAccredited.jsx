import React from 'react';

const AffordableAccredited = () => {
  return (
    <section className="relative w-full min-h-[600px] bg-white overflow-hidden flex items-center justify-center font-sans py-12 lg:py-0">
      
      {/* --- Decorative Background Blobs --- */}
      {/* Top Right Blob */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-bl-[100px] -z-0 opacity-60"></div>
      
      {/* Bottom Right Floating Bean Shape */}
      <div className="absolute bottom-10 right-10 w-24 h-12 md:w-48 md:h-24 bg-gradient-to-r from-blue-500 to-blue-900 rounded-full blur-2xl opacity-20 -z-0 rotate-45"></div>
       {/* Hard shape for the distinct blue blob in bottom right */}
      <svg className="absolute bottom-[-50px] right-[10%] w-40 h-40 text-blue-950 opacity-80 z-0" viewBox="0 0 200 200" fill="currentColor">
         <path d="M45.7,-76.3C58.9,-69.3,69.1,-55.6,76.3,-41.2C83.5,-26.8,87.6,-11.7,85.6,2.6C83.6,16.9,75.5,30.4,65.8,42.4C56.1,54.4,44.8,64.9,32.1,70.5C19.4,76.1,5.3,76.8,-7.8,75.3C-20.9,73.8,-33,70.1,-44.6,63.1C-56.2,56.1,-67.3,45.8,-74.6,33.1C-81.9,20.4,-85.4,5.3,-82.6,-8.6C-79.8,-22.5,-70.7,-35.2,-60.1,-45.5C-49.5,-55.8,-37.4,-63.7,-25.1,-68.8C-12.8,-73.9,0.3,-76.2,12.8,-75.8L25.3,-75.4Z" transform="translate(100 100)" />
      </svg>


      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* --- Left Column: Image --- */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/src/assets/download.webp.webp" 
                alt="Athena AI School" 
                className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] object-contain rounded-2xl"
              />
            </div>
          </div>

          {/* --- Right Column: Text Content --- */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950">
              Affordable & Accredited AI-Powered Online School in Delhi
            </h2>
            <h3 className="text-2xl font-semibold text-blue-700">
              Nursery to Grade 12
            </h3>
            
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Experience flexible, future-ready learning with our AI-powered online school. We offer recognised Indian and British curricula for students aged 3–18, supported by expert teachers and personalised learning paths. Our safe, engaging virtual classrooms help students learn from home and reach their full potential.
            </p>
            
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-colors shadow-lg hover:shadow-xl">
              Learn more about us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AffordableAccredited;