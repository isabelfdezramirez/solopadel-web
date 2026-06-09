import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {

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
          
          {/* Info Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
            
            {/* Direct Cards Info */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
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
                  <a href="mailto:solopadel@solopadelsevilla.es" style={{ fontWeight: 700, fontSize: '0.95rem' }} className="hover-link">solopadel@solopadelsevilla.es</a>
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
                }}><Clock size={20} /></div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Horario</span>
                  <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Lunes a Domingo: 07:30 - 01:30</span>
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Map Column (Right) */}
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
