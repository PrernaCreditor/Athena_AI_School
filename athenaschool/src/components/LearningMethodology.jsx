import { Brain, Target, Users, Lightbulb } from 'lucide-react';

function LearningMethodology() {
  const methodologies = [
    {
      icon: Brain,
      title: "Personalized Learning",
      description: "Customized learning paths that adapt to each student's pace and learning style.",
      details: "Using AI-driven assessments to identify strengths and areas for improvement."
    },
    {
      icon: Target,
      title: "Competency-Based",
      description: "Focus on mastering key concepts before progressing to next level.",
      details: "Students advance only after demonstrating understanding of core concepts."
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Interactive group projects and peer-to-peer learning experiences.",
      details: "Virtual classrooms that encourage teamwork and communication skills."
    },
    {
      icon: Lightbulb,
      title: "Inquiry-Based",
      description: "Encouraging curiosity through questioning and investigation.",
      details: "Developing critical thinking and research skills through hands-on exploration."
    }
  ];

  const learningStages = [
    {
      stage: "Engage",
      description: "Capture interest with thought-provoking questions and real-world connections",
      icon: "🔍"
    },
    {
      stage: "Explore",
      description: "Hands-on activities and investigations to build understanding",
      icon: "🧪"
    },
    {
      stage: "Explain",
      description: "Clear instruction and guidance to formalize learning",
      icon: "📚"
    },
    {
      stage: "Elaborate",
      description: "Application of knowledge to new situations and challenges",
      icon: "🚀"
    },
    {
      stage: "Evaluate",
      description: "Ongoing assessment to measure understanding and progress",
      icon: "✅"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Learning Methodology</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Evidence-based approaches that foster deep understanding and critical thinking</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Proven Teaching Approaches</h3>
            <p className="text-gray-600 mb-8">
              Our methodology combines the best of British educational traditions with modern pedagogical 
              innovations, ensuring students receive a well-rounded education that prepares them for 
              future academic and professional success.
            </p>
            
            <div className="space-y-6">
              {methodologies.map((method, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 flex-shrink-0 mr-4">
                    <method.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{method.title}</h4>
                    <p className="text-gray-700 text-sm mb-1">{method.description}</p>
                    <p className="text-gray-600 text-xs">{method.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">The 5E Learning Cycle</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {learningStages.map((stage, index) => (
                <div key={index} className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl mb-2">{stage.icon}</div>
                  <div className="font-semibold text-gray-900 text-sm">{stage.stage}</div>
                  <div className="text-xs text-gray-600 mt-1">{stage.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Student Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-200">Parent Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningMethodology;