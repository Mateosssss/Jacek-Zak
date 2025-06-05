import React from 'react';
import './References.css';

const References = () => {
  const testimonials = [
    {
      name: 'Anna Kowalska',
      position: 'Właścicielka Firmy',
      content: 'Współpraca z JZ Finance to strzał w dziesiątkę. Profesjonalne podejście i indywidualne rozwiązania pomogły mi uporządkować finanse mojej firmy i zaplanować jej rozwój.',
      rating: 5
    },
    {
      name: 'Piotr Nowak',
      position: 'Manager',
      content: 'Dzięki doradztwu JZ Finance udało mi się zoptymalizować moje inwestycje i zabezpieczyć przyszłość finansową mojej rodziny. Polecam każdemu, kto szuka profesjonalnego wsparcia.',
      rating: 5
    },
    {
      name: 'Marta Wiśniewska',
      position: 'Młoda Rodzina',
      content: 'Bardzo profesjonalne podejście do planowania finansów rodzinnych. Otrzymaliśmy świetne wskazówki dotyczące oszczędzania i inwestowania w przyszłość naszych dzieci.',
      rating: 5
    },
    {
      name: 'Tomasz Zieliński',
      position: 'Przedsiębiorca',
      content: 'Kompleksowa obsługa i świetne zrozumienie potrzeb biznesowych. JZ Finance pomógł mi w optymalizacji kosztów i znalezieniu najlepszych rozwiązań finansowych.',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section id="references" className="references">
      <div className="container">
        <div className="section-header">
          <h2>Referencje</h2>
          <p className="section-subtitle">
            Co mówią o nas nasi klienci
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p>{testimonial.content}</p>
              </div>
              
              <div className="testimonial-footer">
                <div className="testimonial-info">
                  <div className="testimonial-author">{testimonial.name}</div>
                  <div className="testimonial-position">{testimonial.position}</div>
                </div>
                <div className="testimonial-rating">
                  <span className="stars">{renderStars(testimonial.rating)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="references-stats">
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Zadowolonych Klientów</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Udanych Konsultacji</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Lat Doświadczenia</div>
          </div>
        </div>

        <div className="references-cta">
          <a href="#contact" className="cta-button">
            Dołącz do Zadowolonych Klientów
            <span className="button-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default References; 