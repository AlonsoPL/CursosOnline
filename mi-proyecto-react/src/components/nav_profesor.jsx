import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo-cursos.png";

function NavProfesor() {
  const navigate = useNavigate();
  const location = useLocation(); 

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="contenedor-nav d-flex flex-column text-start">

      {/* Logo */}
      <div className="logo-box text-center mb-4">
        <img src={logo} alt="Logo" className="logo-img" />
        <h3 className="logo-text">Digital Academy</h3>
      </div>

      {/* Opciones */}
      <Link
        to="/teacher/home"
        className={`a-nav py-3 px-3 ${location.pathname === "/teacher/home" ? "active-nav" : ""}`}
      >
        <i className="bi bi-bank"></i>
        <span className="ms-2">Home</span>
      </Link>

      <Link
        to="/teacher/cursos"
        className={`a-nav py-3 px-3 ${location.pathname === "/teacher/cursos" ? "active-nav" : ""}`}
      >
        <i className="bi bi-journal-bookmark"></i>
        <span className="ms-2">Mis Cursos</span>
      </Link>

      <Link
        to="/teacher/progreso"
        className={`a-nav py-3 px-3 ${location.pathname === "/teacher/progreso" ? "active-nav" : ""}`}
      >
        <i className="bi bi-bar-chart-line"></i>
        <span className="ms-2">Progreso del Estudiante</span>
      </Link>

      {/* Cerrar sesión */}
      <button
        onClick={handleLogout}
        className="a-nav py-3 px-3 btn btn-link text-start text-decoration-none mt-auto logout-btn"
      >
        <i className="bi bi-box-arrow-right"></i>
        <h5 className="ms-1">Cerrar sesión</h5>
      </button>
    </div>
  );
}

export default NavProfesor;
