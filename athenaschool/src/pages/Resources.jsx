import { useState } from 'react';
import EnquiryForm from '../components/EnquiryForm';
import FeeCalculator from '../components/FeeCalculator';
import GradePlacementTool from '../components/GradePlacementTool';
import CourseComparison from '../components/CourseComparison';

function Resources() {
  const [activeTab, setActiveTab] = useState('tools');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-24 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Access helpful resources, tools, and information</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="flex border-b border-gray-200">
            <button
              className={`py-3 px-6 font-medium text-sm rounded-t-lg ${activeTab === 'tools' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('tools')}
            >
              Interactive Tools
            </button>
            <button
              className={`py-3 px-6 font-medium text-sm rounded-t-lg ${activeTab === 'downloads' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('downloads')}
            >
              Downloads
            </button>
            <button
              className={`py-3 px-6 font-medium text-sm rounded-t-lg ${activeTab === 'faqs' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('faqs')}
            >
              FAQs
            </button>
            <button
              className={`py-3 px-6 font-medium text-sm rounded-t-lg ${activeTab === 'support' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('support')}
            >
              Support
            </button>
          </div>

          <div className="py-8">
            {activeTab === 'tools' && (
              <div className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <FeeCalculator />
                  <GradePlacementTool />
                </div>
                <CourseComparison />
              </div>
            )}
            {activeTab === 'downloads' && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Download Resources</h3>
                <p className="text-gray-600 mb-8">Browse our collection of helpful documents and resources</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <div className="text-blue-600 text-2xl mb-3">📄</div>
                    <h4 className="font-bold text-gray-900 mb-2">Admissions Guide</h4>
                    <p className="text-gray-600 text-sm mb-4">Complete guide to our admission process</p>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Download
                    </button>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <div className="text-blue-600 text-2xl mb-3">📋</div>
                    <h4 className="font-bold text-gray-900 mb-2">Curriculum Overview</h4>
                    <p className="text-gray-600 text-sm mb-4">Detailed curriculum information</p>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Download
                    </button>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <div className="text-blue-600 text-2xl mb-3">🎓</div>
                    <h4 className="font-bold text-gray-900 mb-2">Fee Structure</h4>
                    <p className="text-gray-600 text-sm mb-4">Tuition and fee information</p>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'faqs' && (
              <div className="py-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6 max-w-4xl mx-auto">
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">What curriculum do you follow?</h4>
                    <p className="text-gray-600">We follow the British curriculum with adaptations for online learning. Our program includes Early Years Foundation Stage, Key Stages 1-5, and IGCSE/A-Level qualifications.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">How do online classes work?</h4>
                    <p className="text-gray-600">Our online classes are conducted live by qualified teachers using interactive tools. Students participate in real-time discussions, collaborative projects, and receive personalized attention.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">What technology do I need?</h4>
                    <p className="text-gray-600">Students need a computer or tablet with reliable internet connection, webcam, microphone, and speakers. We recommend specific technical requirements for optimal learning experience.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">How are students assessed?</h4>
                    <p className="text-gray-600">We use continuous assessment methods including assignments, projects, presentations, and formal examinations. Regular feedback helps track progress and identify areas for improvement.</p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'support' && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Support Resources</h3>
                <p className="text-gray-600 mb-8">Find help and support for various topics</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <div className="text-blue-600 text-2xl mb-3">💻</div>
                    <h4 className="font-bold text-gray-900 mb-2">Technical Support</h4>
                    <p className="text-gray-600 text-sm mb-4">Help with platform and technical issues</p>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Get Help
                    </button>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <div className="text-blue-600 text-2xl mb-3">👨‍🏫</div>
                    <h4 className="font-bold text-gray-900 mb-2">Academic Support</h4>
                    <p className="text-gray-600 text-sm mb-4">Tutoring and extra academic assistance</p>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Get Help
                    </button>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <div className="text-blue-600 text-2xl mb-3">🎓</div>
                    <h4 className="font-bold text-gray-900 mb-2">Counseling Services</h4>
                    <p className="text-gray-600 text-sm mb-4">Student and parent counseling support</p>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Get Help
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        
        
      </div>
    </div>
  );
}

export default Resources;