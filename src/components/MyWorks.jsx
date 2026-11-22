import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, HardDrive } from 'lucide-react';
import { FILTER_TABS, PROJECTS } from '../data/portfolioData';

function YouTubeIcon({ className = 'w-3 h-3' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function MyWorks({ isDark, onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const cardSurface = isDark
    ? 'bg-[#191e2e] border-white/[0.08]'
    : 'bg-white border-slate-200 shadow-sm';
  const sectionBorder = isDark ? 'border-white/[0.08]' : 'border-slate-200';
  const mutedText = isDark ? 'text-[#94a3b8]' : 'text-slate-600';
  const headingText = isDark ? 'text-white' : 'text-slate-900';

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.filterKey === activeFilter);

  return (
    <section id="works" className={`py-24 px-[6%] md:px-[8%] border-b ${sectionBorder}`}>
      <div className="text-center mb-14">
        <span className="text-[0.85rem] uppercase tracking-[2px] text-[#6366f1] font-bold block mb-2">
          Portfolio Showcase
        </span>
        <h2
          className={`text-3xl sm:text-4xl md:text-[2.8rem] font-extrabold tracking-[-0.5px] ${headingText}`}
        >
          My Works
        </h2>
        <p className={`mt-3 text-sm ${mutedText}`}>
          Click any project video card to watch in the popup player (YouTube &amp; Google Drive)
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <motion.button
                key={tab.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#6366f1] text-white border border-[#6366f1] shadow-[0_4px_15px_rgba(99,102,241,0.3)]'
                    : `${cardSurface} ${mutedText} hover:text-[#6366f1] border hover:border-[#6366f1]`
                }`}
              >
                {tab.label}
              </motion.button>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3 }}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer ${cardSurface} border hover:border-[#6366f1]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(99,102,241,0.18)] flex flex-col`}
              >
                <div className="relative w-full h-[220px] bg-[#1e2436] overflow-hidden flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors" />

                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2 py-1 rounded-md bg-black/75 backdrop-blur-md text-[10px] font-bold text-rose-400 flex items-center gap-1 border border-white/10">
                      <YouTubeIcon className="w-3 h-3" /> YT
                    </span>
                    <span className="px-2 py-1 rounded-md bg-black/75 backdrop-blur-md text-[10px] font-bold text-sky-400 flex items-center gap-1 border border-white/10">
                      <HardDrive className="w-3 h-3" /> Drive
                    </span>
                  </div>

                  <div className="absolute w-14 h-14 bg-[#6366f1]/90 group-hover:bg-[#6366f1] rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] group-hover:scale-110 transition-all">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs uppercase font-bold text-[#6366f1] tracking-wider mb-2">
                      {project.category}
                    </div>
                    <h3
                      className={`text-xl font-bold ${headingText} group-hover:text-[#6366f1] transition-colors mb-3`}
                    >
                      {project.title}
                    </h3>
                    <p className={`text-[0.95rem] ${mutedText} mb-5 leading-relaxed`}>
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`${
                          isDark
                            ? 'bg-white/[0.05] border-white/[0.08] text-[#94a3b8]'
                            : 'bg-slate-100 border-slate-200 text-slate-600'
                        } border px-3 py-1 rounded text-xs`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}