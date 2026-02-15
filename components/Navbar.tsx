
import React from 'react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-4 flex items-center justify-between pointer-events-none">
      <div className="flex items-center gap-10 pointer-events-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl font-serif-heading font-bold tracking-tight cursor-pointer"
        >
          {/* Brand area */}
        </motion.div>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/80">
          {/* Secondary identification text removed per user request */}
        </div>
      </div>
      
      {/* "Get in touch" button removed */}
    </nav>
  );
};