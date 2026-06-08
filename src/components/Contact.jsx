import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSubmitted(true);
    
    // Confetti effect!
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });
  };

  const handleReset = () => {
    setFormSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className="section" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="badge">Contacto</span>
          <h2>¿Dónde estamos?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Visítanos en nuestras instalaciones o escríbenos para cualquier consulta sobre clases, eventos o reservas especiales.
          </p>
        </div>

        {/* Contact Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start'
        }} className="contact-grid">
          
          {/* Info & Map Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'left' }}>
            
            {/* Direct Cards Info */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem'
            }} className="contact-details-grid">
              
              <div className="glass-card contact-details-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div className="icon-wrapper" style={{
                  color: 'var(--accent-dark)',
                  backgroundColor: 'var(--accent-glow)',
                  padding: '0.6rem',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}><Phone size={20} /></div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Llámanos</span>
                  <a href="tel:+34666467884" style={{ fontWeight: 700, fontSize: '0.95rem' }} className="hover-link">666 46 78 84</a>
                </div>
              </div>

              <div className="glass-card contact-details-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div className="icon-wrapper" style={{
                  color: 'var(--accent-dark)',
                  backgroundColor: 'var(--accent-glow)',
                  padding: '0.6rem',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}><Mail size={20} /></div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Escríbenos</span>
                  <a href="mailto:solopadel@solopadelsevilla.es" style={{ fontWeight: 700, fontSize: '0.95rem', wordBreak: 'break-all' }} className="hover-link">solopadel@solopadelsevilla.es</a>
                </div>
              </div>

              <div className="glass-card contact-details-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center', gridColumn: 'span 2' }}>
                <div className="icon-wrapper" style={{
                  color: 'var(--accent-dark)',
                  backgroundColor: 'var(--accent-glow)',
                  padding: '0.6rem',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}><Clock size={20} /></div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Horario</span>
                  <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Lunes a Domingo: 08:00 - 24:00</span>
                </div>
              </div>

            </div>

            {/* Interactive Map Card */}
            <div className="glass-card map-card" style={{
              padding: '0',
              height: '380px',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '24px',
              border: '1px solid var(--border-color)',
              boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)'
            }}>
              <iframe
                title="SoloPadel Sevilla Google Maps"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                src="https://maps.google.com/maps?q=37.371893832026686,-5.8922293306911&t=&z=16&ie=UTF8&iwloc=&hl=es&output=embed"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Floating Glassmorphism Overlay Card */}
              <div style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '1.25rem',
                right: '1.25rem',
                backgroundColor: 'rgba(255, 255, 255, 0.88)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                padding: '1rem 1.25rem',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 8px 32px rgba(15, 23, 42, 0.08)',
                zIndex: 10
              }} className="map-overlay">
                <div style={{ textAlign: 'left' }}>
                  <strong style={{ fontSize: '0.9rem', display: 'block', color: 'var(--text-primary)' }}>SoloPadel Sevilla</strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Calle de la Red Diecisiete, 53, Alcalá de Guadaíra</span>
                </div>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=37.371893832026686,-5.8922293306911" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ 
                    padding: '0.5rem 1rem', 
                    fontSize: '0.8rem', 
                    borderRadius: '8px',
                    gap: '0.3rem',
                    boxShadow: 'none'
                  }}
                >
                  <MapPin size={14} />
                  Cómo llegar
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="glass-card" style={{ textAlign: 'left' }}>
            
            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Envíanos un Mensaje</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                  ¿Tienes alguna pregunta? Envíanos tu consulta y te responderemos en menos de 24 horas.
                </p>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Tu Nombre</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Ej. Manuel González"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email de Contacto</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Ej. manuel@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Mensaje o Consulta</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    className="form-textarea"
                    placeholder="Escribe aquí tu consulta..."
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{ resize: 'vertical' }}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', gap: '0.5rem', marginTop: '1rem', padding: '0.85rem' }}
                >
                  <Send size={16} />
                  Enviar Mensaje
                </button>
              </form>
            ) : (
              <div style={{
                textAlign: 'center',
                padding: '2.5rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  color: 'var(--accent-dark)',
                  backgroundColor: 'var(--accent-glow)',
                  padding: '1rem',
                  borderRadius: '50%',
                  marginBottom: '1.5rem',
                  border: '1px solid var(--border-active)'
                }}>
                  <CheckCircle2 size={40} />
                </div>
                
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>¡Mensaje Enviado!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem', maxWidth: '320px' }}>
                  Gracias <strong>{formData.name}</strong>, hemos recibido tu mensaje. Nos pondremos en contacto contigo en {formData.email} muy pronto.
                </p>

                <button
                  onClick={handleReset}
                  className="btn btn-secondary"
                  style={{ padding: '0.65rem 1.5rem' }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Pulsing ring animation definition */}
      <style>{`
        @keyframes pulseRing {
          0% { transform: scale(0.5); opacity: 1; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .hover-link:hover {
          color: var(--accent-color) !important;
        }
        .contact-details-card {
          transition: all var(--transition-normal);
        }
        .contact-details-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-active);
          box-shadow: 0 15px 40px rgba(15, 23, 42, 0.08), 0 0 20px var(--accent-glow);
        }
        .contact-details-card:hover .icon-wrapper {
          background-color: var(--accent-glow-strong) !important;
          transform: scale(1.08);
        }
        .icon-wrapper {
          transition: all var(--transition-normal);
        }
        .map-card {
          transition: all var(--transition-normal);
        }
        .map-card:hover {
          border-color: var(--border-active);
          box-shadow: 0 15px 40px rgba(15, 23, 42, 0.08), 0 0 20px var(--accent-glow);
        }
        .map-overlay {
          transition: all var(--transition-normal);
        }
        .map-card:hover .map-overlay {
          transform: translateY(-2px);
          border-color: var(--border-active);
          box-shadow: 0 10px 35px rgba(15, 23, 42, 0.12);
        }
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 576px) {
          .contact-details-grid {
            grid-template-columns: 1fr !important;
          }
          .map-overlay {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
            bottom: 0.75rem;
            left: 0.75rem;
            right: 0.75rem;
          }
          .map-overlay a {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
