import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Modules', href: '#modules' },
    { name: 'Brands', href: '#brands' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-obsidian/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.div 
          className="flex items-center" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles className="h-6 w-6 text-gold mr-2" />
          <span className="font-serif text-xl tracking-wider uppercase">
            Astro<span className="text-gold">Mix</span> & Face<span className="text-gold">Mix</span>
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wider hover:text-gold transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="cosmic-button-primary rounded"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(203, 163, 86, 0.5)' }}
          >
            REQUEST A DEMO
          </motion.a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-cosmic-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 w-full bg-obsidian/95 backdrop-blur-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-cosmic-white hover:text-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block py-2 text-gold font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              REQUEST A DEMO
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;