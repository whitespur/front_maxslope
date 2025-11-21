import React from 'react';
import { ExternalLink, Twitter, Globe, Youtube, Github, Mic, FileText } from 'lucide-react';
import { Entity } from '../types';

interface EntityCardProps {
  entity: Entity;
  onSlopeClick: (slope: string) => void;
}

const EntityCard: React.FC<EntityCardProps> = ({ entity, onSlopeClick }) => {
  return (
    <div className="group relative flex flex-col bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1 overflow-hidden">
      
      {/* Decorative slope gradient background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-bl-full pointer-events-none" />

      <div className="relative z-10 flex-1">
        <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                {entity.name}
                </h3>
                {entity.type === 'company' && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-slate-800 text-slate-400 rounded">
                        Co
                    </span>
                )}
            </div>
            
            {/* Primary Action - defaults to Twitter or Blog if available */}
            {entity.twitter_url ? (
                 <a 
                 href={entity.twitter_url} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-slate-500 hover:text-blue-400 transition-colors"
               >
                 <Twitter size={18} />
               </a>
            ) : entity.blog ? (
                <a 
                href={entity.blog} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-400 transition-colors"
              >
                <Globe size={18} />
              </a>
            ) : null}
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-4">
          {entity.intro_zh}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {entity.slope.map((slope) => (
            <button
              key={slope}
              onClick={(e) => {
                e.stopPropagation();
                onSlopeClick(slope);
              }}
              className="px-2.5 py-1 text-xs font-mono text-blue-300 bg-blue-950/30 border border-blue-900/50 rounded-full hover:bg-blue-900/60 hover:border-blue-700 transition-colors cursor-pointer uppercase tracking-wide"
            >
              {slope}
            </button>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="relative z-10 pt-4 border-t border-slate-800/50 flex items-center gap-4 mt-auto">
        {entity.blog && (
          <a
            href={entity.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-emerald-400 transition-colors"
            title="Blog / Website"
          >
            <Globe size={14} />
            <span>Web</span>
          </a>
        )}
        {entity.youtube && (
          <a
            href={entity.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-red-500 transition-colors"
            title="YouTube"
          >
            <Youtube size={14} />
            <span>YT</span>
          </a>
        )}
        {entity.github && (
          <a
            href={entity.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-white transition-colors"
            title="GitHub"
          >
            <Github size={14} />
            <span>Code</span>
          </a>
        )}
         {entity.podcast && (
          <a
            href={entity.podcast}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-purple-400 transition-colors"
            title="Podcast"
          >
            <Mic size={14} />
            <span>Pod</span>
          </a>
        )}
        {entity.rss && (
            <a
            href={entity.rss}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-orange-400 transition-colors ml-auto"
            title="RSS Feed"
          >
            <FileText size={14} />
          </a>
        )}
      </div>
    </div>
  );
};

export default EntityCard;