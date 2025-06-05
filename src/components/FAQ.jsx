import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Ile kosztuje pierwsza konsultacja?',
      answer: 'Pierwsza konsultacja jest całkowicie bezpłatna. Podczas niej poznamy Twoją sytuację finansową i określimy możliwości współpracy.'
    },
    {
      question: 'Jak długo trwa spotkanie konsultacyjne?',
      answer: 'Standardowe spotkanie konsultacyjne trwa od 30 do 60 minut. W tym czasie dokładnie omawiamy Twoją sytuację i cele finansowe.'
    },
    {
      question: 'Czy oferujecie usługi dla firm?',
      answer: 'Tak, oferujemy kompleksowe doradztwo finansowe zarówno dla osób prywatnych, jak i dla małych oraz średnich przedsiębiorstw.'
    },
    {
      question: 'Jakie dokumenty powinienem przygotować na pierwszą konsultację?',
      answer: 'Na pierwszą konsultację warto przygotować podstawowe informacje o swoich dochodach, zobowiązaniach finansowych oraz celach inwestycyjnych.'
    },
    {
      question: 'Czy spotkania mogą odbywać się online?',
      answer: 'Tak, oferujemy możliwość konsultacji zarówno stacjonarnych, jak i online poprzez platformy wideokonferencyjne.'
    },
    {
      question: 'Jak wygląda proces współpracy po pierwszej konsultacji?',
      answer: 'Po pierwszej konsultacji przygotowujemy spersonalizowany plan działania. Następnie, w zależności od Twoich potrzeb, rozpoczynamy regularne spotkania i wdrażanie rozwiązań.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-header">
          <h2>Często Zadawane Pytania</h2>
          <p className="section-subtitle">
            Odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług
          </p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>Nie znalazłeś odpowiedzi na swoje pytanie?</p>
          <a href="#contact" className="cta-button">
            Skontaktuj się z Nami
            <span className="button-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 