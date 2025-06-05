import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Kontakt</h2>
          <p className="section-subtitle">
            Skontaktuj się ze mną, aby umówić bezpłatną konsultację lub zadać pytanie
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-header">
                <h3>Informacje Kontaktowe</h3>
                <p>Jestem dostępny w godzinach 9:00-17:00 od poniedziałku do piątku</p>
              </div>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">📱</div>
                  <div className="info-content">
                    <h4>Telefon</h4>
                    <p>+48 123 456 789</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div className="info-content">
                    <h4>Email</h4>
                    <p>kontakt@jzfinance.pl</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h4>Lokalizacja</h4>
                    <p>Warszawa, Polska</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Instagram</a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Imię i Nazwisko"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefon"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Temat"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Twoja wiadomość"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Wyślij Wiadomość
                <span className="button-arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 