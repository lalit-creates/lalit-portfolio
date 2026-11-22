import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data/portfolioData';

export default function Navbar({ isDark, onToggleTheme, scrollToSection }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navBg = isDark
    ? 'bg-[#0a0b10]/85 border-white/[0.08]'
    : 'bg-white/85 border-slate-200/90';
  const secondarySurface = isDark
    ? 'bg-[#12151f] border-white/[0.08]'
    : 'bg-slate-100 border-slate-200';
  const mutedText = isDark ? 'text-[#94a3b8]' : 'text-slate-600';
  const headingText = isDark ? 'text-white' : 'text-slate-900';

  const handleNavClick = (id) => {
    setMobileNavOpen(false);
    scrollToSection(id);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 ${navBg} backdrop-blur-md border-b px-[5%] py-4 flex items-center justify-between transition-colors duration-300`}
    >
      <button
        onClick={() => handleNavClick('hero')}
        className="text-xl font-extrabold accent-gradient-text tracking-tight text-left cursor-pointer"
      >
        Lalit Kumar Yadav
      </button>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-7">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <button
              onClick={() => handleNavClick(item.href)}
              className={`${mutedText} hover:text-[#6366f1] font-medium text-[0.95rem] transition-colors cursor-pointer`}
            >
              {item.label}
            </button>
          </li>
        ))}

        {/* Dark / Light Mode Toggle */}
        <li>
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={onToggleTheme}
            aria-label="Toggle Dark or Light Mode"
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${
              isDark
                ? 'bg-[#191e2e] border-white/10 text-amber-400 hover:border-[#6366f1]'
                : 'bg-slate-100 border-slate-300 text-indigo-600 hover:border-indigo-500'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </motion.button>
        </li>

        <li>
          <button
            onClick={() => handleNavClick('contact')}
            className="accent-gradient-bg text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-[0_4px_15px_rgba(99,102,241,0.3)] hover:shadow-[0_6px_22px_rgba(99,102,241,0.5)] transition-all cursor-pointer"
          >
            Let&apos;s Start
          </button>
        </li>
      </ul>

      {/* Mobile Controls */}
      <div className="flex items-center gap-3 md:hidden">
        <button
          onClick={onToggleTheme}
          aria-label="Toggle Theme"
          className={`w-9 h-9 rounded-full border flex items-center justify-center ${ isDark ? 'bg-[#191e2e] border-white/10 text-amber-400' : 'bg-slate-100 border-slate-300 text-indigo-600' }`} > {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />} </button>  <button onClick={() => setMobileNavOpen(!mobileNavOpen)} className={`text-2xl ${headingText} p-1`}
          aria-label="Toggle Menu"
        >
          {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className={`md:hidden absolute top-full left-0 w-full ${secondarySurface} border-b py-7 px-6 flex flex-col items-center gap-5 shadow-2xl`}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`${mutedText} hover:text-[#6366f1] font-medium text-base`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="accent-gradient-bg text-white px-6 py-2.5 rounded-full font-semibold text-sm"
            >
              Let&apos;s Start
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}