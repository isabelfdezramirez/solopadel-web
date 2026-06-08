import { Calendar, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer style={{
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      padding: '4rem 0 2rem',
      textAlign: 'left'
    }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr 1fr',
          gap: '3rem',
          marginBottom: '3rem'
        }} className="footer-grid">
          
          {/* Brand Info */}
          <div>
            <a href="#inicio" onClick={(e) => handleScrollTo(e, '#inicio')} style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.8rem',
              fontWeight: 800,
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              marginBottom: '1rem'
            }}>
              SOLO<span style={{ color: 'var(--accent-color)' }}>PADEL</span>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-color)',
                display: 'inline-block'
              }}></span>
            </a>
            
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '320px' }}>
              Tu club de confianza en Alcalá de Guadaíra. Pistas de cristal de primer nivel, escuela para todas las edades y el mejor ambiente post-partido.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', color: '#fff' }}>Enlaces Rápidos</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.9rem' }}>
              <a href="#inicio" onClick={(e) => handleScrollTo(e, '#inicio')} className="footer-link">Inicio</a>
              <a href="#club" onClick={(e) => handleScrollTo(e, '#club')} className="footer-link">El Club</a>
              <a href="#reservar" onClick={(e) => handleScrollTo(e, '#reservar')} className="footer-link">Reservar</a>
              <a href="#servicios" onClick={(e) => handleScrollTo(e, '#servicios')} className="footer-link">Servicios</a>
              <a href="#eventos" onClick={(e) => handleScrollTo(e, '#eventos')} className="footer-link">Eventos</a>
              <a href="#contacto" onClick={(e) => handleScrollTo(e, '#contacto')} className="footer-link">Contacto</a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', color: '#fff' }}>SoloPadel Sevilla</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
              
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--text-secondary)' }}>
                <MapPin size={18} style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '0.15rem' }} />
                <span>Calle La Red Diecisiete, nº 53,<br />Pol. Ind. La Red, Alcalá de Guadaíra</span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--text-secondary)' }}>
                <Phone size={18} style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
                <a href="tel:+34666467884" className="footer-link">666 46 78 84</a>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--text-secondary)' }}>
                <Mail size={18} style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
                <a href="mailto:solopadel@solopadelsevilla.es" className="footer-link">solopadel@solopadelsevilla.es</a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <span>&copy; {new Date().getFullYear()} SoloPadel Sevilla. Todos los derechos reservados.</span>
          <span>Desarrollado para SoloPadel Alcalá de Guadaíra</span>
        </div>

      </div>

      <style>{`
        .footer-link {
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }
        .footer-link:hover {
          color: var(--accent-color) !important;
        }
        @media (max-width: 768px) {
          .footer-grid {
            gridTemplateColumns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
