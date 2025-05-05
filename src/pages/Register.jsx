import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { UserContext } from '../context/UserContext';
import '../styles/register.scss';

function Register() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden");
      return;
    }
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await signOut(auth); // logout tras registro
      alert("Registro exitoso. Inicia sesión.");
      navigate('/login');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      setUser(res.user);
      navigate('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
    <button
    className="back-button"
    onClick={() => navigate('/')}
  >
    ↩ 
  </button>
    <main className="register-container">
  
      <div className="register-box">
        <h2>Crear cuenta</h2>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">Registrarse</button>
        </form>

        <div className="divider">o</div>

        <button className="btn google-btn" onClick={handleGoogleSignUp}>
          Continúa con
          <img
            src="/img/Google_2015_logo.png"
            alt="Google logo"
            style={{ marginTop: '5px', height: '30px', marginLeft: '0.5rem' }}
          />
        </button>

        <div className="register-links">
          <span>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></span>
        </div>
      </div>
    </main>
    </>
  );
}

export default Register;
