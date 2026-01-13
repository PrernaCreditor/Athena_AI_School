import { useState } from 'react';
import { Calendar, CheckCircle, Clock, AlertCircle, UserCheck, FileText, Mail } from 'lucide-react';

function AdmissionTracker() {
  const [applicationId, setApplicationId] = useState('');
  const [applicationStatus, setApplicationStatus] = useState(null);

  const applications = [
    {
      id: 'APP-2024-001',
      studentName: 'Emma Johnson',
      dateApplied: '2024-01-15',
      status: 'in-progress',
      steps: [
        { id: 1, name: 'Application Submitted', completed: true, date: '2024-01-15' },
        { id: 2, name: 'Documents Received', completed: true, date: '2024-01-16' },
        { id: 3, name: 'Assessment Scheduled', completed: true, date: '2024-01-17' },
        { id: 4, name: 'Assessment Completed', completed: false, date: null },
        { id: 5, name: 'Offer Extended', completed: false, date: null },
        { id: 6, name: 'Enrollment Confirmed', completed: false, date: null }
      ]
    },
    {
      id: 'APP-2024-002',
      studentName: 'James Smith',
      dateApplied: '2024-01-10',
      status: 'completed',
      steps: [
        { id: 1, name: 'Application Submitted', completed: true, date: '2024-01-10' },
        { id: 2, name: 'Documents Received', completed: true, date: '2024-01-11' },
        { id: 3, name: 'Assessment Scheduled', completed: true, date: '2024-01-12' },
        { id: 4, name: 'Assessment Completed', completed: true, date: '2024-01-15' },
        { id: 5, name: 'Offer Extended', completed: true, date: '2024-01-18' },
        { id: 6, name: 'Enrollment Confirmed', completed: true, date: '2024-01-20' }
      ]
    },
    {
      id: 'APP-2024-003',
      studentName: 'Sophia Williams',
      dateApplied: '2024-01-08',
      status: 'pending',
      steps: [
        { id: 1, name: 'Application Submitted', completed: true, date: '2024-01-08' },
        { id: 2, name: 'Documents Received', completed: true, date: '2024-01-09' },
        { id: 3, name: 'Assessment Scheduled', completed: false, date: null },
        { id: 4, name: 'Assessment Completed', completed: false, date: null },
        { id: 5, name: 'Offer Extended', completed: false, date: null },
        { id: 6, name: 'Enrollment Confirmed', completed: false, date: null }
      ]
    }
  ];

  const handleTrackStatus = (e) => {
    e.preventDefault();
    if (applicationId.trim()) {
      const foundApp = applications.find(app => app.id.toLowerCase() === applicationId.toLowerCase());
      if (foundApp) {
        setApplicationStatus(foundApp);
      } else {
        alert('Application ID not found. Please try APP-2024-001, APP-2024-002, or APP-2024-003 for demo purposes.');
      }
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'in-progress':
        return <Clock className="text-blue-500" size={20} />;
      case 'pending':
        return <AlertCircle className="text-yellow-500" size={20} />;
      default:
        return <Clock size={20} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'pending':
        return 'Pending';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Admission Tracker</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">Monitor your application status in real-time</p>
        </div>

        <div className=" rounded-xl  p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Track Your Application</h3>
          
          <form onSubmit={handleTrackStatus} className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-grow">
              <label htmlFor="applicationId" className="block text-sm font-medium text-slate-700 mb-2">
                Enter Application ID
              </label>
              <input
                type="text"
                id="applicationId"
                value={applicationId}
                onChange={(e) => setApplicationId(e.target.value)}
                placeholder="e.g., APP-2024-001"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="mt-2 text-sm text-slate-500">
                Use demo IDs: APP-2024-001, APP-2024-002, or APP-2024-003
              </p>
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors h-[46px]"
              >
                Track Status
              </button>
            </div>
          </form>

          {applicationStatus && (
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h4 className="text-xl font-bold text-slate-900">{applicationStatus.studentName}</h4>
                  <p className="text-slate-600">Application ID: {applicationStatus.id}</p>
                  <p className="text-slate-600">Date Applied: {new Date(applicationStatus.dateApplied).toLocaleDateString()}</p>
                </div>
                <div className="flex items-center mt-4 md:mt-0">
                  {getStatusIcon(applicationStatus.status)}
                  <span className={`ml-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(applicationStatus.status)}`}>
                    {getStatusText(applicationStatus.status)}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {applicationStatus.steps.map((step, index) => (
                  <div key={step.id} className="flex items-start">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      step.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step.completed ? <CheckCircle size={16} /> : <Clock size={16} />}
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <h5 className={`font-medium ${step.completed ? 'text-slate-900' : 'text-slate-500'}`}>
                          {step.name}
                        </h5>
                        {step.date && (
                          <span className="text-sm text-slate-500 mt-1 sm:mt-0">
                            {new Date(step.date).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                      {step.completed && (
                        <p className="text-sm text-green-600 mt-1">Completed</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h5 className="font-bold text-slate-900 mb-3">Next Steps</h5>
                <ul className="space-y-2 text-sm text-slate-700">
                  {!applicationStatus.steps.find(s => s.id === 4 && s.completed) && (
                    <li className="flex items-center">
                      <Clock size={16} className="mr-2 text-blue-500" />
                      Complete the assessment
                    </li>
                  )}
                  {!applicationStatus.steps.find(s => s.id === 5 && s.completed) && (
                    <li className="flex items-center">
                      <Mail size={16} className="mr-2 text-blue-500" />
                      Await offer letter
                    </li>
                  )}
                  {!applicationStatus.steps.find(s => s.id === 6 && s.completed) && (
                    <li className="flex items-center">
                      <UserCheck size={16} className="mr-2 text-blue-500" />
                      Confirm enrollment
                    </li>
                  )}
                </ul>
              </div>
            </div>
          )}

          {!applicationStatus && (
            <div className="text-center py-8">
              <Calendar size={48} className="mx-auto text-slate-300 mb-4" />
              <p className="text-slate-500">Enter your application ID to track your admission status</p>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">How the Process Works</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-16 bottom-16 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 relative">
              <div className="relative md:mb-0">
                {/* Step 1 circle */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg z-10">
                  <span className="font-bold">1</span>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg relative">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 mt-8">
                    <FileText size={32} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Apply</h4>
                  <p className="text-slate-600 text-sm">Submit your application with required documents and information</p>
                </div>
              </div>
              
              <div className="relative md:mb-0">
                {/* Step 2 circle */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white shadow-lg z-10">
                  <span className="font-bold">2</span>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg relative">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 mt-8">
                    <UserCheck size={32} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Assess</h4>
                  <p className="text-slate-600 text-sm">Complete the assessment to evaluate academic readiness</p>
                </div>
              </div>
              
              <div className="relative md:mb-0">
                {/* Step 3 circle */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white shadow-lg z-10">
                  <span className="font-bold">3</span>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg relative">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600 mt-8">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Accept</h4>
                  <p className="text-slate-600 text-sm">Receive an offer and confirm your enrollment</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
            <h4 className="font-bold text-lg mb-2">Need Assistance?</h4>
            <p className="mb-4">
              Our admissions team is available to help you navigate the application process and answer any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Admissions
              </button>
              <button className="border border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Download Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdmissionTracker;