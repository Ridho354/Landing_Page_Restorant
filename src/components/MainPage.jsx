import React, { useState } from 'react';
import '../index.css';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ImageGrid from './product/ImageGrid';
import ProductGrid from './ProductGrid';
import ContactForm from './ContactForm';
import Footer from './Footer';

const MainPage = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div >
            <HeroSection />
            <ProductGrid />
            <ContactForm />
            <Footer />
          </div>
        );
      case 'products':
        return <ImageGrid />;
      case 'contact':
        return <ContactForm />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderSection()}
    </>
  );
};

export default MainPage;