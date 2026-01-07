import { GraduationCap, BookOpen, Target, Globe, Bot, User } from 'lucide-react';

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] bg-white overflow-hidden flex items-center justify-center">
      
      {/* CIRCULAR RINGS */}
      <div className="absolute w-[700px] h-[700px] rounded-full border border-gray-200"></div>
      <div className="absolute w-[520px] h-[520px] rounded-full border border-gray-200"></div>
      <div className="absolute w-[360px] h-[360px] rounded-full border border-gray-200"></div>

      {/* CENTER CONTENT */}
      <div className="relative z-20 text-center max-w-xl px-6">
        <p className="text-sm font-semibold text-blue-600 mb-3">
          AI School Community
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          The Future of <br />
          <span className="text-blue-600">Personalized Learning</span>
        </h1>

        <p className="mt-4 text-gray-600 leading-relaxed">
          A modern online school designed around your child — not the system.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:shadow-lg transition">
            Enquire Now
          </button>
          <button className="px-6 py-3 rounded-full border text-gray-700 hover:bg-gray-50">
            Learn More
          </button>
        </div>
      </div>

      {/* ORBIT ITEMS */}
      <OrbitItem angle={0} label={<><GraduationCap size={20} className="mr-1" /> Teachers</>} />
      <OrbitItem angle={60} label={<><BookOpen size={20} className="mr-1" /> Courses</>} />
      <OrbitItem angle={120} label={<><Target size={20} className="mr-1" /> Skills</>} />
      <OrbitItem angle={180} label={<><Globe size={20} className="mr-1" /> Global</>} />
      <OrbitItem angle={240} label={<><Bot size={20} className="mr-1" /> AI Tools</>} />
      <OrbitItem angle={300} label={<><User size={20} className="mr-1" /> Students</>} />

    </section>
  );
}

function OrbitItem({ angle, label }) {
  return (
    <div
      className="absolute w-[700px] h-[700px] flex items-start justify-center"
      style={{ transform: `rotate(${angle}deg)` }}
    >
      <div
        className="transform -translate-y-4"
        style={{ transform: `rotate(-${angle}deg)` }}
      >
        <div className="bg-white rounded-full shadow-lg px-4 py-2 text-sm font-medium flex items-center">
          {label}
        </div>
      </div>
    </div>
  );
}

export default Hero;
