import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CloudMoon, Smile, Monitor, FileCode } from 'lucide-react';

const Modules = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const modules = [
    {
      icon: <CloudMoon className="w-12 h-12 text-gold" />,
      title: "AstroMix",
      description: "Real-time astrological analysis for personalized cosmic insight",
    },
    {
      icon: <Smile className="w-12 h-12 text-gold" />,
      title: "FaceMix",
      description: "Visual AI for mood, energy & style detection from a single photo",
    },
    {
      icon: <Monitor className="w-12 h-12 text-gold" />,
      title: "Smart Kiosk",
      description: "LED-lit, touchscreen hardware for interactive experiences",
    },
    {
      icon: <FileCode className="w-12 h-12 text-gold" />,
      title: "Content Engine",
      description: "Generates QR codes, social media content, PDFs & branded cards",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      } 
    },
  };

  return (
    <section
      id="modules"
      ref={ref}
      className="py-24 bg-obsidian-light relative z-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-serif mb-6 tracking-wide">
            OUR <span className="text-gold">MODULES</span>
          </h2>
          <p className="text-lg text-cosmic-white/80">
            Our comprehensive system combines cutting-edge technology modules
            to deliver a seamless, personalized experience.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {modules.map((module, index) => (
            <motion.div
              key={index}
              className="bg-obsidian border border-gold/20 rounded-lg p-6 flex flex-col items-center text-center"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 0 20px rgba(203, 163, 86, 0.3)' 
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div 
                className="mb-6 bg-obsidian-dark p-4 rounded-full"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                {module.icon}
              </motion.div>
              <h3 className="text-xl font-serif mb-3 text-gold">{module.title}</h3>
              <p className="text-cosmic-white/70">{module.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Modules;