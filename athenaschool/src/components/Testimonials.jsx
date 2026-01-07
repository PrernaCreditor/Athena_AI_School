function Testimonials() {
  return (
    <div id="testimonials" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Outstanding Students</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">No two learners are alike, so why should their journey be?</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                DR
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Divith Reddy</h3>
                <p className="text-gray-600">8 years old</p>
              </div>
            </div>
            <p className="text-gray-600 italic">"An 8-year-old prodigy, Divith, recently won the U-8 World Chess Championship in Italy. With his love for chess, he is determined to become the world's youngest Grandmaster."</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                KH
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Keya Hatkar</h3>
                <p className="text-gray-600">13 years old</p>
              </div>
            </div>
            <p className="text-gray-600 italic">"Thirteen-year-old Keya, recipient of the prestigious Pradhan Mantri Rashtriya Bal Puraskar, is an award-winning author, artist, and social impact entrepreneur recognized globally for her advocacy and inclusion work."</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                AM
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Anngad Maaholay</h3>
                <p className="text-gray-600">11 years old</p>
              </div>
            </div>
            <p className="text-gray-600 italic">"An 11-year-old actor from Mumbai, Anngad is celebrated for his standout roles in Yeh Meri Family and Ram Setu."</p>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why 21K School Is the Right Online School for Your Child</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Excellence Delivered, Consistently</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-blue-600">💻</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Technology Driven Learning</h3>
            <p className="text-gray-600">Our Online Learning School provides a seamless, tech-driven learning experience. With features such as progress tracking, on-demand access to materials, and interactive tools, our learners and expert faculty are always supported.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-blue-600">🕒</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Anytime Learning</h3>
            <p className="text-gray-600">With over 1,250 hours of live, interactive classes conducted daily, our online school learners engage in dynamic, real-time learning. All sessions are recorded, giving learners the flexibility to revisit lessons anytime and anywhere.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-blue-600">🎓</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Future Ready Education</h3>
            <p className="text-gray-600">We prepare students for the future with skills-based learning, critical thinking, and problem-solving abilities that will serve them throughout their lives and careers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;