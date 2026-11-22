import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Footer({ isDark }) {
  const cardSurface = isDark
    ? 'bg-[#191e2e] border-white/[0.08]'
    : 'bg-white border-slate-200 shadow-sm';
  const secondarySurface = isDark
    ? 'bg-[#12151f] border-white/[0.08]'
    : 'bg-slate-100 border-slate-200';
  const mutedText = isDark ? 'text-[#94a3b8]' : 'text-slate-600';
  const headingText = isDark ? 'text-white' : 'text-slate-900';

  return (
    <footer className={`${secondarySurface} py-12 px-[6%] md:px-[8%]`}>
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="text-xl font-extrabold accent-gradient-text">Lalit Kumar Yadav</div>
        <p className={`${mutedText} text-sm`}>
          © 2026 Lalit Kumar Yadav. All rights reserved. Motion Graphics Designer &amp; Video Editor.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="mailto:ly740021@gmail.com"
            aria-label="Email"
            className={`w-10 h-10 rounded-full ${cardSurface} hover:bg-[#6366f1] border flex items-center justify-center ${headingText} hover:text-white transition-all`}
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="tel:7400213576"
            aria-label="Phone"
            className={`w-10 h-10 rounded-full ${cardSurface} hover:bg-[#6366f1] border flex items-center justify-center ${headingText} hover:text-white transition-all`}
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={`w-10 h-10 rounded-full ${cardSurface} hover:bg-[#6366f1] border flex items-center justify-center ${headingText} hover:text-white transition-all`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={`w-10 h-10 rounded-full ${cardSurface} hover:bg-[#6366f1] border flex items-center justify-center ${headingText} hover:text-white transition-all`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}