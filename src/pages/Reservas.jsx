import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/reservas.scss';

const barcos = [
  { nombre: 'Ibiza Sun', capacidad: 8 },
  { nombre: 'Marina Blue', capacidad: 6 },
  { nombre: 'Océano Breeze', capacidad: 10 }
];

const Reservas = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [mostrarBarcos, setMostrarBarcos] = useState(false);

  const buscarBarcos = () => {
    if (startDate && endDate) {
      setMostrarBarcos(true);
    } else {
      alert('Por favor selecciona ambas fechas.');
    }
  };

  return (
    <section id="reservas" className="section reservations-section">
      <h2>Reservas</h2>
      <p className="subtitle">Selecciona las fechas y horas para tu reserva</p>
      <div className="reservation-form">
        <div className="form-group">
          <label>Fecha y hora de Inicio:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            showTimeSelect
            dateFormat="Pp"
            placeholderText="Selecciona fecha y hora"
            className="date-picker"
          />
        </div>
        <div className="form-group">
          <label>Fecha y hora de Fin:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            showTimeSelect
            dateFormat="Pp"
            placeholderText="Selecciona fecha y hora"
            className="date-picker"
          />
        </div>
        <button className="btn-primary btn-reservation" onClick={buscarBarcos}>
          Buscar Barcos
        </button>
      </div>

      {mostrarBarcos && (
        <div className="barcos-disponibles">
          <h3>Barcos disponibles:</h3>
          <ul>
            {barcos.map((barco) => (
              <li key={barco.nombre}>
                <strong>{barco.nombre}</strong> - Capacidad: {barco.capacidad} personas
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Reservas;
