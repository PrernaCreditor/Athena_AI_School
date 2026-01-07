function About() {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Athena School</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to our innovative learning platform designed to empower students through personalized education
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            At Athena School, we believe that no two learners are alike, so their educational journey shouldn't be either. 
            We provide a personalized learning experience that adapts to each student's unique needs, interests, and learning style.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>AI-powered personalized learning paths</li>
            <li>Expert faculty dedicated to student success</li>
            <li>Flexible scheduling to fit your family's lifestyle</li>
            <li>Comprehensive curriculum designed for the modern world</li>
            <li>Progress tracking and detailed analytics</li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-2xl text-center">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold mb-2">Quality Education</h3>
            <p>World-class curriculum designed by education experts</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-6 rounded-2xl text-center">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p>Cutting-edge technology enhancing the learning experience</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-6 rounded-2xl text-center">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-2">Community</h3>
            <p>Join a global community of learners and educators</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;