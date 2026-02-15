import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

interface MissionSectionProps {
  reduceMotion?: boolean;
}

export const MissionSection: React.FC<MissionSectionProps> = ({ reduceMotion }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseXRaw = useMotionValue(0);
  const mouseYRaw = useMotionValue(0);

  const mouseX = useSpring(mouseXRaw, { stiffness: 150, damping: 30 });
  const mouseY = useSpring(mouseYRaw, { stiffness: 150, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || reduceMotion) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const x = (clientX - innerWidth / 2) / (innerWidth / 2);
    const y = (clientY - innerHeight / 2) / (innerHeight / 2);
    
    mouseXRaw.set(x);
    mouseYRaw.set(y);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const createCombinedTransform = (scrollYVal: number, mouseXRange: [number, number], mouseYRange: [number, number]) => {
    const sY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : scrollYVal]);
    const mX = useTransform(mouseX, [-1, 1], reduceMotion ? [0, 0] : mouseXRange);
    const mY = useTransform(mouseY, [-1, 1], reduceMotion ? [0, 0] : mouseYRange);
    return {
      x: mX,
      y: useTransform([sY, mY], ([s, m]) => (s as number) + (m as number))
    };
  };

  const scott = createCombinedTransform(-120, [-40, 40], [-40, 40]);
  const bw = createCombinedTransform(-220, [50, -50], [30, -30]);
  const sushi = createCombinedTransform(80, [-60, 60], [-60, 60]);
  const lamp = createCombinedTransform(160, [20, -20], [20, -20]);
  const elena = createCombinedTransform(-80, [-35, 35], [45, -45]);

  const img1 = createCombinedTransform(-150, [30, -30], [-50, 50]);
  const img2 = createCombinedTransform(120, [-45, 45], [20, -20]);
  const img3 = createCombinedTransform(-200, [60, -60], [40, -40]);
  const img4 = createCombinedTransform(100, [-25, 25], [-70, 70]);

  const rotateBadge = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 360]);

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="relative py-60 bg-[#ff6723] overflow-hidden select-none cursor-default min-h-[120vh]"
    >
      <div className="max-w-[1400px] mx-auto px-6 relative min-h-[1000px] flex items-center justify-center">
        
        <div className="text-center relative z-20">
          <motion.button 
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="btn-liquid-glass text-white px-10 py-3.5 rounded-full font-bold text-base shadow-2xl"
          >
            See my resume
          </motion.button>
        </div>

        <motion.div 
          style={scott}
          className="absolute top-0 left-[5%] w-64 md:w-80 aspect-square rounded-xl overflow-hidden shadow-2xl z-10 border border-blue-400/20"
        >
          <img src="https://i.pinimg.com/736x/f6/d2/47/f6d2478ec9bd15441b2911cc6075e5bc.jpg" className="w-full h-full object-cover" alt="Scott Balmer" />
          
        </motion.div>

        <motion.div 
          style={bw}
          className="absolute top-10 right-[5%] w-72 md:w-[28rem] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl z-10"
        >
          <img src="https://i.pinimg.com/736x/f6/d2/47/f6d2478ec9bd15441b2911cc6075e5bc.jpg" className="w-full h-full object-cover grayscale brightness-75" alt="B&W Art" />
          
          <motion.div 
            style={{ rotate: rotateBadge }}
            className="absolute -top-12 -left-12 w-48 h-48 z-30 flex items-center justify-center pointer-events-none"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current opacity-90 drop-shadow-lg">
              <path id="badgePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
              <text className="text-[7.5px] font-black uppercase tracking-[0.2em]">
                <textPath xlinkHref="#badgePath">BY CREATIVES + FOR CREATIVES • BY CREATIVES + FOR CREATIVES • </textPath>
              </text>
              <g transform="translate(42, 42) scale(0.6)">
                <circle cx="12" cy="12" r="10" fill="white" />
                <circle cx="8" cy="10" r="1.5" fill="black" />
                <circle cx="16" cy="10" r="1.5" fill="black" />
                <path d="M 8 16 Q 12 19 16 16" stroke="black" strokeWidth="1.5" fill="none" />
              </g>
            </svg>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-10 left-[10%] flex items-end">
          <motion.div 
            style={lamp}
            className="w-48 md:w-72 aspect-[4/5] rounded-xl overflow-hidden shadow-2xl z-0 -mr-20 translate-y-10 border border-zinc-800"
          >
            <img src="https://i.pinimg.com/736x/f6/d2/47/f6d2478ec9bd15441b2911cc6075e5bc.jpg" className="w-full h-full object-cover" alt="Art Piece" />
          </motion.div>
          <motion.div 
            style={sushi}
            className="w-48 md:w-64 aspect-square rounded-xl overflow-hidden shadow-2xl z-10 border-2 border-pink-500/10"
          >
            <img src="https://i.pinimg.com/736x/f6/d2/47/f6d2478ec9bd15441b2911cc6075e5bc.jpg" className="w-full h-full object-cover" alt="Sushi Illustration" />
          </motion.div>
        </div>

        <motion.div 
          style={elena}
          className="absolute bottom-0 right-[10%] w-64 md:w-96 aspect-[4/5] rounded-xl overflow-hidden shadow-2xl z-10 border-2 border-[#ffffff]/20"
        >
          <img src="https://i.pinimg.com/736x/f6/d2/47/f6d2478ec9bd15441b2911cc6075e5bc.jpg" className="w-full h-full object-cover" alt="Elena Paraskeva" />
          
        </motion.div>

        <motion.div 
          style={img1}
          className="absolute top-[10%] left-[50%] w-56 md:w-72 aspect-[4/5] rounded-xl overflow-hidden shadow-2xl z-0 border border-zinc-800"
        >
          <img src="https://i.pinimg.com/736x/f6/d2/47/f6d2478ec9bd15441b2911cc6075e5bc.jpg" className="w-full h-full object-cover" alt="Portrait 1" />
        </motion.div>

        <motion.div 
          style={img2}
          className="absolute top-[40%] left-[2%] w-56 md:w-64 aspect-[4/5] rounded-xl overflow-hidden shadow-2xl z-0 border border-zinc-800"
        >
          <img src="https://i.pinimg.com/736x/f6/d2/47/f6d2478ec9bd15441b2911cc6075e5bc.jpg" className="w-full h-full object-cover" alt="Portrait 2" />
        </motion.div>

        <motion.div 
          style={img3}
          className="absolute top-[50%] right-[0%] w-64 md:w-80 aspect-[4/5] rounded-xl overflow-hidden shadow-2xl z-10 border border-white/10"
        >
          <img src="https://i.pinimg.com/736x/f6/d2/47/f6d2478ec9bd15441b2911cc6075e5bc.jpg" className="w-full h-full object-cover" alt="Portrait 3" />
        </motion.div>

        <motion.div 
          style={img4}
          className="absolute bottom-[15%] left-[40%] w-48 md:w-72 aspect-[4/5] rounded-xl overflow-hidden shadow-2xl z-0 border border-zinc-800"
        >
          <img src="https://i.pinimg.com/736x/f6/d2/47/f6d2478ec9bd15441b2911cc6075e5bc.jpg" className="w-full h-full object-cover" alt="Portrait 4" />
        </motion.div>

      </div>

      {!reduceMotion && <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />}
    </section>
  );
};