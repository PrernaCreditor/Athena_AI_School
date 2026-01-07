import { useState, useEffect } from 'react';

function EnquireTab() {
  const [isVisible, setIsVisible] = useState(true);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  
  useEffect(() => {
    const heroElement = document.getElementById('home');
    if (!heroElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    observer.observe(heroElement);
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };
  
  return (
    <>
      <div 
        className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } md:block hidden`}
      >
        <div 
          className="bg-indigo-600 text-white py-8 px-2 rounded-l-lg cursor-pointer hover:bg-indigo-700 transition-colors shadow-lg"
          onClick={togglePanel}
        >
          <div className="transform -rotate-90 origin-center whitespace-nowrap font-bold text-sm">
            Enquire Now
          </div>
        </div>
      </div>
      
      {/* Slide-out Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
          isPanelOpen ? 'translate-x-0' : 'translate-x-full'
        } md:block hidden`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">Enquire Now</h3>
            <button 
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setIsPanelOpen(false)}
            >
              ✕
            </button>
          </div>
          
          <div className="flex-1">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors"
              >
                Send Enquiry
              </button>
            </form>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">Or call us at <span className="font-semibold">+1 (123) 456-7890</span></p>
          </div>
        </div>
      </div>
      
      {/* Overlay when panel is open */}
      {isPanelOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsPanelOpen(false)}
        ></div>
      )}
    </>
  );
}

export default EnquireTab;