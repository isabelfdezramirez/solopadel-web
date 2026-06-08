import { Shield, Coffee, ShoppingBag, ShowerHead } from 'lucide-react';
import courtImage from '../assets/padel_court.png';

export default function About() {
  const facilities = [
    {
      icon: <Shield size={22} />,
      title: '7 Pistas de Cristal',
      desc: 'Cristal templado homologado y césped monofilamento que reduce el impacto en las articulaciones. Iluminación LED premium.'
    },
    {
      icon: <Coffee size={22} />,
      title: 'Cafetería y Terraza',
      desc: 'Nuestra famosa terraza de verano para relajarte y tomar algo antes o después del partido. Ideal para eventos sociales.'
    },
    {
      icon: <ShoppingBag size={22} />,
      title: 'Tienda Especializada',
      desc: 'Venta de material oficial, ropa de club y accesorios. También disponemos de servicio de alquiler de palas de test.'
    },
    {
      icon: <ShowerHead size={22} />,
      title: 'Vestuarios Completos',
      desc: 'Instalaciones equipadas con duchas de agua caliente, taquillas de seguridad y climatización para tu total comodidad.'
    }
  ];

  return (
    <section id="club" className="section" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Instalaciones</span>
          <h2 style={{ marginTop: '0.5rem' }}>El Club SoloPadel</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Ubicado estratégicamente en Alcalá de Guadaíra, ofrecemos un espacio diseñado al detalle para que tu experiencia deportiva sea inmejorable.
          </p>
        </div>

        {/* Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }} className="about-grid">
          
          {/* Facility Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {facilities.map((fac, idx) => (
              <div key={idx} style={{
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  backgroundColor: 'rgba(163, 230, 53, 0.1)',
                  color: 'var(--accent-color)',
                  padding: '0.75rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(163, 230, 53, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {fac.icon}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{fac.title}</h3>
                  <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--text-secondary)' }}>{fac.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Showcase */}
          <div style={{ position: 'relative' }} className="about-image-wrapper">
            {/* Background Glow */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '105%',
              height: '105%',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, var(--accent-color) 0%, transparent 100%)',
              opacity: 0.15,
              filter: 'blur(15px)',
              zIndex: 0
            }}></div>
            
            {/* Image Card */}
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              border: '1px solid var(--border-color)',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              zIndex: 1
            }}>
              <img 
                src={courtImage} 
                alt="Pista de Pádel de Cristal en SoloPadel" 
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform var(--transition-slow)'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.03)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
              {/* Image Banner */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.5rem',
                background: 'linear-gradient(to top, rgba(7, 9, 14, 0.95), transparent)',
                textAlign: 'left'
              }}>
                <span className="badge" style={{ marginBottom: '0.5rem' }}>Pista Central</span>
                <p style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.05rem', margin: 0 }}>
                  Iluminación LED optimizada y paredes de cristal templado de seguridad
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid {
            gridTemplateColumns: 1fr !important;
            gap: 3rem !important;
          }
          .about-image-wrapper {
            max-width: 500px;
            margin: 0 auto;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
