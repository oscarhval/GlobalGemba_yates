import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import './header.scss';

const Header = () => {
  const { user, logout } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">NavIbiza</Link>
      </div>
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/flota">Flota</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/reservas">Reservas</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>

      {!user ? (
        <Link to="/login" className="btn-login">Iniciar sesión</Link>
      ) : (
        <div className="user-avatar-container">
          <img
            src="/img/avatar.png"
            alt="Usuario"
            className="avatar"
            onClick={toggleMenu}
          />
          {menuOpen && (
            <div className="dropdown-menu">
              <button onClick={logout}>Cerrar sesión</button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
