import { GraduationCap, Trophy, Store, Beer } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <GraduationCap size={28} />,
      title: 'Escuela de Pádel',
      details: 'Clases adaptadas a todos los niveles, desde iniciación hasta competición. Entrenamientos individuales o grupales guiados por técnicos titulados.',
      pricing: 'Desde 12€ / clase',
      badge: 'Todos los niveles'
    },
    {
      icon: <Trophy size={28} />,
      title: 'Americanas y Torneos',
      details: 'Participa en nuestros torneos relámpago "Americanas". Un formato dinámico para conocer jugadores de tu nivel y subir en el ranking local.',
      pricing: 'Inscripción: 8€ / persona',
      badge: 'Social y Competitivo'
    },
    {
      icon: <Store size={28} />,
      title: 'Tienda de Material',
      details: 'Disponemos de las últimas colecciones de palas, zapatillas y textil. Prueba palas de test antes de comprar y obtén asesoramiento experto.',
      pricing: 'Grandes marcas',
      badge: 'Punto Oficial'
    },
    {
      icon: <Beer size={28} />,
      title: 'Cafetería "Tercer Tiempo"',
      details: 'El mejor lugar para comentar el partido. Amplia terraza exterior con servicio de desayunos, tapas variadas, bebidas y menús para grupos.',
      pricing: 'Precios populares',
      badge: 'Terraza de Verano'
    }
  ];

  return (
    <section id="servicios" className="section" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      
      {/* Visual background element */}
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(163,230,53,0.02) 0%, transparent 80%)',
        filter: 'blur(40px)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <div className="section-header">
          <span className="badge">Qué Ofrecemos</span>
          <h2>Servicios del Club</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            En SoloPadel nos preocupamos por ofrecer una experiencia integral. No solo alquilamos pistas, creamos club.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {servicesList.map((service, idx) => (
            <div key={idx} className="glass-card" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              textAlign: 'left',
              padding: '2rem',
              height: '100%'
            }}>
              
              <div>
                {/* Header elements */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    color: 'var(--accent-color)',
                    backgroundColor: 'var(--accent-glow)',
                    padding: '0.75rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(163, 230, 53, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {service.icon}
                  </div>
                  <span style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-secondary)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '6px',
                    border: '1px solid var(--border-color)',
                    fontWeight: 600
                  }}>
                    {service.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', color: '#fff' }}>
                  {service.title}
                </h3>
                
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '2rem' }}>
                  {service.details}
                </p>
              </div>

              <div style={{
                width: '100%',
                borderTop: '1px solid var(--border-color)',
                paddingTop: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Tarifa</span>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-color)' }}>{service.pricing}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
