import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BookingSimulator from './components/BookingSimulator';
import Services from './components/Services';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Layout */}
      <main style={{ flex: 1 }}>
        {/* Hero Banner & Stats */}
        <Hero />

        {/* Club Facilities details */}
        <About />

        {/* Booking Interactive Simulator */}
        <BookingSimulator />

        {/* Services Showcase */}
        <Services />

        {/* Tournaments and community events */}
        <Events />

        {/* Contact details, simulated map and contact form */}
        <Contact />
      </main>

      {/* Footer Branding & Links */}
      <Footer />
    </>
  );
}

export default App;
