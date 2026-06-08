import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'El Club', href: '#club' },
    { name: 'Reservar', href: '#reservar' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // height of navbar
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
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 'var(--header-height)',
      backgroundColor: scrolled ? 'rgba(7, 9, 14, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
      zIndex: 1000,
      transition: 'all var(--transition-normal)'
    }}>
      <div className="container" style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <a href="#inicio" onClick={(e) => handleLinkClick(e, '#inicio')} style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.6rem',
          fontWeight: 800,
          color: 'var(--text-primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem'
        }}>
          SOLO<span style={{ color: 'var(--accent-color)' }}>PADEL</span>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-color)',
            display: 'inline-block'
          }}></span>
        </a>

        {/* Desktop Nav Links */}
        <div style={{
          display: 'none',
          alignItems: 'center',
          gap: '2rem'
        }} className="desktop-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 500,
                fontSize: '0.95rem',
                color: 'var(--text-secondary)'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button & Menu Icon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="#reservar"
            onClick={(e) => handleLinkClick(e, '#reservar')}
            className="btn btn-primary btn-sm"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.85rem',
              display: 'none'
            }}
            className="desktop-btn"
          >
            <Calendar size={14} />
            Reservar Pista
          </a>

          <button
            onClick={toggleMenu}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '0.25rem'
            }}
            className="mobile-toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 'var(--header-height)',
          left: 0,
          right: 0,
          backgroundColor: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-color)',
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          zIndex: 999,
          animation: 'fadeIn var(--transition-fast) forwards'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '1.2rem',
                color: 'var(--text-primary)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                paddingBottom: '0.5rem'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#reservar"
            onClick={(e) => handleLinkClick(e, '#reservar')}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '1rem' }}
          >
            <Calendar size={16} />
            Reservar Pista
          </a>
        </div>
      )}

      {/* Embedded CSS for responsive toggles */}
      <style>{`
        @media (min-width: 769px) {
          .desktop-menu { display: flex !important; }
          .desktop-btn { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
