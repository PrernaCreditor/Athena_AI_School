import { useState } from 'react';
import { BookOpen, Award, Users, GraduationCap } from 'lucide-react';

function TabbedContent() {
  const [activeTab, setActiveTab] = useState('curriculum');

  const tabs = [
    {
      id: 'curriculum',
      title: 'Curriculum',
      icon: BookOpen,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Core Subjects</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  English Language & Literature
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Mathematics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Sciences (Biology, Chemistry, Physics)
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Foundation Subjects</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  History & Geography
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Art & Music
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Computing & Design
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">Curriculum Framework</h4>
            <p className="text-gray-700 mb-4">
              Our curriculum follows the UK National Curriculum framework, adapted for online delivery. 
              Students receive internationally recognized qualifications and develop skills valued by 
              universities and employers worldwide.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded">
                <div className="text-lg font-bold text-blue-600">EYFS</div>
                <div className="text-sm text-gray-600">Early Years</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded">
                <div className="text-lg font-bold text-blue-600">KS1</div>
                <div className="text-sm text-gray-600">Primary</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded">
                <div className="text-lg font-bold text-blue-600">KS2</div>
                <div className="text-sm text-gray-600">Elementary</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded">
                <div className="text-lg font-bold text-blue-600">KS3</div>
                <div className="text-sm text-gray-600">Secondary</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'teachers',
      title: 'Teachers',
      icon: Users,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Award size={32} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">UK Qualified</h4>
              <p className="text-gray-700 text-sm">All teachers hold UK teaching qualifications</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                <GraduationCap size={32} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Specialized Training</h4>
              <p className="text-gray-700 text-sm">Training in online pedagogy and digital tools</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                <Users size={32} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">International</h4>
              <p className="text-gray-700 text-sm">Faculty from 25+ countries</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">Continuous Development</h4>
            <p className="text-gray-700 mb-4">
              Our teachers participate in ongoing training programs to stay current with the latest 
              educational methodologies and technological advances in online learning.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="text-gray-700">Monthly Training</span>
                <span className="font-medium text-blue-600">4 hours</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="text-gray-700">Certification Renewal</span>
                <span className="font-medium text-blue-600">Annual</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="text-gray-700">Performance Review</span>
                <span className="font-medium text-blue-600">Quarterly</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'assessment',
      title: 'Assessment',
      icon: Award,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3">Formative Assessment</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Ongoing progress monitoring
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Immediate feedback
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Adaptive learning paths
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3">Summative Assessment</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Termly examinations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Standardized testing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Portfolio reviews
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">Assessment Framework</h4>
            <p className="text-gray-700 mb-4">
              Our assessment framework aligns with UK National Curriculum standards while 
              incorporating adaptive technologies that personalize evaluation for each student.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded">
                <div className="text-lg font-bold text-blue-600">Baseline</div>
                <div className="text-sm text-gray-600">Initial</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded">
                <div className="text-lg font-bold text-blue-600">Formative</div>
                <div className="text-sm text-gray-600">Ongoing</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded">
                <div className="text-lg font-bold text-blue-600">Summative</div>
                <div className="text-sm text-gray-600">Termly</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded">
                <div className="text-lg font-bold text-blue-600">Diagnostic</div>
                <div className="text-sm text-gray-600">Personalized</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Program Details</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore different aspects of our British curriculum online school</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="flex flex-wrap">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-6 py-4 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent size={18} className="mr-2" />
                    {tab.title}
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="p-8">
            {tabs.find(tab => tab.id === activeTab)?.content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabbedContent;