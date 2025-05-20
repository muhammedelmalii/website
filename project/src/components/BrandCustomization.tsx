import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wine, Utensils, PartyPopper as Party, Sparkles, Rocket } from 'lucide-react';

const BrandCustomization = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const sectors = [
    {
      icon: <Wine className="w-8 h-8" />,
      title: "Beverage Brands",
      description: "Create signature drink recommendations based on guest profiles",
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Restaurants",
      description: "Personalized menu suggestions that match customer preferences",
    },
    {
      icon: <Party className="w-8 h-8" />,
      title: "Events & Parties",
      description: "Memorable interactive experiences that guests will share",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Weddings",
      description: "Custom recommendations for each guest's unique personality",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Product Launches",
      description: "Create powerful brand moments with personalized interactions",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
      } 
    },
  };

  return (
    <section
      id="brands"
      ref={ref}
      className="py-24 relative z-10 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-serif mb-6 tracking-wide">
            TAILORED TO EVERY <span className="text-gold">BRAND & OCCASION</span>
          </h2>
          <p className="text-lg text-cosmic-white/80">
            AstroMix & FaceMix systems are fully adaptable — interface design, recommendation tone, 
            visual branding, and even output format evolve to match your identity.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden group"
              variants={itemVariants}
            >
              <motion.div 
                className="bg-obsidian-light border border-gold/20 rounded-lg p-6 h-full flex flex-col items-center text-center transition-all duration-300 group-hover:bg-gold/10"
                whileHover={{ 
                  y: -5,
                  transition: { 
                    type: 'spring', 
                    stiffness: 300 
                  }
                }}
              >
                {/* Icon container */}
                <motion.div
                  className="w-16 h-16 rounded-full bg-obsidian flex items-center justify-center mb-4 border border-gold/30"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, 5, 0, -5, 0],
                    borderColor: 'rgba(203, 163, 86, 0.8)',
                  }}
                  transition={{
                    rotate: {
                      duration: 0.8,
                      ease: "easeInOut",
                      repeat: 0,
                    }
                  }}
                >
                  <motion.div
                    initial={{ color: "#A0A0A0" }}
                    whileHover={{ color: "#CBA356" }}
                    transition={{ duration: 0.3 }}
                  >
                    {sector.icon}
                  </motion.div>
                </motion.div>
                
                <h3 className="text-lg font-serif mb-2 group-hover:text-gold transition-colors duration-300">
                  {sector.title}
                </h3>
                
                <p className="text-cosmic-white/70 text-sm transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  {sector.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandCustomization;