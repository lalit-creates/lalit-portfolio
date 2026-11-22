import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, HardDrive, ExternalLink } from 'lucide-react';

function YouTubeIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function VideoModal({ project, isDark, onClose }) {
  const [videoSourceMode, setVideoSourceMode] = useState('youtube');

  const cardSurface = isDark
    ? 'bg-[#191e2e] border-white/[0.08]'
    : 'bg-white border-slate-200';
  const sectionBorder = isDark ? 'border-white/[0.08]' : 'border-slate-200';
  const mutedText = isDark ? 'text-[#94a3b8]' : 'text-slate-600';
  const headingText = isDark ? 'text-white' : 'text-slate-900';

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ duration: 0.28 }}
            onClick={(e) => e.stopPropagation()}
            className={`w-full max-w-4xl rounded-2xl ${
              isDark ? 'bg-[#12151f] border-white/15' : 'bg-white border-slate-200'
            } border overflow-hidden shadow-2xl`}
          >
            {/* Header */}
            <div
              className={`px-6 py-4 border-b ${sectionBorder} flex flex-wrap items-center justify-between gap-3`}
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#6366f1]">
                  {project.category}
                </span>
                <h3 className={`text-lg sm:text-xl font-bold ${headingText}`}>{project.title}</h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setVideoSourceMode('youtube')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer ${
                    videoSourceMode === 'youtube'
                      ? 'bg-rose-600 text-white shadow-md'
                      : `${cardSurface} ${mutedText} border`
                  }`}
                >
                  <YouTubeIcon className="w-4 h-4" />
                  YouTube Player
                </button>

                <button
                  onClick={() => setVideoSourceMode('drive')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer ${
                    videoSourceMode === 'drive'
                      ? 'bg-sky-600 text-white shadow-md'
                      : `${cardSurface} ${mutedText} border`
                  }`}
                >
                  <HardDrive className="w-4 h-4" />
                  Google Drive
                </button>

                <button
                  onClick={onClose}
                  aria-label="Close Video Popup"
                  className={`ml-2 w-9 h-9 rounded-lg ${cardSurface} border flex items-center justify-center ${headingText} hover:border-[#6366f1] cursor-pointer`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Viewport */}
            <div className="relative aspect-video bg-black w-full">
              {videoSourceMode === 'youtube' ? (
                <iframe
                  src={project.youtubeEmbedUrl}
                  title={project.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#0a0b10] via-[#12151f] to-[#191e2e]">
                  <div className="w-16 h-16 rounded-2xl bg-sky-500/15 border border-sky-500/30 text-sky-400 flex items-center justify-center mb-4">
                    <HardDrive className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    High-Bitrate Master on Google Drive
                  </h4>
                  <p className="text-sm text-[#94a3b8] max-w-md mb-6">
                    Watch or review the uncompressed ProRes / MP4 master files for{' '}
                    <strong className="text-white">{project.title}</strong> directly in Lalit&apos;s
                    Google Drive portfolio folder.
                  </p>
                  <a
                    href={project.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="accent-gradient-bg text-white px-6 py-3 rounded-xl font-semibold text-sm inline-flex items-center gap-2 shadow-lg"
                  >
                    <span>Open Google Drive Folder</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>

            {/* Footer Links */}
            <div
              className={`px-6 py-4 border-t ${sectionBorder} flex flex-wrap items-center justify-between gap-4`}
            >
              <p className={`text-sm ${mutedText} max-w-xl`}>{project.description}</p>
              <div className="flex items-center gap-3">
                <a
                  href={project.youtubeWatchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-rose-600/15 hover:bg-rose-600 text-rose-400 hover:text-white border border-rose-500/30 text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
                >
                  <YouTubeIcon className="w-4 h-4" />
                  Open on YouTube
                </a>
                <a
                  href={project.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-sky-600/15 hover:bg-sky-600 text-sky-400 hover:text-white border border-sky-500/30 text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
                >
                  <HardDrive className="w-4 h-4" />
                  Open in Drive
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}