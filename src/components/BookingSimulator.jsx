import { useState, useEffect } from 'react';
import { Calendar, Clock, Disc, Sparkles, Check, Phone, ArrowRight, Play, ShoppingBag } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingSimulator() {
  const courts = [
    { id: 1, name: 'Pista 1 - Central', desc: 'Cristal panorámico y gradas' },
    { id: 2, name: 'Pista 2 - Premium', desc: 'Cristal y excelente rebote' },
    { id: 3, name: 'Pista 3', desc: 'Estándar exterior' },
    { id: 4, name: 'Pista 4', desc: 'Estándar exterior' },
    { id: 5, name: 'Pista 5', desc: 'Estándar exterior' },
    { id: 6, name: 'Pista 6', desc: 'Estándar exterior' },
    { id: 7, name: 'Pista 7', desc: 'Estándar exterior' }
  ];

  const timeSlots = [
    { time: '08:30', isPeak: false },
    { time: '10:00', isPeak: false },
    { time: '11:30', isPeak: false },
    { time: '13:00', isPeak: false },
    { time: '14:30', isPeak: false },
    { time: '16:00', isPeak: true },
    { time: '17:30', isPeak: true },
    { time: '19:00', isPeak: true },
    { time: '20:30', isPeak: true },
    { time: '22:00', isPeak: true }
  ];

  // Booking State
  const [selectedCourt, setSelectedCourt] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDuration, setSelectedDuration] = useState(90); // 60, 90, 120
  const [selectedTime, setSelectedTime] = useState('19:00');
  const [racketsCount, setRacketsCount] = useState(0);
  const [ballsTube, setBallsTube] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);
  
  // Set default date to today
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setSelectedDate(today);
  }, []);

  // Calculate pricing
  const activeSlot = timeSlots.find(slot => slot.time === selectedTime) || { isPeak: true };
  const hourlyRate = activeSlot.isPeak ? 24 : 16; // Court booking price per hour
  const durationFactor = selectedDuration / 60;
  
  const courtPrice = hourlyRate * durationFactor;
  const racketsPrice = racketsCount * 3;
  const ballsPrice = ballsTube ? 4 : 0;
  const totalPrice = courtPrice + racketsPrice + ballsPrice;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    
    const randomCode = 'SP-' + Math.floor(1000 + Math.random() * 9000);
    const courtName = courts.find(c => c.id === selectedCourt)?.name || 'Pista 1';
    
    const newBooking = {
      code: randomCode,
      court: courtName,
      date: selectedDate,
      time: selectedTime,
      duration: selectedDuration,
      rackets: racketsCount,
      balls: ballsTube,
      price: totalPrice
    };

    setConfirmedBooking(newBooking);
    
    // Save to local storage for user memory
    const existing = JSON.parse(localStorage.getItem('solopadel_bookings') || '[]');
    localStorage.setItem('solopadel_bookings', JSON.stringify([...existing, newBooking]));

    // Confetti effect!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#a3e635', '#ffffff', '#171d30']
    });
  };

  const handleReset = () => {
    setConfirmedBooking(null);
    setRacketsCount(0);
    setBallsTube(false);
    setSelectedTime('19:00');
  };

  return (
    <section id="reservar" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="badge">Simulador</span>
          <h2>Simula tu Reserva de Pista</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Selecciona tu pista, fecha, hora y extras para calcular tu tarifa y simular tu reserva en tiempo real.
          </p>
        </div>

        {/* Simulator Grid */}
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          {!confirmedBooking ? (
            <form onSubmit={handleBookingSubmit} className="glass-card" style={{
              textAlign: 'left',
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '2.5rem',
              padding: '2.5rem'
            }} className="simulator-grid">
              
              {/* Selections Panel */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                {/* Court Select */}
                <div>
                  <label className="form-label">1. Elige la Pista</label>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
                    gap: '0.75rem'
                  }}>
                    {courts.map((court) => (
                      <div
                        key={court.id}
                        onClick={() => setSelectedCourt(court.id)}
                        style={{
                          border: selectedCourt === court.id ? '2px solid var(--accent-color)' : '1px solid var(--border-color)',
                          borderRadius: '12px',
                          padding: '0.75rem 1rem',
                          cursor: 'pointer',
                          backgroundColor: selectedCourt === court.id ? 'var(--accent-glow)' : 'rgba(255, 255, 255, 0.02)',
                          transition: 'all var(--transition-fast)'
                        }}
                      >
                        <h4 style={{ fontSize: '0.95rem', color: selectedCourt === court.id ? 'var(--accent-color)' : '#fff', fontWeight: 600 }}>
                          {court.name}
                        </h4>
                        <p style={{ fontSize: '0.75rem', margin: 0, opacity: 0.8 }}>{court.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Date & Duration Row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="row-mobile">
                  <div>
                    <label className="form-label" htmlFor="booking-date">2. Fecha</label>
                    <input
                      id="booking-date"
                      type="date"
                      className="form-input"
                      value={selectedDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="booking-duration">3. Duración</label>
                    <select
                      id="booking-duration"
                      className="form-select"
                      value={selectedDuration}
                      onChange={(e) => setSelectedDuration(Number(e.target.value))}
                    >
                      <option value={60}>60 minutos (1h)</option>
                      <option value={90}>90 minutos (1.5h)</option>
                      <option value={120}>120 minutos (2h)</option>
                    </select>
                  </div>
                </div>

                {/* Time Slot Selector */}
                <div>
                  <label className="form-label">4. Hora del Partido</label>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        type="button"
                        onClick={() => setSelectedTime(slot.time)}
                        style={{
                          backgroundColor: selectedTime === slot.time ? 'var(--accent-color)' : 'rgba(255,255,255,0.03)',
                          color: selectedTime === slot.time ? 'var(--bg-primary)' : 'var(--text-primary)',
                          border: selectedTime === slot.time ? '1px solid var(--accent-color)' : '1px solid var(--border-color)',
                          borderRadius: '8px',
                          padding: '0.5rem 0.85rem',
                          cursor: 'pointer',
                          fontWeight: 600,
                          fontSize: '0.85rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          transition: 'all var(--transition-fast)'
                        }}
                      >
                        {slot.time}
                        <span style={{
                          fontSize: '0.65rem',
                          opacity: 0.8,
                          backgroundColor: selectedTime === slot.time ? 'rgba(7, 9, 14, 0.15)' : 'rgba(255, 255, 255, 0.08)',
                          padding: '0.1rem 0.3rem',
                          borderRadius: '4px'
                        }}>
                          {slot.isPeak ? 'Peak' : 'Valle'}
                        </span>
                      </button>
                    ))}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem', display: 'block' }}>
                    * Hora Peak (16:00 a 24:00): 24€/h | Hora Valle (08:30 a 16:00): 16€/h.
                  </span>
                </div>

                {/* Add-ons / Rentals */}
                <div>
                  <label className="form-label">5. Extras y Alquiler</label>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem'
                  }} className="row-mobile">
                    
                    {/* Rackets Count */}
                    <div style={{
                      border: '1px solid var(--border-color)',
                      borderRadius: '12px',
                      padding: '0.75rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: 'rgba(255,255,255,0.01)'
                    }}>
                      <div>
                        <h4 style={{ fontSize: '0.875rem', fontWeight: 600 }}>Alquilar Palas</h4>
                        <p style={{ fontSize: '0.75rem', margin: 0, color: 'var(--text-muted)' }}>+3€ por pala</p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <button
                          type="button"
                          onClick={() => setRacketsCount(Math.max(0, racketsCount - 1))}
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            border: '1px solid var(--border-color)',
                            background: 'transparent',
                            color: '#fff',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 700
                          }}
                        >-</button>
                        <span style={{ fontWeight: 600 }}>{racketsCount}</span>
                        <button
                          type="button"
                          onClick={() => setRacketsCount(Math.min(4, racketsCount + 1))}
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            border: '1px solid var(--border-color)',
                            background: 'transparent',
                            color: '#fff',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 700
                          }}
                        >+</button>
                      </div>
                    </div>

                    {/* Tube of balls */}
                    <div
                      onClick={() => setBallsTube(!ballsTube)}
                      style={{
                        border: ballsTube ? '1px solid var(--accent-color)' : '1px solid var(--border-color)',
                        borderRadius: '12px',
                        padding: '0.75rem 1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: ballsTube ? 'var(--accent-glow)' : 'rgba(255,255,255,0.01)',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      <div>
                        <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: ballsTube ? 'var(--accent-color)' : '#fff' }}>Bote de Bolas</h4>
                        <p style={{ fontSize: '0.75rem', margin: 0, color: 'var(--text-muted)' }}>+4€ por bote</p>
                      </div>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '6px',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: ballsTube ? 'var(--accent-color)' : 'transparent',
                        borderColor: ballsTube ? 'var(--accent-color)' : 'var(--border-color)'
                      }}>
                        {ballsTube && <Check size={14} color="#07090e" strokeWidth={3} />}
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              {/* Price Calculation Sidebar */}
              <div style={{
                borderLeft: '1px solid var(--border-color)',
                paddingLeft: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }} className="calculator-sidebar">
                
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem', color: '#fff' }}>Resumen de la Reserva</h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Pista:</span>
                      <span style={{ fontWeight: 600 }}>{courts.find(c => c.id === selectedCourt)?.name}</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Fecha y Hora:</span>
                      <span style={{ fontWeight: 600 }}>{selectedDate} @ {selectedTime}</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Duración:</span>
                      <span style={{ fontWeight: 600 }}>{selectedDuration} min</span>
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '0.5rem 0' }} />

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Precio Pista ({activeSlot.isPeak ? 'Peak' : 'Valle'}):</span>
                      <span>{courtPrice.toFixed(2)}€</span>
                    </div>

                    {racketsCount > 0 && (
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>Alquiler Palas ({racketsCount}x):</span>
                        <span>{racketsPrice.toFixed(2)}€</span>
                      </div>
                    )}

                    {ballsTube && (
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>Bote de Bolas:</span>
                        <span>{ballsPrice.toFixed(2)}€</span>
                      </div>
                    )}
                  </div>
                </div>

                <div style={{ marginTop: '2.5rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem'
                  }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>Total Estimado:</span>
                    <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-color)' }}>{totalPrice.toFixed(2)}€</span>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '0.9rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}
                  >
                    <Sparkles size={18} />
                    Confirmar Simulación
                  </button>
                </div>

              </div>

            </form>
          ) : (
            
            /* Success / Confirmation Card */
            <div className="glass-card animate-fade-in" style={{
              textAlign: 'center',
              padding: '3rem 2rem',
              maxWidth: '600px',
              margin: '0 auto',
              border: '2px solid var(--accent-color)',
              boxShadow: '0 0 30px var(--accent-glow)'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                boxShadow: '0 0 20px var(--accent-glow-strong)'
              }}>
                <Check size={30} color="#07090e" strokeWidth={3} />
              </div>

              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>¡Reserva Simulada con Éxito!</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>
                Tu simulación ha sido procesada. Guarda el siguiente código de reserva para tu referencia local.
              </p>

              {/* Receipt info */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '1.5rem',
                textAlign: 'left',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                fontSize: '0.9rem',
                marginBottom: '2rem'
              }} className="receipt-grid">
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Código Local</span>
                  <strong style={{ fontSize: '1.1rem', color: 'var(--accent-color)' }}>{confirmedBooking.code}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Pista Reservada</span>
                  <strong>{confirmedBooking.court}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Fecha y Hora</span>
                  <strong>{confirmedBooking.date} a las {confirmedBooking.time}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Duración y Precio</span>
                  <strong>{confirmedBooking.duration} min | {confirmedBooking.price.toFixed(2)}€</strong>
                </div>
              </div>

              {/* Call to action to real platforms */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a
                  href="https://playtomic.io"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%', gap: '0.5rem' }}
                >
                  <ArrowRight size={18} />
                  Ir a Reservar en Playtomic
                </a>
                
                <div style={{ display: 'flex', gap: '1rem' }} className="row-mobile">
                  <a
                    href="tel:+34666467884"
                    className="btn btn-secondary"
                    style={{ flex: 1, gap: '0.5rem' }}
                  >
                    <Phone size={16} />
                    Llamar al Club
                  </a>
                  <button
                    onClick={handleReset}
                    className="btn btn-outline"
                    style={{ flex: 1 }}
                  >
                    Nueva Simulación
                  </button>
                </div>
              </div>

            </div>

          )}
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .simulator-grid {
            gridTemplateColumns: 1fr !important;
            gap: 2rem !important;
          }
          .calculator-sidebar {
            borderLeft: none !important;
            paddingLeft: 0 !important;
            borderTop: 1px solid var(--border-color);
            paddingTop: 2rem;
          }
        }
        @media (max-width: 576px) {
          .row-mobile {
            gridTemplateColumns: 1fr !important;
          }
          .receipt-grid {
            gridTemplateColumns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
