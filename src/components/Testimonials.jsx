import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export default function Testimonials({ isDark }) {
  const cardSurface = isDark
    ? 'bg-[#191e2e] border-white/[0.08]'
    : 'bg-white border-slate-200 shadow-sm';
  const sectionBorder = isDark ? 'border-white/[0.08]' : 'border-slate-200';
  const mutedText = isDark ? 'text-[#94a3b8]' : 'text-slate-600';
  const headingText = isDark ? 'text-white' : 'text-slate-900';

  return (
    <section className={`py-24 px-[6%] md:px-[8%] border-b ${sectionBorder}`}>
      <div className="text-center mb-16">
        <span className="text-[0.85rem] uppercase tracking-[2px] text-[#6366f1] font-bold block mb-2">
          Testimonials
        </span>
        <h2
          className={`text-3xl sm:text-4xl md:text-[2.8rem] font-extrabold tracking-[-0.5px] ${headingText}`}
        >
          Client Feedback
        </h2>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, idx) => (
          <motion.div
            key={t.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            whileHover={{ y: -4 }}
            className={`${cardSurface} border p-9 rounded-2xl flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center gap-1 text-[#f59e0b] mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#f59e0b]" />
                ))}
              </div>
              <p
                className={`text-[1.05rem] ${
                  isDark ? 'text-[#e2e8f0]' : 'text-slate-700'
                } italic mb-6 leading-relaxed`}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
            <div>
              <h4 className={`text-[1.05rem] font-bold ${headingText}`}>{t.role}</h4>
              <p className={`text-[0.85rem] ${mutedText}`}>{t.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}