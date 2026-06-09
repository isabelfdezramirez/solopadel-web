import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';
import img1 from '../assets/galeria1.jpg';
import img2 from '../assets/galeria2.jpg';
import img3 from '../assets/galeria3.jpg';
import img4 from '../assets/galeria4.jpg';
import img5 from '../assets/galeria5.jpg';
import img6 from '../assets/galeria6.jpg';
import img7 from '../assets/galeria7.jpg';
import img8 from '../assets/galeria8.jpg';
import img9 from '../assets/galeria9.jpg';

export default function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="galeria" className="section" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Galería</span>
          <h2>Imágenes de Nuestro Club</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Explora nuestras instalaciones, disfruta de la terraza social y vive el ambiente padelístico.
          </p>
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }} className="gallery-grid">
          {images.map((img, idx) => (
            <div 
              key={idx}
              className="gallery-item-wrapper"
              onClick={() => setSelectedImage(img)}
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                height: '420px',
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)',
                border: '1px solid var(--border-color)',
                cursor: 'pointer'
              }}
            >
              <img 
                src={img} 
                alt={`Galería de SoloPadel ${idx + 1}`} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="gallery-img"
              />
              
              {/* Hover Overlay */}
              <div 
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
                className="gallery-overlay"
              >
                <div style={{
                  backgroundColor: '#ffffff',
                  padding: '0.75rem',
                  borderRadius: '50%',
                  color: 'var(--text-primary)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
                  transform: 'translateY(10px)',
                  transition: 'transform 0.3s ease'
                }} className="zoom-btn">
                  <ZoomIn size={22} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal for full screen view */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(7, 9, 14, 0.9)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 3000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            animation: 'fadeIn var(--transition-fast) forwards'
          }}
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
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
            src={selectedImage} 
            alt="Detalle de Galería" 
            style={{
              maxWidth: '90%',
              maxHeight: '85vh',
              borderRadius: '12px',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
              objectFit: 'contain'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Styles */}
      <style>{`
        .gallery-item-wrapper:hover .gallery-img {
          transform: scale(1.06);
        }
        .gallery-item-wrapper:hover .gallery-overlay {
          opacity: 1;
        }
        .gallery-item-wrapper:hover .zoom-btn {
          transform: translateY(0);
        }
        .gallery-grid {
          display: grid !important;
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 2rem !important;
        }
        @media (max-width: 992px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 650px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
