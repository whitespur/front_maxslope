import React, { useState, useMemo } from 'react';
import { ENTITIES, UNIQUE_SLOPES } from './constants';
import EntityCard from './components/EntityCard';
import FilterBar from './components/FilterBar';
import { TrendingUp, Search, Info } from 'lucide-react';

function App() {
  const [selectedSlope, setSelectedSlope] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredEntities = useMemo(() => {
    return ENTITIES.filter((entity) => {
      const matchesSlope = selectedSlope
        ? entity.slope.includes(selectedSlope)
        : true;
      
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        entity.name.toLowerCase().includes(searchLower) ||
        entity.intro_zh.toLowerCase().includes(searchLower) ||
        entity.slope.some(s => s.toLowerCase().includes(searchLower));

      return matchesSlope && matchesSearch;
    });
  }, [selectedSlope, searchQuery]);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* Header */}
      <header className="relative overflow-hidden border-b border-slate-800/60 pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 mix-blend-soft-light"></div>
        <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/50 text-blue-300 text-xs font-mono uppercase tracking-widest mb-6">
                <TrendingUp size={14} />
                <span>Maximize your slope</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight mb-6">
                High Slope Society
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                跟斜率最大化的人在一起。
                <span className="block mt-2 text-base text-slate-500">
                    A curated index of individuals and companies maximizing trajectory in AI, Crypto, and Hard Tech.
                </span>
            </p>
        </div>
      </header>

      {/* Controls Area - Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-2 relative z-20">
         <div className="max-w-md mx-auto">
            <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <input
                    type="text"
                    placeholder="Search names, companies, or keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3 bg-slate-900/90 border border-slate-700 rounded-2xl leading-5 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-lg"
                />
            </div>
         </div>
      </div>

      {/* Filter Bar */}
      <FilterBar 
        slopes={UNIQUE_SLOPES} 
        selectedSlope={selectedSlope} 
        onSelectSlope={setSelectedSlope} 
      />

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-sm font-mono text-slate-500 uppercase tracking-wider">
                {filteredEntities.length} {filteredEntities.length === 1 ? 'Result' : 'Results'}
            </h2>
            {selectedSlope && (
                 <button 
                    onClick={() => setSelectedSlope(null)}
                    className="text-sm text-blue-400 hover:text-blue-300 underline underline-offset-4"
                 >
                    Clear filter
                 </button>
            )}
        </div>

        {filteredEntities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEntities.map((entity) => (
                <EntityCard 
                key={entity.id} 
                entity={entity} 
                onSlopeClick={setSelectedSlope} 
                />
            ))}
            </div>
        ) : (
            <div className="text-center py-20 border border-dashed border-slate-800 rounded-3xl bg-slate-900/30">
                <Info className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">No results found</h3>
                <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
                <button 
                    onClick={() => {setSearchQuery(''); setSelectedSlope(null);}}
                    className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
                >
                    Reset all
                </button>
            </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-8 text-center">
        <p className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} High Slope Society. Data provided by user.
        </p>
      </footer>
    </div>
  );
}

export default App;