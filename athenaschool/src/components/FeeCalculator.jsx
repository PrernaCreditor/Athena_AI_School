import { useState } from 'react';
import { Calculator, CreditCard, DollarSign, TrendingUp } from 'lucide-react';

function FeeCalculator() {
  const [formData, setFormData] = useState({
    program: '',
    duration: '',
    paymentPlan: '',
    siblings: 1,
    additionalServices: []
  });

  const [calculatedFees, setCalculatedFees] = useState(null);

  const programs = [
    { value: 'foundation', label: 'Foundation Programme (Ages 3-5)', baseFee: 2500 },
    { value: 'primary', label: 'Primary Curriculum (Ages 5-11)', baseFee: 4500 },
    { value: 'secondary', label: 'Secondary Curriculum (Ages 11-14)', baseFee: 5500 },
    { value: 'igcse', label: 'IGCSE Programme (Ages 14-16)', baseFee: 6000 },
    { value: 'alevel', label: 'A-Level Programme (Ages 16-18)', baseFee: 6500 },
    { value: 'summer', label: 'Summer Programme', baseFee: 1500 }
  ];

  const durations = [
    { value: 'semester', label: 'Semester (6 months)', multiplier: 0.5 },
    { value: 'year', label: 'Full Year (12 months)', multiplier: 1 },
    { value: 'quarter', label: 'Quarter (3 months)', multiplier: 0.25 }
  ];

  const paymentPlans = [
    { value: 'annual', label: 'Annual (2% discount)', discount: 0.02 },
    { value: 'semi-annual', label: 'Semi-Annual (1% discount)', discount: 0.01 },
    { value: 'quarterly', label: 'Quarterly (Pay per term)', discount: 0 },
    { value: 'monthly', label: 'Monthly (Installments)', discount: 0 }
  ];

  const additionalServices = [
    { value: 'tuition', label: 'Additional Tuition', price: 200 },
    { value: 'materials', label: 'Learning Materials', price: 150 },
    { value: 'counseling', label: 'Educational Counseling', price: 300 },
    { value: 'activities', label: 'Extracurricular Activities', price: 250 },
    { value: 'support', label: 'Learning Support', price: 400 },
    { value: 'events', label: 'Special Events & Field Trips', price: 100 }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const updatedServices = checked
        ? [...formData.additionalServices, value]
        : formData.additionalServices.filter(service => service !== value);
      setFormData(prev => ({
        ...prev,
        additionalServices: updatedServices
      }));
    } else if (name === 'siblings') {
      setFormData(prev => ({
        ...prev,
        siblings: parseInt(value) || 1
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const calculateFees = () => {
    if (!formData.program || !formData.duration || !formData.paymentPlan) {
      alert('Please select a program, duration, and payment plan');
      return;
    }

    const program = programs.find(p => p.value === formData.program);
    const duration = durations.find(d => d.value === formData.duration);
    const paymentPlan = paymentPlans.find(p => p.value === formData.paymentPlan);

    let baseFee = program.baseFee * duration.multiplier;
    
    // Apply sibling discount
    let siblingDiscount = 0;
    if (formData.siblings > 1) {
      siblingDiscount = baseFee * (formData.siblings - 1) * 0.1; // 10% discount per additional sibling
    }
    
    // Apply payment plan discount
    let paymentDiscount = baseFee * paymentPlan.discount;
    
    // Calculate additional services
    let additionalFees = 0;
    formData.additionalServices.forEach(service => {
      const serviceInfo = additionalServices.find(s => s.value === service);
      if (serviceInfo) {
        additionalFees += serviceInfo.price;
      }
    });
    
    let subtotal = baseFee - siblingDiscount - paymentDiscount + additionalFees;
    
    // Apply tax (assuming 5%)
    let tax = subtotal * 0.05;
    let total = subtotal + tax;
    
    // Calculate per-payment amount for installments
    let perPayment = total;
    if (formData.paymentPlan === 'quarterly') {
      perPayment = total / 4;
    } else if (formData.paymentPlan === 'monthly') {
      perPayment = total / 12;
    } else if (formData.paymentPlan === 'semi-annual') {
      perPayment = total / 2;
    }

    setCalculatedFees({
      baseFee: baseFee,
      siblingDiscount: siblingDiscount,
      paymentDiscount: paymentDiscount,
      additionalFees: additionalFees,
      subtotal: subtotal,
      tax: tax,
      total: total,
      perPayment: perPayment
    });
  };

  const resetCalculator = () => {
    setFormData({
      program: '',
      duration: '',
      paymentPlan: '',
      siblings: 1,
      additionalServices: []
    });
    setCalculatedFees(null);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transparent Fee Calculator</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Calculate your tuition fees accurately with our easy-to-use calculator</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Calculator className="mr-3 text-indigo-600" size={24} />
              Fee Calculator
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Program</label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Choose a program</option>
                  {programs.map((prog) => (
                    <option key={prog.value} value={prog.value}>{prog.label} - ${prog.baseFee}/yr</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select duration</option>
                  {durations.map((dur) => (
                    <option key={dur.value} value={dur.value}>{dur.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Plan</label>
                <select
                  name="paymentPlan"
                  value={formData.paymentPlan}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select payment plan</option>
                  {paymentPlans.map((plan) => (
                    <option key={plan.value} value={plan.value}>{plan.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Siblings Enrolling</label>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({...prev, siblings: Math.max(1, prev.siblings - 1)}))}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-l-lg hover:bg-gray-300 transition-colors"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={formData.siblings}
                    onChange={handleInputChange}
                    name="siblings"
                    className="w-full p-3 border-y border-gray-300 text-center"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({...prev, siblings: prev.siblings + 1}))}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r-lg hover:bg-gray-300 transition-colors"
                  >
                    +
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-1">10% discount per additional sibling</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Services</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {additionalServices.map((service) => (
                    <label key={service.value} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="checkbox"
                        name="additionalServices"
                        value={service.value}
                        onChange={handleInputChange}
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{service.label}</span>
                      <span className="ml-auto text-sm text-gray-600">${service.price}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={calculateFees}
                  className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center"
                >
                  <Calculator className="mr-2" size={18} />
                  Calculate Fees
                </button>
                <button
                  type="button"
                  onClick={resetCalculator}
                  className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Fee Breakdown</h3>
            
            {calculatedFees ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">Base Fee</span>
                  <span className="font-semibold">${calculatedFees.baseFee.toFixed(2)}</span>
                </div>
                
                {calculatedFees.siblingDiscount > 0 && (
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-medium text-green-700">Sibling Discount</span>
                    <span className="font-semibold text-green-700">-${calculatedFees.siblingDiscount.toFixed(2)}</span>
                  </div>
                )}
                
                {calculatedFees.paymentDiscount > 0 && (
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-medium text-green-700">Payment Plan Discount</span>
                    <span className="font-semibold text-green-700">-${calculatedFees.paymentDiscount.toFixed(2)}</span>
                  </div>
                )}
                
                {calculatedFees.additionalFees > 0 && (
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="font-medium text-blue-700">Additional Services</span>
                    <span className="font-semibold text-blue-700">${calculatedFees.additionalFees.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                  <span className="font-medium text-gray-700">Subtotal</span>
                  <span className="font-semibold">${calculatedFees.subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                  <span className="font-medium text-gray-700">Tax (5%)</span>
                  <span className="font-semibold">${calculatedFees.tax.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-center p-6 bg-indigo-600 text-white rounded-lg">
                  <div>
                    <div className="font-bold text-lg">Total Amount</div>
                    <div className="text-sm opacity-80">Per selected duration</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-2xl">${calculatedFees.total.toFixed(2)}</div>
                    <div className="text-sm opacity-80">
                      {formData.paymentPlan === 'monthly' && `12 x $${calculatedFees.perPayment.toFixed(2)}`}
                      {formData.paymentPlan === 'quarterly' && `4 x $${calculatedFees.perPayment.toFixed(2)}`}
                      {formData.paymentPlan === 'semi-annual' && `2 x $${calculatedFees.perPayment.toFixed(2)}`}
                      {(formData.paymentPlan === 'annual' || !formData.paymentPlan) && 'One-time payment'}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-bold text-yellow-800 mb-2 flex items-center">
                    <TrendingUp className="mr-2" size={18} />
                    Payment Options
                  </h4>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Secure online payment processing</li>
                    <li>• Multiple payment methods accepted</li>
                    <li>• Automatic receipt generation</li>
                    <li>• Flexible installment plans available</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Calculator size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">Enter your selections and click "Calculate Fees" to see the breakdown</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeeCalculator;