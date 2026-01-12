import { Shield, Award, Users, Star } from 'lucide-react';

function TrustElements() {
  const accreditations = [
    {
      name: "Cambridge International",
      description: "Official Cambridge International School",
      logo: "CI"
    },
    {
      name: "Edexcel",
      description: "Approved Edexcel examination center",
      logo: "ED"
    },
    {
      name: "British Council",
      description: "Recognized by British Council standards",
      logo: "BC"
    },
    {
      name: "Cognia",
      description: "Cognia-accredited educational institution",
      logo: "CO"
    }
  ];

  const awards = [
    {
      title: "Best Online School 2023",
      organization: "Global Education Awards",
      year: "2023"
    },
    {
      title: "Excellence in Digital Learning",
      organization: "International Education Forum",
      year: "2023"
    },
    {
      title: "Top 10 Online Schools",
      organization: "Education Excellence Rankings",
      year: "2023"
    },
    {
      title: "Innovation in Education",
      organization: "Global EdTech Awards",
      year: "2022"
    }
  ];

  const partnerships = [
    {
      name: "University of London",
      description: "Pathway partner for undergraduate programs",
      logo: "UL"
    },
    {
      name: "Cambridge Assessment",
      description: "Official assessment partner",
      logo: "CA"
    },
    {
      name: "Microsoft Education",
      description: "Technology integration partner",
      logo: "MS"
    },
    {
      name: "UNESCO Associated Schools",
      description: "Member of global education network",
      logo: "UN"
    }
  ];

  const safetyCertifications = [
    {
      name: "ISO 27001",
      description: "Information Security Management",
      icon: "🔒"
    },
    {
      name: "Child Safety Certified",
      description: "Verified child protection policies",
      icon: "🛡️"
    },
    {
      name: "GDPR Compliant",
      description: "Data protection and privacy compliant",
      icon: "📋"
    },
    {
      name: "Safe Spaces Certified",
      description: "Secure online learning environment",
      icon: "🔐"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Thousands Worldwide</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Recognized accreditations, prestigious awards, and strong partnerships</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center bg-blue-50 px-6 py-3 rounded-full">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Shield size={20} />
            </div>
            <div>
              <div className="text-xl font-bold text-blue-600">5000+</div>
              <div className="text-gray-700 text-sm font-medium">Students</div>
            </div>
          </div>
          <div className="flex items-center bg-green-50 px-6 py-3 rounded-full">
            <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Award size={20} />
            </div>
            <div>
              <div className="text-xl font-bold text-green-600">98%</div>
              <div className="text-gray-700 text-sm font-medium">Success Rate</div>
            </div>
          </div>
          <div className="flex items-center bg-purple-50 px-6 py-3 rounded-full">
            <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Users size={20} />
            </div>
            <div>
              <div className="text-xl font-bold text-purple-600">50+</div>
              <div className="text-gray-700 text-sm font-medium">Countries</div>
            </div>
          </div>
          <div className="flex items-center bg-yellow-50 px-6 py-3 rounded-full">
            <div className="bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Star size={20} />
            </div>
            <div>
              <div className="text-xl font-bold text-yellow-600">200+</div>
              <div className="text-gray-700 text-sm font-medium">Teachers</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Accreditations & Partnerships</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {accreditations.map((acc, index) => (
              <div key={index} className="bg-white px-5 py-3 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-lg font-bold text-gray-800">{acc.logo}</div>
                <div className="text-sm text-gray-600 mt-1">{acc.name}</div>
              </div>
            ))}
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-white px-5 py-3 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-lg font-bold text-gray-800">{partner.logo}</div>
                <div className="text-sm text-gray-600 mt-1">{partner.name}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">4</div>
            <div className="text-blue-100">Accreditations</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">4</div>
            <div className="text-green-100">Awards</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-2xl p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">4</div>
            <div className="text-purple-100">Partnerships</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustElements;