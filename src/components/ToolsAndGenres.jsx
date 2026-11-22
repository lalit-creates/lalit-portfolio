import React from 'react';
import { motion } from 'framer-motion';
import { TOOLS_STACK, VIDEO_GENRES } from '../data/portfolioData';

function ToolSoftwareLogo({ id }) {
  switch (id) {
    case 'ae':
      return (
        <svg viewBox="0 0 56 56" className="w-14 h-14 shrink-0" fill="none">
          <rect x="2" y="2" width="52" height="52" rx="13" fill="#00005B" stroke="#9999FF" strokeWidth="2.5" />
          <text x="28" y="36" textAnchor="middle" fill="#9999FF" fontSize="22" fontWeight="800">Ae</text>
        </svg>
      );
    case 'pr':
      return (
        <svg viewBox="0 0 56 56" className="w-14 h-14 shrink-0" fill="none">
          <rect x="2" y="2" width="52" height="52" rx="13" fill="#00005B" stroke="#9999FF" strokeWidth="2.5" />
          <text x="28" y="36" textAnchor="middle" fill="#EA77FF" fontSize="22" fontWeight="800">Pr</text>
        </svg>
      );
    case 'davinci':
      return (
        <svg viewBox="0 0 56 56" className="w-14 h-14 shrink-0" fill="none">
          <rect x="2" y="2" width="52" height="52" rx="13" fill="#111827" stroke="#38BDF8" strokeWidth="2.2" />
          <circle cx="28" cy="28" r="4" fill="#F8FAFC" />
          <path d="M28 11C32.5 11 35 16 28 22C21 16 23.5 11 28 11Z" fill="#EF4444" />
          <path d="M42.7 36.5C40.5 40.4 34.8 40 33.2 31C41.8 28 45 32.6 42.7 36.5Z" fill="#22C55E" />
          <path d="M13.3 36.5C11 32.6 14.2 28 22.8 31C21.2 40 15.5 40.4 13.3 36.5Z" fill="#3B82F6" />
        </svg>
      );
    case 'psai':
      return (
        <svg viewBox="0 0 56 56" className="w-14 h-14 shrink-0" fill="none">
          <rect x="2" y="4" width="34" height="34" rx="9" fill="#001E36" stroke="#31A8FF" strokeWidth="2" />
          <text x="19" y="26" textAnchor="middle" fill="#31A8FF" fontSize="14" fontWeight="800">Ps</text>
          <rect x="20" y="18" width="34" height="34" rx="9" fill="#330000" stroke="#FF9A00" strokeWidth="2" />
          <text x="37" y="40" textAnchor="middle" fill="#FF9A00" fontSize="14" fontWeight="800">Ai</text>
        </svg>
      );
    case 'ai':
      return (
        <svg viewBox="0 0 56 56" className="w-14 h-14 shrink-0" fill="none">
          <rect x="2" y="2" width="52" height="52" rx="13" fill="#6366F1" fillOpacity="0.18" stroke="#A855F7" strokeWidth="2.5" />
          <path d="M28 13L31.2 22.8L41 26L31.2 29.2L28 39L24.8 29.2L15 26L24.8 22.8L28 13Z" fill="#E879F9" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 56 56" className="w-14 h-14 shrink-0" fill="none">
          <rect x="2" y="2" width="52" height="52" rx="13" fill="#1C1917" stroke="#F59E0B" strokeWidth="2.5" />
          <polygon points="16,18 40,14 43,39 14,42" fill="#F59E0B" fillOpacity="0.18" stroke="#FBBF24" strokeWidth="2" />
          <text x="28" y="32" textAnchor="middle" fill="#FEF3C7" fontSize="11" fontWeight="800">MP</text>
        </svg>
      );
  }
}

export default function ToolsAndGenres({ isDark }) {
  const cardSurface = isDark
    ? 'bg-[#191e2e] border-white/[0.08]'
    : 'bg-white border-slate-200 shadow-sm';
  const sectionBorder = isDark ? 'border-white/[0.08]' : 'border-slate-200';
  const mutedText = isDark ? 'text-[#94a3b8]' : 'text-slate-600';
  const headingText = isDark ? 'text-white' : 'text-slate-900';

  return (
    <section id="skills" className={`py-24 px-[6%] md:px-[8%] border-b ${sectionBorder}`}>
      <div className="text-center mb-16">
        <span className="text-[0.85rem] uppercase tracking-[2px] text-[#6366f1] font-bold block mb-2">
          Expertise &amp; Stack
        </span>
        <h2
          className={`text-3xl sm:text-4xl md:text-[2.8rem] font-extrabold tracking-[-0.5px] ${headingText}`}
        >
          Tools &amp; Video Genres
        </h2>
      </div>

      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {TOOLS_STACK.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -4 }}
              className={`${cardSurface} border hover:border-[#6366f1] p-6 rounded-2xl flex items-center gap-5 transition-all`}
            >
              <ToolSoftwareLogo id={tool.id} />
              <div>
                <h4 className={`text-[1.1rem] font-bold ${headingText} mb-0.5`}>{tool.name}</h4>
                <p className={`text-[0.85rem] ${mutedText}`}>{tool.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`${cardSurface} border p-8 sm:p-10 rounded-2xl text-center`}
        >
          <h3 className={`text-2xl font-bold ${headingText} mb-6`}>Video Genres I Master</h3>
          <div className="flex flex-wrap justify-center gap-3.5">
            {VIDEO_GENRES.map((genre) => (
              <motion.span
                key={genre}
                whileHover={{ scale: 1.04 }}
                className={`bg-[#6366f1]/10 border border-[#6366f1]/30 ${
                  isDark ? 'text-[#c7d2fe]' : 'text-indigo-700'
                } px-5 py-2.5 rounded-full font-semibold text-sm`}
              >
                {genre}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}