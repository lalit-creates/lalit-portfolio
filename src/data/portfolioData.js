export const DRIVE_PORTFOLIO_URL =
  'https://drive.google.com/drive/folders/1G7reanEBhzpOzdW8bAyO4jfjYtriFvjX';
  
export const NAV_ITEMS = [
  { label: 'About', href: 'about' },
  { label: 'My Works', href: 'works' },
  { label: 'Tools & Genre', href: 'skills' },
  { label: 'The Edge', href: 'edge' },
  { label: 'Brands', href: 'brands' },
  { label: 'Investment', href: 'pricing' },
];

export const EXPERIENCE_STATS = [
  { target: 4, suffix: '+', label: 'Years Experience' },
  { target: 150, suffix: '+', label: 'Projects Delivered' },
  { target: 100, suffix: '%', label: 'Client Satisfaction' },
];

export const FILTER_TABS = [
  { id: 'all', label: 'All Projects' },
  { id: 'motion', label: 'Motion Graphics' },
  { id: 'vfx', label: 'VFX & Compositing' },
  { id: 'ai', label: 'AI-Assisted Videos' },
];

export const PROJECTS = [
  {
    id: 'dettol',
    filterKey: 'vfx',
    category: 'VFX Compositing',
    title: 'Dettol Commercial Campaign',
    description:
      'Seamless VFX compositing and live-action integration completed at Black FXStudio.',
    tags: ['After Effects', 'Mocha Pro', 'Compositing'],
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/d95PPykB2vE?autoplay=1',
    youtubeWatchUrl: 'https://www.youtube.com/watch?v=d95PPykB2vE',
    driveUrl: DRIVE_PORTFOLIO_URL,
  },
  {
    id: 'farzi',
    filterKey: 'vfx',
    category: 'VFX & Rotoscope',
    title: 'Farzi Series Promo Video',
    description:
      'High-speed rotoscoping and clean visual compositing for promotional teaser.',
    tags: ['Rotoscoping', 'Premiere Pro', 'VFX'],
    image:
      '/lalit.jpg?auto=format&fit=crop&q=80&w=800',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/D2PZUB_lDCk?autoplay=1',
    youtubeWatchUrl: 'https://www.youtube.com/watch?v=D2PZUB_lDCk',
    driveUrl: DRIVE_PORTFOLIO_URL,
    
  },
  {
    id: 'pediasure',
    filterKey: 'motion',
    category: 'Motion Graphics',
    title: 'Pediasure Product Animation',
    description:
      'Dynamic 2D/3D kinetic typography and brand animation elements.',
    tags: ['After Effects', 'Illustrator', 'Animation'],
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/tO01J-M3g0U?autoplay=1',
    youtubeWatchUrl: 'https://www.youtube.com/watch?v=tO01J-M3g0U',
    driveUrl: DRIVE_PORTFOLIO_URL,
  },
  {
    id: 'ai-visualizer',
    filterKey: 'ai',
    category: 'AI-Assisted Video',
    title: 'Next-Gen AI Visualizer',
    description:
      'Leveraging state-of-the-art AI video and audio generation tools for cinematic reels.',
    tags: ['Midjourney', 'Kling AI', 'ElevenLabs'],
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/Bey4XXJAqS8?autoplay=1',
    youtubeWatchUrl: 'https://www.youtube.com/watch?v=Bey4XXJAqS8',
    driveUrl: DRIVE_PORTFOLIO_URL,
  },
  {
    id: 'perfetti',
    filterKey: 'motion',
    category: 'Motion Graphics',
    title: 'Perfetti Brand Commercial',
    description:
      'Fast-paced kinetic cuts and graphic overlays designed for high engagement.',
    tags: ['After Effects', 'Sound Design'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw?autoplay=1',
    youtubeWatchUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    driveUrl: DRIVE_PORTFOLIO_URL,
  },
  {
    id: 'visa',
    filterKey: 'vfx',
    category: 'Compositing & 3D',
    title: 'Visa Card Product Reveal',
    description:
      'Sleek metallic reflections, lighting enhancements, and clean compositing.',
    tags: ['DaVinci Resolve', 'Blackmagic Fusion'],
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1',
    youtubeWatchUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    driveUrl: DRIVE_PORTFOLIO_URL,
  },
];

export const TOOLS_STACK = [
  { id: 'ae', name: 'After Effects', subtitle: 'Motion Graphics & VFX' },
  { id: 'pr', name: 'Premiere Pro', subtitle: 'Precision Video Editing' },
  { id: 'davinci', name: 'DaVinci Resolve', subtitle: 'Color Grading & Fusion' },
  { id: 'psai', name: 'Photoshop & Illustrator', subtitle: 'Asset Prep & Vector Design' },
  { id: 'ai', name: 'AI Tools Stack', subtitle: 'Midjourney, ElevenLabs, Kling, Hedra' },
  { id: 'mocha', name: 'Mocha Pro', subtitle: 'Advanced Planar Tracking' },
];

export const VIDEO_GENRES = [
  'Commercial & Brand Ads',
  'YouTube Documentaries & Vlogs',
  'Instagram Reels & TikToks',
  'VFX Compositing & Rotoscoping',
  'Product Reveals & 3D Integration',
  'AI-Enhanced Visuals',
];

export const BRANDS = [
  { name: 'DETTOL', subtitle: 'Health & Hygiene', badgeBg: 'from-emerald-500/20 to-teal-500/10', logoType: 'dettol' },
  { name: 'FARZI SERIES', subtitle: 'Prime Video Original', badgeBg: 'from-amber-500/20 to-rose-500/10', logoType: 'farzi' },
  { name: 'LOTUS HERBALS', subtitle: 'Natural Skincare', badgeBg: 'from-pink-500/20 to-purple-500/10', logoType: 'lotus' },
  { name: 'PEDIASURE', subtitle: 'Complete Nutrition', badgeBg: 'from-indigo-500/20 to-sky-500/10', logoType: 'pediasure' },
  { name: 'PERFETTI VAN MELLE', subtitle: 'Global Confectionery', badgeBg: 'from-rose-500/20 to-orange-500/10', logoType: 'perfetti' },
  { name: 'VISA CARD', subtitle: 'Global Payments', badgeBg: 'from-blue-500/20 to-indigo-500/10', logoType: 'visa' },
];

export const TESTIMONIALS = [
  {
    quote:
      "Lalit's motion graphics and compositing work on our ad campaigns completely elevated the final output. His attention to detail and speed are unmatched.",
    role: 'Creative Director',
    company: 'Onads Communications LLP',
  },
  {
    quote:
      'An absolute professional when it comes to VFX and rotoscoping. Lalit delivered complex shots right on schedule with zero revisions needed.',
    role: 'Studio Lead',
    company: 'Black FXStudio, Mumbai',
  },
  {
    quote:
      'His command over Premiere Pro and After Effects brings a Hollywood feel to digital content. Exceptional talent!',
    role: 'Head of Production',
    company: 'TSH.Media',
  },
];

export const PRICING_PACKAGES = [
  {
    name: 'Creator Starter',
    tagline: 'For YouTubers & Regular Content Creators',
    price: '₹4,000',
    unit: '/ video',
    popular: false,
    ctaLabel: 'Choose Starter',
    features: [
      'Up to 10 mins raw footage',
      'Clean cuts & pacing',
      'Basic sound balancing',
      '1 Round of Revision',
    ],
  },
  {
    name: 'Pro Commercial',
    tagline: 'For Brands, Agencies & High-Growth Channels',
    price: '₹15,000',
    unit: '/ project',
    popular: true,
    ctaLabel: 'Choose Pro',
    features: [
      'Advanced Motion Graphics',
      'Cinematic Color Grading',
      'Immersive Sound Design',
      '3 Rounds of Revisions',
    ],
  },
  {
    name: 'Enterprise / VFX',
    tagline: 'For Complex Ad Films & VFX Sequences',
    price: '₹30,000+',
    unit: '/ project',
    popular: false,
    ctaLabel: 'Contact for Custom',
    features: [
      'Full VFX Compositing & Roto',
      'Custom 3D Asset Integration',
      'Dedicated Project Pipeline',
      'Priority 24/7 Support',
    ],
  },
];