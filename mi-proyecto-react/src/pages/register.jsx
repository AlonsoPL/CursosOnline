import { useNavigate } from "react-router-dom";
import logo_cursos from "../assets/logo-cursos.png";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Usuario registrado con éxito (ejemplo de flujo).");
    navigate("/");
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <img src={logo_cursos} alt="Digital Academy" className="logo" />
        <h2>Una de las academias</h2>
        <h2>
          virtuales líderes en Latinoamérica. Formación digital de calidad para
          impulsar tu crecimiento profesional.
        </h2>
      </div>

      <div className="register-right">
        <img src={logo_cursos} alt="Digital Academy" className="small-logo" />
        <h3>REGISTRARSE</h3>
        <p>Ingrese sus datos</p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div>
              <label>Nombres</label>
              <input type="text" placeholder="Ingrese su nombre" required />
            </div>
            <div>
              <label>Apellidos</label>
              <input type="text" placeholder="Ingrese sus apellidos" required />
            </div>
          </div>

          <label>Correo Electrónico</label>
          <input
            type="email"
            placeholder="Ingrese su correo electrónico"
            required
          />

          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese su contraseña"
            required
          />

          <button type="submit">Registrarse</button>
        </form>

        {/* 🔹 Botón para volver al login */}
        <div className="back-login">
          <p>
            {" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/"); // vuelve al login
              }}
            >
              Regresar
            </a>
          </p>
        </div>

        <footer>© 2025 Digital Academy. Todos los derechos reservados.</footer>
      </div>
    </div>
  );
}

export default Register;

