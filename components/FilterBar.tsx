import React from 'react';
import { X } from 'lucide-react';

interface FilterBarProps {
  slopes: string[];
  selectedSlope: string | null;
  onSelectSlope: (slope: string | null) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ slopes, selectedSlope, onSelectSlope }) => {
  return (
    <div className="sticky top-0 z-40 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <button
            onClick={() => onSelectSlope(null)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
              selectedSlope === null
                ? 'bg-white text-slate-950 border-white'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-600 hover:text-slate-200'
            }`}
          >
            All
          </button>
          
          {slopes.map((slope) => (
            <button
              key={slope}
              onClick={() => onSelectSlope(selectedSlope === slope ? null : slope)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-mono uppercase tracking-wide transition-all duration-200 border whitespace-nowrap ${
                selectedSlope === slope
                  ? 'bg-blue-600 text-white border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.5)]'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-blue-500/50 hover:text-blue-400'
              }`}
            >
              {slope}
            </button>
          ))}

            {selectedSlope && (
                <div className="ml-auto pl-4 md:hidden">
                    <button 
                        onClick={() => onSelectSlope(null)}
                        className="p-2 text-slate-400 hover:text-white"
                    >
                        <X size={20} />
                    </button>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;