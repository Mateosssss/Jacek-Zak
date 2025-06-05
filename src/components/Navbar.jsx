import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/" className="navbar-logo">
            <span className="logo-text">JZ</span>
            <span className="logo-dot"></span>
            <span className="logo-subtext">Finance</span>
          </a>
        </div>

        <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
          <a href="#services" className="navbar-link">Usługi</a>
          <a href="#about" className="navbar-link">O Mnie</a>
          <a href="#testimonials" className="navbar-link">Referencje</a>
          <a href="#contact" className="navbar-link">Kontakt</a>
          <a href="#contact" className="navbar-button">
            Darmowa Konsultacja
            <span className="button-arrow">→</span>
          </a>
        </div>

        <button 
          className={`navbar-toggle ${isOpen ? 'is-active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 