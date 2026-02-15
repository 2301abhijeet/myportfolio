import React, { useRef } from 'react';
import { motion, Variants } from 'framer-motion';

interface HeroProps {
  reduceMotion: boolean;
}

export const Hero: React.FC<HeroProps> = ({ reduceMotion }) => {
  const scrollRequestId = useRef<number | null>(null);

  const startAutoScroll = () => {
    // Cancel any existing scroll animation
    if (scrollRequestId.current) {
      cancelAnimationFrame(scrollRequestId.current);
    }

    // First, scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Wait for the "smooth scroll to top" to finish before starting the slow crawl
    setTimeout(() => {
      const scrollSpeed = 3.2; // Increased from 1.2 for a slightly faster auto-scroll
      
      const step = () => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (window.scrollY < maxScroll - 1) {
          window.scrollBy(0, scrollSpeed);
          scrollRequestId.current = requestAnimationFrame(step);
        } else {
          scrollRequestId.current = null;
        }
      };
      
      scrollRequestId.current = requestAnimationFrame(step);
    }, 1000);

    // Stop scrolling if the user interacts (optional but usually better UX)
    const stopScroll = () => {
      if (scrollRequestId.current) {
        cancelAnimationFrame(scrollRequestId.current);
        scrollRequestId.current = null;
        window.removeEventListener('wheel', stopScroll);
        window.removeEventListener('touchstart', stopScroll);
      }
    };

    window.addEventListener('wheel', stopScroll, { once: true });
    window.addEventListener('touchstart', stopScroll, { once: true });
  };

  // Explicitly type variants and use 'as const' for ease tuples
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  // Explicitly type variants and use 'as const' for ease tuples
  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      filter: reduceMotion ? 'none' : 'blur(10px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-none"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-[9rem] lg:text-[10rem] font-serif-heading font-bold leading-[0.9] tracking-tight mb-8 md:mb-14"
        >
          Abhijeet's portfolio
        </motion.h1>
        
        <motion.h2 
          variants={itemVariants}
          className="text-xl md:text-3xl lg:text-4xl font-serif-heading italic font-medium mb-12 opacity-90 tracking-tight"
        >
          (Designed with Mr.Abhijeet)
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 font-normal leading-relaxed mb-12"
        >
          If your growth matters to you, let’s design something clear, confident, and worth remembering.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col items-center gap-6">
          <button 
            onClick={startAutoScroll}
            className="btn-liquid-glass text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl"
          >
            Let's Start
          </button>
          
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>by</span>
            <span className="font-bold text-white/80 text-lg tracking-tighter">Abhijeet</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Background Ambience */}
      {!reduceMotion && (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-gradient-to-b from-zinc-900/20 to-transparent blur-[120px]" />
        </div>
      )}
    </section>
  );
};