import { useState } from 'react';
import { ZoomIn, X, PartyPopper, Trophy, Flame, Utensils, MessageCircle } from 'lucide-react';
import eventosImg from '../assets/eventos.jpg';

export default function Events() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const features = [
    {
      icon: <PartyPopper size={20} />,
      title: 'Cumpleaños y Comuniones',
      desc: 'El lugar perfecto para que los más jóvenes celebren su día especial jugando al padel.',
      color: 'var(--accent-color)'
    },
    {
      icon: <Trophy size={20} />,
      title: 'Torneos Personalizados',
      desc: 'Organizamos competiciones a medida para grupos de amigos o eventos de empresa.',
      color: 'var(--action-color)'
    },
    {
      icon: <Flame size={20} />,
      title: 'Alquiler de BBQ',
      desc: 'Disponemos de barbacoa para que organices tu comida tras las pistas.',
      color: 'var(--accent-color)'
    },
    {
      icon: <Utensils size={20} />,
      title: 'Servicio de Paella',
      desc: 'Alquila el espacio para cocinar tu paella o, si lo prefieres, ¡nosotros te la hacemos!',
      color: 'var(--action-color)'
    }
  ];

  return (
    <section id="eventos" className="section" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }} className="events-grid">
          
          {/* Left Column: Text & Features */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <span className="badge" style={{ alignSelf: 'flex-start' }}>Eventos</span>
            <h2 style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>Celebra tus Eventos con Nosotros</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              En <strong>Solo Padel</strong> puedes celebrar tus eventos (Primeras Comuniones, Cumpleaños, Torneos o reuniones con amigos) con un Torneo y luego disfrutar de una Bbq o Paella. <strong>¡Sería el combo perfecto!</strong>
            </p>
            
            {/* Features Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
              margin: '1rem 0'
            }} className="events-features-grid">
              {features.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div style={{
                    backgroundColor: item.color === 'var(--accent-color)' ? 'var(--accent-glow)' : 'var(--action-glow)',
                    color: item.color,
                    padding: '0.5rem',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/34666467884?text=Hola!%20Me%20gustar%C3%ADa%20consultar%20para%20organizar%20un%20evento%20en%20Solo%20Padel."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ gap: '0.5rem' }}
              >
                <MessageCircle size={20} />
                Consultar por WhatsApp
              </a>
              <a
                href="tel:+34666467884"
                className="btn btn-outline"
                style={{ fontWeight: 600 }}
              >
                Llamar ahora: 666 46 78 84
              </a>
            </div>
          </div>

          {/* Right Column: Image Poster */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div 
              className="events-poster-wrapper"
              onClick={() => setLightboxOpen(true)}
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(15, 23, 42, 0.08)',
                border: '1px solid var(--border-color)',
                cursor: 'pointer',
                maxWidth: '450px',
                width: '100%'
              }}
            >
              <img 
                src={eventosImg} 
                alt="Alquiler de BBQ y Paella en SoloPadel" 
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="events-img"
              />
              
              {/* Hover overlay with zoom icon */}
              <div 
                className="events-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(15, 23, 42, 0.4)',
                  opacity: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'opacity 0.3s ease',
                  zIndex: 2
                }}
              >
                <div style={{
                  backgroundColor: '#ffffff',
                  padding: '1rem',
                  borderRadius: '50%',
                  color: 'var(--text-primary)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
                  transform: 'translateY(10px)',
                  transition: 'transform 0.3s ease'
                }} className="events-zoom-btn">
                  <ZoomIn size={24} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(7, 9, 14, 0.95)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 3000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            animation: 'fadeIn var(--transition-fast) forwards'
          }}
          onClick={() => setLightboxOpen(false)}
        >
          <button 
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 3100,
              transition: 'background var(--transition-fast)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
          >
            <X size={20} />
          </button>

          <img 
            src={eventosImg} 
            alt="Eventos y BBQ Completo" 
            style={{
              maxWidth: '95%',
              maxHeight: '90vh',
              borderRadius: '12px',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
              objectFit: 'contain'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style>{`
        .events-poster-wrapper:hover .events-img {
          transform: scale(1.04);
        }
        .events-poster-wrapper:hover .events-overlay {
          opacity: 1;
        }
        .events-poster-wrapper:hover .events-zoom-btn {
          transform: translateY(0);
        }
        @media (max-width: 768px) {
          .events-grid {
            gap: 2.5rem !important;
          }
          .events-features-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
