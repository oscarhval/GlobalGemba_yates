// src/App.js
import React from 'react';
import './App.css';

const Header = () => (
  <header className="header">
    <div className="logo">NavIbiza</div>
    <nav>
      <ul className="nav-list">
        <li>Inicio</li>
        <li>Flota</li>
        <li>Servicios</li>
        <li>Reservas</li>
        <li>Contacto</li>
      </ul>
    </nav>
  </header>
);

const Hero = () => (
  <section className="hero">
    <video className="hero-video" autoPlay muted loop>
      <source src="video/video_yate.mp4" type="video/mp4" />
      Tu navegador no soporta vídeo de fondo.
    </video>
    <div className="hero-content">
      <h1>Alquiler de Barcos en Ibiza</h1>
      <p>Descubre las aguas cristalinas de Ibiza a bordo de nuestros lujosos barcos</p>
      <a href="#" className="btn-primary">Reserva Ahora</a>
    </div>
  </section>
);

const Fleet = () => (
  <section className="section">
    <h2>Nuestra Flota</h2>
    <div className="card-container">
      {[
        { id: 1, name: 'Yate 1', features: '15 m • 12 pers.', image: 'https://via.placeholder.com/360x240?text=Yacht+Serenity' },
        { id: 2, name: 'Yate 2', features: '12 m • 8 pers.',  image: 'https://via.placeholder.com/360x240?text=Speedster+X90' },
        { id: 3, name: 'Yate 3', features: '18 m • 15 pers.', image: 'https://via.placeholder.com/360x240?text=Catamaran+Dream' }
      ].map(boat => (
        <div key={boat.id} className="card">
          <img src={boat.image} alt={boat.name} />
          <div className="card-content">
            <h3>{boat.name}</h3>
            <p>{boat.features}</p>
            <a href="#" className="card-link">Ver Detalles →</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Services = () => (
  <section className="section">
    <h2>Servicios Adicionales</h2>
    <p className="subtitle">Complementa tu experiencia con nuestros servicios premium</p>
    <div className="card-container">
      {[
        { id: 1, title: 'Catering a Bordo',     desc: 'Gastronomía local e internacional preparada por chefs expertos' },
        { id: 2, title: 'Deportes Acuáticos',    desc: 'Equipamiento completo para snorkel, paddle surf y más' },
        { id: 3, title: 'Tours Privados',        desc: 'Descubre las calas más exclusivas con nuestros guías locales' }
      ].map(s => (
        <div key={s.id} className="service-card">
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div>
        <h4>Contacto</h4>
        <p>+34 971 123 456</p>
        <p>Pto Deportivo Marina Ibiza</p>
      </div>
      <div>
        <h4>Síguenos</h4>
        <p>Instagram | Facebook | Twitter</p>
      </div>
      <div>
        <h4>Legal</h4>
        <p>Aviso Legal</p>
        <p>Política de Privacidad</p>
        <p>Términos y Condiciones</p>
      </div>
    </div>
    <p className="footer-note">© 2025 NavIbiza. Todos los derechos reservados.</p>
  </footer>
);

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Fleet />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
