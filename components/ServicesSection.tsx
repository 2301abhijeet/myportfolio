
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: "01.",
    title: "Web Design & Development",
    description: "Logos, colors, type, your brand, fully alive.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
    tags: ["RESPONSIVE DESIGN", "INTERACTION DESIGN", "CMS INTEGRATION", "SEO OPTIMIZATION"]
  },
  {
    id: "02.",
    title: "Branding",
    description: "Crafting visual identities that feel clear, timeless, and true to your brand.",
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=1200",
    tags: ["LOGO DESIGN", "COLOR SYSTEM", "TYPOGRAPHY", "BRAND DIRECTION"]
  },
  {
    id: "03.",
    title: "Social Media",
    description: "Designing scroll-stopping visuals that speak clearly and strengthen your presence.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",
    tags: ["CONTENT STRATEGY", "MOTION GRAPHICS", "AD DESIGN", "ANALYTICS"]
  },
  {
    id: "04.",
    title: "Motion Design",
    description: "Bringing your story to life through cinematic movement and dynamic visual effects.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
    tags: ["2D/3D ANIMATION", "EXPLAINER VIDEOS", "VFX", "LOGO ANIMATION"]
  }
];

type ServicesSectionProps = {
  reduceMotion?: boolean;
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ reduceMotion }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-black text-white pt-40 pb-60 px-6 md:px-16 overflow-hidden selection:bg-white selection:text-black">
      {/* Section Header */}
      <div className="mb-40 flex items-start justify-start relative w-full">
        <h2 className="text-[12vw] font-condensed font-bold leading-none tracking-[0.01em] text-[#d6d6d6] uppercase select-none whitespace-nowrap">
          HOW WE CAN HELP
        </h2>
        <span className="text-[10px] md:text-[12px] font-bold tracking-[0.2em] text-zinc-500 uppercase ml-4 mt-[2.2vw]">
          (SERVICES)
        </span>
      </div>

      {/* Services List - Static Indexing with Smooth Expansion */}
      <div className="w-full flex flex-col border-t border-white/10">
        {services.map((service, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative w-full border-b border-white/10 group cursor-pointer transition-colors duration-500 overflow-hidden"
            >
              <div className="w-full grid grid-cols-1 md:grid-cols-[0.5fr_1.5fr_1.5fr] items-center py-12 md:py-16 gap-8 md:gap-4 px-4">
                
                {/* 1. The Index Area - Left Aligned */}
                <div className="flex items-center gap-2">
                  <span className={`text-4xl md:text-6xl font-black tracking-tighter transition-colors duration-500 ${isHovered ? 'text-white' : 'text-zinc-600'}`}>
                    {service.id}
                  </span>
                  <div className="w-2 h-2 bg-[#ff6723] rounded-sm mt-2" />
                </div>

                {/* 2. Image Area - Center Column */}
                <div className="flex justify-center items-center w-full overflow-hidden">
                  <AnimatePresence mode="sync">
                    {isHovered ? (
                      <motion.div
                        key="expanded-img"
                        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 8 }}
                        animate={{opacity: 1, scale: 1, y: 0,}}
                        exit={{opacity: 0,scale: 0.98,y: -6,}}
                        transition={{duration: 0.85, ease: [0.22, 1, 0.36, 1], // luxury cinematic curve
}}

                        className="w-full max-w-[500px] aspect-video rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.8)] border border-white/5"
                      >
                        <img 
                          src={service.image} 
                          className="w-full h-full object-cover"
                          alt={service.title}
                        />
                      </motion.div>
                    ) : (
                      <div className="h-0 md:h-[100px]" /> // Spacer to maintain some rhythm
                    )}
                  </AnimatePresence>
                </div>

                {/* 3. Content Area - Right Column, Right Aligned */}
                <div className="flex flex-col items-end text-right">
                  <h3 className={`text-4xl md:text-7xl font-bold tracking-tighter leading-none transition-all duration-500 ${isHovered ? 'text-white' : 'text-zinc-300'}`}>
                    {service.title}
                  </h3>
                  
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={
  reduceMotion
    ? { opacity: 1 }
    : { opacity: 0, scale: 0.96, y: 8 }
}
animate={{
  opacity: 1,
  scale: 1,
  y: 0,
}}
exit={{
  opacity: 0,
  scale: 0.98,
  y: -6,
}}
transition={{
  duration: 0.85,
  ease: [0.22, 1, 0.36, 1], // luxury cinematic curve
}}

                        className="overflow-hidden"
                      >
                        <div className="pt-8 flex flex-col items-end gap-8 max-w-md">
                          <p className="text-zinc-400 text-lg md:text-xl font-medium leading-snug">
                            {service.description}
                          </p>
                          {/* Updated Tag Layout: 2x2 Grid instead of Wrap */}
                          <div className="grid grid-cols-2 gap-3 w-full justify-items-end">
                            {service.tags.map(tag => (
                              <span 
                                key={tag}
                                className="px-5 py-2.5 rounded-full border border-white/10 text-[11px] font-black uppercase tracking-[0.15em] text-zinc-300 bg-white/5 hover:bg-white/10 transition-colors w-fit whitespace-nowrap"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Background Highlight */}
              <div className={`absolute inset-0 bg-white/[0.02] opacity-0 transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : ''}`} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
