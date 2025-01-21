'use client';
import { useState } from 'react';
import { createSet, union, intersection, difference, symmetricDifference } from '@/utils/setOperations';
import { FaCalculator } from 'react-icons/fa';

export default function SetVisualizer() {
  const [setA, setSetA] = useState('');
  const [setB, setSetB] = useState('');
  const [results, setResults] = useState({});

  const calculateOperations = () => {
    const a = createSet(setA);
    const b = createSet(setB);
    
    setResults({
      union: [...union(a, b)].join(', '),
      intersection: [...intersection(a, b)].join(', '),
      differenceAB: [...difference(a, b)].join(', '),
      differenceBA: [...difference(b, a)].join(', '),
      symmetricDifference: [...symmetricDifference(a, b)].join(', ')
    });
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-blue-600 flex items-center gap-2">
          <FaCalculator /> Set Operations Visualizer
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <label className="block text-gray-700 font-medium">
              Set A (comma-separated values):
              <input
                type="text"
                value={setA}
                onChange={(e) => setSetA(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                placeholder="e.g., 1, 2, 3"
              />
            </label>
            <label className="block text-gray-700 font-medium">
              Set B (comma-separated values):
              <input
                type="text"
                value={setB}
                onChange={(e) => setSetB(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                placeholder="e.g., 3, 4, 5"
              />
            </label>
          </div>
        </div>

        <button
          onClick={calculateOperations}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Calculate Operations
        </button>

        {results.union && (
          <div className="mt-8 space-y-4">
            <OperationResult title="Union (A ∪ B)" value={results.union} />
            <OperationResult title="Intersection (A ∩ B)" value={results.intersection} />
            <OperationResult title="Difference (A - B)" value={results.differenceAB} />
            <OperationResult title="Difference (B - A)" value={results.differenceBA} />
            <OperationResult title="Symmetric Difference (A Δ B)" value={results.symmetricDifference} />
          </div>
        )}
      </div>
    </div>
  );
}

const OperationResult = ({ title, value }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{value || '∅'}</p>
  </div>
);