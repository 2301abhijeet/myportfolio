
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

interface NakulaHeroProps {
  reduceMotion: boolean;
}

// Logo variants matching the user's reference image
const Logo1 = () => (
  <div className="flex items-center gap-3 opacity-40">
    <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-current" />
    </div>
    <span className="text-xl font-bold tracking-tighter uppercase italic">Photoshop</span>
  </div>
);

const Logo2 = () => (
  <div className="flex items-center gap-3 opacity-40">
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" strokeOpacity="0.3" />
      <circle cx="12" cy="12" r="6" strokeOpacity="0.6" />
      <circle cx="12" cy="12" r="3" />
    </svg>
    <span className="text-xl font-bold tracking-tighter uppercase italic">Illustrator</span>
  </div>
);

const Logo3 = () => (
  <div className="flex items-center gap-3 opacity-40">
    <div className="w-7 h-7 rounded-full border-2 border-current flex items-center justify-center">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M4 12q4-4 8 0t8 0" />
        <path d="M4 16q4-4 8 0t8 0" opacity="0.5" />
      </svg>
    </div>
    <span className="text-xl font-bold tracking-tighter uppercase italic">After Effect</span>
  </div>
);

const Logo4 = () => (
  <div className="flex items-center gap-3 opacity-40">
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 6h4v14H4zM10 6h4v14h-4zM16 6h4v14h-4z" opacity="0.3" />
      <path d="M7 4L3 20M12 4L8 20M17 4L13 20" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
    <span className="text-xl font-bold tracking-tighter uppercase italic">Canva</span>
  </div>
);

export const NakulaHero: React.FC<NakulaHeroProps> = ({ reduceMotion }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  // Get Scroll Y position
  const { scrollY } = useScroll();
  
  // Linear Transform Mapping (0px to 500px scroll range)
  const scale = useTransform(scrollY, [0, 500], [1, 0.16]);
  const yTranslate = useTransform(scrollY, [0, 500], ["-2.2vh", "0vh"]);
  const xTranslate = useTransform(scrollY, [0, 500], ["0vw", "0vw"]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatIndiaTime = (date: Date) => {
    return date.toLocaleTimeString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatIndiaDate = (date: Date) => {
    return date.toLocaleDateString("en-IN", {
      timeZone: "Asia/Kolkata",
      month: "short",
      year: "numeric",
    }).toUpperCase();
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemFade: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1, 
        ease: [0.16, 1, 0.3, 1] as const 
      } 
    }
  };

  const logos = [<Logo1 />, <Logo2 />, <Logo3 />, <Logo4 />];

  return (
    <section ref={containerRef} className="relative w-full h-[180vh] bg-black text-[#d1d1d1] font-sans select-none">
      
      {/* Sticky/Fixed Header Layer - Elevated Z-index for readability on orange */}
      <div className="fixed top-0 left-0 right-0 z-[120] px-8 py-8 flex justify-between items-start pointer-events-none">
        
        {/* Animated Title */}
        <motion.div 
          style={{ 
            scale: reduceMotion ? 0.16 : scale, 
            y: reduceMotion ? "-2.2vh" : yTranslate,
            x: reduceMotion ? "0vw" : xTranslate,
            originX: 0, 
            originY: 0 
          }}
          className="pointer-events-auto"
        >
          <h1 className="text-[12vw] font-black leading-none tracking-tighter text-[#c5c5c5] uppercase">
            ABHIJEET
          </h1>
        </motion.div>

        {/* Right Side Info — Live Delhi Clock */}
        <div className="flex gap-12 pointer-events-auto items-start">
          {/* Availability */}
          <div className="hidden md:flex flex-col items-end gap-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                Available for project
              </span>
            </div>
            <span className="text-[10px] opacity-60 font-medium">
              {formatIndiaDate(currentTime)}
            </span>
          </div>

          {/* Live Delhi Time */}
          <div className="hidden md:flex flex-col items-end">
            <span className="text-[10px] font-bold uppercase tracking-wider text-white">
              {formatIndiaTime(currentTime)}
            </span>
            <span className="text-[10px] opacity-75 font-medium">
              (IST — Delhi)
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://api.whatsapp.com/send/?phone=919708250314&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all no-underline"
            >
              LET'S TALK
            </a>
            <button className="flex flex-col gap-1.5 w-6 group">
              <div className="h-0.5 w-full bg-white transition-all group-hover:translate-y-1" />
              <div className="h-0.5 w-full bg-white transition-all group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Visual Stage */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* Main Reveal Aperture */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)' }}
            animate={{ clipPath: 'polygon(15% 0%, 100% 45%, 85% 100%, 0% 55%)' }}
            transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
            className="w-full h-full relative overflow-hidden"
          >
          <video
            src="https://ik.imagekit.io/c1bhqzfr6w/portfolio/download.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
          </video>
            <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,1)]" />
          </motion.div>
        </div>

        {/* Right Feature Text Overlay */}
        <div className="absolute top-1/2 right-12 -translate-y-1/2 z-50 text-right pointer-events-none">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col items-end gap-2"
          >
            <motion.h2 variants={itemFade} className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter text-white">
              Visual<br />Thinking.
            </motion.h2>
            <motion.h2 variants={itemFade} className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter text-white opacity-60">
              Design<br />Boldly.
            </motion.h2>
          </motion.div>
        </div>

        {/* Scrolling Logo Ticker */}
        <div className="absolute bottom-16 left-0 w-1/2 md:w-2/3 overflow-hidden py-4 z-10 pointer-events-none">
          <motion.div 
            animate={reduceMotion ? {} : { x: [0, -800] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" as const }}
            className="flex gap-20 whitespace-nowrap px-8 items-center"
          >
            {[...logos, ...logos, ...logos, ...logos].map((Logo, i) => (
              <div key={i} className="flex-shrink-0">
                {Logo}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA Area */}
        <div className="absolute bottom-12 left-0 right-0 z-[60] px-12 flex items-end justify-between pointer-events-none">
          <div />
          <div className="flex flex-col items-end gap-6 pointer-events-auto">
            <motion.a 
              href="https://api.whatsapp.com/send/?phone=919708250314&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="border-2 border-orange-600 bg-black rounded-full px-8 py-3 flex items-center gap-4 cursor-pointer group shadow-2xl no-underline"
            >
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">START A PROJECT</span>
              <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center group-hover:rotate-45 transition-transform">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.a>
          </div>
        </div>
      </div>

    </section>
  );
};
