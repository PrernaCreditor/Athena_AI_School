import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, BookOpen, Users, Award } from 'lucide-react';

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      category: "General",
      icon: HelpCircle,
      items: [
        {
          question: "What is the British Curriculum?",
          answer: "The British Curriculum follows the UK National Curriculum framework, which is recognized globally for its rigor and comprehensive approach to education. It emphasizes critical thinking, creativity, and analytical skills."
        },
        {
          question: "How does online learning work?",
          answer: "Our online learning platform provides live interactive classes, recorded lessons, and comprehensive resources. Students attend scheduled classes with qualified teachers and access materials 24/7 for flexible learning."
        },
        {
          question: "What age groups do you serve?",
          answer: "We serve students from ages 3 to 18, covering Early Years (3-5), Primary (5-11), Secondary (11-14), and Senior School (14-18) programs."
        }
      ]
    },
    {
      category: "Curriculum",
      icon: BookOpen,
      items: [
        {
          question: "Which qualifications do students receive?",
          answer: "Students receive internationally recognized qualifications including IGCSE, AS and A-Levels, which are accepted by universities worldwide. Our curriculum aligns with UK National Curriculum standards."
        },
        {
          question: "How is the curriculum delivered online?",
          answer: "Our curriculum is delivered through live interactive classes, multimedia resources, virtual labs, and collaborative projects. Teachers use specialized online pedagogy to ensure engagement and comprehension."
        },
        {
          question: "Are the subjects the same as traditional schools?",
          answer: "Yes, we offer the same core and foundation subjects as traditional British schools, including English, Mathematics, Sciences, Humanities, Languages, Arts, and Computing, adapted for online delivery."
        }
      ]
    },
    {
      category: "Teachers",
      icon: Users,
      items: [
        {
          question: "What qualifications do your teachers have?",
          answer: "All our teachers are UK-qualified and certified to teach the British Curriculum. They have extensive experience in online pedagogy and undergo continuous professional development."
        },
        {
          question: "How are teachers trained for online learning?",
          answer: "Our teachers undergo specialized training in online pedagogy, digital learning tools, and virtual classroom management. They participate in monthly training sessions and quarterly performance reviews."
        },
        {
          question: "Can students interact with teachers?",
          answer: "Absolutely! Students have live interactions with teachers during classes, can schedule one-on-one sessions, and have access to teachers during designated office hours for additional support."
        }
      ]
    },
    {
      category: "Admissions",
      icon: Award,
      items: [
        {
          question: "How do I apply?",
          answer: "Visit our admissions page to fill out the application form. You'll need to provide academic records, complete an assessment, and participate in a virtual interview with our admissions team."
        },
        {
          question: "What documents are required?",
          answer: "You'll need to provide previous academic transcripts, proof of identity, immunization records, and complete our online assessment. Additional documents may be required based on the grade level."
        },
        {
          question: "Is there an entrance exam?",
          answer: "Yes, we conduct age-appropriate assessments to evaluate the student's current academic level and ensure proper placement in our curriculum. This helps us customize the learning experience."
        }
      ]
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Find answers to common questions about our British curriculum online school</p>
        </div>
        
        <div className="space-y-6">
          {faqData.map((category, catIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={catIndex} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-blue-50 px-6 py-4 border-b border-gray-200 flex items-center">
                  <IconComponent size={20} className="text-blue-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900">{category.category}</h3>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <button
                        onClick={() => toggleAccordion(`${catIndex}-${itemIndex}`)}
                        className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-900">{item.question}</span>
                        {openIndex === `${catIndex}-${itemIndex}` ? (
                          <ChevronUp size={20} className="text-gray-500" />
                        ) : (
                          <ChevronDown size={20} className="text-gray-500" />
                        )}
                      </button>
                      
                      {openIndex === `${catIndex}-${itemIndex}` && (
                        <div className="px-6 pb-6 text-gray-600">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-blue-100 mb-6">
              Our admissions team is ready to assist you with any additional questions about our 
              British curriculum, programs, or enrollment process.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Contact Admissions Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;