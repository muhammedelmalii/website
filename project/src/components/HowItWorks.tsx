import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Upload, 
  Cpu, 
  CloudLightning, 
  UsersRound, 
  Share2
} from 'lucide-react';

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: <Upload className="w-8 h-8 text-gold" />,
      title: "Upload or capture a photo",
      description: "From camera or file - a single photo is all we need",
    },
    {
      icon: <Cpu className="w-8 h-8 text-gold" />,
      title: "AI detects key attributes",
      description: "Emotion, energy, expression, and style are analyzed",
    },
    {
      icon: <CloudLightning className="w-8 h-8 text-gold" />,
      title: "Birth chart data enriches analysis",
      description: "Optional astrological data adds deeper personalization",
    },
    {
      icon: <UsersRound className="w-8 h-8 text-gold" />,
      title: "Combined profile determines recommendations",
      description: "Our AI generates the perfect suggestion based on your unique profile",
    },
    {
      icon: <Share2 className="w-8 h-8 text-gold" />,
      title: "Output is generated",
      description: "Receive your personalized card, QR code, and shareable social content",
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
      id="how-it-works"
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
            HOW THE <span className="text-gold">SYSTEM WORKS</span>
          </h2>
          <p className="text-lg text-cosmic-white/80">
            Our advanced AI combines visual analysis with astrological data to create 
            a deeply personalized experience in just a few simple steps.
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Vertical line connecting steps */}
          <div className="absolute left-8 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-gold/80 via-gold/20 to-gold/80 transform -translate-x-1/2 hidden sm:block" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col sm:flex-row items-center mb-16 last:mb-0 relative ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
              variants={itemVariants}
            >
              {/* Step number circle */}
              <motion.div
                className="absolute left-8 sm:left-1/2 w-8 h-8 bg-obsidian border-2 border-gold rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 hidden sm:flex"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <span className="text-gold font-bold">{index + 1}</span>
              </motion.div>

              {/* Icon and content container */}
              <div className={`flex flex-1 items-start ${
                index % 2 === 0 ? 'sm:mr-8 sm:text-right' : 'sm:ml-8 sm:text-left'
              } text-center sm:text-left`}>
                <motion.div
                  className="w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Icon circle */}
                  <div className="mx-auto sm:mx-0 w-16 h-16 rounded-full bg-obsidian-light border border-gold/30 flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-serif mb-2">{step.title}</h3>
                  <p className="text-cosmic-white/70">{step.description}</p>
                </motion.div>
              </div>

              {/* Empty div for opposite side */}
              <div className="flex-1 hidden sm:block" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;