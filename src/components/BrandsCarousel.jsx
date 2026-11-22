import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BRANDS } from '../data/portfolioData';

function BrandLogoGraphic({ type, isDark }) {
  const mainTextFill = isDark ? '#f8fafc' : '#0f172a';
  const subTextFill = isDark ? '#cbd5e1' : '#475569';

  switch (type) {
    case 'dettol':
      return (
        <svg viewBox="0 0 180 64" className="w-36 h-12" fill="none">
          <path d="M90 6L146 28L90 58L34 28L90 6Z" fill="#059669" fillOpacity="0.22" stroke="#10b981" strokeWidth="2.5" />
          <path d="M90 15V45M75 30H105" stroke="#10b981" strokeWidth="4.5" strokeLinecap="round" />
          <text x="90" y="55" textAnchor="middle" fill={mainTextFill} fontSize="12" fontWeight="800" letterSpacing="2.5">DETTOL</text>
        </svg>
      );
    case 'farzi':
      return (
        <svg viewBox="0 0 180 64" className="w-36 h-12" fill="none">
          <rect x="22" y="10" width="136" height="44" rx="8" fill="#f59e0b" fillOpacity="0.16" stroke="#f59e0b" strokeWidth="2" />
          <text x="90" y="36" textAnchor="middle" fill="#d97706" fontSize="20" fontWeight="900" letterSpacing="4">FARZI</text>
          <text x="90" y="48" textAnchor="middle" fill={subTextFill} fontSize="7.5" fontWeight="700" letterSpacing="3">ORIGINAL SERIES</text>
        </svg>
      );
    case 'lotus':
      return (
        <svg viewBox="0 0 180 64" className="w-36 h-12" fill="none">
          <path d="M90 10C96 20 96 28 90 34C84 28 84 20 90 10Z" fill="#ec4899" fillOpacity="0.85" />
          <text x="90" y="50" textAnchor="middle" fill={mainTextFill} fontSize="13" fontWeight="800" letterSpacing="2">LOTUS HERBALS</text>
        </svg>
      );
    case 'pediasure':
      return (
        <svg viewBox="0 0 180 64" className="w-36 h-12" fill="none">
          <circle cx="38" cy="32" r="14" fill="#6366f1" fillOpacity="0.25" stroke="#6366f1" strokeWidth="2" />
          <text x="108" y="36" textAnchor="middle" fill={mainTextFill} fontSize="16" fontWeight="800">PediaSure</text>
        </svg>
      );
    case 'perfetti':
      return (
        <svg viewBox="0 0 180 64" className="w-36 h-12" fill="none">
          <ellipse cx="90" cy="32" rx="68" ry="20" fill="#f43f5e" fillOpacity="0.16" stroke="#f43f5e" strokeWidth="2" />
          <text x="90" y="36" textAnchor="middle" fill={mainTextFill} fontSize="15" fontWeight="900" letterSpacing="2.5">PERFETTI</text>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 180 64" className="w-36 h-12" fill="none">
          <rect x="28" y="12" width="124" height="40" rx="8" fill="#3b82f6" fillOpacity="0.16" stroke="#3b82f6" strokeWidth="2" />
          <text x="90" y="42" textAnchor="middle" fill={mainTextFill} fontSize="18" fontWeight="900" fontStyle="italic" letterSpacing="3">VISA</text>
        </svg>
      );
  }
}

export default function BrandsCarousel({ isDark }) {
  const [isPaused, setIsPaused] = useState(false);

  const cardSurface = isDark
    ? 'bg-[#191e2e] border-white/[0.08]'
    : 'bg-white border-slate-200 shadow-sm';
  const sectionBorder = isDark ? 'border-white/[0.08]' : 'border-slate-200';
  const mutedText = isDark ? 'text-[#94a3b8]' : 'text-slate-600';
  const headingText = isDark ? 'text-white' : 'text-slate-900';

  return (
    <section id="brands" className={`py-24 border-b ${sectionBorder} overflow-hidden relative`}>
      <div className="text-center mb-14 px-[6%] md:px-[8%]">
        <span className="text-[0.85rem] uppercase tracking-[2px] text-[#6366f1] font-bold block mb-2">
          Clientele
        </span>
        <h2
          className={`text-3xl sm:text-4xl md:text-[2.8rem] font-extrabold tracking-[-0.5px] ${headingText}`}
        >
          Brands For Which I Have Worked For
        </h2>
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r ${
            isDark ? 'from-[#0a0b10]' : 'from-[#f8fafc]'
          } to-transparent z-10`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l ${
            isDark ? 'from-[#0a0b10]' : 'from-[#f8fafc]'
          } to-transparent z-10`}
        />

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex overflow-hidden py-3"
        >
          <motion.div
            animate={isPaused ? undefined : { x: ['-50%', '0%'] }}
            transition={{
              x: { repeat: Infinity, repeatType: 'loop', duration: 24, ease: 'linear' },
            }}
            className="flex shrink-0 gap-6 pr-6"
          >
            {[...BRANDS, ...BRANDS].map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className={`w-[230px] sm:w-[260px] shrink-0 ${cardSurface} border hover:border-[#6366f1]/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 group`}
              >
                <div
                  className={`w-full h-20 rounded-xl bg-gradient-to-br ${brand.badgeBg} border ${sectionBorder} flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform`}
                >
                  <BrandLogoGraphic type={brand.logoType} isDark={isDark} />
                </div>
                <span className={`text-sm font-bold tracking-wide ${headingText}`}>{brand.name}</span>
                <span className={`text-[11px] ${mutedText} mt-0.5`}>{brand.subtitle}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}