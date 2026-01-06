function CTA() {
  return (
    <div className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to help your child find their path?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">We know choosing the best for your child is important to you. Speak to 21K School counsellors to understand how online school can help you and your children.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Download Brochure
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CTA;