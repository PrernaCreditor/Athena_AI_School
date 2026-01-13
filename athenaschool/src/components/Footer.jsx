import { Facebook, Instagram, Linkedin, GraduationCap, BookOpen, User, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-sky-300 flex items-center">
              <GraduationCap size={28} className="mr-2" /> AI School
            </h3>
            <p className="text-slate-300 mb-6">India's Most Advanced AI-Powered Online School</p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-slate-300 hover:text-white transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <div className="h-10 w-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors">
                  <Facebook size={18} />
                </div>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <div className="h-10 w-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors">
                  <Instagram size={18} />
                </div>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <div className="h-10 w-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors">
                  <Linkedin size={18} />
                </div>
              </a>
            </div>
            <p className="text-sm text-slate-300">© 2025 AI School. All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-xl text-sky-300 border-b border-slate-700 pb-2 flex items-center">
              <ArrowRight size={18} className="mr-2" /> Quick Links
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="block text-slate-200 hover:text-white transition-colors duration-300 py-1 flex items-center"><User size={16} className="mr-2" /> About</a></li>
              <li><a href="#" className="block text-slate-200 hover:text-white transition-colors duration-300 py-1 flex items-center"><BookOpen size={16} className="mr-2" /> Academics</a></li>
              <li><a href="#" className="block text-slate-200 hover:text-white transition-colors duration-300 py-1 flex items-center"><GraduationCap size={16} className="mr-2" /> Admissions</a></li>
              <li><a href="#" className="block text-slate-200 hover:text-white transition-colors duration-300 py-1 flex items-center"><User size={16} className="mr-2" /> Connect</a></li>
              <li><a href="#" className="block text-slate-200 hover:text-white transition-colors duration-300 py-1 flex items-center"><BookOpen size={16} className="mr-2" /> Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-xl text-sky-300 border-b border-slate-700 pb-2 flex items-center">
              <GraduationCap size={18} className="mr-2" /> Programs
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="block text-slate-200 hover:text-white transition-colors duration-300 py-1 flex items-center"><User size={16} className="mr-2" /> Early Years</a></li>
              <li><a href="#" className="block text-slate-200 hover:text-white transition-colors duration-300 py-1 flex items-center"><User size={16} className="mr-2" /> Primary</a></li>
              <li><a href="#" className="block text-slate-200 hover:text-white transition-colors duration-300 py-1 flex items-center"><User size={16} className="mr-2" /> Middle School</a></li>
              <li><a href="#" className="block text-slate-200 hover:text-white transition-colors duration-300 py-1 flex items-center"><User size={16} className="mr-2" /> Senior School</a></li>
              <li><a href="#" className="block text-slate-200 hover:text-white transition-colors duration-300 py-1 flex items-center"><BookOpen size={16} className="mr-2" /> Electives</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-xl text-sky-300 border-b border-slate-700 pb-2 flex items-center">
              <User size={18} className="mr-2" /> Connect
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="block text-slate-200 hover:text-white transition-colors duration-300 py-1 flex items-center"><Phone size={16} className="mr-2" /> Contact Us</a></li>
              <li><a href="#" className="block text-slate-200 hover:text-white transition-colors duration-300 py-1 flex items-center"><User size={16} className="mr-2" /> Careers</a></li>
              <li><a href="#" className="block text-slate-200 hover:text-white transition-colors duration-300 py-1 flex items-center"><BookOpen size={16} className="mr-2" /> FAQ</a></li>
              <li><a href="#" className="block text-slate-200 hover:text-white transition-colors duration-300 py-1 flex items-center"><BookOpen size={16} className="mr-2" /> Resources</a></li>
              <li><a href="#" className="block text-slate-200 hover:text-white transition-colors duration-300 py-1 flex items-center"><BookOpen size={16} className="mr-2" /> Privacy Policy</a></li>
            </ul>
            <div className="mt-6 pt-6 border-t border-slate-700">
              <p className="text-sm text-slate-300 flex items-center mb-2"><Phone size={16} className="mr-2" /> Contact: +91 99999 99999</p>
              <p className="text-sm text-slate-300 flex items-center"><Mail size={16} className="mr-2" /> Email: info@21kschool.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;