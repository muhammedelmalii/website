import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Wine,
  HeartHandshake,
  Utensils,
  Sparkles,
  Theater
} from 'lucide-react';

const UseCases = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const useCases = [
    {
      icon: <Wine className="w-8 h-8 text-gold" />,
      title: "Beverage Booths",
      description: "Suggest the perfect drink based on guest's mood and preferences",
      image: "https://images.pexels.com/photos/2531184/pexels-photo-2531184.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-gold" />,
      title: "Weddings",
      description: "Create guest-specific recommendations for a memorable event",
      image: "https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Utensils className="w-8 h-8 text-gold" />,
      title: "Restaurants",
      description: "Menu match via QR codes at each table for personalized dining",
      image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-gold" />,
      title: "Brand Events",
      description: "High-impact photo-based interactions that create lasting impressions",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Theater className="w-8 h-8 text-gold" />,
      title: "Festivals",
      description: "Immersive memory-making stations that enhance the festival experience",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800"
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
      id="use-cases"
      ref={ref}
      className="py-24 relative z-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-serif mb-6 tracking-wide">
            WHERE IT <span className="text-gold">SHINES</span>
          </h2>
          <p className="text-lg text-cosmic-white/80">
            AstroMix & FaceMix creates unforgettable experiences 
            across various settings and industries.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Background image */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-transparent" />
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-6 h-64 flex flex-col justify-end">
                <div className="p-3 bg-obsidian border border-gold/30 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-serif mb-2 text-gold">{useCase.title}</h3>
                <p className="text-cosmic-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;