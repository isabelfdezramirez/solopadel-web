import { useState } from 'react';
import { ZoomIn, X, Clock, Sun, Moon, Sparkles, Calendar, Info } from 'lucide-react';
import tarifasImg from '../assets/tarifas.png';

export default function Rates() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const rateCards = [
    {
      title: 'Lunes a Viernes (Mañanas)',
      time: '9:00 a 14:00',
      price: '3€',
      icon: <Sun size={28} />,
      iconColor: '#f59e0b',
      iconBg: 'rgba(245, 158, 11, 0.1)',
      desc: 'Comienza el día con la tarifa más económica de nuestro club.'
    },
    {
      title: 'Lunes a Jueves (Tardes y Noches)',
      time: 'Hasta las 19:00 y desde las 21:00',
      price: '4,50€',
      icon: <Moon size={28} />,
      iconColor: '#6366f1',
      iconBg: 'rgba(99, 102, 241, 0.1)',
      desc: 'Ideal para jugar después del trabajo o en horario nocturno valle.'
    },
    {
      title: 'Lunes a Jueves (Hora Punta)',
      time: 'De 19:00 a 21:00',
      price: '5€',
      icon: <Sparkles size={28} />,
      iconColor: 'var(--accent-color)',
      iconBg: 'var(--accent-glow)',
      desc: 'El horario de mayor actividad con el mejor ambiente en las pistas.'
    },
    {
      title: 'Fines de Semana y Festivos',
      time: 'Viernes tarde, Sábados, Domingos y Festivos',
      price: '4,50€',
      icon: <Calendar size={28} />,
      iconColor: '#10b981',
      iconBg: 'rgba(16, 185, 129, 0.1)',
      desc: 'Disfruta de tu tiempo libre el fin de semana completo al mejor precio.'
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }} className="rates-grid">
          {rateCards.map((card, idx) => (
            <div
              key={idx}
              className="price-card"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-color)',
                borderRadius: '24px',
                padding: '2rem',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.02)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div>
                {/* Card top badge & icon */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{
                    color: card.iconColor,
                    backgroundColor: card.iconBg,
                    padding: '0.75rem',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {card.icon}
                  </div>
                  <div style={{
                    fontSize: '2.25rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-heading)',
                    display: 'flex',
                    alignItems: 'baseline'
                  }}>
                    {card.price}
                  </div>
                </div>

                {/* Title & Time */}
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  {card.title}
                </h4>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--accent-dark)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}>
                  <Clock size={15} style={{ flexShrink: 0 }} />
                  <span>{card.time}</span>
                </div>
              </div>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0, marginTop: '0.5rem' }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* View Original Flyer Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
          <button
            onClick={() => setLightboxOpen(true)}
            className="btn btn-outline"
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '12px',
              fontSize: '0.95rem',
              gap: '0.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(15, 23, 42, 0.12)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
            }}
          >
            <ZoomIn size={18} />
            Ver Cartel de Tarifas Original
          </button>
        </div>

        {/* Additional Info Callouts */}
        <div style={{
          maxWidth: '1000px',
          margin: '3rem auto 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {/* Main Cancellation policy */}
          <div style={{
            backgroundColor: 'rgba(250, 150, 0, 0.03)',
            border: '1px solid rgba(250, 150, 0, 0.15)',
            borderRadius: '16px',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
            fontSize: '0.95rem',
            color: 'var(--text-secondary)',
            textAlign: 'left'
          }}>
            <Info size={20} style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '0.15rem' }} />
            <div>
              <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-primary)' }}>Política de Reservas y Cancelación</p>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Cancelación con antelación mínima de <strong>24 horas</strong>. El club podrá modificar el número de pistas para evitar espacios libres entre reservas.
              </p>
            </div>
          </div>

          {/* Booking Info Callout */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.95rem',
            color: 'var(--text-secondary)',
            textAlign: 'left'
          }}>
            <Clock size={20} style={{ color: 'var(--action-color)', flexShrink: 0 }} />
            <span>
              <strong>Cómo reservar:</strong> Puedes realizar tus reservas cómodamente a través de la app de <strong>Playtomic</strong>, o de manera presencial, por teléfono y WhatsApp llamando al <strong>666 46 78 84</strong>.
            </span>
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
        .price-card {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .price-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-color) !important;
          box-shadow: 0 15px 35px rgba(250, 150, 0, 0.05), 0 0 20px rgba(250, 150, 0, 0.02) !important;
        }
      `}</style>
    </section>
  );
}
