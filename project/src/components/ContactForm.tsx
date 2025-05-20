import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    sector: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      
      // Reset form after submission
      setFormState({
        name: '',
        email: '',
        company: '',
        sector: '',
        message: '',
      });
      
      // Reset submitted state after display
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };
  
  const inputClasses = "w-full bg-obsidian-light border border-gold/20 rounded px-4 py-2 text-cosmic-white focus:outline-none focus:border-gold transition-colors";
  
  return (
    <section
      id="contact"
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
            LET'S BUILD YOUR <span className="text-gold">PERSONALIZED EXPERIENCE</span>
          </h2>
          <p className="text-lg text-cosmic-white/80">
            Share your details and we'll craft a customized demonstration
            for your brand or event.
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cosmic-white/80 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cosmic-white/80 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-cosmic-white/80 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>
              
              <div>
                <label htmlFor="sector" className="block text-sm font-medium text-cosmic-white/80 mb-1">
                  Sector
                </label>
                <select
                  id="sector"
                  name="sector"
                  value={formState.sector}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                >
                  <option value="" disabled>Select your sector</option>
                  <option value="beverage">Beverage</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="events">Events & Parties</option>
                  <option value="wedding">Wedding</option>
                  <option value="brand">Brand Activation</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-cosmic-white/80 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formState.message}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Tell us about your project or event..."
              />
            </div>

            <div className="text-center">
              <motion.button
                type="submit"
                className="cosmic-button-primary rounded-lg py-4 px-8 inline-flex items-center space-x-2"
                disabled={submitting}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(203, 163, 86, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                {submitting ? (
                  <span>SENDING...</span>
                ) : (
                  <>
                    <span>TRANSMIT REQUEST</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </div>
            
            {/* Success message */}
            <AnimatedSuccess show={submitted} />
          </form>
        </motion.div>
      </div>
    </section>
  );
};

interface AnimatedSuccessProps {
  show: boolean;
}

const AnimatedSuccess: React.FC<AnimatedSuccessProps> = ({ show }) => {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-obsidian/90 backdrop-blur-sm rounded-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: show ? 1 : 0,
        scale: show ? 1 : 0.8,
        pointerEvents: show ? 'auto' : 'none'
      }}
      transition={{ duration: 0.4 }}
    >
      {show && (
        <div className="text-center p-8">
          <motion.div
            className="w-16 h-16 mx-auto bg-gold/20 rounded-full flex items-center justify-center mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Send className="w-8 h-8 text-gold" />
            </motion.div>
          </motion.div>
          
          <motion.h3
            className="text-2xl font-serif text-gold mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Request Transmitted!
          </motion.h3>
          
          <motion.p
            className="text-cosmic-white/80"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            We'll be in touch with you shortly to discuss your personalized experience.
          </motion.p>
          
          {/* Animated stars */}
          <StarBurst />
        </div>
      )}
    </motion.div>
  );
};

const StarBurst = () => {
  // Create 20 stars at random positions
  const stars = Array.from({ length: 20 }).map((_, i) => {
    const angle = Math.random() * Math.PI * 2;
    const distance = 20 + Math.random() * 100;
    const delay = Math.random() * 0.3;
    const duration = 0.8 + Math.random() * 0.5;
    const size = 2 + Math.random() * 4;
    
    return {
      id: i,
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      opacity: 0.4 + Math.random() * 0.6,
      delay,
      duration,
      size
    };
  });

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-gold"
          style={{ width: star.size, height: star.size }}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ 
            x: star.x, 
            y: star.y, 
            opacity: [0, star.opacity, 0] 
          }}
          transition={{ 
            duration: star.duration, 
            delay: star.delay,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

export default ContactForm;