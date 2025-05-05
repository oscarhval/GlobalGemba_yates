import React, { useState } from 'react';
import '../styles/contacto.scss';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className="contacto-container">
      <div className="contacto-info">
        <h1>Contacta con Nosotros</h1>
        <div className="info-detalles">
          <div className="info-item">
            <h3>Dirección</h3>
            <p>Puerto Deportivo Marina Ibiza</p>
            <p>07800 Ibiza, Islas Baleares</p>
          </div>
          <div className="info-item">
            <h3>Teléfono</h3>
            <p>+34 971 123 456</p>
          </div>
          <div className="info-item">
            <h3>Email</h3>
            <p>info@navibiza.com</p>
          </div>
          <div className="info-item">
            <h3>Horario</h3>
            <p>Lunes a Domingo: 9:00 - 20:00</p>
          </div>
        </div>
      </div>

      <form className="contacto-form" onSubmit={handleSubmit}>
        <div className="form-grupo">
          <label htmlFor="nombre">Nombre completo</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-grupo">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-grupo">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>

        <div className="form-grupo">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            rows="5"
          ></textarea>
        </div>

        <button type="submit" className="btn-enviar">
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default Contacto;