function Hero() {
  return (
    <div className="pt-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              #1 Best Online School in India
              <br />
              <span className="text-blue-600">Admissions Open 2025-26</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Your child's future is not just about academics. It's about discovering who they are, what they love, and what they're capable of. At 21K School, our online school offers personalized learning that grows with your child, helping them build a future that's truly theirs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                Enquire Now
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
                Download Brochure
              </button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                <div className="text-2xl font-bold text-blue-600">India</div>
                <div className="text-sm text-gray-600 mt-1">Pathway</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                <div className="text-2xl font-bold text-blue-600">British</div>
                <div className="text-sm text-gray-600 mt-1">Pathway</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                <div className="text-2xl font-bold text-blue-600">How It</div>
                <div className="text-sm text-gray-600 mt-1">Works</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-blue-100 to-blue-300 rounded-xl w-full h-96 flex items-center justify-center">
              <div className="text-center text-blue-800">
                <div className="text-6xl mb-4">🏫</div>
                <div className="text-2xl font-bold">21K School Experience</div>
                <div className="mt-2">Personalized Online Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;