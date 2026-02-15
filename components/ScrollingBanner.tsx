import React from 'react';
import { motion } from 'framer-motion';

interface ScrollingBannerProps {
  reduceMotion?: boolean;
}

export const ScrollingBanner: React.FC<ScrollingBannerProps> = ({ reduceMotion }) => {
  const text = "BRAND DESIGN • LOGO DESIGN • SOCIAL MEDIA POST • PHOTOGRAPHY • ILLUSTRATION • ";
  const repeatedText = Array(12).fill(text).join("");

  return (
    <div className="relative w-full overflow-hidden bg-[#ffffff] py-4 md:py-6 border-y border-black/5 select-none">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={reduceMotion ? { x: "0%" } : { x: ["-50%", "0%"] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <span className="text-2xl md:text-4xl lg:text-5xl font-black text-black tracking-tighter uppercase flex items-center">
          {repeatedText}
        </span>
        <span className="text-2xl md:text-4xl lg:text-5xl font-black text-black tracking-tighter uppercase flex items-center">
          {repeatedText}
        </span>
      </motion.div>
    </div>
  );
};