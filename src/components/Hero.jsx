import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="overlay"></div>
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1>
            BEZPŁATNA{' '}
            <span className="highlight">KONSULTACJA</span>
          </h1>
          <p className="hero-subtitle">
            Jak z niej skorzystać i w czym może Ci pomóc?
          </p>
          <div className="hero-cta">
            <a href="#contact" className="cta-button">
              Umów Spotkanie
              <span className="button-arrow">→</span>
            </a>
          </div>
        </div>

        <div className="hero-benefits">
          <div className="benefits-wrapper">
            <div className="benefit-item">
              <div className="benefit-icon"></div>
              <p>Potrzebujesz konkretnych rozwiązań w zakresie ubezpieczeń, inwestycji, kredytów</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon"></div>
              <p>Prowadzisz firmę i szukasz optymalnych rozwiązań finansowych dla swojego biznesu</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon"></div>
              <p>Jesteś młodym rodzicem lub planujesz rodzinę i myślisz o finansowej przyszłości Twoich bliskich</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon"></div>
              <p>Planujesz wziąć kredyt i chcesz to zrobić mądrze</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 