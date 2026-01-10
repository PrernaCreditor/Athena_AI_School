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
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Thousands Worldwide</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Recognized accreditations, prestigious awards, and strong partnerships</p>
        </div>

        {/* Accreditations */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
              <Shield size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Accreditations</h3>
            <p className="text-gray-600">Globally recognized educational standards</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accreditations.map((acc, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {acc.logo}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{acc.name}</h4>
                <p className="text-gray-600 text-sm">{acc.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-600">
              <Award size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Awards & Recognition</h3>
            <p className="text-gray-600">Industry recognition for excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-yellow-50 to-white rounded-xl border border-gray-200">
                <div className="flex items-center justify-center mb-4">
                  <Star className="text-yellow-500 fill-current" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{award.title}</h4>
                <p className="text-gray-700 text-sm mb-1">{award.organization}</p>
                <p className="text-blue-600 font-medium text-sm">{award.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnerships */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
              <Users size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Partnerships</h3>
            <p className="text-gray-600">Leading institutions and organizations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-gray-200">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {partner.logo}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{partner.name}</h4>
                <p className="text-gray-600 text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Certifications */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
              <Shield size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Safety Certifications</h3>
            <p className="text-gray-600">Committed to student safety and security</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyCertifications.map((cert, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-red-50 to-white rounded-xl border border-gray-200">
                <div className="text-3xl mb-4">{cert.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustElements;