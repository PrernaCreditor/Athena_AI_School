import React, { useEffect } from 'react';
import { FaBars, FaGraduationCap, FaBullseye, FaEye, FaUserTie, FaLightbulb, FaHeart, FaUsers, FaTrophy, FaGlobe, FaRocket, FaAward, FaStar, FaCertificate, FaCheckCircle, FaUniversity, FaRobot, FaFlask, FaBook, FaDesktop, FaBasketballBall, FaPalette, FaUtensils, FaChartLine, FaBalanceScale, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import Footer from './Footer';

const AboutContent = () => {
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.default.init({
          duration: 1000,
          once: true
        });
      });
    }

    // Interactive milestone animation
    const milestones = document.querySelectorAll('.milestone');
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };

    const milestoneObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    milestones.forEach(milestone => {
      milestone.style.opacity = '0';
      milestone.style.transform = 'translateY(20px)';
      milestone.style.transition = 'all 0.6s ease';
      milestoneObserver.observe(milestone);
    });

    // Smooth scrolling
    const handleSmoothScroll = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      milestoneObserver.disconnect();
    };
  }, []);

  return (
    <div className="font-sans">
      {/* Top Bar */}
      <div className="bg-blue-800 text-white py-2">
        <div className="container mx-auto px-4 text-center md:text-left">
          ADMISSIONS OPEN FOR 2026-2027 | Call us at: +919663213636
        </div>
      </div>

      
      {/* About Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Wisdom School</h1>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              India's First AI & English Grammar School - Shaping Future Leaders with Innovation and Excellence
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: '15+', label: 'Years of Excellence' },
                { value: '7500+', label: 'Students' },
                { value: '500+', label: 'Cities' },
                { value: '78+', label: 'Countries' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-blue-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 text-lg">A Journey of Educational Innovation and Excellence</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div data-aos="fade-right">
              <p className="text-gray-700 mb-4">
                Founded in 2010, Wisdom School emerged from a vision to revolutionize education in India by integrating cutting-edge technology with traditional academic excellence. Our journey began with a simple yet powerful idea: to create an educational institution that prepares students not just for exams, but for life.
              </p>
              <p className="text-gray-700 mb-4">
                Over the past 15 years, we have grown from a small school with 50 students to a premier educational institution with over 7500 students across multiple campuses. Our commitment to innovation led us to become India's First AI & English Grammar School, pioneering the integration of artificial intelligence in education.
              </p>
              <p className="text-gray-700">
                Today, Wisdom School stands as a testament to what can be achieved when passion meets purpose. We continue to push boundaries, embrace new technologies, and redefine what education can be in the 21st century.
              </p>
            </div>
            
            <div data-aos="fade-left" className="bg-blue-100 p-12 rounded-2xl text-center">
              <div className="text-blue-600 mb-6">
                <FaGraduationCap className="text-8xl mx-auto" />
              </div>
              <span className="text-2xl font-semibold text-blue-900">15 Years of Educational Excellence</span>
            </div>
          </div>
          
          <div className="space-y-8">
            {[
              { year: '2010', title: 'Foundation', desc: 'Wisdom School established with 50 students' },
              { year: '2015', title: 'Expansion', desc: 'Opened new campus and introduced international curriculum' },
              { year: '2020', title: 'Innovation', desc: 'Became India\'s First AI & English Grammar School' },
              { year: '2025', title: 'Excellence', desc: '7500+ students across 500+ cities in 78+ countries' }
            ].map((milestone, index) => (
              <div 
                key={index} 
                className="milestone bg-white p-6 rounded-xl shadow-lg flex items-center space-x-6"
              >
                <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-xl">
                  {milestone.year}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">{milestone.title}</h4>
                  <p className="text-gray-600">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div 
              data-aos="fade-up" 
              data-aos-delay="100"
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl"
            >
              <div className="text-blue-600 mb-4">
                <FaBullseye className="text-5xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide transformative education that empowers students to become critical thinkers, lifelong learners, and responsible global citizens through innovative teaching methods and cutting-edge technology integration.
              </p>
            </div>
            
            <div 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl"
            >
              <div className="text-indigo-600 mb-4">
                <FaEye className="text-5xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be a global leader in education, recognized for our innovative approach to learning, commitment to excellence, and ability to prepare students for the challenges and opportunities of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-gray-600 text-lg">Meet the Visionaries Behind Wisdom School</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Dr. Rajesh Kumar', title: 'Founder & CEO', desc: 'Visionary educator with 25+ years of experience in educational innovation and technology integration.' },
              { name: 'Ms. Priya Sharma', title: 'Principal', desc: 'Academic leader passionate about creating inclusive learning environments and fostering student excellence.' },
              { name: 'Mr. Amit Patel', title: 'Academic Director', desc: 'Curriculum specialist focused on integrating AI and technology into traditional education.' },
              { name: 'Dr. Sarah Johnson', title: 'Director of Innovation', desc: 'Technology expert leading the integration of AI and digital learning platforms.' }
            ].map((leader, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="bg-blue-100 p-8 text-center">
                  <div className="text-blue-600">
                    <FaUserTie className="text-8xl mx-auto" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h4>
                  <p className="text-blue-600 font-medium mb-3">{leader.title}</p>
                  <p className="text-gray-600">{leader.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Ethos */}
      <section id="values" className="py-20">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Values & Ethos</h2>
            <p className="text-gray-600 text-lg">The Core Principles That Guide Us</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FaLightbulb, title: 'Innovation', desc: 'Embracing new technologies and teaching methods to prepare students for the future' },
              { icon: FaHeart, title: 'Integrity', desc: 'Building character through honesty, ethics, and moral responsibility' },
              { icon: FaUsers, title: 'Inclusivity', desc: 'Creating a diverse and welcoming environment for all students and staff' },
              { icon: FaTrophy, title: 'Excellence', desc: 'Striving for the highest standards in academics, sports, and personal development' },
              { icon: FaGlobe, title: 'Global Citizenship', desc: 'Preparing students to be responsible global citizens with cultural awareness' },
              { icon: FaRocket, title: 'Growth Mindset', desc: 'Fostering continuous learning, adaptability, and resilience in every student' }
            ].map((value, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="text-blue-600 mb-4">
                  <value.icon className="text-5xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-gray-600 text-lg">Celebrating Excellence and Recognition</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div data-aos="fade-right" className="grid grid-cols-2 gap-6">
              {[
                { icon: FaAward, value: '50+', label: 'National Awards' },
                { icon: FaTrophy, value: '100%', label: 'University Placement' },
                { icon: FaStar, value: '4.8/5', label: 'Parent Satisfaction' },
                { icon: FaCertificate, value: '15+', label: 'International Accreditations' }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-blue-600 mb-3">
                    <stat.icon className="text-4xl mx-auto" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div data-aos="fade-left" className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Recognitions</h3>
              <ul className="space-y-3">
                {[
                  'Best AI-Integrated School in India - 2023',
                  'Excellence in Educational Technology Award - 2022',
                  'Top 10 Schools in Digital Learning - 2021',
                  'Cambridge International School Certification - 2020',
                  'Edexcel Approved Center - 2019',
                  'ISO 9001:2015 Certified Institution',
                  'Green School Award for Sustainability',
                  'Innovation in Education Award - 2018'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section id="partners" className="py-20">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-gray-600 text-lg">Collaborating for Educational Excellence</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Academic Partners',
                icon: FaUniversity,
                partners: ['Cambridge Assessment International Education', 'Edexcel International', 'College Board (AP Programs)']
              },
              {
                title: 'Technology Partners',
                icon: FaRobot,
                partners: ['Google for Education', 'Microsoft Education', 'IBM Education']
              },
              {
                title: 'Global Collaborations',
                icon: FaGlobe,
                partners: ['UNESCO Schools Network', 'International Baccalaureate', 'Round Square Organization']
              }
            ].map((category, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <category.icon className="text-blue-600 mr-3" />
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.partners.map((partner, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                      <category.icon className="text-gray-400 flex-shrink-0" />
                      <span className="text-gray-700">{partner}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section id="facilities" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Campus Facilities</h2>
            <p className="text-gray-600 text-lg">State-of-the-Art Infrastructure for Holistic Development</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FaFlask, title: 'Science Labs', desc: 'Modern laboratories for Physics, Chemistry, Biology, and Computer Science with advanced equipment' },
              { icon: FaBook, title: 'Digital Library', desc: 'Extensive collection of books, e-resources, and study materials accessible 24/7' },
              { icon: FaDesktop, title: 'Computer Labs', desc: 'High-tech computer labs with latest software and high-speed internet connectivity' },
              { icon: FaBasketballBall, title: 'Sports Complex', desc: 'Indoor and outdoor sports facilities including swimming pool, basketball courts, and playgrounds' },
              { icon: FaPalette, title: 'Art Studios', desc: 'Creative spaces for visual arts, music, dance, and performing arts with professional instructors' },
              { icon: FaUtensils, title: 'Cafeteria', desc: 'Hygienic and nutritious meal options with diverse menu choices for all dietary preferences' }
            ].map((facility, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4">
                  <facility.icon className="text-5xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                <p className="text-gray-600">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-20">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-gray-600 text-lg">Build Your Career at Wisdom School</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Work With Us?</h3>
              <p className="text-gray-700 mb-4">
                At Wisdom School, we believe that great education starts with great educators. We offer a dynamic work environment where innovation, professional growth, and work-life balance are prioritized.
              </p>
              <p className="text-gray-700 mb-8">
                Join our team of passionate educators and be part of a movement that's shaping the future of education in India.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: FaChartLine, label: 'Professional Development' },
                  { icon: FaHeart, label: 'Health & Wellness' },
                  { icon: FaBalanceScale, label: 'Work-Life Balance' },
                  { icon: FaUsers, label: 'Collaborative Culture' }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                    <benefit.icon className="text-blue-600" />
                    <span className="text-gray-700 font-medium">{benefit.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div data-aos="fade-left" className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Openings</h3>
              
              <div className="space-y-6 mb-8">
                {[
                  { title: 'Senior Mathematics Teacher', exp: '5-8 years', location: 'Bangalore' },
                  { title: 'AI & Computer Science Instructor', exp: '3-5 years', location: 'Bangalore' },
                  { title: 'English Language Specialist', exp: '4-6 years', location: 'Bangalore' },
                  { title: 'Primary School Coordinator', exp: '6-10 years', location: 'Bangalore' }
                ].map((position, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{position.title}</h4>
                    <p className="text-gray-600">Experience: {position.exp} | Location: {position.location}</p>
                  </div>
                ))}
              </div>
              
              <a 
                href="mailto:careers@wisdomschool.in"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium text-center w-full"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Join the Wisdom Community</h2>
            <p className="text-xl mb-10 text-blue-200">
              Experience education that prepares students for tomorrow's challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/admissions.html"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-300 font-bold text-lg"
              >
                Apply for Admission
              </a>
              <a 
                href="#"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-300 font-bold text-lg"
              >
                Schedule a Visit
              </a>
            </div>
          </div>
        </div>
      </section>

      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/7078049533"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-40"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
      
      <Footer />
    </div>
  );
};

export default AboutContent;
