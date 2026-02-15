import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    id: 'far-left',
    src: 'https://i.pinimg.com/736x/bb/05/15/bb051590f7d6bd4d2e988ef2a07a35e3.jpg',
    width: 'w-64',
    height: 'h-[300px]',
    y: 'translate-y-12',
    opacity: 'opacity-60'
  },
  {
    id: 'left',
    src: 'https://i.pinimg.com/736x/6c/a8/5c/6ca85cb6843eec0d53286a02dd3f219b.jpg',
    width: 'w-80',
    height: 'h-[375px]',
    y: 'translate-y-4'
  },
  {
    id: 'center',
    src: 'https://i.pinimg.com/736x/62/78/e2/6278e28559b4aa260eb8c4007a65e46d.jpg',
    width: 'w-[450px]',
    height: 'h-[562.5px]',
    y: 'translate-y-0',
    isMain: true
  },
  {
    id: 'right',
    src: 'https://i.pinimg.com/736x/f8/eb/e4/f8ebe463275c01a89ff60e519cda9703.jpg',
    width: 'w-80',
    height: 'h-[375px]',
    y: 'translate-y-8'
  },
  {
    id: 'far-right',
    src: 'https://i.pinimg.com/736x/9d/9f/e2/9d9fe21ad31a9ac4a98529c8386b82a2.jpg',
    width: 'w-64',
    height: 'h-[300px]',
    y: 'translate-y-16',
    opacity: 'opacity-60'
  }
];

interface CinemaCarouselProps {
  reduceMotion?: boolean;
}

export const CinemaCarousel: React.FC<CinemaCarouselProps> = ({ reduceMotion }) => {
  return (
    <section className="relative w-full py-20 bg-[#ff6723] overflow-hidden select-none">
      <div className="flex items-center justify-center gap-6 px-10 min-h-[700px]">
        {images.map((img, idx) => (
          <motion.div
            key={img.id}
            initial={reduceMotion ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`relative flex-shrink-0 ${img.width} ${img.height} ${img.y} ${img.opacity || 'opacity-100'} rounded-lg overflow-hidden group`}
          >
            <img 
              src={img.src} 
              alt="Art piece"
              className={`w-full h-full object-cover transition-transform duration-[2s] ease-out ${reduceMotion ? '' : 'group-hover:scale-110'}`}
            />
            
            {/* Custom sparkles for the center image to match screenshot vibe */}
            {img.isMain && !reduceMotion && (
              <>
                <div className="absolute top-[20%] left-[10%] w-6 h-6 text-white opacity-80 animate-pulse">
                   <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>
                </div>
                <div className="absolute bottom-[30%] right-[10%] w-4 h-4 text-white opacity-60 animate-pulse delay-75">
                   <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Floating Info Card */}
      <motion.div 
        initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/4 bottom-[15%] z-20"
      >
        <div className="bg-white rounded-2xl p-4 flex items-center gap-6 shadow-2xl max-w-sm">
          <div className="relative w-32 h-20 rounded-xl overflow-hidden bg-zinc-200 flex-shrink-0 group cursor-pointer">
             <img 
               src="https://i.pinimg.com/1200x/9a/a2/0b/9aa20bc937e43dcd1ace8ffd7533d740.jpg" 
               className="w-full h-full object-cover" 
               alt="Video thumbnail"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md ${reduceMotion ? '' : 'transform transition-transform group-hover:scale-110'}`}>
                   <svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                   </svg>
                </div>
             </div>
          </div>
          <div className="pr-4">
             <h4 className="text-black font-semibold text-lg leading-tight mb-1">How can it be free?</h4>
             <a href="#" className="text-zinc-500 text-sm hover:text-black transition-colors flex items-center gap-1 group">
               Check it out
               <svg className={`w-3 h-3 ${reduceMotion ? '' : 'group-hover:translate-x-1 transition-transform'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
             </a>
          </div>
        </div>
      </motion.div>

      {/* Gradient fade to integrate with other sections */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#ff6723] to-transparent z-10" />
    </section>
  );
};