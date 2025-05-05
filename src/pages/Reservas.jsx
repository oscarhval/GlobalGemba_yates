import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/reservas.scss';

const Reservas = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <section id="reservas" className="section reservations-section">
      <h2>Reservas</h2>
      <p className="subtitle">Selecciona las fechas para tu reserva</p>
      <div className="reservation-form">
        <div className="form-group">
          <label>Fecha de Inicio:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Selecciona una fecha"
            className="date-picker"
          />
        </div>
        <div className="form-group">
          <label>Fecha de Fin:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="Selecciona una fecha"
            className="date-picker"
          />
        </div>
        <button className="btn-primary btn-reservation">Confirmar Reserva</button>
      </div>
    </section>
  );
};

export default Reservas;
