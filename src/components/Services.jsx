import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '💰',
      title: 'Doradztwo Finansowe',
      description: 'Kompleksowa analiza Twojej sytuacji finansowej i stworzenie spersonalizowanego planu działania.',
      features: ['Analiza przepływów finansowych', 'Optymalizacja budżetu', 'Planowanie długoterminowe']
    },
    {
      icon: '🏦',
      title: 'Kredyty i Pożyczki',
      description: 'Profesjonalne doradztwo w zakresie wyboru najlepszych rozwiązań kredytowych.',
      features: ['Analiza zdolności kredytowej', 'Negocjacje z bankami', 'Optymalizacja rat']
    },
    {
      icon: '🛡️',
      title: 'Ubezpieczenia',
      description: 'Kompleksowa ochrona Twojego majątku i zabezpieczenie przyszłości bliskich.',
      features: ['Ubezpieczenia na życie', 'Ubezpieczenia majątkowe', 'Polisy inwestycyjne']
    },
    {
      icon: '📈',
      title: 'Inwestycje',
      description: 'Strategiczne planowanie inwestycji dopasowane do Twoich celów i możliwości.',
      features: ['Analiza rynku', 'Dywersyfikacja portfela', 'Monitoring wyników']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Nasze Usługi</h2>
          <p className="section-subtitle">
            Kompleksowe rozwiązania finansowe dostosowane do Twoich potrzeb
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-dot"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="service-link">
                Dowiedz się więcej
                <span className="arrow">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 