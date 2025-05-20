import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Share2, QrCode, Instagram, FileText } from 'lucide-react';

const OutputDemo = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const outputs = [
    {
      title: "Personalized Drink Card",
      description: "Customized beverage recommendations based on facial analysis",
      icon: <Share2 className="w-6 h-6 text-gold" />,
      image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "QR Code Printout",
      description: "Scan to view and share your personalized recommendations",
      icon: <QrCode className="w-6 h-6 text-gold" />,
      image: "https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Instagram Story Format",
      description: "Ready-to-share social media content with your recommendations",
      icon: <Instagram className="w-6 h-6 text-gold" />,
      image: "https://images.pexels.com/photos/3617770/pexels-photo-3617770.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "PDF Download",
      description: "Detailed recommendation with branded visuals and explanations",
      icon: <FileText className="w-6 h-6 text-gold" />,
      image: "https://images.pexels.com/photos/5054776/pexels-photo-5054776.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % outputs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + outputs.length) % outputs.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    nextSlide();
  };

  const handlePrev = () => {
    setDirection(-1);
    prevSlide();
  };

  return (
    <section
      id="output-demo"
      ref={ref}
      className="py-24 bg-obsidian-light relative z-10 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-serif mb-6 tracking-wide">
            EVERY EXPERIENCE ENDS WITH SOMETHING <span className="text-gold">TANGIBLE</span>
          </h2>
          <p className="text-lg text-cosmic-white/80">
            Our system provides multiple shareable, visual, and branded outputs
            to extend the experience beyond the moment.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Carousel */}
            <div className="overflow-hidden rounded-xl">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="w-full"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Image */}
                    <div className="h-96 overflow-hidden rounded-lg border border-gold/30">
                      <img
                        src={outputs[currentIndex].image}
                        alt={outputs[currentIndex].title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="text-left p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-obsidian rounded-full mr-4">
                          {outputs[currentIndex].icon}
                        </div>
                        <h3 className="text-2xl font-serif text-gold">
                          {outputs[currentIndex].title}
                        </h3>
                      </div>
                      <p className="text-lg text-cosmic-white/80 mb-8">
                        {outputs[currentIndex].description}
                      </p>
                      
                      <div className="flex space-x-2">
                        <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-sm">
                          Shareable
                        </span>
                        <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-sm">
                          Visual
                        </span>
                        <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-sm">
                          Branded
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <motion.button
                onClick={handlePrev}
                className="p-2 rounded-full border border-gold/30 hover:border-gold text-cosmic-white"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(203, 163, 86, 0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              
              {/* Indicators */}
              <div className="flex items-center space-x-2">
                {outputs.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentIndex ? 'bg-gold' : 'bg-cosmic-white/30'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                  />
                ))}
              </div>
              
              <motion.button
                onClick={handleNext}
                className="p-2 rounded-full border border-gold/30 hover:border-gold text-cosmic-white"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(203, 163, 86, 0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutputDemo;