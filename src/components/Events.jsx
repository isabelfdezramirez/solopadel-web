import { useState } from 'react';
import { Calendar, Users, Trophy, Award, CheckCircle, X, ArrowDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import trophiesImg from '../assets/carrousel/img3.jpeg';

export default function Events() {
  const eventsData = [
    {
      id: 1,
      title: 'Americana Nocturna',
      type: 'Social Mixer',
      date: 'Viernes, 19 de Junio',
      time: '20:00 - 22:30',
      level: 'Nivel 2.5 - 3.5',
      spots: '16 jugadores máx.',
      description: 'Partidos rápidos en formato rey de la pista. Incluye cena (pizza y cerveza/refresco) al finalizar.',
      price: '12€'
    },
    {
      id: 2,
      title: 'Torneo Exprés de Verano',
      type: 'Competición',
      date: 'Sábado, 27 de Junio',
      time: '09:00 - 14:00',
      level: 'Categorías Masc B / Fem B',
      spots: '12 parejas por cat.',
      description: 'Formato liguilla + fase eliminatoria. Welcome pack oficial y grandes premios para campeones y subcampeones.',
      price: '20€ / persona'
    },
    {
      id: 3,
      title: 'Clinic Técnico: Bandeja & Víbora',
      type: 'Entrenamiento',
      date: 'Miércoles, 24 de Junio',
      time: '19:00 - 20:30',
      level: 'Nivel Iniciación / Medio',
      spots: '4 jugadores por pista',
      description: 'Clase táctica especializada y grabación en vídeo para corregir postura y perfeccionar los golpes aéreos.',
      price: '18€'
    }
  ];

  const [activeEvent, setActiveEvent] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', level: 'medio' });
  const [registeredList, setRegisteredList] = useState([]);

  const handleOpenRegister = (event) => {
    setActiveEvent(event);
  };

  const handleCloseRegister = () => {
    setActiveEvent(null);
    setFormData({ name: '', phone: '', level: 'medio' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setRegisteredList(prev => [...prev, {
      eventId: activeEvent.id,
      name: formData.name,
      time: new Date().toLocaleTimeString()
    }]);

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#FA9600', '#ffffff']
    });

    handleCloseRegister();
  };

  const isPlayerRegistered = (eventId) => {
    return registeredList.some(reg => reg.eventId === eventId);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
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

  return (
    <section id="eventos" className="section" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        
        {/* Banner Section (Trophies Image & Competition Title - Matching Screenshot 3 Bottom) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
          gap: '5rem',
          alignItems: 'center',
          marginBottom: '8rem'
        }} className="events-banner-grid">
          
          {/* Left Side: Trophies Photo */}
          <div style={{ position: 'relative' }} className="events-banner-image-wrapper">
            <div style={{
              position: 'absolute',
              top: '15px',
              right: '-15px',
              width: '100%',
              height: '100%',
              borderRadius: '24px',
              border: '2px dashed var(--accent-color)',
              opacity: 0.15,
              zIndex: 0
            }}></div>
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(15, 23, 42, 0.08)',
              zIndex: 1
            }}>
              <img 
                src={trophiesImg} 
                alt="Trofeos de Competición en SoloPadel Sevilla" 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </div>
          </div>

          {/* Right Side: Text details */}
          <div style={{ textAlign: 'left' }} className="events-banner-text-column">
            <span style={{
              fontSize: '0.95rem',
              fontWeight: 700,
              color: 'var(--accent-color)', // Orange label
              textTransform: 'uppercase',
              letterSpacing: '2px',
              display: 'block',
              marginBottom: '1rem'
            }}>
              Compite y disfruta con nuestros torneos
            </span>
            
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.15,
              marginBottom: '1.5rem',
              fontFamily: 'var(--font-heading)'
            }} className="events-banner-title">
              Vive la emoción de la competición en Solo Padel Sevilla
            </h2>
            
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '2rem'
            }}>
              Sumérgete en el mundo del padel y experimenta la adrenalina de cada punto en <strong>Solo Padel Sevilla</strong>. Nuestro club está diseñado para los amantes del deporte, organizando torneos express dinámicos, americanas por niveles los fines de semana y clinics técnicos con profesionales que te ayudarán a perfeccionar tu juego y táctica.
            </p>

            <button
              onClick={(e) => scrollToSection(e, '#upcoming-events')}
              className="btn btn-primary"
              style={{ padding: '0.85rem 1.75rem', gap: '0.5rem', borderRadius: '8px' }}
            >
              Ver torneos activos
              <ArrowDown size={16} />
            </button>
          </div>

        </div>

        {/* Anchor point for scrolling */}
        <div id="upcoming-events" style={{ scrollMarginTop: '100px' }}></div>

        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Comunidad</span>
          <h2>Próximos Eventos y Actividades</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Únete a nuestras actividades grupales, regístrate en las americanas abiertas y vive la experiencia SoloPadel.
          </p>
        </div>

        {/* Events Layout Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          position: 'relative'
        }}>
          {eventsData.map((ev) => (
            <div key={ev.id} className="glass-card" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'stretch',
              textAlign: 'left',
              padding: '2rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              
              {/* Event Type Badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span className="badge" style={{ backgroundColor: 'rgba(15,23,42,0.05)', color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}>
                  {ev.type}
                </span>
                <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--accent-dark)' }}>
                  {ev.price}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                  {ev.title}
                </h3>
                
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  {ev.description}
                </p>

                {/* Details list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                    <Calendar size={16} style={{ color: 'var(--accent-dark)' }} />
                    <span><strong>Fecha:</strong> {ev.date} ({ev.time})</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                    <Users size={16} style={{ color: 'var(--accent-dark)' }} />
                    <span><strong>Nivel:</strong> {ev.level}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                    <Award size={16} style={{ color: 'var(--accent-dark)' }} />
                    <span><strong>Plazas:</strong> {ev.spots}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              {isPlayerRegistered(ev.id) ? (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem',
                  backgroundColor: 'var(--accent-glow)',
                  color: 'var(--accent-dark)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-active)',
                  fontWeight: 600,
                  fontSize: '0.95rem'
                }}>
                  <CheckCircle size={18} />
                  ¡Ya estás apuntado!
                </div>
              ) : (
                <button
                  onClick={() => handleOpenRegister(ev)}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Apuntarse al Evento
                </button>
              )}

            </div>
          ))}
        </div>

        {/* Signup Modal / Overlay */}
        {activeEvent && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.45)',
            backdropFilter: 'blur(8px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}>
            <div className="glass-card animate-fade-in" style={{
              width: '100%',
              maxWidth: '450px',
              position: 'relative',
              padding: '2.5rem',
              boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
            }}>
              
              {/* Close button */}
              <button
                onClick={handleCloseRegister}
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>

              <span className="badge" style={{ marginBottom: '0.75rem' }}>{activeEvent.type}</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Inscripción</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Regístrate para reservar tu plaza en <strong>{activeEvent.title}</strong>.
              </p>

              <form onSubmit={handleSubmitRegister} style={{ textAlign: 'left' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="register-name">Nombre Completo</label>
                  <input
                    id="register-name"
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Ej. Juan Pérez"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="register-phone">Teléfono de Contacto</label>
                  <input
                    id="register-phone"
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="Ej. 600 123 456"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="register-level">Nivel Estimado</label>
                  <select
                    id="register-level"
                    name="level"
                    className="form-select"
                    value={formData.level}
                    onChange={handleInputChange}
                  >
                    <option value="iniciacion">Iniciación (1.0 - 2.0)</option>
                    <option value="medio-bajo">Medio Bajo (2.0 - 3.0)</option>
                    <option value="medio">Medio (3.0 - 4.0)</option>
                    <option value="avanzado">Avanzado (4.0+)</option>
                  </select>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '2rem',
                  borderTop: '1px solid var(--border-color)',
                  paddingTop: '1.25rem'
                }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>A pagar en club</span>
                    <strong style={{ fontSize: '1.25rem', color: 'var(--accent-dark)' }}>{activeEvent.price}</strong>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ padding: '0.65rem 1.5rem' }}
                  >
                    Confirmar Plaza
                  </button>
                </div>
              </form>

            </div>
          </div>
        )}

      </div>

      <style>{`
        @media (max-width: 992px) {
          .events-banner-grid {
            gridTemplateColumns: 1fr !important;
            gap: 3rem !important;
          }
          .events-banner-image-wrapper {
            max-width: 500px;
            margin: 0 auto;
            width: 100%;
          }
        }
        @media (max-width: 768px) {
          .events-banner-title {
            font-size: 2.2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
