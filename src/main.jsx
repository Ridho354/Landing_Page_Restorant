import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import ImageGrid from './components/product/ImageGrid.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
import MainPage from './components/MainPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <MainPage />
  </StrictMode>,
)
