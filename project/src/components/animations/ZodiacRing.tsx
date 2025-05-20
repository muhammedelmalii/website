import React from 'react';
import { motion } from 'framer-motion';

const ZodiacRing = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div 
        className="w-[150vh] h-[150vh] rounded-full border border-gold/10 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 0.4, 
          scale: 1,
          rotate: 360
        }}
        transition={{ 
          opacity: { duration: 2 },
          scale: { duration: 2 },
          rotate: { duration: 120, repeat: Infinity, ease: "linear" }
        }}
      >
        {/* Zodiac symbols */}
        {Array.from({ length: 12 }).map((_, index) => {
          const angle = (index * 30) * (Math.PI / 180);
          const x = 50 + 48 * Math.cos(angle);
          const y = 50 + 48 * Math.sin(angle);
          
          return (
            <motion.div
              key={index}
              className="absolute w-8 h-8 flex items-center justify-center"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.5,
                ease: "easeInOut"
              }}
            >
              <span className="text-gold text-xl font-bold">{getZodiacSymbol(index)}</span>
            </motion.div>
          );
        })}
      </motion.div>
      
      {/* Inner rings */}
      <motion.div 
        className="absolute w-[80vh] h-[80vh] rounded-full border border-gold/20"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.6,
          rotate: -360 
        }}
        transition={{ 
          opacity: { duration: 2 },
          rotate: { duration: 80, repeat: Infinity, ease: "linear" }
        }}
      />
      
      <motion.div 
        className="absolute w-[40vh] h-[40vh] rounded-full border border-gold/30"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.8,
          rotate: 360 
        }}
        transition={{ 
          opacity: { duration: 2 },
          rotate: { duration: 60, repeat: Infinity, ease: "linear" }
        }}
      />
    </div>
  );
};

// Helper function to return zodiac symbols
const getZodiacSymbol = (index: number): string => {
  const symbols = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
  return symbols[index];
};

export default ZodiacRing;