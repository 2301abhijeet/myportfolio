
import React, { useState, useEffect } from 'react';
import { motion, MotionConfig, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NakulaHero } from './components/NakulaHero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { AdaptabilitySection } from './components/AdaptabilitySection';
import { FeatureSlider } from './components/FeatureSlider';
import {ServicesSection }from './components/ServicesSection';
import { CircularShowcase } from './components/CircularShowcase';
import { ScrollingBanner } from './components/ScrollingBanner';
import { MissionSection } from './components/MissionSection';
import { MadeInAffinitySection } from './components/MadeInAffinitySection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [showFloatingUI, setShowFloatingUI] = useState(false);
  const { scrollY } = useScroll();

  // Show floating buttons only after scrolling past the initial hero view (approx 700px)
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 700) {
      if (!showFloatingUI) setShowFloatingUI(true);
    } else {
      if (showFloatingUI) setShowFloatingUI(false);
    }
  });

  useEffect(() => {
    if (reduceMotion) {
      document.body.classList.add('reduce-motion');
    } else {
      document.body.classList.remove('reduce-motion');
    }
  }, [reduceMotion]);

  return (
    <MotionConfig transition={reduceMotion ? { duration: 0 } : undefined}>
      <div className="min-h-screen bg-[#000000] text-white selection:bg-[#ffffff] selection:text-black">
        
        {/* Cinematic Top Shadow Overlay - Readability System */}
        <div 
          className="fixed top-0 left-0 right-0 h-[25vh] z-[105] pointer-events-none opacity-80"
          style={{
            background: 'linear-gradient(rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 65%, rgba(0,0,0,0) 100%)'
          }}
        />

        <Navbar />
        
        <main>
          {/* The new Nakula entry page */}
          <NakulaHero reduceMotion={reduceMotion} />

          {/* Original sections follow */}
          <div className="bg-[#ff6723]">
            <Hero reduceMotion={reduceMotion} />

            <ProjectShowcase reduceMotion={reduceMotion} />

            <CircularShowcase reduceMotion={reduceMotion} />

            <ScrollingBanner reduceMotion={reduceMotion} />

            <AdaptabilitySection reduceMotion={reduceMotion} />

            <FeatureSlider reduceMotion={reduceMotion} />

            <ServicesSection reduceMotion={reduceMotion} />
            
            <MissionSection reduceMotion={reduceMotion} />

            <MadeInAffinitySection reduceMotion={reduceMotion} />
          </div>
        </main>

        <Footer reduceMotion={reduceMotion} />

        {/* Floating UI Elements with Visibility Control */}
        <AnimatePresence>
          {showFloatingUI && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed bottom-10 right-10 z-[100] flex flex-col items-end gap-4"
            >
              <motion.a
                href="https://api.whatsapp.com/send/?phone=919708250314&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduceMotion ? {} : { scale: 1.1 }}
                whileTap={reduceMotion ? {} : { scale: 0.9 }}
                className="btn-liquid-glass p-4 rounded-full text-white shadow-2xl flex items-center justify-center"
                title="Chat on WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .01 5.403.006 12.039c0 2.12.556 4.189 1.613 6.01L0 24l6.117-1.605a11.845 11.845 0 005.933 1.586h.005c6.631 0 12.034-5.404 12.038-12.041a11.82 11.82 0 00-3.513-8.441z" />
                </svg>
              </motion.a>

              <button 
                onClick={() => setReduceMotion(!reduceMotion)}
                className="btn-liquid-glass px-6 py-3 text-xs font-semibold tracking-wide rounded-full text-white shadow-xl"
              >
                {reduceMotion ? 'Enable motion' : 'Reduce motion'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
};

export default App;
