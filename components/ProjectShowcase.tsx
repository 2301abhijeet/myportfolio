import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const projects = [
  { id: 1, title: 'Mountain Mist', category: 'Photography', img: 'https://i.pinimg.com/736x/56/4f/3c/564f3ca9037ed9eed0cbdebefa331c02.jpg', span: 'col-span-1', height: 'h-[400px]' },
  { id: 2, title: 'Urban Edge', category: 'Architecture', img: 'https://i.pinimg.com/736x/56/4f/3c/564f3ca9037ed9eed0cbdebefa331c02.jpg', span: 'col-span-1', height: 'h-[550px]' },
  { id: 3, title: 'Neon Pulse', category: 'Digital Art', img: 'https://i.pinimg.com/736x/56/4f/3c/564f3ca9037ed9eed0cbdebefa331c02.jpg', span: 'col-span-1 md:col-span-2', height: 'h-[600px]' },
  { id: 4, title: 'Soft Focus', category: 'Design', img: 'https://i.pinimg.com/736x/56/4f/3c/564f3ca9037ed9eed0cbdebefa331c02.jpg', span: 'col-span-1', height: 'h-[450px]' },
  { id: 5, title: 'The Void', category: '3D Render', img: 'https://i.pinimg.com/736x/56/4f/3c/564f3ca9037ed9eed0cbdebefa331c02.jpg', span: 'col-span-1', height: 'h-[450px]' },
  { id: 5, title: 'The Void', category: '3D Render', img: 'https://i.pinimg.com/736x/56/4f/3c/564f3ca9037ed9eed0cbdebefa331c02.jpg', span: 'col-span-1', height: 'h-[450px]' },
  { id: 5, title: 'The Void', category: '3D Render', img: 'https://i.pinimg.com/736x/56/4f/3c/564f3ca9037ed9eed0cbdebefa331c02.jpg', span: 'col-span-1', height: 'h-[450px]' },
];

export const ProjectShowcase: React.FC = () => {
  return (
    <section className="px-6 py-40 bg-[#ff6723]">
      <div className="max-w-[1400px] mx-auto mb-16">
        <h3 className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-4">Selected Works</h3>
        <h2 className="text-4xl md:text-5xl font-serif-heading font-bold">Unleash your potential</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[1400px] mx-auto items-end">
        {projects.map((project, idx) => (
          <ShowcaseItem key={project.id} project={project} delay={idx * 0.1} />
        ))}
      </div>
    </section>
  );
};

const ShowcaseItem: React.FC<{ project: any; delay: number }> = ({ project, delay }) => {
  // Parallax setup
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  // Smooth spring physics for the movement
  const springX = useSpring(x, { stiffness: 100, damping: 25 });
  const springY = useSpring(y, { stiffness: 100, damping: 25 });

  // Map values to "opposite direction" translation
  const moveX = useTransform(springX, [0, 1], [15, -15]);
  const moveY = useTransform(springY, [0, 1], [15, -15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width;
    const yPos = (e.clientY - rect.top) / rect.height;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`${project.span} group relative overflow-hidden rounded-2xl cursor-pointer bg-zinc-900`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={`w-full ${project.height} relative overflow-hidden`}
      >
        <motion.img 
          src={project.img} 
          alt={project.title} 
          style={{ x: moveX, y: moveY, scale: 1.1 }} 
          whileHover={{ scale: 1.15 }}
          transition={{ 
            scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
            default: { type: 'spring', stiffness: 100, damping: 25 }
          }}
          className="w-full h-full object-cover filter brightness-[0.8] group-hover:brightness-100 transition-[filter] duration-700"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150" />
        
        <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
          <div className="overflow-hidden">
            <motion.p 
              className="text-[#ffffff] text-xs font-bold tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              {project.category}
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.h4 
              className="text-white text-2xl font-serif-heading font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              {project.title}
            </motion.h4>
          </div>
        </div>

        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-700 delay-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
           <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
           </div>
        </div>
      </motion.div>
    </motion.div>
  );
};