import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ZodiacRing from './animations/ZodiacRing';
import FaceMesh from './animations/FaceMesh';

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <ZodiacRing />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 tracking-wider text-white"
              custom={0}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={textVariants}
            >
              AI THAT READS YOU —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
                THROUGH A SINGLE PHOTO
              </span>
            </motion.h1>

            <motion.p
              className="text-lg mb-8 text-cosmic-white/80 max-w-xl mx-auto lg:mx-0"
              custom={1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={textVariants}
            >
              AstroMix decodes your birth chart. FaceMix analyzes facial expression, energy, style, and color from 
              a single image — and delivers real-time personalized suggestions via an interactive kiosk.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              custom={2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={textVariants}
            >
              <motion.a
                href="#contact"
                className="cosmic-button-primary rounded"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(203, 163, 86, 0.5)' }}
              >
                REQUEST A DEMO
              </motion.a>
              <motion.a
                href="#how-it-works"
                className="cosmic-button-secondary rounded"
                whileHover={{ scale: 1.05 }}
              >
                SEE HOW IT WORKS
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-md">
              {/* Kiosk Device */}
              <motion.div 
                className="bg-obsidian-light rounded-xl p-2 border border-gold/20 shadow-xl aspect-[3/4]"
                animate={{ boxShadow: inView ? '0 0 30px rgba(203, 163, 86, 0.2)' : '0 0 0 rgba(0, 0, 0, 0)' }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              >
                <div className="bg-obsidian rounded-lg h-full relative overflow-hidden">
                  {/* Screen content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <FaceMesh inView={inView} />
                    
                    {/* Floating photos */}
                    <motion.img 
                      src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200"
                      alt="User profile photo example" 
                      className="absolute -top-4 -right-4 w-20 h-20 object-cover rounded-lg border border-gold/30"
                      initial={{ y: 30, opacity: 0 }}
                      animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                      transition={{ delay: 0.7, duration: 1 }}
                    />
                    
                    <motion.img 
                      src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=200"
                      alt="User profile photo example" 
                      className="absolute top-32 -left-6 w-16 h-16 object-cover rounded-lg border border-gold/30"
                      initial={{ y: 30, opacity: 0 }}
                      animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                      transition={{ delay: 0.9, duration: 1 }}
                    />
                    
                    <motion.img 
                      src="https://images.pexels.com/photos/4350096/pexels-photo-4350096.jpeg?auto=compress&cs=tinysrgb&w=200"
                      alt="User profile photo example" 
                      className="absolute bottom-10 -right-8 w-24 h-24 object-cover rounded-lg border border-gold/30"
                      initial={{ y: 30, opacity: 0 }}
                      animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                      transition={{ delay: 1.1, duration: 1 }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;