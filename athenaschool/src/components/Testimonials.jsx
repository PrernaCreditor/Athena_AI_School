import React, { useState } from 'react';
import backgroundImage from '../assets/6247537.jpg';
import stripImage from '../assets/6247537.jpg';
import successStoryImage from '../assets/10681.jpg';
import robotImage from '../assets/robot-decorating-with-wallpaper.jpg';
import futureReadyImage from '../assets/3d-render-robot-with-books.jpg';
import anytimeLearningImage from '../assets/robot-with-document-folders.jpg';
import relxroImage from '../assets/relxro.webp.webp';
import { 
  Star, 
  Clock, 
  GraduationCap, 
  Monitor, 
  Quote, 
  ArrowRight, 
  Play, 
  Award, 
  Users,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Target,
  Sparkles,
  Trophy,
  Brain,
  Zap,
  TargetIcon
} from 'lucide-react';

// Student Testimonial Data
const testimonials = [
  {
    id: 1,
    name: "Divith Reddy",
    age: "8 years old",
    quote: "An 8-year-old prodigy, Divith, recently won the U-8 World Chess Championship in Italy. With his love for chess, he is determined to become the world's youngest Grandmaster.",
    tag: "Chess Champion",
    achievements: ["World Champion", "Chess Prodigy", "Math Genius"],
    rating: 5,
    videoUrl: "#",
    icon: <Trophy className="w-6 h-6" />,
    color: "from-sky-500 to-sky-400",
    bgColor: "bg-gradient-to-br from-sky-50/40 via-white to-white",
    accentColor: "text-sky-600",
    gradientStart: "#0ea5e9",
    gradientEnd: "#38bdf8"
  },
  {
    id: 2,
    name: "Keya Hatkar",
    age: "13 years old",
    quote: "Thirteen-year-old Keya, recipient of the prestigious Pradhan Mantri Rashtriya Bal Puraskar, is an award-winning author, artist, and social impact entrepreneur.",
    tag: "Award Winner",
    achievements: ["National Award", "Author", "Social Entrepreneur"],
    rating: 5,
    videoUrl: "#",
    icon: <Award className="w-6 h-6" />,
    color: "from-blue-950 to-blue-900",
    bgColor: "bg-gradient-to-br from-blue-50/30 via-white to-white",
    accentColor: "text-blue-950",
    gradientStart: "#6366f1",
    gradientEnd: "#818cf8"
  },
  {
    id: 3,
    name: "Anngad Maaholay",
    age: "11 years old",
    quote: "An 11-year-old actor from Mumbai, Anngad is celebrated for his standout roles in Yeh Meri Family and Ram Setu.",
    tag: "Actor",
    achievements: ["TV Star", "Film Actor", "Child Artist"],
    rating: 4.5,
    videoUrl: "#",
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-sky-500 to-sky-400",
    bgColor: "bg-gradient-to-br from-sky-50/30 via-white to-white",
    accentColor: "text-sky-600",
    gradientStart: "#0ea5e9",
    gradientEnd: "#38bdf8"
  },
  {
    id: 4,
    name: "Priya Sharma",
    age: "14 years old",
    quote: "Priya developed her own AI model at age 14 and won multiple national science competitions.",
    tag: "AI Prodigy",
    achievements: ["AI Developer", "Science Winner", "Tech Innovator"],
    rating: 5,
    videoUrl: "#",
    icon: <Brain className="w-6 h-6" />,
    color: "from-blue-950 to-blue-900",
    bgColor: "bg-gradient-to-br from-blue-50/40 via-white to-white",
    accentColor: "text-blue-950",
    gradientStart: "#6366f1",
    gradientEnd: "#818cf8"
  }
];

// Feature Cards Data
const features = [
  {
    id: 1,
    icon: <Monitor className="w-8 h-8" />,
    title: "Technology Driven Learning",
    description: "Our Online Learning School provides a seamless, tech-driven learning experience with progress tracking and interactive tools.",
    gradient: "from-sky-50 to-sky-100",
    stats: "AI-Powered",
    link: "#",
    iconColor: "text-sky-600",
    bgColor: "bg-gradient-to-br from-sky-50/40 via-white to-white",
    color: "from-sky-500 to-sky-400",
    backgroundImage: robotImage
  },
  {
    id: 2,
    icon: <Clock className="w-8 h-8" />,
    title: "Anytime Learning",
    description: "With over 1,250 hours of live classes daily, all sessions are recorded for flexible, on-demand learning.",
    gradient: "from-blue-50 to-blue-100",
    stats: "1,250+ Hours",
    link: "#",
    iconColor: "text-blue-950",
    bgColor: "bg-gradient-to-br from-blue-50/30 via-white to-white",
    color: "from-blue-950 to-blue-900",
    backgroundImage: anytimeLearningImage
  },
  {
    id: 3,
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Future Ready Education",
    description: "We prepare students for the future with skills-based learning, critical thinking, and problem-solving abilities.",
    gradient: "from-sky-50 to-sky-100",
    stats: "21st Century Skills",
    link: "#",
    iconColor: "text-sky-600",
    bgColor: "bg-gradient-to-br from-sky-50/40 via-white to-white",
    color: "from-sky-500 to-sky-400",
    backgroundImage: futureReadyImage
  },
  {
    id: 4,
    icon: <Target className="w-8 h-8" />,
    title: "Personalized Curriculum",
    description: "Tailored learning paths for each student based on their interests, strengths, and career aspirations.",
    gradient: "from-blue-50 to-blue-100",
    stats: "100% Customized",
    link: "#",
    iconColor: "text-blue-950",
    bgColor: "bg-gradient-to-br from-blue-50/30 via-white to-white",
    color: "from-blue-950 to-blue-900",
    backgroundImage: relxroImage
  }
];

// Statistics Data
const stats = [
  { value: "98%", label: "Student Success Rate", icon: <TargetIcon className="w-6 h-6" />, color: "text-sky-600" },
  { value: "1,250+", label: "Daily Learning Hours", icon: <Clock className="w-6 h-6" />, color: "text-blue-950" },
  { value: "50+", label: "Expert Faculty", icon: <Users className="w-6 h-6" />, color: "text-sky-600" },
  { value: "10,000+", label: "Happy Students", icon: <Sparkles className="w-6 h-6" />, color: "text-blue-950" }
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const openVideoModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setShowVideoModal(true);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? "text-yellow-500 fill-current"
            : index < rating
            ? "text-yellow-500 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <>
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16 lg:mb-20 relative rounded-3xl overflow-hidden">
            <div className="relative z-10 px-8 py-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-6">
                <Sparkles className="w-4 h-4 text-sky-500" />
                <span className="text-sm font-semibold text-gray-700">Success Stories</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="block text-black">Meet Our</span>
                <span className="text-black">
                  Outstanding Students
                </span>
              </h1>
              
              <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
                No two learners are alike, so why should their journey be? Discover how personalized education creates exceptional results.
              </p>
            </div>
            
            {/* Background Image Section */}
            <div 
              className="absolute inset-0 rounded-3xl overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: -1
              }}
            />
          </div>

          {/* Testimonials Carousel */}
          <div className="mb-20 lg:mb-28">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Student Spotlight</h2>
                <p className="text-gray-600 mt-2">Inspiring stories from our brilliant learners</p>
              </div>
              
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-gray-50 transition-all hover:scale-105 hover:border-gray-400 shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5 text-sky-600" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-gray-50 transition-all hover:scale-105 hover:border-gray-400 shadow-sm"
                >
                  <ChevronRight className="w-5 h-5 text-sky-600" />
                </button>
              </div>
            </div>

            <div className="relative">
              {/* Progress Indicator */}
              <div className="flex justify-center gap-2 mb-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeTestimonial
                        ? "w-8 bg-gradient-to-r from-sky-500 to-sky-400"
                        : "bg-sky-200 hover:bg-sky-300"
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Large Testimonial */}
                <div 
                  className="relative group"
                  onMouseEnter={() => setHoveredCard(activeTestimonial)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`relative rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                    testimonials[activeTestimonial].bgColor
                  } shadow-lg border border-white/50 hover:border-white/70`}>
                    <div className="relative p-8 lg:p-10">
                      {/* Header with Icon and Tag */}
                      <div className="flex items-start justify-between mb-8">
                        <div className="flex items-center gap-4">
                          <div className={`p-4 rounded-2xl bg-gradient-to-br ${testimonials[activeTestimonial].color} border border-white/50`}>
                            <div className={testimonials[activeTestimonial].accentColor}>
                              {testimonials[activeTestimonial].icon}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                              {testimonials[activeTestimonial].name}
                            </h3>
                            <p className="text-gray-600 mt-1">{testimonials[activeTestimonial].age}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end">
                          <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-700 border border-gray-200">
                            {testimonials[activeTestimonial].tag}
                          </span>
                          <div className="flex items-center gap-1 mt-3">
                            {renderStars(testimonials[activeTestimonial].rating)}
                          </div>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="relative mb-8">
                        <Quote className="absolute -top-4 -left-2 w-12 h-12 text-sky-100" />
                        <p className="text-gray-700 text-lg leading-relaxed pl-6">
                          "{testimonials[activeTestimonial].quote}"
                        </p>
                      </div>

                      {/* Achievements */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {testimonials[activeTestimonial].achievements.map((achievement, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-sky-50 text-sky-700 rounded-xl text-sm border border-sky-200 hover:bg-sky-100 transition-colors"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between">
                        <button className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-800 transition-colors group">
                          Read Full Story
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        
                        <button
                          onClick={() => openVideoModal(testimonials[activeTestimonial].videoUrl)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-gray-100 transition-all group border border-gray-200 hover:border-gray-400 shadow-sm"
                        >
                          <Play className="w-4 h-4 text-sky-600" />
                          <span className="text-sm text-gray-700">Watch Story</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Other Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                  {testimonials
                    .filter((_, index) => index !== activeTestimonial)
                    .slice(0, 2)
                    .map((testimonial) => (
                      <div
                        key={testimonial.id}
                        onClick={() => setActiveTestimonial(testimonials.findIndex(t => t.id === testimonial.id))}
                        onMouseEnter={() => setHoveredCard(testimonial.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className={`${testimonial.bgColor} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-white/50 hover:border-white/70 shadow-md hover:shadow-xl`}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${testimonial.color} border border-white/50`}>
                            <div className={testimonial.accentColor}>
                              {testimonial.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                              <div className="flex">
                                {renderStars(testimonial.rating)}
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{testimonial.age}</p>
                            <span className="inline-block mt-2 px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-xs font-medium border border-sky-200">
                              {testimonial.tag}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm line-clamp-3">
                          "{testimonial.quote}"
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-3xl overflow-hidden shadow-2xl mb-16 border border-white/50">
            <div className="px-8 py-12 lg:px-16 lg:py-20">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex p-4 rounded-2xl bg-white/80 backdrop-blur-sm mb-4 group-hover:scale-110 transition-transform duration-300 border border-gray-200">
                      <div className="text-sky-600">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-600 to-blue-950 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-700 text-sm lg:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center py-16 px-8">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Start Your Child's Success Story?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join thousands of successful students who have found their perfect learning path with us.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-gray-900 via-sky-600 to-indigo-600 text-white font-bold text-lg rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <Users className="w-6 h-6" />
                Start Free Trial
              </button>
              <button className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-white text-gray-900 font-bold text-lg rounded-2xl border-2 border-gray-300 hover:bg-gray-50 hover:shadow-lg transition-all duration-300">
                Schedule a Demo
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Success Story Image Section */}
          <div className="mb-4 text-center">
            <img 
              src={successStoryImage} 
              alt="Success Story" 
              className="max-w-2xl mx-auto h-auto rounded-2xl"
            />
          </div>

        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/50 shadow-2xl">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-6 right-6 z-10 p-3 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full hover:bg-gray-50 hover:text-gray-900 transition-colors border border-gray-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="aspect-video bg-gradient-to-br from-sky-100 to-white">
              {/* Video Player Placeholder */}
              <div className="w-full h-full flex flex-col items-center justify-center p-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                  <div className="relative p-8 bg-gradient-to-br from-white to-sky-100 rounded-3xl border border-sky-300">
                    <Play className="w-20 h-20 text-sky-600" />
                  </div>
                </div>
                <p className="text-gray-600 mt-6 text-center max-w-md">
                  Video content showcasing student achievements and testimonials
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Testimonials;