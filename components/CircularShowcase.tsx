
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const assetImages = [
  'https://i.pinimg.com/474x/56/38/ef/5638eff35191caa804ed52146084c2dd.jpg',
  'https://i.pinimg.com/736x/44/cc/1f/44cc1f1f2ada749b105f6395b8d354b3.jpg',
  'https://i.pinimg.com/736x/d5/28/fc/d528fc4a5841369d15f2c23f02b17944.jpg',
  'https://i.pinimg.com/736x/9b/3b/7e/9b3b7ef0dd5e1e7bd740629e3986e639.jpg',
  'https://i.pinimg.com/736x/79/1b/d0/791bd0f1795c148cd85985be5f799c9b.jpg',
  'https://i.pinimg.com/736x/d2/53/67/d25367c3865c0c1663179cd99891c6e0.jpg'
];

const items = [...assetImages];

interface CircularShowcaseProps {
  reduceMotion?: boolean;
}

export const CircularShowcase: React.FC<CircularShowcaseProps> = ({ reduceMotion }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const radius = 275; 
  const centerX = -550; 
  const centerY = 0;

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-[#000000]">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {items.map((img, index) => (
            <CircularCard 
              key={index} 
              img={img} 
              progress={scrollYProgress} 
              index={index}
              total={items.length}
              radius={radius}
              centerX={centerX}
              centerY={centerY}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        <div className="relative z-30 w-full md:w-1/2 ml-auto px-8 md:px-20 lg:px-32 text-right flex flex-col items-end">
          <motion.div
            initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif-heading font-bold mb-8 leading-[1.05] max-w-xl tracking-tight text-white">
              Crafting <br /> visuals <br />that feel <br /> premium
            </h2>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-md ml-auto">
              Creating impactful social media growth through real followers, strategic content, and consistent engagement. 
            </p>
          </motion.div>
        </div>

        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[#000000] via-[#000000]/20 to-transparent pointer-events-none z-20" />
      </div>
    </section>
  );
};

interface CircularCardProps {
  img: string;
  progress: any;
  index: number;
  total: number;
  radius: number;
  centerX: number;
  centerY: number;
  reduceMotion?: boolean;
}

const CircularCard: React.FC<CircularCardProps> = ({ img, progress, index, total, radius, centerX, centerY, reduceMotion }) => {
  const spacing = 360 / total;
  const initialAngleOffset = index * spacing;

  const rotationDegrees = useTransform(progress, [0, 1], [0, reduceMotion ? 0 : 360]);
  const angle = useTransform(rotationDegrees, r => (initialAngleOffset + r));
  
  const x = useTransform(angle, a => centerX + Math.cos((a * Math.PI) / 180) * radius);
  const y = useTransform(angle, a => centerY + Math.sin((a * Math.PI) / 180) * radius);
  
  const selfRotate = useTransform(angle, a => a + (reduceMotion ? 0 : 15)); 

  const opacity = useTransform(
    angle,
    (a) => {
      if (reduceMotion) return 1;
      const normA = ((a % 360) + 360) % 360; 
      if (normA < 100 || normA > 260) return 1;
      if (normA >= 100 && normA <= 120) return (120 - normA) / 20;
      if (normA >= 240 && normA <= 260) return (normA - 240) / 20;
      return 0;
    }
  );

  return (
    <motion.div
      style={{
        position: 'absolute',
        x,
        y,
        rotate: selfRotate,
        opacity,
        zIndex: index
      }}
      className="w-[180px] h-[240px] md:w-[260px] md:h-[350px] rounded-[1.5rem] overflow-hidden border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.6)] bg-[#080808]"
    >
      <img 
        src={img} 
        alt="Design Asset" 
        className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05]" 
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[1.5rem] pointer-events-none" />
    </motion.div>
  );
};
