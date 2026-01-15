import Accordion from '../components/Accordion';

function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources & Support</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Find answers to common questions and access helpful resources</p>
        </div>
        
        <Accordion />
      </div>
    </div>
  );
}

export default Resources;