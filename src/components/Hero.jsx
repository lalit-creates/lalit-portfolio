import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero({ isDark, scrollToSection }) {
  const cardSurface = isDark
    ? 'bg-[#191e2e] border-white/[0.08]'
    : 'bg-white border-slate-200 shadow-sm';
  const sectionBorder = isDark ? 'border-white/[0.08]' : 'border-slate-200';
  const mutedText = isDark ? 'text-[#94a3b8]' : 'text-slate-600';
  const headingText = isDark ? 'text-white' : 'text-slate-900';

  return (
    <header
      id="hero"
      className={`min-h-screen flex items-center justify-center pt-32 pb-16 px-[5%] relative border-b ${sectionBorder}`}
      style={{
        background:
          'radial-gradient(circle at 50% 20%, rgba(99, 102, 241, 0.14) 0%, transparent 60%)',
      }}
    >
      <div className="max-w-[1000px] text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2.5 ${cardSurface} border px-4 py-2 rounded-full text-[0.85rem] ${
            isDark ? 'text-[#a5b4fc]' : 'text-indigo-600'
          } mb-6 font-medium`}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse" />
          Available for Freelance &amp; Full-time Projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.15] mb-6 tracking-[-1px] ${headingText}`}
        >
          Crafting Cinematic Visuals &amp;{' '}
          <span className="accent-gradient-text">High-Impact Edits</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-base sm:text-lg md:text-[1.2rem] ${mutedText} max-w-[700px] mx-auto mb-10 leading-relaxed`}
        >
          Motion Graphics Designer &amp; Video Editor with 4+ years of expertise transforming raw
          footage into compelling brand narratives for top agencies and global brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('works')}
            className="accent-gradient-bg text-white px-8 py-3.5 rounded-lg font-semibold inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_6px_25px_rgba(99,102,241,0.5)] transition-all cursor-pointer"
          >
            <span>Explore My Works</span>
            <ArrowDown className="w-4 h-4" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('contact')}
            className={`${cardSurface} ${headingText} border hover:border-[#6366f1] px-8 py-3.5 rounded-lg font-semibold transition-all cursor-pointer`}
          >
            Grab a Quote
          </motion.button>
        </motion.div>
      </div>
    </header>
  );
}