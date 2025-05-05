import React from 'react';
import './footer.scss'; // Importa el archivo de estilos SCSS para el Footer

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

export default Footer;
