import { Clock } from 'lucide-react';
import img1 from '../assets/carrousel/img1.jpeg';
import img2 from '../assets/galeria2.jpg';
import img3 from '../assets/galeria1.jpg';
import img4 from '../assets/alquiler-pistas_circle.jpg';

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
      subtitle: 'HASTA LAS 19:00 Y A PARTIR DE LAS 21:00',
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
      subtitle: 'DE 19:00 A 21:00',
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
