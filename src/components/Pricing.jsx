import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PRICING_PACKAGES } from '../data/portfolioData';

export default function Pricing({ isDark, onSelectPackage }) {
  const cardSurface = isDark
    ? 'bg-[#191e2e] border-white/[0.08]'
    : 'bg-white border-slate-200 shadow-sm';
  const sectionBorder = isDark ? 'border-white/[0.08]' : 'border-slate-200';
  const mutedText = isDark ? 'text-[#94a3b8]' : 'text-slate-600';
  const headingText = isDark ? 'text-white' : 'text-slate-900';

  return (
    <section id="pricing" className={`py-24 px-[6%] md:px-[8%] border-b ${sectionBorder}`}>
      <div className="text-center mb-16">
        <span className="text-[0.85rem] uppercase tracking-[2px] text-[#6366f1] font-bold block mb-2">
          Transparent Pricing
        </span>
        <h2
          className={`text-3xl sm:text-4xl md:text-[2.8rem] font-extrabold tracking-[-0.5px] ${headingText}`}
        >
          Clear Investment Packages
        </h2>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRICING_PACKAGES.map((pkg, idx) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            className={`rounded-2xl p-9 flex flex-col relative transition-all ${
              pkg.popular
                ? 'border border-[#6366f1] shadow-[0_10px_30px_rgba(99,102,241,0.15)]'
                : `${cardSurface} border`
            }`}
            style={
              pkg.popular
                ? {
                    background: isDark
                      ? 'linear-gradient(180deg, rgba(99, 102, 241, 0.09) 0%, #191e2e 50%)'
                      : 'linear-gradient(180deg, rgba(99, 102, 241, 0.08) 0%, #ffffff 55%)',
                  }
                : undefined
            }
          >
            {pkg.popular && (
              <span className="absolute -top-3.5 right-6 accent-gradient-bg text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </span>
            )}

            <h3 className={`text-2xl font-bold ${headingText} mb-1`}>{pkg.name}</h3>
            <p className={`${mutedText} text-sm`}>{pkg.tagline}</p>

            <div className={`text-4xl font-extrabold ${headingText} my-5`}>
              {pkg.price} <span className={`text-sm font-normal ${mutedText}`}>{pkg.unit}</span>
            </div>

            <ul className="space-y-3 my-4 flex-1">
              {pkg.features.map((feat) => (
                <li key={feat} className={`text-[0.95rem] ${mutedText} flex items-center gap-3`}>
                  <Check className="w-4 h-4 text-[#6366f1] shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => onSelectPackage(pkg.name)}
              className={`mt-6 w-full py-3.5 rounded-lg font-semibold text-sm transition-all cursor-pointer ${
                pkg.popular
                  ? 'accent-gradient-bg text-white shadow-[0_4px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_6px_25px_rgba(99,102,241,0.5)]'
                  : `${
                      isDark
                        ? 'bg-[#191e2e] hover:bg-[#23293d] text-white border-white/[0.12]'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border-slate-300'
                    } border`
              }`}
            >
              {pkg.ctaLabel}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}