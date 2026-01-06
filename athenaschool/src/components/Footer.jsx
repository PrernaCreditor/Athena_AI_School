function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-blue-300">21K School</h3>
            <p className="text-blue-200 mb-6">India's Most Trusted Online School</p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <div className="h-10 w-10 bg-blue-700 rounded-full flex items-center justify-center text-sm font-bold hover:bg-blue-600 transition-colors">
                  f
                </div>
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <div className="h-10 w-10 bg-blue-700 rounded-full flex items-center justify-center text-sm font-bold hover:bg-blue-600 transition-colors">
                  ig
                </div>
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <div className="h-10 w-10 bg-blue-700 rounded-full flex items-center justify-center text-sm font-bold hover:bg-blue-600 transition-colors">
                  in
                </div>
              </a>
            </div>
            <p className="text-sm text-blue-300">© 2025 21K School. All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-xl text-blue-300 border-b border-blue-700 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="block text-blue-200 hover:text-white transition-colors duration-300 py-1">About</a></li>
              <li><a href="#" className="block text-blue-200 hover:text-white transition-colors duration-300 py-1">Academics</a></li>
              <li><a href="#" className="block text-blue-200 hover:text-white transition-colors duration-300 py-1">Admissions</a></li>
              <li><a href="#" className="block text-blue-200 hover:text-white transition-colors duration-300 py-1">Connect</a></li>
              <li><a href="#" className="block text-blue-200 hover:text-white transition-colors duration-300 py-1">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-xl text-blue-300 border-b border-blue-700 pb-2">Programs</h4>
            <ul className="space-y-3">
              <li><a href="#" className="block text-blue-200 hover:text-white transition-colors duration-300 py-1">Early Years</a></li>
              <li><a href="#" className="block text-blue-200 hover:text-white transition-colors duration-300 py-1">Primary</a></li>
              <li><a href="#" className="block text-blue-200 hover:text-white transition-colors duration-300 py-1">Middle School</a></li>
              <li><a href="#" className="block text-blue-200 hover:text-white transition-colors duration-300 py-1">Senior School</a></li>
              <li><a href="#" className="block text-blue-200 hover:text-white transition-colors duration-300 py-1">Electives</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-xl text-blue-300 border-b border-blue-700 pb-2">Connect</h4>
            <ul className="space-y-3">
              <li><a href="#" className="block text-blue-200 hover:text-white transition-colors duration-300 py-1">Contact Us</a></li>
              <li><a href="#" className="block text-blue-200 hover:text-white transition-colors duration-300 py-1">Careers</a></li>
              <li><a href="#" className="block text-blue-200 hover:text-white transition-colors duration-300 py-1">FAQ</a></li>
              <li><a href="#" className="block text-blue-200 hover:text-white transition-colors duration-300 py-1">Resources</a></li>
              <li><a href="#" className="block text-blue-200 hover:text-white transition-colors duration-300 py-1">Privacy Policy</a></li>
            </ul>
            <div className="mt-6 pt-6 border-t border-blue-700">
              <p className="text-sm text-blue-300">Contact: +91 99999 99999</p>
              <p className="text-sm text-blue-300">Email: info@21kschool.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;