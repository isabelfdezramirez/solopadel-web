import { Calendar, MapPin, Award, Clock, Star, ShieldCheck } from 'lucide-react';

export default function Hero() {
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

  const stats = [
    { icon: <Award size={24} className="stat-icon" />, title: '7 Pistas', desc: 'Cristal exterior de alta calidad' },
    { icon: <Clock size={24} className="stat-icon" />, title: '8:00 a 24:00', desc: 'Horario ininterrumpido' },
    { icon: <Star size={24} className="stat-icon" />, title: 'Gran Terraza', desc: 'Cafetería & ambiente social' },
    { icon: <ShieldCheck size={24} className="stat-icon" />, title: 'Parking Gratis', desc: 'Acceso cómodo y vigilado' },
  ];

  return (
    <section id="inicio" style={{
      position: 'relative',
      paddingTop: 'calc(var(--header-height) + 4rem)',
      paddingBottom: '6rem',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '85vh'
    }}>
      {/* Decorative Blur Spheres */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(163,230,53,0.08) 0%, transparent 70%)',
        filter: 'blur(50px)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(163,230,53,0.05) 0%, transparent 70%)',
        filter: 'blur(50px)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '4rem',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Hero Content */}
          <div className="animate-fade-in" style={{ textAlign: 'left' }}>
            <span className="badge" style={{ marginBottom: '1.5rem' }}>
              El Club de Pádel de Alcalá de Guadaíra
            </span>
            
            <h1 style={{
              fontSize: '3.8rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              background: 'linear-gradient(to right, #ffffff, #e2e8f0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }} className="hero-title">
              PURA PASIÓN <br />
              POR EL <span style={{ color: 'var(--accent-color)', WebkitTextFillColor: 'initial' }}>PÁDEL</span>
            </h1>
            
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              marginBottom: '2.5rem',
              maxWidth: '540px',
              lineHeight: 1.6
            }} className="hero-subtitle">
              Disfruta de nuestras instalaciones premium con 7 pistas de cristal de alta calidad, tienda especializada, bar cafetería y el mejor ambiente social de Alcalá de Guadaíra.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '3rem'
            }}>
              <a
                href="#reservar"
                onClick={(e) => handleScrollTo(e, '#reservar')}
                className="btn btn-primary"
                style={{ fontSize: '1.05rem', padding: '0.9rem 2rem' }}
              >
                <Calendar size={18} />
                Reservar Pista
              </a>
              <a
                href="#contacto"
                onClick={(e) => handleScrollTo(e, '#contacto')}
                className="btn btn-secondary"
                style={{ fontSize: '1.05rem', padding: '0.9rem 2rem' }}
              >
                <MapPin size={18} />
                Ver Ubicación
              </a>
            </div>
          </div>

          {/* Decorative Padel Visual (Padel racket representation & neon elements) */}
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }} className="hero-image-container">
            <div style={{
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(163,230,53,0.12) 0%, rgba(15,19,31,0.6) 80%)',
              border: '1px solid rgba(163, 230, 53, 0.2)',
              boxShadow: '0 0 40px rgba(163, 230, 53, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }} className="glow-circle">
              {/* Dynamic Padel Racket Shape Graphic */}
              <div style={{
                width: '120px',
                height: '160px',
                borderRadius: '80px 80px 10px 10px',
                border: '6px solid var(--accent-color)',
                backgroundColor: 'rgba(7, 9, 14, 0.8)',
                boxShadow: 'inset 0 0 20px rgba(163, 230, 53, 0.3)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
              }}>
                {/* Grip Handle */}
                <div style={{
                  position: 'absolute',
                  bottom: '-60px',
                  width: '20px',
                  height: '60px',
                  backgroundColor: '#ffffff',
                  borderRadius: '0 0 4px 4px',
                  border: '2px solid var(--bg-primary)'
                }}></div>
                {/* Pattern dots (racket face holes) */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 12px)',
                  gap: '8px',
                  opacity: 0.7
                }}>
                  {[...Array(12)].map((_, i) => (
                    <div key={i} style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--text-secondary)'
                    }}></div>
                  ))}
                </div>
              </div>
              
              {/* Floating ball */}
              <div style={{
                position: 'absolute',
                top: '40px',
                right: '40px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-color)',
                boxShadow: '0 0 20px var(--accent-color)',
                border: '2px solid var(--bg-primary)',
                animation: 'bounce 3s infinite ease-in-out'
              }}></div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          marginTop: '4rem'
        }} className="stats-grid">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                textAlign: 'left'
              }}
            >
              <div style={{
                backgroundColor: 'rgba(163, 230, 53, 0.1)',
                padding: '0.75rem',
                borderRadius: '12px',
                color: 'var(--accent-color)',
                border: '1px solid rgba(163, 230, 53, 0.2)'
              }}>
                {stat.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.15rem' }}>{stat.title}</h4>
                <p style={{ fontSize: '0.85rem', margin: 0 }}>{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @media (max-width: 992px) {
          .hero-grid {
            gridTemplateColumns: 1fr !important;
            gap: 2.5rem !important;
            textAlign: center !important;
          }
          .hero-grid div {
            text-align: center !important;
          }
          .hero-subtitle {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-title {
            font-size: 3rem !important;
          }
          .hero-image-container {
            order: -1 !important;
          }
        }
      `}</style>
    </section>
  );
}
