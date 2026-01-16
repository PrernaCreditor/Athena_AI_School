import premiumImage from '../assets/Premium.webp.webp';

function AffordableAccredited() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold italic text-gray-900 mb-6">
              Affordable & Accredited AI-Powered Online School in Delhi
            </h2>
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">
              Nursery to Grade 12
            </h3>
            
            <p className="text-lg text-gray-700 mb-6">
              Step beyond traditional schooling with our AI-powered online school, built to adapt to every learner's unique needs.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              We are a fully recognised online institution offering Indian and British curricula for students aged 3–18, serving learners across India and around the world. Our global community brings together students and educators from diverse cultures and backgrounds.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              By combining expert teachers with AI-driven learning tools, we deliver personalised lessons, real-time feedback, and customised learning paths. Our engaging virtual classrooms enable students to learn safely from home, build independent thinking, and reach their full potential.
            </p>
            
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              Learn more About Us
            </button>
          </div>
          
          {/* Right Image */}
          <div className="flex justify-center">
            <img 
              src={premiumImage} 
              alt="AI-Powered Online School" 
              className="w-full max-w-md h-auto object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.2)] hover:drop-shadow-[0_15px_15px_rgba(0,0,0,0.3)] transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AffordableAccredited;
