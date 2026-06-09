import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Community from './components/Community';
import Gallery from './components/Gallery';
import Rates from './components/Rates';
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

        {/* Services Showcase */}
        <Services />

        {/* WhatsApp Playtomic community section */}
        <Community />

        {/* Photos Gallery */}
        <Gallery />

        {/* Pricing Rates section */}
        <Rates />

        {/* Contact details, simulated map and contact form */}
        <Contact />
      </main>

      {/* Footer Branding & Links */}
      <Footer />
    </>
  );
}

export default App;
