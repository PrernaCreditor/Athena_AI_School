import { useState, useEffect } from 'react';
import EnquiryForm from './EnquiryForm';

function EnquireTab() {
  const [isVisible, setIsVisible] = useState(true);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  // Show / hide side tab based on hero visibility
  useEffect(() => {
    const heroElement = document.getElementById('home');
    if (!heroElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(heroElement);
    return () => observer.disconnect();
  }, []);

  // Disable body scroll when panel is open
  useEffect(() => {
    document.body.style.overflow = isPanelOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPanelOpen]);

  const togglePanel = () => setIsPanelOpen(prev => !prev);
  const closePanel = () => setIsPanelOpen(false);

  return (
    <>
      {/* Floating Enquire Tab */}
      <div
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 transition-opacity duration-300
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        hidden md:block`}
      >
        <div
          className="bg-indigo-600 text-white py-8 px-2 rounded-l-lg cursor-pointer
          hover:bg-indigo-700 transition-colors shadow-lg"
          onClick={togglePanel}
        >
          <div className="-rotate-90 whitespace-nowrap font-bold text-sm">
            Enquire Now
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isPanelOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={closePanel}
        />
      )}

      {/* Slide-out Panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-[380px] bg-white  z-40
         transform transition-transform duration-300 ease-in-out
        ${isPanelOpen ? 'translate-x-0' : 'translate-x-full'}
        hidden md:block`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-900">Enquire Now</h3>
          <button
            className="text-gray-500 hover:text-gray-700 text-xl"
            onClick={closePanel}
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <EnquiryForm />
        </div>
      </div>
    </>
  );
}

export default EnquireTab;
