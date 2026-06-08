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
              
              <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{
                  color: 'var(--accent-color)',
                  backgroundColor: 'var(--accent-glow)',
                  padding: '0.6rem',
                  borderRadius: '10px'
                }}><Phone size={20} /></div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Llámanos</span>
                  <a href="tel:+34666467884" style={{ fontWeight: 700, fontSize: '0.95rem' }} className="hover-link">666 46 78 84</a>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{
                  color: 'var(--accent-color)',
                  backgroundColor: 'var(--accent-glow)',
                  padding: '0.6rem',
                  borderRadius: '10px'
                }}><Mail size={20} /></div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Escríbenos</span>
                  <a href="mailto:solopadel@solopadelsevilla.es" style={{ fontWeight: 700, fontSize: '0.95rem', wordBreak: 'break-all' }} className="hover-link">solopadel@solopadelsevilla.es</a>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{
                  color: 'var(--accent-color)',
                  backgroundColor: 'var(--accent-glow)',
                  padding: '0.6rem',
                  borderRadius: '10px'
                }}><MapPin size={20} /></div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Dirección</span>
                  <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>C/ La Red Diecisiete, 53</span>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{
                  color: 'var(--accent-color)',
                  backgroundColor: 'var(--accent-glow)',
                  padding: '0.6rem',
                  borderRadius: '10px'
                }}><Clock size={20} /></div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Horario</span>
                  <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>L-D: 08:00 - 24:00</span>
                </div>
              </div>

            </div>

            {/* Interactive Vector Map representation */}
            <div className="glass-card" style={{
              padding: '1.5rem',
              height: '240px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              border: '1px solid var(--border-color)'
            }}>
              {/* Map grid representation */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.15,
                background: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                zIndex: 0
              }}></div>

              {/* Styled Mock Roads */}
              <div style={{
                position: 'absolute',
                top: '40%',
                left: '-10%',
                width: '120%',
                height: '24px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                transform: 'rotate(-10deg)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  width: '100%',
                  borderTop: '1px dashed rgba(255, 255, 255, 0.2)',
                  transform: 'translateY(-50%)'
                }}></div>
                <span style={{
                  position: 'absolute',
                  top: '-18px',
                  left: '40px',
                  fontSize: '0.6rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>Autovía A-92 (Sevilla - Málaga)</span>
              </div>

              <div style={{
                position: 'absolute',
                top: '-10%',
                left: '60%',
                width: '28px',
                height: '120%',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                transform: 'rotate(80deg)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                borderRight: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <span style={{
                  position: 'absolute',
                  top: '30px',
                  left: '32px',
                  fontSize: '0.6rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  transform: 'rotate(-90deg)'
                }}>Calle La Red Diecisiete</span>
              </div>

              {/* Pulsing Pin */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '58%',
                transform: 'translate(-50%, -50%)',
                zIndex: 2,
                cursor: 'pointer'
              }}>
                {/* Glowing ring */}
                <div style={{
                  position: 'absolute',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-glow-strong)',
                  top: '-10px',
                  left: '-10px',
                  animation: 'pulseRing 2s infinite ease-out'
                }}></div>
                
                {/* Real pin */}
                <div style={{
                  backgroundColor: 'var(--accent-color)',
                  color: 'var(--bg-primary)',
                  padding: '0.4rem',
                  borderRadius: '50%',
                  border: '2px solid #fff',
                  boxShadow: '0 0 15px var(--accent-glow-strong)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <MapPin size={18} strokeWidth={2.5} />
                </div>
              </div>

              {/* Map Footer Label */}
              <div style={{
                position: 'relative',
                zIndex: 1,
                backgroundColor: 'rgba(15, 19, 31, 0.9)',
                padding: '0.75rem 1rem',
                borderTop: '1px solid var(--border-color)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: '12px'
              }}>
                <div>
                  <strong style={{ fontSize: '0.85rem', display: 'block', color: '#fff' }}>SoloPadel Sevilla</strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Pol. Ind. La Red (Alcalá de Guadaíra)</span>
                </div>
                <a 
                  href="https://maps.google.com/?q=Calle+La+Red+Diecisiete+53+Alcala+de+Guadaira" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem', borderRadius: '8px' }}
                >
                  Abrir GPS
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="glass-card" style={{ textAlign: 'left' }}>
            
            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff' }}>Envíanos un Mensaje</h3>
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
                  color: 'var(--accent-color)',
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
        @media (max-width: 992px) {
          .contact-grid {
            gridTemplateColumns: 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 576px) {
          .contact-details-grid {
            gridTemplateColumns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
