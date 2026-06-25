import { Clock, Phone } from 'lucide-react';
import img1 from '../assets/carrousel/img1.jpeg';
import img2 from '../assets/galeria2.jpg';
import img3 from '../assets/galeria1.jpg';
import img4 from '../assets/alquiler-pistas_circle.jpg';
import playtomicLogo from '../assets/playtomic_logo.jpg';

export default function Rates() {
  const ratesData = [
    {
      img: img1,
      title: 'LUNES-VIERNES',
      subtitle: 'DE MAÑANAS 9:00 A 14:00',
      price: '3€'
    },
    {
      img: img2,
      title: 'LUNES-JUEVES',
      subtitle: 'HASTA LAS 19:00 Y A PARTIR DE LAS 21:30',
      price: '4,50€'
    },
    {
      img: img3,
      title: 'VIERNES TARDE - SÁBADOS - DOMINGOS Y FESTIVOS',
      subtitle: '',
      price: '4,50€'
    },
    {
      img: img4,
      title: 'LUNES-JUEVES',
      subtitle: 'DE 19:00 A 21:30',
      price: '5€'
    }
  ];

  return (
    <section id="tarifas" className="section" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Tarifas</span>
          <h2>Precios de Alquiler de Pistas</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Nuestros precios varían según el día de la semana y el tramo horario. Consulta nuestras tarifas a continuación.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '1.5rem',
          marginTop: '3rem'
        }} className="rates-grid-custom">
          {ratesData.map((item, idx) => (
            <div
              key={idx}
              className="price-card-custom"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-color)',
                borderRadius: '20px',
                padding: '1.5rem 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.02)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer'
              }}
            >
              {/* Left: Image & Text */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexGrow: 1, minWidth: 0 }}>
                {/* Circular Image */}
                <img 
                  src={item.img} 
                  alt={item.title} 
                  style={{
                    width: '76px',
                    height: '76px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    flexShrink: 0,
                    boxShadow: '0 4px 10px rgba(15, 23, 42, 0.06)',
                    border: '2px solid #ffffff'
                  }}
                />
                
                {/* Text */}
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', minWidth: 0 }}>
                  <h4 style={{ 
                    fontSize: '0.95rem', 
                    fontWeight: 800, 
                    color: '#4B308A', // Deep purple-blue from image
                    margin: 0,
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '0.5px',
                    lineHeight: 1.3
                  }}>
                    {item.title}
                  </h4>
                  {item.subtitle && (
                    <span style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: 600, 
                      color: 'var(--text-muted)', 
                      marginTop: '0.25rem',
                      letterSpacing: '0.2px'
                    }}>
                      {item.subtitle}
                    </span>
                  )}
                </div>
              </div>

              {/* Connecting Dotted Line Spacer */}
              <div style={{ 
                flexGrow: 1, 
                borderBottom: '1.5px dotted rgba(15, 23, 42, 0.12)', 
                margin: '0 1.25rem',
                alignSelf: 'center'
              }} className="rates-dot-spacer"></div>

              {/* Right: Price */}
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 800, 
                color: '#E53935', // Red color from image
                fontFamily: 'var(--font-heading)',
                flexShrink: 0
              }}>
                {item.price}
              </div>
            </div>
          ))}
        </div>

        {/* Cancellation Policy Footer */}
        <div style={{
          marginTop: '2.5rem',
          textAlign: 'center',
          fontSize: '0.85rem',
          fontStyle: 'italic',
          color: 'var(--text-secondary)',
          fontWeight: 500,
          lineHeight: 1.5
        }}>
          *Cancelación con antelación mínima de 24h. El club podrá modificar el número de pistas para evitar espacios libres entre reservas.
        </div>

        {/* Info Callout Box */}
        <div style={{
          maxWidth: '1100px',
          margin: '2rem auto 0',
          backgroundColor: '#ffffff',
          border: '1px solid rgba(15, 23, 42, 0.08)',
          borderRadius: '16px',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '0.95rem',
          color: 'var(--text-secondary)',
          textAlign: 'left',
          boxShadow: '0 4px 12px rgba(15, 23, 42, 0.02)'
        }}>
          <Clock size={20} style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
          <span>
            <strong>Nota de Reserva:</strong> Puedes realizar tus reservas cómodamente a través de la app de <strong>Playtomic</strong>, o de manera presencial, por teléfono y WhatsApp llamando al <strong>666 46 78 84</strong>.
          </span>
        </div>

        {/* Replicated Booking Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
          marginTop: '2.5rem'
        }}>
          {/* Playtomic Button */}
          <a
            href="https://playtomic.com/clubs/solo-padel-sevilla"
            target="_blank"
            rel="noopener noreferrer"
            className="booking-btn playtomic-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '52px',
              padding: '0 2rem',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(15, 23, 42, 0.12)',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.03)',
              cursor: 'pointer'
            }}
          >
            <img
              src={playtomicLogo}
              alt="Playtomic"
              style={{ height: '34px', width: 'auto', display: 'block' }}
            />
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/34666467884?text=Hola!%20Me%20gustar%C3%ADa%20reservar%20una%20pista%20en%20Solo%20Padel."
            target="_blank"
            rel="noopener noreferrer"
            className="booking-btn whatsapp-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '52px',
              padding: '0 2rem',
              backgroundColor: '#25D366',
              color: '#ffffff',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '1rem',
              borderRadius: '12px',
              boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
              gap: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ display: 'block' }}>
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.054L2 22l5.077-1.331a9.907 9.907 0 004.933 1.306h.004c5.505 0 9.989-4.478 9.99-9.984A9.97 9.97 0 0012.012 2zm5.723 14.194c-.312.879-1.536 1.6-2.106 1.706-.51.096-1.176.177-3.41-.75-2.859-1.187-4.69-4.088-4.83-4.277-.143-.189-1.144-1.52-1.144-2.897 0-1.378.718-2.057 1.01-2.35.29-.293.633-.366.844-.366.155 0 .313.003.447.01.143.006.335-.054.526.403.197.472.67 1.633.729 1.75.058.118.098.256.02.414-.079.158-.12.256-.237.393-.119.138-.25.308-.356.414-.118.118-.243.247-.105.483.137.234.608.998 1.303 1.62.894.8 1.644 1.047 1.877 1.163.234.116.37.098.508-.059.138-.158.59-.687.747-.92.158-.234.316-.197.533-.118.217.079 1.378.65 1.615.768.237.118.394.177.452.276.059.099.059.577-.253 1.456z"/>
            </svg>
            WhatsApp
          </a>

          {/* Telephone Button */}
          <a
            href="tel:+34666467884"
            className="booking-btn phone-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '52px',
              padding: '0 2rem',
              backgroundColor: '#ffffff',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '1rem',
              border: '1px solid rgba(15, 23, 42, 0.12)',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.03)',
              gap: '0.5rem',
              cursor: 'pointer'
            }}
          >
            <Phone size={20} style={{ color: 'var(--accent-color)' }} />
            666467884
          </a>
        </div>

      </div>

      <style>{`
        .price-card-custom {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .price-card-custom:hover {
          transform: translateY(-5px);
          border-color: var(--accent-color) !important;
          box-shadow: 0 15px 35px rgba(250, 150, 0, 0.06), 0 0 20px rgba(250, 150, 0, 0.02) !important;
        }
        /* Booking Buttons Hover and Transitions */
        .booking-btn {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .booking-btn:hover {
          transform: translateY(-3px);
        }
        .playtomic-btn:hover, .phone-btn:hover {
          border-color: var(--accent-color) !important;
          box-shadow: 0 10px 20px rgba(250, 150, 0, 0.08) !important;
        }
        .whatsapp-btn:hover {
          background-color: #1ebd59 !important;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4) !important;
        }
        @media (max-width: 992px) {
          .rates-grid-custom {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
        @media (max-width: 576px) {
          .price-card-custom {
            padding: 1.25rem 1.5rem !important;
          }
          .rates-dot-spacer {
            margin: 0 0.5rem !important;
          }
        }
        @media (max-width: 400px) {
          .price-card-custom {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.75rem !important;
          }
          .rates-dot-spacer {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
