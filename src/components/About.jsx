import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { number: '10+', label: 'Lat Doświadczenia' },
    { number: '500+', label: 'Zadowolonych Klientów' },
    { number: '50M+', label: 'PLN Zainwestowanych Środków' },
    { number: '100%', label: 'Zaangażowania' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2>O Mnie</h2>
            <div className="about-subtitle">Ekspert w Dziedzinie Finansów Osobistych</div>
            
            <div className="about-text">
              <p>
                Specjalizuję się w doradztwie finansowym i planowaniu przyszłości finansowej dla osób prywatnych oraz małych firm. Moje podejście opiera się na głębokim zrozumieniu potrzeb klienta i tworzeniu spersonalizowanych rozwiązań.
              </p>
              <p>
                Posiadam wieloletnie doświadczenie w branży finansowej oraz niezbędne certyfikaty i uprawnienia. Moim celem jest pomoc w podejmowaniu świadomych decyzji finansowych i budowaniu długoterminowego bezpieczeństwa finansowego.
              </p>
            </div>

            <div className="about-values">
              <div className="value-item">
                <div className="value-icon">🎯</div>
                <div className="value-content">
                  <h4>Indywidualne Podejście</h4>
                  <p>Każdy klient otrzymuje spersonalizowane rozwiązania</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <div className="value-content">
                  <h4>Zaufanie i Transparentność</h4>
                  <p>Budujemy długotrwałe relacje oparte na zaufaniu</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon">📊</div>
                <div className="value-content">
                  <h4>Profesjonalizm</h4>
                  <p>Stale podnoszę swoje kwalifikacje i śledze trendy rynkowe</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span className="consultant-initials">JZ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 