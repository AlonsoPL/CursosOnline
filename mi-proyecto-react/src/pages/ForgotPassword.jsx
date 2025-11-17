import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo_cursos from "../assets/logo-cursos.png";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    navigate("/email-sent"); //  Redirige a la página
  };

  return (
    <div className="forgot-container">
      <div className="forgot-left">
        <img src={logo_cursos} className="logo" alt="Digital Academy" />
        <h2>Una de las academias</h2>
        <h2>
          virtuales líderes en Latinoamérica. Formación digital de calidad para
          impulsar tu crecimiento profesional.
        </h2>
      </div>

      <div className="forgot-right">
        <img src={logo_cursos} alt="Digital Academy" className="small-logo" />
        <h3>RECUPERAR CONTRASEÑA</h3>
        <p>Ingresa tu correo electrónico para restablecer tu contraseña</p>

        <form className="form" onSubmit={handleSubmit}>
          <label>Correo Electrónico</label>
          <input
            type="email"
            placeholder="Ingrese su correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">Enviar enlace</button>
        </form>

        <div className="back-login">
          <p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              Volver al inicio de sesión
            </a>
          </p>
        </div>

        <footer>© 2025 Digital Academy. Todos los derechos reservados.</footer>
      </div>
    </div>
  );
}

export default ForgotPassword;
