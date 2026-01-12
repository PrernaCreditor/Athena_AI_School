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
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Expert Teaching Faculty</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Highly qualified educators with specialized training in British curriculum</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {qualifications.map((qual, index) => (
            <div key={index} className="flex items-center bg-blue-50 px-6 py-3 rounded-full">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <qual.icon size={20} />
              </div>
              <div>
                <div className="text-xl font-bold text-blue-600">{qual.value}</div>
                <div className="text-gray-700 text-sm font-medium">{qual.title}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Areas of Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="bg-white px-5 py-3 rounded-lg shadow-sm border border-gray-200">
                <span className="font-medium text-gray-800">{area}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-blue-100">Satisfaction Rate</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-green-100">Qualified Teachers</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-2xl p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-purple-100">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherQualifications;