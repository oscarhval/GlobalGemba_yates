import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { UserContext } from '../context/UserContext';
import '../styles/login.scss';

function Login() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      setUser(res.user);
      navigate('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleGoogleLogin = async () => {
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
    <main className="login-container">
    

      <div className="login-box">
        <h2>Iniciar sesión</h2>
        {errorMessage && <p className="error">{errorMessage}</p>}

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn">
            Entrar
          </button>
        </form>

        <div className="divider">o</div>

        <button className="btn google-btn" onClick={handleGoogleLogin}>
          Inicia sesión con
          <img
            src="/img/Google_2015_logo.png"
            alt="Google logo"
            style={{ marginTop: '5px', height: '30px', marginLeft: '0.5rem' }}
          />
        </button>

        <div className="login-links">
          <span>
            ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
          </span>
        </div>
      </div>
      
    </main>
    </>
  );
}

export default Login;
