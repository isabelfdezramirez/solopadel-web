import { useState, useEffect } from 'react';
import { Calendar, Phone, MessageSquare, ChevronLeft, ChevronRight, Award, Clock, Star, ShieldCheck } from 'lucide-react';

// Import carousel images
import img1 from '../assets/carrousel/img1.jpeg';
import img2 from '../assets/carrousel/img2.jpeg';
import img3 from '../assets/carrousel/img3.jpeg';
import img4 from '../assets/carrousel/img4.jpeg';
import img5 from '../assets/carrousel/img5.jpeg';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: img1,
      label: 'Solo Padel',
      title: 'Tu club 100% Padel en Sevilla',
      description: 'Disfruta de las mejores instalaciones y el mejor ambiente social en Alcalá de Guadaíra.',
      buttons: [
        { text: 'Ver Galería', href: '#club', type: 'primary' },
        { text: 'Reservar ahora', href: '#reservar', type: 'secondary' }
      ]
    },
    {
      image: img2,
      label: 'Promotion',
      title: 'Reserva tu pista y vive el padel',
      description: 'Disfruta de nuestras 7 modernas pistas de padel diseñadas para brindarte la mejor experiencia. No pierdas tiempo, reserva ahora de forma rápida y sencilla a través de nuestro sistema online, en el mismo club, o por teléfono y whatsapp en el 666467884.',
      buttons: [
        { text: 'Hacer Reserva online', href: '#reservar', type: 'primary' },
        { text: 'Llamar', href: 'tel:+34666467884', type: 'secondary', icon: <Phone size={16} /> },
        { text: 'WhatsApp', href: 'https://wa.me/34666467884', type: 'secondary', icon: <MessageSquare size={16} /> }
      ]
    },
    {
      image: img3,
      label: 'Torneos',
      title: 'Vive la emoción de la competición',
      description: 'Organizamos ligas, americanas y eventos de fin de semana para todos los niveles de juego con grandes premios.',
      buttons: [
        { text: 'Apuntarse a Torneo', href: '#eventos', type: 'primary' }
      ]
    },
    {
      image: img4,
      label: 'Tienda Oficial',
      title: 'Equípate con lo mejor',
      description: 'Asesoramiento experto y venta de material deportivo oficial, palas de test de las mejores marcas y textil del club.',
      buttons: [
        { text: 'Ver Tienda', href: '#servicios', type: 'primary' }
      ]
    },
    {
      image: img5,
      label: 'Escuela de Pádel',
      title: 'Escuela Luis Sanchez',
      description: 'Aprende y perfecciona tu técnica con clases de pádel para todos los niveles y edades impartidas por profesionales.',
      buttons: [
        { text: 'Ver Clases', href: '#servicios', type: 'primary' }
      ]
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

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
    { icon: <Clock size={24} />, title: '08:00 a 24:00', desc: 'Abierto todos los días' },
    { icon: <Star size={24} />, title: 'Cafetería', desc: 'Gran terraza social de verano' },
    { icon: <ShieldCheck size={24} />, title: 'Parking Gratis', desc: 'Privado y de fácil acceso' }
  ];

  return (
    <section id="inicio" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Slides Container */}
      <div style={{
        position: 'relative',
        height: '88vh',
        minHeight: '580px',
        backgroundColor: '#07090e'
      }}>
        {slides.map((slide, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.75) 35%, rgba(0, 0, 0, 0.3) 100%), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: currentSlide === idx ? 1 : 0,
              visibility: currentSlide === idx ? 'visible' : 'hidden',
              transition: 'opacity 0.8s ease-in-out, visibility 0.8s ease-in-out',
              display: 'flex',
              alignItems: 'center',
              zIndex: 1
            }}
          >
            {/* Slide Text Content Overlay */}
            {currentSlide === idx && (
              <div className="container" style={{ textAlign: 'left', width: '100%' }}>
                <div style={{
                  maxWidth: '700px',
                  animation: 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                }}>
                  {/* Category label */}
                  <span style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--accent-color)',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    display: 'block',
                    marginBottom: '1rem'
                  }}>
                    {slide.label}
                  </span>
                  
                  {/* Main Title */}
                  <h1 style={{
                    fontSize: '3.6rem',
                    fontWeight: 800,
                    lineHeight: 1.15,
                    color: '#ffffff',
                    marginBottom: '1.25rem',
                    fontFamily: 'var(--font-heading)'
                  }} className="slide-title">
                    {slide.title}
                  </h1>
                  
                  {/* Description Paragraph */}
                  <p style={{
                    fontSize: '1.15rem',
                    color: 'rgba(255, 255, 255, 0.85)',
                    lineHeight: 1.6,
                    marginBottom: '2.5rem',
                    maxWidth: '600px'
                  }} className="slide-desc">
                    {slide.description}
                  </p>
                  
                  {/* Action Buttons */}
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    {slide.buttons.map((btn, btnIdx) => (
                      <a
                        key={btnIdx}
                        href={btn.href}
                        onClick={(e) => handleScrollTo(e, btn.href)}
                        className={`btn ${btn.type === 'primary' ? 'btn-primary' : 'btn-secondary'}`}
                        style={{
                          padding: '0.85rem 1.75rem',
                          borderRadius: '8px',
                          fontSize: '0.95rem',
                          gap: '0.5rem',
                          ...(btn.type === 'secondary' && {
                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                            color: '#ffffff',
                            border: '1px solid rgba(255, 255, 255, 0.25)',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)'
                          })
                        }}
                      >
                        {btn.icon}
                        {btn.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Carousel Arrow Controls */}
        <button
          onClick={handlePrev}
          style={{
            position: 'absolute',
            left: '1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#fff',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all var(--transition-fast)'
          }}
          className="carousel-arrow"
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          style={{
            position: 'absolute',
            right: '1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#fff',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all var(--transition-fast)'
          }}
          className="carousel-arrow"
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Dot Indicators */}
        <div style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          gap: '0.75rem'
        }}>
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: currentSlide === idx ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.4)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            />
          ))}
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
            gap: '2rem'
          }}>
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  textAlign: 'left'
                }}
              >
                <div style={{
                  backgroundColor: 'var(--accent-glow)',
                  padding: '0.75rem',
                  borderRadius: '12px',
                  color: 'var(--accent-dark)',
                  border: '1px solid var(--border-active)'
                }}>
                  {stat.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.15rem', color: 'var(--text-primary)' }}>
                    {stat.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', margin: 0, color: 'var(--text-secondary)' }}>
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide transition animations */}
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
        @media (max-width: 768px) {
          .slide-title {
            font-size: 2.5rem !important;
          }
          .slide-desc {
            font-size: 1rem !important;
          }
          .carousel-arrow {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
