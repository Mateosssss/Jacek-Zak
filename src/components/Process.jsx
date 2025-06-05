import React from 'react';
import './Process.css';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Bezpłatna Konsultacja',
      description: 'Pierwsze spotkanie, podczas którego poznajemy Twoją sytuację finansową i cele.',
      details: ['Analiza obecnej sytuacji', 'Określenie celów', 'Identyfikacja potrzeb']
    },
    {
      number: '02',
      title: 'Analiza i Strategia',
      description: 'Przygotowanie spersonalizowanego planu działania dostosowanego do Twoich potrzeb.',
      details: ['Szczegółowa analiza finansowa', 'Opracowanie strategii', 'Przegląd dostępnych opcji']
    },
    {
      number: '03',
      title: 'Implementacja',
      description: 'Wdrożenie wybranych rozwiązań i rozpoczęcie realizacji planu finansowego.',
      details: ['Wybór najlepszych rozwiązań', 'Wsparcie w procesie', 'Koordynacja działań']
    },
    {
      number: '04',
      title: 'Monitoring i Optymalizacja',
      description: 'Regularne spotkania i dostosowywanie strategii do zmieniających się potrzeb.',
      details: ['Regularne przeglądy', 'Aktualizacja strategii', 'Ciągłe wsparcie']
    }
  ];

  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-header">
          <h2>Proces Współpracy</h2>
          <p className="section-subtitle">
            Przejrzysta i efektywna metoda działania, która prowadzi do osiągnięcia Twoich celów finansowych
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <ul className="step-details">
                  {step.details.map((detail, idx) => (
                    <li key={idx}>
                      <span className="detail-dot"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="process-cta">
          <p>Gotowy rozpocząć współpracę?</p>
          <a href="#contact" className="cta-button">
            Umów Bezpłatną Konsultację
            <span className="button-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process; 