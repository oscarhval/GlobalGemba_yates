import React from 'react';
import './styles/App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Flota from './pages/Flota';
import Servicios from './pages/Servicios';
import Reservas from './pages/Reservas';
import Contacto from './pages/Contacto';
import Login from './pages/Login';
import Register from './pages/Register';

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
        { id: 1, name: 'Yate 1', features: '15 m • 12 pers.', image: '/img/barco1.jpg' },
        { id: 2, name: 'Yate 2', features: '12 m • 8 pers.', image: '/img/barco2.jpg' },
        { id: 3, name: 'Yate 3', features: '18 m • 15 pers.', image: '/img/barco3.jpg' }
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
        { id: 1, title: 'Catering a Bordo', desc: 'Gastronomía local e internacional preparada por chefs expertos' },
        { id: 2, title: 'Deportes Acuáticos', desc: 'Equipamiento completo para snorkel, paddle surf y más' },
        { id: 3, title: 'Tours Privados', desc: 'Descubre las calas más exclusivas con nuestros guías locales' }
      ].map(s => (
        <div key={s.id} className="service-card">
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="App">
      {!hideLayout && <Header />}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Fleet />
            <Services />
          </>
        } />
        <Route path="/flota" element={<Flota />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;
