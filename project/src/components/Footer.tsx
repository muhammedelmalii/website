import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Modules', href: '#modules' },
    { name: 'Sectors', href: '#brands' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-16 relative z-10 border-t border-gold/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.div 
            className="mb-8 flex items-center" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Sparkles className="h-8 w-8 text-gold mr-3" />
            <span className="font-serif text-2xl tracking-wider uppercase">
              Astro<span className="text-gold">Mix</span> & Face<span className="text-gold">Mix</span>
            </span>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wider hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>

          <motion.div
            className="text-cosmic-white/60 text-sm text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="mb-2">
              © 2025 AstroMix & FaceMix — AI-Powered Personalized Experiences
            </p>
            <p>
              Transforming moments into memories through personalized recommendations
            </p>
          </motion.div>
        </div>
      </div>

      {/* Slow rotating zodiac symbols in background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-5">
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 12 }).map((_, index) => {
            const symbols = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
            const angle = (index * 30) * (Math.PI / 180);
            const radius = Math.min(window.innerWidth, window.innerHeight) * 0.4;
            const x = 50 + 40 * Math.cos(angle);
            const y = 50 + 40 * Math.sin(angle);
            
            return (
              <div
                key={index}
                className="absolute text-3xl text-gold/50"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {symbols[index]}
              </div>
            );
          })}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;