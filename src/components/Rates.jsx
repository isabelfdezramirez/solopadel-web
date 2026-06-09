import { useState } from 'react';
import { ZoomIn, X, Clock } from 'lucide-react';
import tarifasImg from '../assets/tarifas.png';

export default function Rates() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

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

        {/* Rates Poster Container */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <div 
            className="rates-poster-wrapper"
            onClick={() => setLightboxOpen(true)}
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(15, 23, 42, 0.06)',
              border: '1px solid var(--border-color)',
              cursor: 'pointer',
              maxWidth: '1150px',
              width: '100%',
              backgroundColor: '#f8fbf9'
            }}
          >
            <img 
              src={tarifasImg} 
              alt="Tarifas de Alquiler de Pistas SoloPadel" 
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className="rates-img"
            />
            
            {/* Hover overlay with zoom icon */}
            <div 
              className="rates-overlay"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(15, 23, 42, 0.3)',
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

        {/* Additional Info Callout */}
        <div style={{
          maxWidth: '1150px',
          margin: '2.5rem auto 0',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '16px',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '0.95rem',
          color: 'var(--text-secondary)'
        }}>
          <Clock size={20} style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
          <span>
            <strong>Nota de Reserva:</strong> Puedes realizar tus reservas cómodamente a través de la app de <strong>Playtomic</strong>, o de manera presencial, por teléfono y WhatsApp llamando al <strong>666 46 78 84</strong>.
          </span>
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
            src={tarifasImg} 
            alt="Tarifas Completo" 
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
        .rates-poster-wrapper:hover .rates-img {
          transform: scale(1.02);
        }
        .rates-poster-wrapper:hover .rates-overlay {
          opacity: 1;
        }
        .rates-poster-wrapper:hover .zoom-btn {
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
