import { useState } from 'react';

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">21K School</span>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <a href="#" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-sm font-medium hover:text-blue-600">Home</a>
              <div className="relative group">
                <a href="#" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium group-hover:text-blue-600">About</a>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-4 mt-2 w-48 z-50">
                  <a href="#" className="block py-2 text-sm text-gray-700 hover:text-blue-600">What sets us apart?</a>
                  <a href="#" className="block py-2 text-sm text-gray-700 hover:text-blue-600">Values & Ethos</a>
                  <a href="#" className="block py-2 text-sm text-gray-700 hover:text-blue-600">21K Group</a>
                  <a href="#" className="block py-2 text-sm text-gray-700 hover:text-blue-600">Our Leaders</a>
                  <a href="#" className="block py-2 text-sm text-gray-700 hover:text-blue-600">Habits of Mind</a>
                </div>
              </div>
              <div className="relative group">
                <a href="#" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium group-hover:text-blue-600">Academics</a>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-4 mt-2 w-48 z-50">
                  <a href="#" className="block py-2 text-sm text-gray-700 hover:text-blue-600">NCF India</a>
                  <a href="#" className="block py-2 text-sm text-gray-700 hover:text-blue-600">Learning Culture</a>
                  <a href="#" className="block py-2 text-sm text-gray-700 hover:text-blue-600">Pre Primary</a>
                  <a href="#" className="block py-2 text-sm text-gray-700 hover:text-blue-600">Primary</a>
                  <a href="#" className="block py-2 text-sm text-gray-700 hover:text-blue-600">Middle</a>
                  <a href="#" className="block py-2 text-sm text-gray-700 hover:text-blue-600">Senior School</a>
                </div>
              </div>
              <div className="relative group">
                <a href="#" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium group-hover:text-blue-600">Admissions</a>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-4 mt-2 w-48 z-50">
                  <a href="#" className="block py-2 text-sm text-gray-700 hover:text-blue-600">How to Register?</a>
                  <a href="#" className="block py-2 text-sm text-gray-700 hover:text-blue-600">Registration Form</a>
                  <a href="#" className="block py-2 text-sm text-gray-700 hover:text-blue-600">Who Should Register?</a>
                  <a href="#" className="block py-2 text-sm text-gray-700 hover:text-blue-600">Batch Timings</a>
                </div>
              </div>
              <a href="#" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium hover:text-blue-600">Connect</a>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <button className="ml-8 bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
              Enquire Now
            </button>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#" className="bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Home</a>
            <div className="pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">
              <div className="flex justify-between items-center">
                <span>About</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="mt-2 space-y-1 ml-4">
                <a href="#" className="block py-1 text-sm text-gray-600 hover:text-blue-600">What sets us apart?</a>
                <a href="#" className="block py-1 text-sm text-gray-600 hover:text-blue-600">Values & Ethos</a>
                <a href="#" className="block py-1 text-sm text-gray-600 hover:text-blue-600">21K Group</a>
                <a href="#" className="block py-1 text-sm text-gray-600 hover:text-blue-600">Our Leaders</a>
                <a href="#" className="block py-1 text-sm text-gray-600 hover:text-blue-600">Habits of Mind</a>
              </div>
            </div>
            <div className="pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">
              <div className="flex justify-between items-center">
                <span>Academics</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="mt-2 space-y-1 ml-4">
                <a href="#" className="block py-1 text-sm text-gray-600 hover:text-blue-600">NCF India</a>
                <a href="#" className="block py-1 text-sm text-gray-600 hover:text-blue-600">Learning Culture</a>
                <a href="#" className="block py-1 text-sm text-gray-600 hover:text-blue-600">Pre Primary</a>
                <a href="#" className="block py-1 text-sm text-gray-600 hover:text-blue-600">Primary</a>
                <a href="#" className="block py-1 text-sm text-gray-600 hover:text-blue-600">Middle</a>
                <a href="#" className="block py-1 text-sm text-gray-600 hover:text-blue-600">Senior School</a>
              </div>
            </div>
            <div className="pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">
              <div className="flex justify-between items-center">
                <span>Admissions</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="mt-2 space-y-1 ml-4">
                <a href="#" className="block py-1 text-sm text-gray-600 hover:text-blue-600">How to Register?</a>
                <a href="#" className="block py-1 text-sm text-gray-600 hover:text-blue-600">Registration Form</a>
                <a href="#" className="block py-1 text-sm text-gray-600 hover:text-blue-600">Who Should Register?</a>
                <a href="#" className="block py-1 text-sm text-gray-600 hover:text-blue-600">Batch Timings</a>
              </div>
            </div>
            <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Connect</a>
            <div className="mt-4 px-4 py-2">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;