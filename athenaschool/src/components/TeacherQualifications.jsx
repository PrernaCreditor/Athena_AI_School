import { Award, GraduationCap, Globe, Users } from 'lucide-react';

function TeacherQualifications() {
  const qualifications = [
    {
      icon: GraduationCap,
      title: "UK-Qualified Teachers",
      description: "All teachers hold UK teaching qualifications and are certified to teach the British curriculum.",
      value: "100%"
    },
    {
      icon: Award,
      title: "Extensive Training",
      description: "Teachers undergo specialized training in online pedagogy and digital learning tools.",
      value: "40+ hrs"
    },
    {
      icon: Globe,
      title: "International Experience",
      description: "Our faculty brings diverse international teaching experience and perspectives.",
      value: "25+ countries"
    },
    {
      icon: Users,
      title: "Student Support",
      description: "Dedicated team for student welfare and academic guidance.",
      value: "2:1 ratio"
    }
  ];

  const expertiseAreas = [
    "British Curriculum Mastery",
    "Online Pedagogy",
    "Child Psychology",
    "Digital Literacy",
    "Differentiated Instruction",
    "Assessment Strategies"
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Expert Teaching Faculty</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Highly qualified educators with specialized training in British curriculum</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {qualifications.map((qual, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <qual.icon size={32} />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{qual.value}</div>
              <h3 className="font-bold text-gray-900 mb-2">{qual.title}</h3>
              <p className="text-gray-600 text-sm">{qual.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Areas of Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="flex items-center p-4 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="font-medium text-gray-900">{area}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Continuous Professional Development</h3>
            <p className="text-blue-100 mb-6">
              Our teachers participate in ongoing training programs to stay current with the latest 
              educational methodologies and technological advances in online learning.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold">Monthly</div>
                <div className="text-blue-200">Training Sessions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Quarterly</div>
                <div className="text-blue-200">Performance Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Annual</div>
                <div className="text-blue-200">Certification Updates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherQualifications;