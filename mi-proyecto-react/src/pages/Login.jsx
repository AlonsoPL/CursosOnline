import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo_cursos from "../assets/logo-cursos.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!role) {
      alert("Selecciona un tipo de usuario para continuar");
      return;
    }

    if (role === "student") navigate("/student/home");
    else if (role === "teacher") navigate("/teacher/home");
    else if (role === "admin") navigate("/admin/home");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={logo_cursos} className="logo" alt="Digital Academy" />
        <h2>Una de las academias</h2>
        <h2>
          virtuales líderes en Latinoamérica. Formación digital de calidad para
          impulsar tu crecimiento profesional.
        </h2>
      </div>

      <div className="login-right">
        <img src={logo_cursos} alt="Digital Academy" className="small-logo" />
        <h3>INICIAR SESIÓN</h3>
        <p>Ingresa con tu cuenta</p>

        <form className="form" onSubmit={handleSubmit}>
          <label>Correo Electrónico</label>
          <input
            type="email"
            placeholder="Ingrese su correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* 🔹 Enlace de "¿Olvidaste tu contraseña?" funcional */}
          <div className="extra-links">
            <a
              href="#"
              className="forgot-password"
              onClick={(e) => {
                e.preventDefault();
                navigate("/forgot-password");
              }}
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <label>Tipo de usuario</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">-- Selecciona --</option>
            <option value="student">Estudiante</option>
            <option value="teacher">Profesor</option>
            <option value="admin">Administrador</option>
          </select>

          <div className="register-section">
            <p>
              
              <a
                href="#"
                className="register-link"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/register");
                }}
              >
                Regístrate
              </a>
            </p>
          </div>

          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

