import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const slides = [
  {
    id: 1,
    total: 5,
    title: 'Rayavriti Branding',
    description: "Rayavriti builds secure, scalable digital networks for the future. Powered by trust, innovation, and reliability.",
    accentColor: '#D3F904', // Vibrant Blue
    bgText: 'PHOTO',
    workspaceImg: 'https://i.pinimg.com/474x/18/47/6d/18476df7b9691856b2c068307da3c03a.jpg',
    features: [
      {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />,
        title: 'Innovation'
      },
      {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
        title: 'Reliability'
      }
    ]
  },
  {
    id: 2,
    total: 5,
    title: 'Graphic design redefined',
    description: "Create stunning posters, logos, and UI elements with the fastest, smoothest creative software around.",
    accentColor: '#F59E0B',
    bgText: 'DESIGN',
    workspaceImg: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1000',
    features: [
      {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />,
        title: 'Vector/Raster hybrid'
      },
      {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />,
        title: 'Unlimited artboards'
      }
    ]
  },
  {
    id: 3,
    total: 5,
    title: 'Precision Typography',
    description: "Advanced OpenType support and precise kerning controls make it the ultimate choice for layout and brand identity.",
    accentColor: '#10B981',
    bgText: 'TYPE',
    workspaceImg: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000',
    features: [
      {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 5v14M15 13h6M18 13v6" />,
        title: 'Advanced Type Tools'
      },
      {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />,
        title: 'OpenType Support'
      }
    ]
  },
  {
    id: 4,
    total: 5,
    title: 'Branding & Identity',
    description: "Build robust brand systems with shared color palettes, symbols, and asset management across all your projects.",
    accentColor: '#EC4899',
    bgText: 'BRAND',
    workspaceImg: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1000',
    features: [
      {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />,
        title: 'Asset Management'
      },
      {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />,
        title: 'Symbol Creation'
      }
    ]
  },
  {
    id: 5,
    total: 5,
    title: 'UI/UX Exploration',
    description: "Mockup high-fidelity user interfaces with pixel-perfect precision and interactive components.",
    accentColor: '#8B5CF6',
    bgText: 'UI/UX',
    workspaceImg: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1000',
    features: [
      {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />,
        title: 'Pixel-perfect UI'
      },
      {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />,
        title: 'Component Systems'
      }
    ]
  }
];

// Explicitly type variants and use 'as const' for easing/type strings
const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    filter: 'blur(15px)'
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 35 },
      opacity: { duration: 0.4 }
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    filter: 'blur(15px)',
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 35 },
      opacity: { duration: 0.4 }
    }
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface FeatureSliderProps {
  reduceMotion?: boolean;
}

export const FeatureSlider: React.FC<FeatureSliderProps> = ({ reduceMotion }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const slideIndex = ((page % slides.length) + slides.length) % slides.length;
  const slide = slides[slideIndex];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className="bg-[#ff6723] py-10 md:py-16 px-4 md:px-12 overflow-hidden relative group/slider">
      <div className="max-w-[1400px] mx-auto relative rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-[#121212] min-h-[500px] md:min-h-[580px] shadow-2xl flex flex-col lg:flex-row touch-none">
        
        {/* Navigation Arrows - Liquid Glass Style (Refined & Smaller) */}
        <div className="absolute inset-y-0 left-0 z-50 flex items-center pl-2 pointer-events-none">
           <button 
             onClick={(e) => { e.stopPropagation(); paginate(-1); }}
             className="btn-liquid-glass w-8 h-8 md:w-10 md:h-10 flex items-center justify-center pointer-events-auto opacity-0 group-hover/slider:opacity-100 transition-opacity"
             aria-label="Previous slide"
           >
             <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
             </svg>
           </button>
        </div>
        
        <div className="absolute inset-y-0 right-0 z-50 flex items-center pr-2 pointer-events-none">
           <button 
             onClick={(e) => { e.stopPropagation(); paginate(1); }}
             className="btn-liquid-glass w-8 h-8 md:w-10 md:h-10 flex items-center justify-center pointer-events-auto opacity-0 group-hover/slider:opacity-100 transition-opacity"
             aria-label="Next slide"
           >
             <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
             </svg>
           </button>
        </div>

        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div 
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="flex flex-col lg:flex-row w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            {/* Left Content Column */}
            <div className="flex-1 p-8 md:p-14 lg:p-16 flex flex-col justify-between order-2 lg:order-1 bg-[#121212] select-none pointer-events-none lg:pointer-events-auto">
              <div>
                <span className="text-zinc-500 text-lg md:text-xl font-medium mb-4 md:mb-6 block">
                  {slide.id}/{slide.total}
                </span>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif-heading font-bold mb-6 md:mb-8 leading-tight tracking-tight text-white">
                  {slide.title}
                </h3>
                <p className="text-zinc-400 text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-xl leading-relaxed">
                  {slide.description}
                </p>
                <a 
                  href="https://www.behance.net/gallery/242457549/BRANDING-RAYAVRITI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-liquid-glass text-white px-8 py-3.5 rounded-full font-bold shadow-xl mb-10 lg:mb-12 pointer-events-auto no-underline"
                >
                  View full Branding
                </a>

                <div className="space-y-6">
                  {slide.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4 group cursor-pointer pointer-events-auto">
                      <div className="text-white bg-white/5 p-2 rounded-lg border border-white/10 group-hover:bg-white/10 transition-colors">
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {feature.icon}
                        </svg>
                      </div>
                      <h4 className="text-white font-semibold text-base md:text-lg lg:text-xl">{feature.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Visual Stage */}
            <div 
              className="flex-1 lg:flex-[1.2] relative overflow-hidden flex items-center justify-center p-8 md:p-12 transition-colors duration-700 order-1 lg:order-2 pointer-events-none select-none"
              style={{ backgroundColor: slide.accentColor }}
            >
              {/* Background Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none overflow-hidden">
                <span className="text-[14rem] md:text-[25rem] lg:text-[32rem] font-black text-black leading-none whitespace-nowrap">
                  {slide.bgText}
                </span>
              </div>

              {/* UI Mockup Panel */}
              <div className="relative w-full max-w-[320px] md:max-w-xl bg-[#222222] rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.4)] border border-white/10 overflow-hidden">
                <div className="bg-[#2A2A2A] px-4 md:px-6 py-3 flex items-center justify-between border-b border-white/5">
                  <div className="flex items-center gap-2">
                     <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#6366f1' }} />
                     <span className="text-[10px] md:text-[11px] font-bold text-zinc-300 uppercase tracking-[0.15em]">Workspace</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                </div>

                <div className="p-4 md:p-6 flex flex-col gap-4 h-[220px] md:h-[320px]">
                   <div className="w-full flex-1 bg-[#161616] rounded-xl border border-white/5 relative overflow-hidden">
                      {/* Workspace Image Content */}
                      <img 
                        src={slide.workspaceImg} 
                        className="absolute inset-0 w-full h-full object-cover opacity-80"
                        alt="Workspace editing preview"
                        draggable={false}
                      />
                      
                      {/* Editing Tool Overlay - The Pencil Icon UI */}
                      <div className="absolute top-1/2 right-6 translate-y-[-50%] z-20">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#333]/80 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl flex items-center justify-center text-white cursor-pointer hover:bg-[#444] transition-colors">
                          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      </div>

                      {/* Subtle Grid Overlay for Creative Feel */}
                      <div className="absolute inset-0 pointer-events-none opacity-10" 
                        style={{ 
                          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                          backgroundSize: '20px 20px'
                        }} 
                      />
                   </div>
                </div>
              </div>

              {/* Dot Navigation */}
              <div className="absolute bottom-10 right-10 flex gap-2.5 z-30 pointer-events-auto">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPage([idx, idx > slideIndex ? 1 : -1])}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === slideIndex ? 'w-10 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};