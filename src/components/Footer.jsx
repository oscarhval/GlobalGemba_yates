import React from 'react';
import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer-section footer-container">
      <div className="footer-block">
        <h4>Contacto</h4>
        <p>+34 971 123 456</p>
        <p>Pto Deportivo Marina Ibiza</p>
      </div>
      <div className="footer-block">
        <h4>Síguenos</h4>
        <p>Instagram | Facebook | Twitter</p>
      </div>
      <div className="footer-block">
        <h4>Legal</h4>
        <p>Aviso Legal</p>
        <p>Política de Privacidad</p>
        <p>Términos y Condiciones</p>
      </div>
    </div>
    <div className="footer-copy">
      © 2025 NavIbiza. Todos los derechos reservados.
    </div>
  </footer>
);

export default Footer;
