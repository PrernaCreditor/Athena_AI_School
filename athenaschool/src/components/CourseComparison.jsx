import { useState } from 'react';

function CourseComparison() {
  const [selectedCourses, setSelectedCourses] = useState(['nursery', 'primary']);

  // Course data
  const courses = {
    nursery: {
      name: 'Nursery (Ages 3-4)',
      ageRange: '3-4 years',
      curriculum: 'Early Years Foundation Stage',
      subjects: ['Literacy', 'Numeracy', 'Creative Arts', 'Physical Dev.', 'Social Skills'],
      classSize: '12-15 students',
      teacherRatio: '1:8',
      schedule: 'Mon-Fri, 3 hours/day',
      assessment: 'Observation-based',
      fee: '$2,500/year'
    },
    primary: {
      name: 'Primary (Grades 1-5)',
      ageRange: '6-11 years',
      curriculum: 'British National Curriculum',
      subjects: ['English', 'Mathematics', 'Science', 'History', 'Geography', 'Art', 'Music', 'PE'],
      classSize: '15-20 students',
      teacherRatio: '1:10',
      schedule: 'Mon-Fri, 6 hours/day',
      assessment: 'Termly assessments',
      fee: '$3,500-$4,300/year'
    },
    secondary: {
      name: 'Secondary (Grades 6-10)',
      ageRange: '11-16 years',
      curriculum: 'IGCSE Program',
      subjects: ['Core Subjects', 'Elective Options', 'Laboratory Sciences', 'Languages', 'Humanities'],
      classSize: '15-22 students',
      teacherRatio: '1:12',
      schedule: 'Mon-Fri, 7 hours/day',
      assessment: 'IGCSE Exams',
      fee: '$4,500-$5,300/year'
    },
    senior: {
      name: 'Senior (Grades 11-12)',
      ageRange: '16-18 years',
      curriculum: 'AS/A-Level',
      subjects: ['Specialized Subjects', 'Research Projects', 'Extended Essay', 'Community Service'],
      classSize: '10-15 students',
      teacherRatio: '1:8',
      schedule: 'Mon-Fri, 8 hours/day',
      assessment: 'A-Level Exams',
      fee: '$5,500-$5,700/year'
    }
  };

  const courseOptions = Object.keys(courses);

  const toggleCourseSelection = (courseId) => {
    if (selectedCourses.includes(courseId)) {
      if (selectedCourses.length > 2) {
        setSelectedCourses(selectedCourses.filter(id => id !== courseId));
      }
    } else {
      if (selectedCourses.length < 3) {
        setSelectedCourses([...selectedCourses, courseId]);
      }
    }
  };

  const features = [
    { id: 'name', label: 'Program', accessor: 'name' },
    { id: 'ageRange', label: 'Age Range', accessor: 'ageRange' },
    { id: 'curriculum', label: 'Curriculum', accessor: 'curriculum' },
    { id: 'subjects', label: 'Subjects', accessor: 'subjects' },
    { id: 'classSize', label: 'Class Size', accessor: 'classSize' },
    { id: 'teacherRatio', label: 'Teacher Ratio', accessor: 'teacherRatio' },
    { id: 'schedule', label: 'Schedule', accessor: 'schedule' },
    { id: 'assessment', label: 'Assessment', accessor: 'assessment' },
    { id: 'fee', label: 'Annual Fee', accessor: 'fee' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Course Comparison Tool</h3>
      
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Select Courses to Compare</h4>
        <div className="flex flex-wrap gap-2">
          {courseOptions.map((courseId) => (
            <button
              key={courseId}
              onClick={() => toggleCourseSelection(courseId)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCourses.includes(courseId)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } ${selectedCourses.length >= 3 && !selectedCourses.includes(courseId) ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={selectedCourses.length >= 3 && !selectedCourses.includes(courseId)}
            >
              {courses[courseId].name}
              {selectedCourses.includes(courseId) && (
                <span className="ml-1">✕</span>
              )}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-1">Select up to 3 courses to compare</p>
      </div>
      
      {selectedCourses.length > 1 && (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 border-b">Feature</th>
                {selectedCourses.map((courseId) => (
                  <th key={courseId} className="text-center py-3 px-4 font-semibold text-gray-900 border-b">
                    {courses[courseId].name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.id} className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium text-gray-700">{feature.label}</td>
                  {selectedCourses.map((courseId) => {
                    const value = courses[courseId][feature.accessor];
                    return (
                      <td key={`${courseId}-${feature.id}`} className="py-3 px-4 text-center">
                        {Array.isArray(value) ? (
                          <ul className="list-disc list-inside text-left mx-auto max-w-[150px]">
                            {value.slice(0, 3).map((item, idx) => (
                              <li key={idx} className="text-sm">{item}</li>
                            ))}
                            {value.length > 3 && (
                              <li className="text-sm">+{value.length - 3} more</li>
                            )}
                          </ul>
                        ) : (
                          <div className="text-sm">{value}</div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {selectedCourses.length < 2 && (
        <div className="text-center py-8 text-gray-500">
          Please select at least 2 courses to compare
        </div>
      )}
    </div>
  );
}

export default CourseComparison;