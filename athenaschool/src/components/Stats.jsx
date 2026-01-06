function Stats() {
  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-6xl font-bold text-blue-600 mb-4">7500+</div>
            <div className="text-xl font-semibold text-gray-800 mb-2">Learners</div>
            <div className="text-gray-600">growing with 21K</div>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-6xl font-bold text-blue-600 mb-4">500+</div>
            <div className="text-xl font-semibold text-gray-800 mb-2">Cities</div>
            <div className="text-gray-600">from where parents trust 21K</div>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-6xl font-bold text-blue-600 mb-4">78+</div>
            <div className="text-xl font-semibold text-gray-800 mb-2">Countries</div>
            <div className="text-gray-600">from where learners bring global perspectives to class</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;