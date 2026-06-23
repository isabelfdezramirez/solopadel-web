import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Comunidad', href: '#comunidad' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Tarifas', href: '#tarifas' },
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

  const maxScroll = 100;
  const progress = isOpen ? 1 : Math.min(scrollY / maxScroll, 1);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 'var(--header-height)',
      backgroundColor: `rgba(255, 255, 255, ${progress * 0.95})`,
      backdropFilter: `blur(${progress * 16}px)`,
      WebkitBackdropFilter: `blur(${progress * 16}px)`,
      borderBottom: `1px solid rgba(15, 23, 42, ${progress * 0.08})`,
      boxShadow: `0 4px 20px -2px rgba(15, 23, 42, ${progress * 0.05})`,
      zIndex: 1000,
      transition: 'box-shadow var(--transition-normal), background-color var(--transition-fast)',
      '--nav-text-color': `rgb(${Math.round(255 - progress * 240)}, ${Math.round(255 - progress * 232)}, ${Math.round(255 - progress * 213)})`
    }}>
      <div className="container" style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Brand Logo */}
        <a href="#inicio" onClick={(e) => handleLinkClick(e, '#inicio')} style={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <img
            src={logoImg}
            alt="SoloPadel Sevilla"
            style={{
              height: '48px',
              width: 'auto',
              display: 'block'
            }}
          />
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
              className="desktop-nav-link"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '1rem',
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button & Menu Icon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="https://playtomic.com/clubs/solo-padel-sevilla"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary desktop-btn"
            style={{
              padding: '0.6rem 1.25rem',
              fontSize: '0.9rem',
              borderRadius: '8px',
              display: 'none',
              gap: '0.4rem'
            }}
          >
            <Globe size={16} />
            Reserva ahora
          </a>

          <button
            onClick={toggleMenu}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--nav-text-color)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '0.25rem',
              transition: 'color var(--transition-fast)'
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
                borderBottom: '1px solid rgba(15, 23, 42, 0.05)',
                paddingBottom: '0.5rem'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://playtomic.com/clubs/solo-padel-sevilla"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '1rem', gap: '0.4rem' }}
          >
            <Globe size={18} />
            Reserva ahora
          </a>
        </div>
      )}

      {/* Embedded CSS for responsive toggles & transitions */}
      <style>{`
        .desktop-nav-link {
          color: var(--nav-text-color) !important;
          transition: color var(--transition-fast) !important;
        }
        .desktop-nav-link:hover {
          color: var(--accent-color) !important;
        }
        @media (min-width: 769px) {
          .desktop-menu { display: flex !important; }
          .desktop-btn { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
