import { useState } from 'react';
import { Search, BookOpen, Users, Calendar, MapPin } from 'lucide-react';

function CourseFinder() {
  const [formData, setFormData] = useState({
    age: '',
    interests: [],
    schedule: '',
    location: ''
  });

  const ageGroups = [
    { value: '3-5', label: 'Early Years (3-5)' },
    { value: '5-7', label: 'Key Stage 1 (5-7)' },
    { value: '7-11', label: 'Key Stage 2 (7-11)' },
    { value: '11-14', label: 'Key Stage 3 (11-14)' },
    { value: '14-16', label: 'Key Stage 4 (14-16)' },
    { value: '16-18', label: 'Key Stage 5 (16-18)' }
  ];

  const interests = [
    { value: 'stem', label: 'STEM' },
    { value: 'arts', label: 'Arts & Music' },
    { value: 'languages', label: 'Languages' },
    { value: 'humanities', label: 'Humanities' },
    { value: 'sports', label: 'Sports & Wellness' },
    { value: 'leadership', label: 'Leadership & Entrepreneurship' }
  ];

  const schedules = [
    { value: 'full-time', label: 'Full-Time Program' },
    { value: 'part-time', label: 'Part-Time Program' },
    { value: 'flexible', label: 'Flexible Schedule' },
    { value: 'summer', label: 'Summer Program' }
  ];

  const locations = [
    { value: 'online', label: 'Online Learning' },
    { value: 'hybrid', label: 'Hybrid Model' },
    { value: 'campus', label: 'Campus-Based' },
    { value: 'international', label: 'International Program' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const updatedInterests = checked
        ? [...formData.interests, value]
        : formData.interests.filter(interest => interest !== value);
      setFormData(prev => ({
        ...prev,
        interests: updatedInterests
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Course recommendation based on: Age ${formData.age}, Interests: ${formData.interests.join(', ')}`);
  };

  const recommendedCourses = [
    {
      title: "Foundation Programme",
      age: "3-5 years",
      duration: "1 year",
      format: "Online",
      description: "Early childhood development with play-based learning"
    },
    {
      title: "Primary Curriculum",
      age: "5-11 years",
      duration: "6 years",
      format: "Online",
      description: "Complete UK National Curriculum for primary education"
    },
    {
      title: "IGCSE Preparation",
      age: "14-16 years",
      duration: "2 years",
      format: "Online",
      description: "International General Certificate of Secondary Education"
    },
    {
      title: "A-Levels",
      age: "16-18 years",
      duration: "2 years",
      format: "Online",
      description: "Advanced Level qualifications for university admission"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Course</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover the ideal program based on your child's age, interests, and learning preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Search className="mr-3 text-blue-600" size={24} />
              Course Finder Tool
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Child's Age Group</label>
                <select
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select age group</option>
                  {ageGroups.map((group) => (
                    <option key={group.value} value={group.value}>{group.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Interests & Strengths</label>
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest) => (
                    <label key={interest.value} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="checkbox"
                        name="interests"
                        value={interest.value}
                        onChange={handleInputChange}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{interest.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Schedule</label>
                <select
                  name="schedule"
                  value={formData.schedule}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select schedule</option>
                  {schedules.map((sched) => (
                    <option key={sched.value} value={sched.value}>{sched.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Learning Location</label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select location</option>
                  {locations.map((loc) => (
                    <option key={loc.value} value={loc.value}>{loc.label}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Search className="mr-2" size={18} />
                Find Recommended Courses
              </button>
            </form>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Recommended For You</h3>
            
            <div className="space-y-6">
              {recommendedCourses.map((course, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-900">{course.title}</h4>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {course.format}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Users size={14} className="mr-1" />
                    <span>{course.age}</span>
                    <Calendar size={14} className="ml-3 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-4">{course.description}</p>
                  
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Learn More →
                  </button>
                </div>
              ))}
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">Need Personalized Guidance?</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Our education consultants are ready to discuss the best program for your child's unique needs.
                </p>
                <button className="bg-gray-100 text-gray-800 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseFinder;