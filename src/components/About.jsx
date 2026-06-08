import { Quote } from 'lucide-react';
import terraceImg from '../assets/carrousel/img1.jpeg';

export default function About() {
  return (
    <section id="club" className="section" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        
        {/* Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '5rem',
          alignItems: 'center'
        }} className="about-grid">
          
          {/* Visual Showcase (Terrace Image & Quote Overlay) */}
          <div style={{ position: 'relative', width: '100%' }} className="about-image-wrapper">
            {/* Background Accent Glow behind image */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '-15px',
              width: '100%',
              height: '100%',
              borderRadius: '24px',
              border: '2px dashed var(--accent-color)',
              opacity: 0.15,
              zIndex: 0
            }}></div>
            
            {/* Image Card */}
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(15, 23, 42, 0.08)',
              zIndex: 1
            }}>
              <img 
                src={terraceImg} 
                alt="Terraza y cafetería de SoloPadel Sevilla" 
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>

            {/* Overlapping Quote Box */}
            <div className="glass-card" style={{
              position: 'absolute',
              bottom: '-3.5rem',
              right: '-2rem',
              maxWidth: '380px',
              padding: '2rem',
              borderRadius: '16px',
              backgroundColor: '#f4f6f5', // light grey-beige as in screenshot
              border: '1px solid rgba(15, 23, 42, 0.05)',
              boxShadow: '0 15px 35px rgba(15, 23, 42, 0.06)',
              zIndex: 2,
              textAlign: 'left',
              display: 'flex',
              gap: '1.25rem',
              alignItems: 'flex-start'
            }} className="quote-box-mobile">
              
              {/* Quote Mark (Red) */}
              <div style={{
                color: '#e53935', // Red color from screenshot
                opacity: 0.9,
                flexShrink: 0,
                marginTop: '-0.25rem'
              }}>
                <Quote size={36} fill="#e53935" />
              </div>

              <div>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  fontStyle: 'italic',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                  marginBottom: '1rem'
                }}>
                  "El padel es más que un juego, es pasión, estrategia y diversión en cada punto."
                </p>
                <strong style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Solo Padel Sevilla
                </strong>
              </div>
            </div>
          </div>

          {/* About Text Details */}
          <div style={{ textAlign: 'left' }} className="about-text-column">
            <span style={{
              fontSize: '0.95rem',
              fontWeight: 700,
              color: 'var(--accent-color)', // Orange label
              textTransform: 'uppercase',
              letterSpacing: '2px',
              display: 'block',
              marginBottom: '1rem'
            }}>
              Acerca de Solo Padel
            </span>
            
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.15,
              marginBottom: '1.5rem',
              fontFamily: 'var(--font-heading)'
            }} className="about-title">
              Tu club de padel en Sevilla
            </h2>
            
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '1.25rem'
            }}>
              En <strong>Solo Padel Sevilla</strong>, somos mucho más que un club deportivo; somos el lugar donde el padel y el entretenimiento se unen para crear experiencias inolvidables.
            </p>

            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '1rem'
            }}>
              Contamos con <strong>7 modernas pistas de cristal</strong>, bar cafetería y una gran terraza de verano, ideales para disfrutar del mejor ambiente.
            </p>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid {
            gridTemplateColumns: 1fr !important;
            gap: 5rem !important;
          }
          .about-text-column {
            order: 1 !important;
          }
          .about-image-wrapper {
            order: 2 !important;
            max-width: 500px;
            margin: 0 auto;
          }
          .quote-box-mobile {
            position: relative !important;
            bottom: 0 !important;
            right: 0 !important;
            margin-top: 1.5rem !important;
            max-width: 100% !important;
          }
        }
        @media (max-width: 768px) {
          .about-title {
            font-size: 2.2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
