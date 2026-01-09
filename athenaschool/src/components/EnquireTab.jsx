import { useState } from 'react';
import EnquiryForm from './EnquiryForm';

function EnquireTab() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };
  
  return (
    <>
      <div 
        className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 md:block hidden"
      >
        <div 
          className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-2 rounded-l-lg cursor-pointer hover:opacity-95 transition-opacity shadow-lg"
          onClick={togglePanel}
          style={{
            background: 'linear-gradient(to right, #2563eb, #4f46e5)'
          }}
        >
          <div className="transform -rotate-90 origin-center whitespace-nowrap font-bold text-sm">
            Enquire Now
          </div>
        </div>
      </div>
      
      {/* Slide-out Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[380px] bg-transparent shadow-none z-50 transform transition-transform duration-300 ease-in-out ${
          isPanelOpen ? 'translate-x-0' : 'translate-x-full'
        } md:block hidden`}
      >
        <div className="h-full flex flex-col bg-transparent">
          <div className="flex p-2 bg-transparent">
            <div className="flex items-center justify-center">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay when panel is open (transparent so the page stays visible) */}
      {isPanelOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full z-40"
          onClick={togglePanel}
        />
      )}
    </>
  );
}

export default EnquireTab;