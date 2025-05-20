import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import Modules from './components/Modules';
import BrandCustomization from './components/BrandCustomization';
import OutputDemo from './components/OutputDemo';
import UseCases from './components/UseCases';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import StarBackground from './components/animations/StarBackground';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-cosmic-white">
      <StarBackground />
      
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <HowItWorks />
          <Modules />
          <BrandCustomization />
          <OutputDemo />
          <UseCases />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;