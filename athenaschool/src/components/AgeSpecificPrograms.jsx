import { Baby, BookOpen, GraduationCap, Users } from 'lucide-react';

function AgeSpecificPrograms() {
  const programs = [
    {
      icon: Baby,
      title: "Early Years",
      age: "Ages 3-5",
      description: "Foundation stage following the Early Years Foundation Stage (EYFS) framework.",
      features: ["Play-based learning", "Language development", "Social skills", "Pre-numeracy concepts"]
    },
    {
      icon: BookOpen,
      title: "Primary",
      age: "Ages 5-11",
      description: "Key Stages 1 and 2 covering the core and foundation subjects of the National Curriculum.",
      features: ["Core subjects mastery", "Creative arts", "Science exploration", "Literature appreciation"]
    },
    {
      icon: GraduationCap,
      title: "Secondary",
      age: "Ages 11-14",
      description: "Key Stage 3 preparing students for IGCSE and other international qualifications.",
      features: ["Advanced subject choices", "Critical thinking", "Research skills", "Exam preparation"]
    },
    {
      icon: Users,
      title: "Senior School",
      age: "Ages 14-18",
      description: "Key Stage 4 and A-Level preparation with focus on university readiness.",
      features: ["IGCSE programs", "A-Level courses", "University counseling", "Career guidance"]
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Age-Specific Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Curriculum tailored to each developmental stage</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-4 rounded-xl text-blue-600 flex-shrink-0">
                  <program.icon size={32} />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {program.age}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AgeSpecificPrograms;