import React from 'react';
import './Benefits.css';

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container benefits-container">
        <div className="benefits-card">
          <h2>DLACZEGO WARTO?</h2>
          <p className="benefits-subtitle">Podczas 30-60 minutowego spotkania:</p>
          <div className="benefits-list">
            <div className="benefit-item">
              <div className="benefit-dot"></div>
              <p>Otrzymasz od nas porady, jak lepiej wykorzystać i ustrukturyzować swoje finanse</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-dot"></div>
              <p>Dzięki prostej analizie poznamy wszystkie swoje mocne i słabe strony finansowe</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-dot"></div>
              <p>Zyskasz pewność co do tego, jak jesteś zabezpieczony</p>
            </div>
          </div>
        </div>

        <div className="benefits-card">
          <h2>TWÓJ ZYSK Z BEZPŁATNEJ KONSULTACJI</h2>
          <div className="benefits-list">
            <div className="benefit-item">
              <div className="benefit-dot"></div>
              <p>Otrzymasz lepsze wyniki i korzyści w efekcie naszego wspólnego rozwiązania</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-dot"></div>
              <p>Zabezpieczysz finansową przyszłość swojej rodziny</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-dot"></div>
              <p>Odkryjesz na ile faktycznie możesz zwiększyć swoją efektywność finansową</p>
            </div>
          </div>
        </div>

        <div className="benefits-card consultation-card">
          <h2>BEZPŁATNA KONSULTACJA – ZACZNIJ JUŻ DZIŚ!</h2>
          <div className="consultation-content">
            <p>Skorzystaj z bezpłatnej, niezobowiązującej konsultacji.</p>
            <div className="consultation-cta">
              <p>Jak się zapisać? To proste!</p>
              <button className="btn">
                KONSULTACJA
                <span className="btn-icon">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits; 