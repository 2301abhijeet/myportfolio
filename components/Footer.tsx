
import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  reduceMotion?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ reduceMotion }) => {
  const footerLinks = [
    {
      title: 'Work',
      links: ['Graphic design', 'Photo editing', 'Page layout', 'Visual integrations']
    },
    {
      title: 'Discover',
      links: ['Portfolio blog', 'Press ↗']
    },
    {
      title: 'Help',
      links: ['Contact', 'Support ↗', 'Account ↗']
    },
    {
      title: 'Connect',
      links: ['About', 'Careers ↗', 'Contact Sales ↗']
    }
  ];

  return (
    <footer className="bg-[#ff6723] text-white pt-24 pb-12 border-t border-white/20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-24">
          <div className="hidden lg:block"></div>
          {footerLinks.map((section) => (section.links.length > 0 && (
            <div key={section.title} className="flex flex-col gap-6">
              <h4 className="font-bold text-sm tracking-tight">{section.title}</h4>
              <ul className="flex flex-col gap-4 text-white/70 text-sm">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )))}
        </div>

        <div className="relative mb-16 border-t border-b border-white/20 py-12 overflow-hidden">
          <div className="relative h-[22vw] flex items-center justify-center">
            {/* Big "affinity" branding erased from here as per request */}
            
            <div className="absolute bottom-4 right-10 md:right-20 flex flex-col items-end">
               <div className="flex items-center gap-2 text-white/80 text-lg">
                 <span className="text-sm">by</span>
                 <span className="font-bold tracking-tighter text-3xl text-white">Abhijeet</span>
               </div>
            </div>

            <motion.div 
              initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute top-[40%] left-[45%] z-20"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-40 h-64 border-2 border-[#ffffff] pointer-events-none">
                  <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-[#ffffff]" />
                  <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-[#ffffff]" />
                  <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-[#ffffff]" />
                  <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-[#ffffff]" />
                  <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-white border border-[#ffffff]" />
                  <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white border border-[#ffffff]" />
                </div>

                <div className="absolute -top-12 left-0 flex flex-col items-start gap-0">
                  <div className="bg-[#2d4a1b] text-[#ffffff] px-4 py-1.5 rounded-lg text-sm font-bold shadow-xl">
                    Felicha
                  </div>
                  <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#2d4a1b] ml-2" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-medium pr-6 border-r border-white/20">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              English (US)
            </div>
            
            <div className="flex items-center gap-5 text-white/60">
              {[
                { icon: 'instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { icon: 'facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { icon: 'twitter', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                { icon: 'youtube', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122-2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' }
              ].map((social) => (
                <a key={social.icon} href="#" className="hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-xs text-white/50 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy ↗</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions ↗</a>
            <span className="text-white/40">© 2026 All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};