import { useState } from 'react';

function EnquiryForm({ onClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    countryCode: '+91',
    phone: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    alert('Thank you for your enquiry!');
  };

  return (
    <div className="w-[360px] bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-blue-600 py-3">
        <h3 className="text-white text-center font-semibold">Leap ahead with AI School</h3>
      </div>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="p-3 space-y-2">
        {/* Name Fields */}
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Name*</label>
          <div className="flex space-x-2">
            <input
              type="text"
              name="firstName"
              placeholder="First"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Phone*</label>
          <div className="flex space-x-2">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleInputChange}
              className="px-2 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 w-20"
            >
              <option value="+91">+91 🇮🇳</option>
              <option value="+1">+1 🇺🇸</option>
              <option value="+44">+44 🇬🇧</option>
              <option value="+61">+61 🇦🇺</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleInputChange}
              className="flex-1 px-2 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Email*</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-400 text-gray-900 py-2.5 rounded font-bold hover:bg-yellow-500 transition-colors"
        >
          Enquire Now
        </button>

        {/* Footer Checkbox */}
        <div className="pt-1">
          <label className="flex items-start text-[10px] text-gray-500">
            <input
              type="checkbox"
              required
              className="mt-0.5 mr-1.5"
            />
            By submitting, I agree to 21K's terms, privacy & data use.
          </label>
        </div>
      </form>
    </div>
  );
}

export default EnquiryForm;