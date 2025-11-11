import { Link, useNavigate } from "react-router-dom";

function NavStudent() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // si guardas algo del usuario
    navigate("/"); // te lleva al login
  };

  return (
    <div className="contenedor-nav d-flex flex-column text-start gap-3 mt-4">
      <Link to="/student/home" className="a-nav py-3 px-3">
        <i className="bi bi-bank"></i>
        <span className="ms-2">Home</span>
      </Link>

      <Link to="/student/cursos" className="a-nav py-3 px-3">
        <i className="bi bi-archive"></i>
        <span className="ms-2">Cursos</span>
      </Link>

      <Link to="/student/mis-cursos" className="a-nav py-3 px-3">
        <i className="bi bi-backpack3"></i>
        <span className="ms-2">Mis cursos</span>
      </Link>

      <button onClick={handleLogout} className="a-nav py-3 px-3 text-start btn btn-link">
        <i className="bi bi-box-arrow-right"></i>
        <span className="ms-2">Cerrar sesión</span>
      </button>
    </div>
  );
}

export default NavStudent;


