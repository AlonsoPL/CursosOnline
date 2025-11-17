import { useNavigate } from "react-router-dom";
import logo_cursos from "../assets/logo-cursos.png";

function EmailSent() {
  const navigate = useNavigate();

  return (
    <div className="email-sent-container">
      <div className="email-sent-content">
        <img src={logo_cursos} alt="Digital Academy" className="logo" />
        <h2>¡Correo enviado con éxito!</h2>
        <p>
          Hemos enviado un enlace de recuperación a tu correo electrónico.
          Revisa tu bandeja de entrada o la carpeta de spam para continuar.
        </p>

        <button
          className="btn-volver"
          onClick={() => navigate("/")}
        >
          Volver al inicio de sesión
        </button>
      </div>
    </div>
  );
}

export default EmailSent;
