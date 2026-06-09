// Import new specific images for services
import alquilerImg from '../assets/alquiler-pistas_circle.jpg';
import tournamentsImg from '../assets/tournaments.jpg';
import storeImg from '../assets/store.jpg';
import terraceImg from '../assets/terrace.jpg';
import schoolLogo from '../assets/escuela_logo_real.jpg';
import logo1x1 from '../assets/LogoSolopadel_1x1.png';

export default function Services() {
  const servicesData = [
    {
      type: 'image',
      src: alquilerImg,
      title: 'Alquiler de pistas',
      desc: 'Disponemos de 7 pistas de cristal'
    },
    {
      type: 'custom-whatsapp',
      title: 'Organización de partidos',
      desc: 'Unete a nuestros grupos de whatsApp por niveles. Mas información contactar con el club en el 666467884'
    },
    {
      type: 'image',
      src: tournamentsImg,
      title: 'Torneos y Eventos',
      desc: 'Organizamos todo tipo de eventos en los espacios del club.'
    },
    {
      type: 'image',
      src: storeImg,
      title: 'Tienda',
      desc: 'Asesoramiento y venta de material deportivo Drop Shot.'
    },
    {
      type: 'image',
      src: schoolLogo,
      title: 'Escuela de padel',
      desc: 'Clases de Padel para todos los niveles y edades.'
    },
    {
      type: 'image',
      src: terraceImg,
      title: 'Terraza',
      desc: 'Disfruta de tu tercer tiempo en nuestra terraza de verano.'
    }
  ];

  return (
    <section id="servicios" className="section" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span style={{
            fontSize: '0.95rem',
            fontWeight: 700,
            color: 'var(--accent-color)', // Orange label
            textTransform: 'uppercase',
            letterSpacing: '2px',
            display: 'block',
            marginBottom: '0.75rem'
          }}>
            Servicios
          </span>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-heading)',
            marginBottom: '0.75rem'
          }}>
            Descubre todo lo que tenemos para ti
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Queremos que disfrutes al máximo tu experiencia en nuestro Club.
          </p>
        </div>

        {/* Circular Cards Grid */}
        <div className="services-circular-grid">
          
          {servicesData.map((service, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                maxWidth: '330px',
                animationDelay: `${idx * 150}ms`
              }}
              className="service-circle-card"
            >
              
              {/* Circle Container */}
              <div 
                style={{
                  width: '310px',
                  height: '310px',
                  borderRadius: '50%',
                  border: '6px solid #ffffff',
                  boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                className="service-circle"
              >
                {service.type === 'image' && (
                  <img
                    src={service.src}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: idx === 4 ? 'contain' : 'cover',
                      transition: 'transform var(--transition-normal)',
                      transform: idx === 4 ? 'scale(0.85)' : idx === 0 ? 'scale(1.38)' : 'scale(1.18)',
                      backgroundColor: idx === 4 ? '#ffffff' : 'transparent'
                    }}
                    className="service-circle-img"
                  />
                )}

                {/* Custom WhatsApp Group Logo */}
                {service.type === 'custom-whatsapp' && (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#00b5ec', // Cyan background
                    color: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2rem',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    <strong style={{ fontSize: '1.15rem', letterSpacing: '1px', display: 'block', marginBottom: '0.25rem' }}>
                      GRUPOS
                    </strong>
                    <strong style={{ fontSize: '1.15rem', letterSpacing: '1px', display: 'block', marginBottom: '0.5rem' }}>
                      WHATSAPP
                    </strong>
                    
                    {/* Real 1x1 Padel Logo integrated inside circle */}
                    <img 
                      src={logo1x1} 
                      alt="SoloPadel Logo" 
                      style={{ 
                        height: '64px', 
                        width: '64px', 
                        borderRadius: '50%', 
                        marginBottom: '0.5rem',
                        border: '1.5px solid #ffffff',
                        backgroundColor: '#ffffff'
                      }} 
                    />

                    <span style={{ fontSize: '1.15rem', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>
                      ¿Te apuntas?
                    </span>
                    <strong style={{ fontSize: '1.35rem', fontWeight: 800 }}>
                      666467884
                    </strong>
                  </div>
                )}
              </div>

              {/* Card Label (Red text from screenshots) */}
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#e53935', // Red color from screenshots
                marginTop: '1.5rem',
                marginBottom: '0.5rem',
                fontFamily: 'var(--font-heading)'
              }}>
                {service.title}
              </h3>

              {/* Card Description */}
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.4,
                margin: 0,
                maxWidth: '240px'
              }}>
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

      <style>{`
        /* Staggered rolling entrance animation */
        @keyframes rollIn {
          0% {
            opacity: 0;
            transform: translateX(-150px) rotate(-120deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotate(0deg);
          }
        }
        
        .service-circle-card {
          opacity: 0;
          animation: rollIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        /* Grid Layout (3 columns on desktop) */
        .services-circular-grid {
          display: grid !important;
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 3.5rem 2rem !important;
          justify-items: center !important;
          margin-top: 3.5rem !important;
          width: 100% !important;
        }
        
        @media (max-width: 992px) {
          .services-circular-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 3rem 1.5rem !important;
          }
        }
        
        @media (max-width: 650px) {
          .services-circular-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem 1rem !important;
          }
        }

        .service-circle {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .service-circle:hover {
          transform: scale(1.05);
          border-color: var(--accent-color) !important;
          box-shadow: 0 15px 35px rgba(250, 150, 0, 0.2) !important;
        }
        
        /* Individual card hover zooms */
        .service-circle-card:nth-child(1):hover .service-circle-img {
          transform: scale(1.48) !important;
        }
        .service-circle-card:nth-child(3):hover .service-circle-img {
          transform: scale(1.28) !important;
        }
        .service-circle-card:nth-child(4):hover .service-circle-img {
          transform: scale(1.28) !important;
        }
        .service-circle-card:nth-child(5):hover .service-circle-img {
          transform: scale(0.95) !important;
        }
        .service-circle-card:nth-child(6):hover .service-circle-img {
          transform: scale(1.28) !important;
        }
      `}</style>
    </section>
  );
}
