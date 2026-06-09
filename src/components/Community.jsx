import { useState } from 'react';
import { ZoomIn, X, MessageCircle, ShieldCheck } from 'lucide-react';
import comunidadImg from '../assets/comunidad.jpg';

export default function Community() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section id="comunidad" className="section" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }} className="community-grid">
          
          {/* Left Column: Copy & Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <span className="badge" style={{ alignSelf: 'flex-start' }}>Comunidad</span>
            <h2 style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>Únete a Nuestra Comunidad</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              Conéctate al instante con otros jugadores del club. Únete a nuestro grupo de WhatsApp gestionado por <strong>Matches Padel Solutions</strong> y encuentra partidos de tu nivel Playtomic fácilmente.
            </p>
            
            {/* Features List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', margin: '1rem 0' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  backgroundColor: 'var(--accent-glow)',
                  color: 'var(--accent-color)',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>Partidos por Niveles</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                    Grupos específicos organizados según tu nivel de juego de Playtomic.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  backgroundColor: 'var(--action-glow)',
                  color: 'var(--action-color)',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>Gestión Profesional</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                    Coordinación e integración oficial a través de la plataforma de Matches Padel.
                  </p>
                </div>
              </div>
            </div>

            {/* Instructions Callout */}
            <div style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px dashed var(--border-color)',
              borderRadius: '16px',
              padding: '1.5rem',
              position: 'relative'
            }}>
              <h5 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                ¿Cómo unirte?
              </h5>
              <ol style={{ paddingLeft: '1.25rem', fontSize: '0.95rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Haz clic en el folleto de la derecha para ampliarlo.</li>
                <li>Escanea el código QR con la cámara de tu móvil.</li>
                <li>Selecciona el grupo de WhatsApp que corresponda a tu nivel de Playtomic.</li>
              </ol>
            </div>
          </div>

          {/* Right Column: Interactive Poster */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div 
              className="community-poster-wrapper"
              onClick={() => setLightboxOpen(true)}
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(15, 23, 42, 0.08)',
                border: '1px solid var(--border-color)',
                cursor: 'pointer',
                maxWidth: '420px',
                width: '100%'
              }}
            >
              <img 
                src={comunidadImg} 
                alt="Únete a nuestra comunidad SoloPadel" 
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="community-img"
              />
              
              {/* Hover overlay with zoom icon */}
              <div 
                className="community-overlay"
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
                }} className="zoom-btn">
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
            src={comunidadImg} 
            alt="Comunidad QR Completo" 
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
        .community-poster-wrapper:hover .community-img {
          transform: scale(1.04);
        }
        .community-poster-wrapper:hover .community-overlay {
          opacity: 1;
        }
        .community-poster-wrapper:hover .zoom-btn {
          transform: translateY(0);
        }
        @media (max-width: 768px) {
          .community-grid {
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
