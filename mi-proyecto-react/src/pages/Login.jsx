import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

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

    // Redirige según el rol
    if (role === "student") navigate("/student/home");
    else if (role === "teacher") navigate("/teacher/home");
    else if (role === "admin") navigate("/admin/home");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img
          src="https://yt3.googleusercontent.com/ytc/AIdro_kffVaplN5r8eBb8X4ZjIYzeAysTUSHNjx14m6nWh5H2Q=s900-c-k-c0x00ffffff-no-rj"
          className="logo"
          alt="Digital Academy"
        />
        <h2>Una de las academias</h2>
        <h2>
          virtuales líderes en Latinoamérica. Formación digital de calidad para
          impulsar tu crecimiento profesional.
        </h2>
      </div>

      <div className="login-right">
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

          <label>Tipo de usuario</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">-- Selecciona --</option>
            <option value="student">Estudiante</option>
            <option value="teacher">Profesor</option>
            <option value="admin">Administrador</option>
          </select>

          <a className="register-link" href="#">
            Registrate
          </a>

          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
