import React, { useState, useRef, useEffect, useMemo } from 'react';
import { TIMELINE_CHAPTERS } from '../timelineData';
import { TimelineChapter } from '../types';
import { ArrowLeft, ArrowRight, BookOpen, ChevronLeft, ChevronRight, Share2, Compass, Dna, Rocket, Building2, LayoutGrid, X } from 'lucide-react';

interface TimelineAppProps {
  onSwitchApp: () => void;
}

const ThemeCard: React.FC<{
  index: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  colorClass: string;
}> = ({ index, title, desc, icon, isActive, onClick, colorClass }) => (
  <button 
    onClick={onClick}
    className={`group relative flex flex-col p-6 rounded-3xl border text-left overflow-hidden h-full transition-all duration-300 ${
      isActive 
        ? 'bg-slate-800/80 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/50' 
        : 'bg-slate-900/40 border-slate-800/60 hover:bg-slate-800/60 hover:border-slate-700 hover:-translate-y-1 hover:shadow-xl'
    }`}
  >
    {/* Background Glow */}
    <div className={`absolute top-0 right-0 p-32 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity ${colorClass}`} />
    
    <div className="flex justify-between items-start w-full mb-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${colorClass}`}>
            {icon}
        </div>
        <span className="font-mono text-3xl font-bold text-slate-400 group-hover:text-white transition-colors select-none opacity-80">
            {index}
        </span>
    </div>
    
    <h3 className={`text-xl font-bold mb-2 transition-colors ${isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
        {title}
    </h3>
    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
        {desc}
    </p>
  </button>
);

const TimelineApp: React.FC<TimelineAppProps> = ({ onSwitchApp }) => {
  const [activeChapterId, setActiveChapterId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToChapters = () => {
    setTimeout(() => {
        scrollContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleCategorySelect = (category: string) => {
    if (selectedCategory === category) {
        setSelectedCategory(null);
    } else {
        setSelectedCategory(category);
        scrollToChapters();
    }
  };

  const currentChapter = activeChapterId 
    ? TIMELINE_CHAPTERS.find(c => c.id === activeChapterId) 
    : null;

  const navigateChapter = (direction: 'next' | 'prev') => {
    if (!currentChapter) return;
    const currentIndex = TIMELINE_CHAPTERS.findIndex(c => c.id === currentChapter.id);
    if (direction === 'prev' && currentIndex > 0) {
        setActiveChapterId(TIMELINE_CHAPTERS[currentIndex - 1].id);
    } else if (direction === 'next' && currentIndex < TIMELINE_CHAPTERS.length - 1) {
        setActiveChapterId(TIMELINE_CHAPTERS[currentIndex + 1].id);
    }
  };

  const filteredChapters = useMemo(() => {
    if (!selectedCategory) return TIMELINE_CHAPTERS;
    return TIMELINE_CHAPTERS.filter(c => c.category === selectedCategory);
  }, [selectedCategory]);

  // Detail View
  if (activeChapterId && currentChapter) {
    return (
      <div className="min-h-screen bg-[#050505] text-slate-200 font-serif selection:bg-blue-500/30 selection:text-blue-200">
        {/* Detail View Header */}
        <header className="sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <button 
              onClick={() => setActiveChapterId(null)}
              className="p-2 -ml-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex flex-col items-center">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-slate-500">Chapter {currentChapter.id}</span>
                <h1 className="text-sm font-bold text-slate-200 truncate max-w-[200px] sm:max-w-md">{currentChapter.title}</h1>
            </div>
            <div className="flex gap-1">
               <button 
                 onClick={() => navigateChapter('prev')}
                 disabled={currentChapter.id === 1}
                 className="p-2 text-slate-500 hover:text-white disabled:opacity-30 disabled:hover:text-slate-500 transition-colors"
               >
                 <ChevronLeft size={20} />
               </button>
               <button 
                 onClick={() => navigateChapter('next')}
                 disabled={currentChapter.id === TIMELINE_CHAPTERS.length}
                 className="p-2 text-slate-500 hover:text-white disabled:opacity-30 disabled:hover:text-slate-500 transition-colors"
               >
                 <ChevronRight size={20} />
               </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-7xl mx-auto px-4 py-8 sm:py-12 flex flex-col items-center">
            {/* Horizontal Scrollable Image Area */}
            <div className="w-full bg-slate-900 rounded-2xl shadow-2xl shadow-black/50 border border-slate-800/50 overflow-hidden mb-8 relative group">
                {currentChapter.imageUrl ? (
                    <div className="overflow-x-auto no-scrollbar touch-pan-x cursor-grab active:cursor-grabbing">
                        <img 
                            src={currentChapter.imageUrl} 
                            alt={currentChapter.title} 
                            className="h-[400px] sm:h-[600px] max-w-none w-auto mx-auto object-contain bg-[#111] "
                            draggable={false}
                            decoding="async"
                        />
                    </div>
                ) : (
                    <div className="h-[400px] flex flex-col items-center justify-center bg-slate-900 text-slate-600">
                         <Compass size={48} className="mb-4 opacity-50" />
                         <p>圖像資料庫正在擴充中...</p>
                    </div>
                )}
                {currentChapter.imageUrl && (
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm text-white border border-white/10 text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        可左右滑動查看長圖
                    </div>
                )}
            </div>

            {/* Description Card */}
            <article className="max-w-3xl w-full bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-300 text-xs font-sans font-medium tracking-wide">
                        科普筆記
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 text-xs font-sans font-medium tracking-wide capitalize">
                        {currentChapter.category}
                    </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-serif">
                    {currentChapter.title}
                </h2>
                <div className="prose prose-invert prose-lg text-slate-400 leading-loose">
                    {currentChapter.description.split('；').map((sentence, idx) => (
                        <p key={idx} className="mb-4 last:mb-0">{sentence.replace(/[；。]/g, '')}。</p>
                    ))}
                </div>
            </article>
        </main>
      </div>
    );
  }

  // Main Dashboard View
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-200 transition-colors duration-500">
       {/* Background Noise/Gradient - Optimized */}
       <div className="fixed top-0 left-0 w-full h-[800px] bg-gradient-to-b from-blue-900/10 via-purple-900/5 to-transparent pointer-events-none"></div>

       {/* Top Nav */}
       <nav className="absolute top-0 w-full px-6 py-6 flex justify-end z-10">
        <button 
            onClick={onSwitchApp}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/60 border border-slate-700/50 backdrop-blur-md text-sm font-medium text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-slate-800 transition-all shadow-lg"
        >
            <span className="font-mono font-bold text-blue-400">Slope</span> Society
            <ArrowRight size={14} />
        </button>
       </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-48 sm:pb-24 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-400 text-xs font-medium tracking-wider mb-8 uppercase backdrop-blur-sm">
             <BookOpen size={14} className="text-blue-400" />
             <span>人類知識圖譜計畫</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold text-white tracking-tight mb-8 font-serif leading-tight">
            文明演進長圖<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">從宇宙到 AI 時代</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
             40 個關鍵節點，跨越 138 億年的宏大敘事。<br className="hidden sm:block"/>
             一部獻給探索者的終極科普指南。
          </p>
          <button 
            onClick={() => { setSelectedCategory(null); scrollToChapters(); }}
            className="px-8 py-4 bg-white text-slate-950 rounded-full text-lg font-medium hover:bg-blue-50 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 active:scale-95"
          >
            開始探索
          </button>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-12 text-center">四大主題篇章</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <ThemeCard 
                  index="01"
                  title="宇宙與地球" 
                  desc="從大爆炸的奇點，到藍色星球的誕生。見證物質與能量的最初舞蹈。"
                  icon={<Compass size={24} />}
                  colorClass="bg-indigo-600"
                  isActive={selectedCategory === 'universe'}
                  onClick={() => handleCategorySelect('universe')}
                />
                <ThemeCard 
                  index="02"
                  title="生命演化" 
                  desc="從單細胞的微光，到恐龍的咆哮與哺乳動物的崛起。"
                  icon={<Dna size={24} />}
                  colorClass="bg-emerald-600"
                  isActive={selectedCategory === 'life'}
                  onClick={() => handleCategorySelect('life')}
                />
                <ThemeCard 
                  index="03"
                  title="人類文明" 
                  desc="從鑽木取火的洞穴，到輝煌的帝國與思想的軸心時代。"
                  icon={<Building2 size={24} />}
                  colorClass="bg-amber-600"
                  isActive={selectedCategory === 'civilization'}
                  onClick={() => handleCategorySelect('civilization')}
                />
                <ThemeCard 
                  index="04"
                  title="現代科技" 
                  desc="工業革命的轟鳴，信息的流動，直至 AI 時代的奇點。"
                  icon={<Rocket size={24} />}
                  colorClass="bg-blue-600"
                  isActive={selectedCategory === 'tech'}
                  onClick={() => handleCategorySelect('tech')}
                />
            </div>
        </div>
      </section>

      {/* Chapter Grid Section */}
      <section ref={scrollContainerRef} className="py-24 max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10 px-2">
             <div>
                <h2 className="text-3xl font-bold text-white mb-2 font-serif flex items-center gap-3">
                    {selectedCategory ? (
                        <>
                            <span>{selectedCategory === 'universe' ? '宇宙與地球' : selectedCategory === 'life' ? '生命演化' : selectedCategory === 'civilization' ? '人類文明' : '現代科技'}</span>
                            <button onClick={() => setSelectedCategory(null)} className="p-1 rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 transition-colors">
                                <X size={16} />
                            </button>
                        </>
                    ) : '全覽時光'}
                </h2>
                <p className="text-slate-500">
                    {filteredChapters.length} 個文明里程碑
                </p>
             </div>
        </div>

        {/* Grid Layout (Left to Right, Top to Bottom) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredChapters.map((chapter) => (
                <div 
                    key={chapter.id}
                    className="group cursor-pointer bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 hover:bg-slate-800/60 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 backdrop-blur-sm flex flex-col h-full"
                    onClick={() => setActiveChapterId(chapter.id)}
                >
                    {/* Image Aspect Ratio Container */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-950">
                        {chapter.imageUrl ? (
                             <img 
                                src={chapter.imageUrl} 
                                alt={chapter.title} 
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" 
                                loading="lazy"
                                decoding="async"
                             />
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900/50 text-slate-700 p-6 text-center">
                                <span className="font-mono text-4xl font-black opacity-20 mb-2">{chapter.id}</span>
                                <span className="text-[10px] font-medium uppercase tracking-widest opacity-50">No Image</span>
                            </div>
                        )}
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                        {/* Hover Badge */}
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                            <span className="p-2 rounded-full bg-blue-600 text-white shadow-lg inline-flex">
                                <ArrowRight size={14} />
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-2">
                             <div className="text-[10px] font-mono font-bold text-blue-500 uppercase tracking-widest">
                                CH.{chapter.id.toString().padStart(2, '0')}
                             </div>
                             <div className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-500 capitalize">
                                {chapter.category}
                             </div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors font-serif leading-snug mb-3">
                            {chapter.title}
                        </h3>
                        <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed">
                            {chapter.description.split('；')[0]}...
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      <footer className="py-12 border-t border-slate-800/50 text-center relative z-10 bg-[#020617]">
        <p className="text-slate-600 text-sm">
            Designed for curious minds. © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default TimelineApp;