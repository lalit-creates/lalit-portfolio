import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Camera } from 'lucide-react';
import { EXPERIENCE_STATS } from '../data/portfolioData';

function CountUpStat({ target, suffix = '', duration = 1.8 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function AboutMe({ isDark }) {
  const [profilePhoto, setProfilePhoto] = useState('../../public/lalit.jpg');
  const fileInputRef = useRef(null);

  const cardSurface = isDark
    ? 'bg-[#191e2e] border-white/[0.08]'
    : 'bg-white border-slate-200 shadow-sm';
  const sectionBorder = isDark ? 'border-white/[0.08]' : 'border-slate-200';
  const mutedText = isDark ? 'text-[#94a3b8]' : 'text-slate-600';
  const headingText = isDark ? 'text-white' : 'text-slate-900';

  const handleLocalPhotoSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
    }
  };

  return (
    <section id="about" className={`py-24 px-[6%] md:px-[8%] border-b ${sectionBorder}`}>
      <div className="text-center mb-16">
        <span className="text-[0.85rem] uppercase tracking-[2px] text-[#6366f1] font-bold block mb-2">
          About Me
        </span>
        <h2
          className={`text-3xl sm:text-4xl md:text-[2.8rem] font-extrabold tracking-[-0.5px] ${headingText}`}
        >
          The Creator Behind The Screen
        </h2>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Photo Box */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <div className={`${cardSurface} border rounded-[20px] p-4 relative group`}>
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={profilePhoto}
                alt="Lalit Kumar Yadav"
                onError={(e) => {
                  e.currentTarget.src =
                    '/public/Lalit 1x1.png';
                }}
                className="w-full h-[380px] sm:h-[420px] object-fit: scale-down rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleLocalPhotoSelect}
                className="hidden"
              />
              {/* <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-3 right-3 bg-[#0a0b10]/85 hover:bg-[#6366f1] backdrop-blur-md text-white text-xs font-semibold px-3.5 py-2 rounded-lg border border-white/15 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Camera className="w-3.5 h-3.5" />
                Load lalit.jpg
              </button> */}
            </div>
          </div>
        </motion.div>

        {/* Bio & Animated Count-Up Stats */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <h3 className={`text-2xl sm:text-3xl font-bold mb-6 ${headingText}`}>
            Hi, I&apos;m Lalit Kumar Yadav
          </h3>
          <p className={`${mutedText} mb-5 text-[1.05rem] leading-relaxed`}>
            I am a passionate Motion Graphics Designer and Video Editor based in Mumbai with over 4
            years of professional experience in post-production, VFX compositing, and dynamic video
            editing.
          </p>
          <p className={`${mutedText} mb-8 text-[1.05rem] leading-relaxed`}>
            Currently working at <strong className={headingText}>TSH.Media</strong> and having
            collaborated with top agencies like{' '}
            <strong className={headingText}>Onads Communications</strong> and{' '}
            <strong className={headingText}>Black FXStudio</strong>, I specialize in delivering
            high-end visuals for advertisements, films, and digital content.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
            {EXPERIENCE_STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.12 }}
                whileHover={{ y: -4 }}
                className={`${cardSurface} border p-6 rounded-xl text-center transition-shadow hover:shadow-lg`}
              >
                <div className="text-3xl sm:text-4xl font-extrabold accent-gradient-text mb-1">
                  <CountUpStat target={stat.target} suffix={stat.suffix} />
                </div>
                <div className={`text-[0.85rem] ${mutedText} font-medium`}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}