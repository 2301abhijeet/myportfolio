import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const images = [
  { src: 'https://i.pinimg.com/736x/db/7b/1e/db7b1e073e80bee4fec31bfaabe06565.jpg', alt: 'Abstract Waves' },
  { src: 'https://i.pinimg.com/736x/db/7b/1e/db7b1e073e80bee4fec31bfaabe06565.jpg', alt: 'Fashion Portrait' },
  { src: 'https://i.pinimg.com/736x/db/7b/1e/db7b1e073e80bee4fec31bfaabe06565.jpg', alt: 'DNA Helix' },
  { src: 'https://i.pinimg.com/736x/db/7b/1e/db7b1e073e80bee4fec31bfaabe06565.jpg', alt: 'Liquid Bubbles' },
  { src: 'https://i.pinimg.com/736x/db/7b/1e/db7b1e073e80bee4fec31bfaabe06565.jpg', alt: 'Ink in Water' },
  { src: 'https://i.pinimg.com/736x/db/7b/1e/db7b1e073e80bee4fec31bfaabe06565.jpg', alt: 'Gradient Art' }
];

interface MadeInAffinitySectionProps {
  reduceMotion?: boolean;
}

export const MadeInAffinitySection: React.FC<MadeInAffinitySectionProps> = ({ reduceMotion }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth scroll progress for more fluid parallax
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Vertical Parallax: Maps scroll to movement. 
  // "Scroll up -> image moves down" is the behavior we implement here.
  // We use range [0, 1] (scroll start to end) to map to a translateY range.
  const y1 = useTransform(smoothProgress, [0, 1], [-200, 200]);
  const y2 = useTransform(smoothProgress, [0, 1], [100, -300]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[180vh] bg-white text-black overflow-hidden flex flex-col md:flex-row"
    >
      {/* Blueprint Grid Overlay - Matching Ref Image 1 exactly */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]" 
        style={{ 
          backgroundImage: `linear-gradient(#0055ff 1px, transparent 1px), linear-gradient(90deg, #0055ff 1px, transparent 1px)`,
          backgroundSize: '12.5% 12.5%' // Creating an 8x8 grid feel
        }} 
      />

      <div className="container mx-auto px-10 flex flex-col md:flex-row gap-10 md:gap-20 relative z-10">
        
        {/* Left Sticky Content Column */}
        <div className="w-full md:w-5/12 pt-32 pb-20 md:sticky md:top-0 md:h-screen flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-serif-heading font-bold mb-10 tracking-tight">
              Social Media Post
            </h2>
            
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-normal leading-tight mb-12 text-zinc-800 max-w-xl">
              “Designing scroll-stopping visuals that speak clearly and strengthen your brand’s presence online.”
            </blockquote>

            <div className="mb-12">
              <p className="font-bold text-lg mb-1">Tools Used-</p>
              <p className="text-zinc-500 text-sm">Illustrator, Photoshop </p>
            </div>

            <div className="flex gap-4">
              <motion.button 
                whileHover={reduceMotion ? {} : { scale: 1.05 }}
                whileTap={reduceMotion ? {} : { scale: 0.95 }}
                className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <motion.button 
                whileHover={reduceMotion ? {} : { scale: 1.05 }}
                whileTap={reduceMotion ? {} : { scale: 0.95 }}
                className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Right Parallax Image Wall Column - Fills the 'Empty White Area' */}
        <div className="w-full md:w-7/12 flex gap-8 py-20 relative">
          
          {/* Column 1 - Reverse Parallax */}
          <motion.div style={{ y: y1 }} className="flex-1 flex flex-col gap-10">
            {images.slice(0, 3).map((img, idx) => (
              <motion.div 
                key={idx} 
                className="w-full aspect-square md:aspect-[4/5] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-zinc-100 group border border-black/5"
              >
                <img 
                  src={img.src} 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" 
                  alt={img.alt} 
                />
              </motion.div>
            ))}
            <div className="w-full aspect-square md:aspect-[4/5] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-zinc-100 group border border-black/5">
              <img src={images[4].src} className="w-full h-full object-cover" alt="Additional Art" />
            </div>
          </motion.div>

          {/* Column 2 - Standard Parallax (Offset) */}
          <motion.div style={{ y: y2 }} className="flex-1 flex flex-col gap-10 mt-60">
            {images.slice(3, 6).map((img, idx) => (
              <motion.div 
                key={idx} 
                className="w-full aspect-square md:aspect-[4/5] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-zinc-100 group border border-black/5"
              >
                <img 
                  src={img.src} 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" 
                  alt={img.alt} 
                />
              </motion.div>
            ))}
            <div className="w-full aspect-square md:aspect-[4/5] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-zinc-100 group border border-black/5">
              <img src={images[1].src} className="w-full h-full object-cover" alt="Additional Art" />
            </div>
          </motion.div>
          
          {/* Subtle overlay for image highlights */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none opacity-20" />
        </div>

      </div>
    </section>
  );
};