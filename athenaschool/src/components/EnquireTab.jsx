import { useState, useEffect } from 'react';
import EnquiryForm from './EnquiryForm';

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
  
  useEffect(() => {
    if (isPanelOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPanelOpen]);
  
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };
  
  const closePanel = () => {
    setIsPanelOpen(false);
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
      
      {/* Overlay when panel is open */}
      {isPanelOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closePanel}
        ></div>
      )}
      
      {/* Slide-out Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[380px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isPanelOpen ? 'translate-x-0' : 'translate-x-full'
        } md:block hidden`}
      >
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Enquire Now</h3>
            <button 
              className="text-gray-500 hover:text-gray-700 text-xl"
              onClick={closePanel}
            >
              ✕
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            <div className="flex items-center justify-center">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnquireTab;