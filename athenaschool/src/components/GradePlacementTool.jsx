import { useState } from 'react';

function GradePlacementTool() {
  const [childAge, setChildAge] = useState('');
  const [childGrade, setChildGrade] = useState('');
  const [placement, setPlacement] = useState(null);

  // Grade level mapping based on age
  const ageToGrade = {
    3: { level: 'Nursery', description: 'Early Years Foundation Stage' },
    4: { level: 'Nursery', description: 'Early Years Foundation Stage' },
    5: { level: 'KG 1', description: 'Kindergarten 1' },
    6: { level: 'KG 2', description: 'Kindergarten 2' },
    7: { level: 'Grade 1', description: 'Key Stage 1' },
    8: { level: 'Grade 2', description: 'Key Stage 1' },
    9: { level: 'Grade 3', description: 'Key Stage 2' },
    10: { level: 'Grade 4', description: 'Key Stage 2' },
    11: { level: 'Grade 5', description: 'Key Stage 2' },
    12: { level: 'Grade 6', description: 'Key Stage 3' },
    13: { level: 'Grade 7', description: 'Key Stage 3' },
    14: { level: 'Grade 8', description: 'Key Stage 3' },
    15: { level: 'Grade 9', description: 'Key Stage 4' },
    16: { level: 'Grade 10', description: 'Key Stage 4' },
    17: { level: 'Grade 11', description: 'Key Stage 5' },
    18: { level: 'Grade 12', description: 'Key Stage 5' }
  };

  const handlePlacement = () => {
    if (childAge) {
      const age = parseInt(childAge);
      if (age >= 3 && age <= 18) {
        const placementInfo = ageToGrade[age];
        setPlacement({
          age: age,
          level: placementInfo.level,
          description: placementInfo.description
        });
      } else {
        setPlacement({
          error: 'Please enter an age between 3 and 18 years.'
        });
      }
    } else if (childGrade) {
      // If grade is provided, find the corresponding age range
      const gradeAges = {
        'Nursery': { min: 3, max: 4, description: 'Early Years Foundation Stage' },
        'KG 1': { min: 5, max: 5, description: 'Kindergarten 1' },
        'KG 2': { min: 6, max: 6, description: 'Kindergarten 2' },
        'Grade 1': { min: 7, max: 7, description: 'Key Stage 1' },
        'Grade 2': { min: 8, max: 8, description: 'Key Stage 1' },
        'Grade 3': { min: 9, max: 9, description: 'Key Stage 2' },
        'Grade 4': { min: 10, max: 10, description: 'Key Stage 2' },
        'Grade 5': { min: 11, max: 11, description: 'Key Stage 2' },
        'Grade 6': { min: 12, max: 12, description: 'Key Stage 3' },
        'Grade 7': { min: 13, max: 13, description: 'Key Stage 3' },
        'Grade 8': { min: 14, max: 14, description: 'Key Stage 3' },
        'Grade 9': { min: 15, max: 15, description: 'Key Stage 4' },
        'Grade 10': { min: 16, max: 16, description: 'Key Stage 4' },
        'Grade 11': { min: 17, max: 17, description: 'Key Stage 5' },
        'Grade 12': { min: 18, max: 18, description: 'Key Stage 5' }
      };
      
      if (gradeAges[childGrade]) {
        setPlacement({
          grade: childGrade,
          minAge: gradeAges[childGrade].min,
          maxAge: gradeAges[childGrade].max,
          description: gradeAges[childGrade].description
        });
      } else {
        setPlacement({
          error: 'Please select a valid grade level.'
        });
      }
    }
  };

  const resetPlacement = () => {
    setChildAge('');
    setChildGrade('');
    setPlacement(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Grade Level Placement Tool</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Child's Age (years)</label>
          <input
            type="number"
            value={childAge}
            onChange={(e) => {
              setChildAge(e.target.value);
              setChildGrade('');
              setPlacement(null);
            }}
            placeholder="Enter child's age"
            min="3"
            max="18"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">Ages 3-18 years</p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 bg-white text-sm text-gray-500">OR</span>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Current Grade Level</label>
          <select
            value={childGrade}
            onChange={(e) => {
              setChildGrade(e.target.value);
              setChildAge('');
              setPlacement(null);
            }}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select current grade</option>
            <option value="Nursery">Nursery</option>
            <option value="KG 1">KG 1</option>
            <option value="KG 2">KG 2</option>
            <option value="Grade 1">Grade 1</option>
            <option value="Grade 2">Grade 2</option>
            <option value="Grade 3">Grade 3</option>
            <option value="Grade 4">Grade 4</option>
            <option value="Grade 5">Grade 5</option>
            <option value="Grade 6">Grade 6</option>
            <option value="Grade 7">Grade 7</option>
            <option value="Grade 8">Grade 8</option>
            <option value="Grade 9">Grade 9</option>
            <option value="Grade 10">Grade 10</option>
            <option value="Grade 11">Grade 11</option>
            <option value="Grade 12">Grade 12</option>
          </select>
        </div>
        
        <button
          onClick={handlePlacement}
          disabled={!childAge && !childGrade}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Find Placement
        </button>
        
        {placement && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            {placement.error ? (
              <div className="text-red-600">{placement.error}</div>
            ) : placement.level ? (
              <div>
                <div className="text-lg font-bold text-blue-800">Recommended Placement</div>
                <div className="text-2xl font-bold text-blue-600 mt-1">{placement.level}</div>
                <div className="text-blue-700 mt-1">{placement.description}</div>
                <div className="mt-2 text-sm text-blue-600">
                  Based on age {placement.age} years
                </div>
              </div>
            ) : (
              <div>
                <div className="text-lg font-bold text-blue-800">Age Range for Grade</div>
                <div className="text-2xl font-bold text-blue-600 mt-1">{placement.grade}</div>
                <div className="text-blue-700 mt-1">{placement.description}</div>
                <div className="mt-2 text-sm text-blue-600">
                  Recommended for ages {placement.minAge}-{placement.maxAge} years
                </div>
              </div>
            )}
          </div>
        )}
        
        {(childAge || childGrade) && (
          <button
            onClick={resetPlacement}
            className="w-full mt-2 text-blue-600 py-2 px-4 rounded-lg border border-blue-600 hover:bg-blue-50"
          >
            Start Over
          </button>
        )}
      </div>
    </div>
  );
}

export default GradePlacementTool;