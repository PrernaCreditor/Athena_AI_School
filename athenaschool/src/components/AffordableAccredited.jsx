import premiumImage from '../assets/Premium.webp.webp';

function AffordableAccredited() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Affordable & Accredited AI-Powered Online School in Delhi
            </h2>
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">
              Nursery to Grade 12
            </h3>
            
            <p className="text-lg text-gray-700 mb-6">
              Are you ready to move beyond the limitations of traditional schooling? Welcome to a new era of education—an AI-powered online school designed to adapt to every learner's unique needs.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              Our school is a fully recognised AI School online institution offering both Indian and British curricula for students aged 3 to 18, in India and across the globe. We bring together a diverse community of learners and educators from multiple cities, countries, and cultural backgrounds, creating a truly global learning environment.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              At the heart of our approach is intelligent, personalised education. By combining expert teachers with AI-driven learning tools, we tailor lessons to individual strengths, learning styles, and goals. Students receive continuous academic support, real-time feedback, and customised learning paths that help them progress at their own pace.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Our virtual classrooms deliver high-quality, engaging education from the comfort and safety of home—empowering students to think critically, learn independently, and achieve their full potential in a rapidly evolving world.
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
              className="w-full max-w-lg h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.7)] hover:drop-shadow-[0_40px_40px_rgba(0,0,0,0.8)] transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AffordableAccredited;
