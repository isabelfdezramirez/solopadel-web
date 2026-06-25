import { Award, Clock, Star, ShieldCheck } from 'lucide-react';

// Import hero image
import img1 from '../assets/carrousel/img1.jpeg';

export default function Hero() {
  const handleScrollTo = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
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
    }
  };

  const stats = [
    { icon: <Award size={24} />, title: '7 Pistas', desc: 'Cristal exterior homologadas' },
    { icon: <Clock size={24} />, title: '07:30 a 01:30', desc: 'Abierto 365 días al año' },
    { icon: <Star size={24} />, title: 'Cafetería', desc: 'Gran terraza exterior con vistas' },
    { icon: <ShieldCheck size={24} />, title: 'Parking Gratis', desc: 'Privado y de fácil acceso' }
  ];

  return (
    <section id="inicio" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Hero Container */}
      <div style={{
        position: 'relative',
        height: '480px',
        backgroundColor: '#07090e',
        backgroundImage: `url(${img1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        display: 'flex',
        alignItems: 'center',
        zIndex: 1
      }}>
        {/* Slide Text Content Overlay */}
        <div className="container" style={{ textAlign: 'left', width: '100%' }}>
          <div style={{
            width: '100%',
            maxWidth: '850px',
            backgroundColor: 'rgba(15, 23, 42, 0.25)', // More transparent card
            padding: '2.5rem',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
            animation: 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }} className="hero-text-card">
            {/* Category label */}
            <span style={{
              fontSize: '0.95rem',
              fontWeight: 700,
              color: 'var(--accent-color)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              display: 'block',
              marginBottom: '0.75rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
            }}>
              Solo Padel
            </span>
            
            {/* Main Title */}
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#ffffff',
              marginBottom: '1rem',
              fontFamily: 'var(--font-heading)',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
              whiteSpace: 'nowrap'
            }} className="slide-title">
              Tu club 100% Padel en Sevilla
            </h1>
            
            {/* Description Paragraph */}
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.95)',
              lineHeight: 1.6,
              marginBottom: '2rem',
              maxWidth: '100%',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.5)'
            }} className="slide-desc">
              Disfruta de las mejores instalaciones y el mejor ambiente social en Alcalá de Guadaíra.
            </p>
            
            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="#tarifas"
                onClick={(e) => handleScrollTo(e, '#tarifas')}
                className="btn btn-primary"
                style={{
                  padding: '0.85rem 1.75rem',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  gap: '0.5rem'
                }}
              >
                Ver Tarifas
              </a>
              <a
                href="#galeria"
                onClick={(e) => handleScrollTo(e, '#galeria')}
                className="btn btn-secondary"
                style={{
                  padding: '0.85rem 1.75rem',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)'
                }}
              >
                Ver Galería
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid Under Hero */}
      <div style={{
        backgroundColor: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-color)',
        padding: '3rem 0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem'
          }}>
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="stat-card"
              >
                <div className="stat-icon-wrapper">
                  {stat.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                    {stat.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', margin: 0, color: 'var(--text-secondary)', fontWeight: 500, lineHeight: 1.4 }}>
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide transition animations & Stat Card styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Premium Stat Card Styling */
        .stat-card {
          background: rgba(255, 255, 255, 0.7) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
          border: 1px solid rgba(15, 23, 42, 0.05) !important;
          border-radius: 20px !important;
          padding: 1.5rem 1.25rem !important;
          display: flex !important;
          align-items: center !important;
          gap: 1.25rem !important;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          box-shadow: 0 8px 30px rgba(15, 23, 42, 0.03) !important;
          text-align: left !important;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.95) !important;
          border-color: rgba(250, 150, 0, 0.35) !important;
          box-shadow: 0 15px 35px rgba(15, 23, 42, 0.08), 0 0 20px rgba(250, 150, 0, 0.05) !important;
        }
        
        .stat-icon-wrapper {
          background: linear-gradient(135deg, rgba(250, 150, 0, 0.06) 0%, rgba(250, 150, 0, 0.12) 100%);
          color: var(--accent-dark);
          border: 1px solid rgba(250, 150, 0, 0.2);
          padding: 0.75rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .stat-card:hover .stat-icon-wrapper {
          transform: scale(1.1) rotate(5deg);
          background: linear-gradient(135deg, rgba(250, 150, 0, 0.12) 0%, rgba(250, 150, 0, 0.22) 100%);
          border-color: rgba(250, 150, 0, 0.35);
        }

        @media (max-width: 768px) {
          .hero-text-card {
            padding: 1.75rem 1.25rem !important;
            border-radius: 16px !important;
            margin: 0;
            max-width: 100% !important;
          }
          .slide-title {
            font-size: 2.2rem !important;
            white-space: normal !important;
          }
          .slide-desc {
            font-size: 0.95rem !important;
            margin-bottom: 1.5rem !important;
          }
          .carousel-arrow {
            display: none !important;
          }
          .stat-card {
            padding: 1.25rem 1rem !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
