import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Sparkles, History } from 'lucide-react';

const EDGE_CARDS = [
  {
    title: 'Pacing & Retention',
    description:
      'Every cut is calculated to maximize audience retention, dropping zero dead frames and maintaining high viewer engagement throughout.',
    icon: Gauge,
  },
  {
    title: 'Cinematic Polish',
    description:
      'Advanced color grading, seamless sound design, and custom motion graphics that elevate standard footage into studio-grade cinema.',
    icon: Sparkles,
  },
  {
    title: 'Reliable Turnaround',
    description:
      'Strict adherence to project milestones, clear communication, and efficient workflow execution ensuring zero missed deadlines.',
    icon: History,
  },
];

export default function EditingEdge({ isDark }) {
  const cardSurface = isDark
    ? 'bg-[#191e2e] border-white/[0.08]'
    : 'bg-white border-slate-200 shadow-sm';
  const sectionBorder = isDark ? 'border-white/[0.08]' : 'border-slate-200';
  const mutedText = isDark ? 'text-[#94a3b8]' : 'text-slate-600';
  const headingText = isDark ? 'text-white' : 'text-slate-900';

  return (
    <section id="edge" className={`py-24 px-[6%] md:px-[8%] border-b ${sectionBorder}`}>
      <div className="text-center mb-16">
        <span className="text-[0.85rem] uppercase tracking-[2px] text-[#6366f1] font-bold block mb-2">
          Why Work With Me
        </span>
        <h2
          className={`text-3xl sm:text-4xl md:text-[2.8rem] font-extrabold tracking-[-0.5px] ${headingText}`}
        >
          The Editing Edge
        </h2>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {EDGE_CARDS.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`${cardSurface} border hover:border-[#6366f1]/40 p-9 rounded-2xl transition-all`}
            >
              <IconComponent className="w-10 h-10 text-[#6366f1] mb-6" />
              <h3 className={`text-xl font-bold ${headingText} mb-3`}>{item.title}</h3>
              <p className={`text-[0.95rem] ${mutedText} leading-relaxed`}>{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}