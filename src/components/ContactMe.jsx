import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactMe({ isDark, selectedPackage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPackage) {
      setFormData((prev) => ({ ...prev, projectType: selectedPackage }));
    }
  }, [selectedPackage]);

  const cardSurface = isDark
    ? 'bg-[#191e2e] border-white/[0.08]'
    : 'bg-white border-slate-200 shadow-sm';
  const secondarySurface = isDark
    ? 'bg-[#12151f] border-white/[0.08]'
    : 'bg-slate-100 border-slate-200';
  const sectionBorder = isDark ? 'border-white/[0.08]' : 'border-slate-200';
  const mutedText = isDark ? 'text-[#94a3b8]' : 'text-slate-600';
  const headingText = isDark ? 'text-white' : 'text-slate-900';

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className={`py-24 px-[6%] md:px-[8%] border-b ${sectionBorder}`}>
      <div className="text-center mb-16">
        <span className="text-[0.85rem] uppercase tracking-[2px] text-[#6366f1] font-bold block mb-2">
          Get In Touch
        </span>
        <h2
          className={`text-3xl sm:text-4xl md:text-[2.8rem] font-extrabold tracking-[-0.5px] ${headingText}`}
        >
          Let&apos;s Start Your Project
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`max-w-[800px] mx-auto ${cardSurface} border p-7 sm:p-12 rounded-[20px]`}
      >
        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#22c55e]/15 border border-[#22c55e]/30 text-[#22c55e] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className={`text-2xl font-bold ${headingText}`}>Project Request Sent!</h3>
            <p className={`${mutedText} max-w-md mx-auto`}>
              Thank you, <strong className={headingText}>{formData.name}</strong>! Lalit will get
              back to you shortly at <span className="text-[#6366f1]">{formData.email}</span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', projectType: '', details: '' });
              }}
              className={`mt-4 ${secondarySurface} ${headingText} border px-6 py-2.5 rounded-lg text-sm font-semibold cursor-pointer`}
            >
              Send Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-semibold ${headingText} mb-2`}>Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full ${secondarySurface} border focus:border-[#6366f1] ${headingText} px-4 py-3.5 rounded-lg text-[0.95rem] outline-none`}
                />
              </div>
              <div>
                <label className={`block text-sm font-semibold ${headingText} mb-2`}>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full ${secondarySurface} border focus:border-[#6366f1] ${headingText} px-4 py-3.5 rounded-lg text-[0.95rem] outline-none`}
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-semibold ${headingText} mb-2`}>
                Project Type / Requirements
              </label>
              <input
                type="text"
                placeholder="e.g. YouTube Video Editing, Brand Ad, VFX Shot"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className={`w-full ${secondarySurface} border focus:border-[#6366f1] ${headingText} px-4 py-3.5 rounded-lg text-[0.95rem] outline-none`}
              />
            </div>

            <div>
              <label className={`block text-sm font-semibold ${headingText} mb-2`}>
                Project Details &amp; Timeline
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about your project vision, video length, and deadline..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className={`w-full ${secondarySurface} border focus:border-[#6366f1] ${headingText} px-4 py-3.5 rounded-lg text-[0.95rem] outline-none resize-y`}
              />
            </div>

            <button
              type="submit"
              className="w-full accent-gradient-bg text-white py-4 rounded-lg font-semibold text-base shadow-[0_4px_20px_rgba(99,102,241,0.3)] inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Send Project Request</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}