import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ['Branding', 'Logo', 'Social Media', 'Packaging'];

const contentData = {
  'Branding': {
    image: 'https://i.pinimg.com/736x/18/47/6d/18476df7b9691856b2c068307da3c03a.jpg',
    artwork: 'https://i.pinimg.com/736x/18/47/6d/18476df7b9691856b2c068307da3c03a.jpg',
    title: 'Precision Illustration'
  },
  'Logo': {
    image: 'https://i.pinimg.com/1200x/fa/9a/17/fa9a17db59c6534fbff5cf2ee384bf9c.jpg',
    artwork: 'https://i.pinimg.com/1200x/fa/9a/17/fa9a17db59c6534fbff5cf2ee384bf9c.jpg',
    title: 'Advanced Photo Editing'
  },
  'Social Media': {
    image: 'https://i.pinimg.com/736x/41/3e/4a/413e4a650362cbce05c69b396920e2c7.jpg',
    artwork: 'https://i.pinimg.com/736x/41/3e/4a/413e4a650362cbce05c69b396920e2c7.jpg',
    title: 'Editorial Design'
  },
  'Packaging': {
    image: 'https://i.pinimg.com/736x/e5/f2/d5/e5f2d5ae8cd185efa6656bc91cf27edd.jpg',
    artwork: 'https://i.pinimg.com/736x/e5/f2/d5/e5f2d5ae8cd185efa6656bc91cf27edd.jpg',
    title: 'Your Personal Studio'
  }
};

interface AdaptabilitySectionProps {
  reduceMotion?: boolean;
}

export const AdaptabilitySection: React.FC<AdaptabilitySectionProps> = ({ reduceMotion }) => {
  const [activeTab, setActiveTab] = useState('Branding');

  return (
    <section className="relative w-full py-16 flex flex-col items-center text-center overflow-hidden bg-[#ff6723] min-h-[90vh] justify-center">
      {/* Text Content */}
      <motion.div
        initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.8, 
          ease: [0.16, 1, 0.3, 1]
        }}
        className="max-w-5xl px-6 mb-8"
      >
        <h2 className="text-4xl md:text-6xl font-serif-heading font-bold leading-tight mb-4 mx-auto max-w-[15ch] md:max-w-none">
          A glimpse into the work I’ve <br className="hidden md:block" /> created across branding & more
        </h2>
        
        <p className="text-base md:text-lg text-white/80 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
          
        </p>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <motion.div 
            className="inline-flex items-center bg-black/20 backdrop-blur-xl p-1 rounded-full border border-white/10 shadow-2xl"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 py-2 text-xs md:text-sm font-semibold transition-colors duration-300 rounded-full z-10 ${
                    isActive ? 'text-black' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {isActive && !reduceMotion && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 bg-white rounded-full -z-10 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                      transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    />
                  )}
                  {isActive && reduceMotion && (
                    <div className="absolute inset-0 bg-white rounded-full -z-10" />
                  )}
                  {tab}
                </button>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      {/* Dynamic Interface Preview Area */}
      <div className="w-full max-w-[1100px] px-4 md:px-6 relative">
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)] bg-[#121212]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Main Artwork Preview */}
              <img 
                src={contentData[activeTab as keyof typeof contentData].artwork}
                className="w-full h-full object-cover"
                alt={activeTab}
              />
              
              <div className="absolute inset-0 pointer-events-none text-[10px]">
                {/* Top Bar Mockup */}
                <div className="h-8 w-full bg-black/40 backdrop-blur-md flex items-center px-4 gap-3 border-b border-white/5">
                  <div className="w-4 h-4 rounded bg-zinc-700/50" />
                  <div className="flex gap-2">
                    {['File', 'Edit', 'Selection'].map(item => (
                      <div key={item} className="h-3 w-8 bg-white/5 rounded" />
                    ))}
                  </div>
                </div>

                {/* Left Toolbar Mockup */}
                <div className="absolute top-8 left-0 bottom-0 w-10 bg-black/40 backdrop-blur-md border-r border-white/5 flex flex-col items-center py-3 gap-3">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-5 h-5 rounded bg-white/10" />
                  ))}
                </div>

                {/* Right Panels Mockup */}
                <div className="absolute top-8 right-0 bottom-0 w-48 bg-black/40 backdrop-blur-md border-l border-white/5 p-3 flex flex-col gap-4">
                  <div className="h-32 w-full bg-black/40 rounded-lg border border-white/5 p-2">
                    <div className="w-full h-full rounded bg-gradient-to-br from-zinc-700/50 to-zinc-800/50" />
                  </div>
                  <div className="flex-1 w-full bg-black/40 rounded-lg border border-white/5 flex flex-col p-1.5 gap-1.5">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-8 w-full bg-white/5 rounded flex items-center px-2 justify-between">
                         <div className="w-2.5 h-2.5 rounded-sm bg-white/20" />
                         <div className="w-16 h-1.5 bg-white/10 rounded" />
                         <div className="w-3 h-3 rounded-full bg-white/10" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating "Artists First" Card */}
                <motion.div 
                   initial={reduceMotion ? { opacity: 1, x: 0 } : { x: -10, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   transition={{ delay: 0.3 }}
                   className="absolute left-14 bottom-6 p-4 bg-black rounded-2xl border border-zinc-800 flex items-center gap-4 shadow-2xl"
                >
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-zinc-900 group cursor-pointer">
                    <img src="https://i.pinimg.com/736x/98/ca/cb/98cacb8eee9e6c236187dedb4cb4a75e.jpg" className="w-full h-full object-cover opacity-60" alt="Video icon" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className={`w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg ${reduceMotion ? '' : 'transform group-hover:scale-110 transition-transform'}`}>
                          <svg className="w-3 h-3 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                       </div>
                    </div>
                  </div>
                  <div className="text-white text-sm font-medium whitespace-nowrap">
                    Artists first <span className="ml-1">→</span>
                  </div>
                </motion.div>

                {/* Bottom-Right Play Button UI */}
                <div className="absolute right-4 bottom-4 flex items-center gap-3">
                  <div className="px-2 py-0.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[8px] text-zinc-500">
                    Inioluwa Alabi (50.0%)
                  </div>
                  <motion.button 
                    whileHover={reduceMotion ? {} : { scale: 1.1 }}
                    whileTap={reduceMotion ? {} : { scale: 0.9 }}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl group"
                  >
                    <svg className={`w-6 h-6 text-black ml-0.5 ${reduceMotion ? '' : 'group-hover:scale-110 transition-transform'}`} fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </motion.button>
                </div>

                {/* Vector Handle Mockup */}
                {activeTab === 'Branding' && !reduceMotion && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-[40%] left-[25%] pointer-events-none"
                  >
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <svg className="w-full h-full text-white/30" viewBox="0 0 100 100">
                        <path d="M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      </svg>
                      <div className="absolute w-1.5 h-1.5 bg-[#ffffff] shadow-[0_0_5px_#ffffff] rounded-full top-0 left-1/2 -translate-x-1/2" />
                      <div className="absolute w-2 h-2 bg-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-black" />
                      
                      {/* Cursor */}
                      <div className="absolute top-[40%] left-[50%]">
                         <svg className="w-4 h-4 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M7 2l11 11-4.5 1L18 20l-3 1.5-4.5-6.5-4 4.5z" />
                         </svg>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Decorative background glow */}
        {!reduceMotion && <div className="absolute -inset-10 -z-10 bg-white/5 blur-[80px] rounded-full opacity-40 pointer-events-none" />}
      </div>
    </section>
  );
};
