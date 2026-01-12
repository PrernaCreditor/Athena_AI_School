import { useState } from 'react';

function FeeCalculator() {
  const [gradeLevel, setGradeLevel] = useState('nursery');
  const [paymentPlan, setPaymentPlan] = useState('annual');

  // Fee structure per grade level (in USD)
  const fees = {
    nursery: { annual: 2500, quarterly: 750, monthly: 250 },
    'kg-1': { annual: 3000, quarterly: 850, monthly: 280 },
    'kg-2': { annual: 3200, quarterly: 900, monthly: 300 },
    'grade-1': { annual: 3500, quarterly: 950, monthly: 320 },
    'grade-2': { annual: 3700, quarterly: 1000, monthly: 340 },
    'grade-3': { annual: 3900, quarterly: 1050, monthly: 360 },
    'grade-4': { annual: 4100, quarterly: 1100, monthly: 380 },
    'grade-5': { annual: 4300, quarterly: 1150, monthly: 400 },
    'grade-6': { annual: 4500, quarterly: 1200, monthly: 420 },
    'grade-7': { annual: 4700, quarterly: 1250, monthly: 440 },
    'grade-8': { annual: 4900, quarterly: 1300, monthly: 460 },
    'grade-9': { annual: 5100, quarterly: 1350, monthly: 480 },
    'grade-10': { annual: 5300, quarterly: 1400, monthly: 500 },
    'grade-11': { annual: 5500, quarterly: 1450, monthly: 520 },
    'grade-12': { annual: 5700, quarterly: 1500, monthly: 540 }
  };

  const currentFee = fees[gradeLevel][paymentPlan];
  const discount = paymentPlan === 'annual' ? 0.05 : 0; // 5% discount for annual
  const discountedFee = currentFee * (1 - discount);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Fee Calculator</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Grade Level</label>
          <select 
            value={gradeLevel} 
            onChange={(e) => setGradeLevel(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="nursery">Nursery (Ages 3-4)</option>
            <option value="kg-1">KG 1 (Ages 4-5)</option>
            <option value="kg-2">KG 2 (Ages 5-6)</option>
            <option value="grade-1">Grade 1 (Ages 6-7)</option>
            <option value="grade-2">Grade 2 (Ages 7-8)</option>
            <option value="grade-3">Grade 3 (Ages 8-9)</option>
            <option value="grade-4">Grade 4 (Ages 9-10)</option>
            <option value="grade-5">Grade 5 (Ages 10-11)</option>
            <option value="grade-6">Grade 6 (Ages 11-12)</option>
            <option value="grade-7">Grade 7 (Ages 12-13)</option>
            <option value="grade-8">Grade 8 (Ages 13-14)</option>
            <option value="grade-9">Grade 9 (Ages 14-15)</option>
            <option value="grade-10">Grade 10 (Ages 15-16)</option>
            <option value="grade-11">Grade 11 (Ages 16-17)</option>
            <option value="grade-12">Grade 12 (Ages 17-18)</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Payment Plan</label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setPaymentPlan('monthly')}
              className={`p-3 rounded-lg border ${
                paymentPlan === 'monthly' 
                  ? 'bg-blue-100 border-blue-500 text-blue-700' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setPaymentPlan('quarterly')}
              className={`p-3 rounded-lg border ${
                paymentPlan === 'quarterly' 
                  ? 'bg-blue-100 border-blue-500 text-blue-700' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Quarterly
            </button>
            <button
              onClick={() => setPaymentPlan('annual')}
              className={`p-3 rounded-lg border ${
                paymentPlan === 'annual' 
                  ? 'bg-blue-100 border-blue-500 text-blue-700' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Annual (-5%)
            </button>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Base Fee:</span>
            <span className="font-medium">${currentFee}/payment</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Annual Discount:</span>
              <span className="font-medium text-green-600">-{Math.round(discount * 100)}%</span>
            </div>
          )}
          <div className="flex justify-between items-center pt-2 border-t border-gray-200">
            <span className="font-semibold">Total:</span>
            <span className="font-bold text-xl text-blue-600">${discountedFee}/payment</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeeCalculator;