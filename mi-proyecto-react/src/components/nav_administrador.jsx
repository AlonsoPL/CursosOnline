import { Link, useNavigate } from "react-router-dom";

function NavAdministrador() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <div className="contenedor-nav d-flex flex-column text-start gap-3 mt-4">
            <Link to="/admin/home" className="a-nav py-3 px-3">
                <i className="bi bi-bank"></i>
                <span className="ms-2">Home</span>
            </Link>

            <Link to="/admin/GetUsuario" className="a-nav py-3 px-3">
                <i className="bi bi-archive"></i>
                <span className="ms-2">Gestion de Usuarios</span>
            </Link>

            <Link to="/admin/getCursos" className="a-nav py-3 px-3">
                <i className="bi bi-backpack3"></i>
                <span className="ms-2">Gestion de Cursos</span>
            </Link>

            <Link to="/admin/reportesProgresos" className="a-nav py-3 px-3">
                <i className="bi bi-backpack3"></i>
                <span className="ms-2">Reportes y Progresos</span>
            </Link>

            <button onClick={handleLogout} className="a-nav py-3 px-3 text-start btn btn-link text-decoration-none">
                <i className="bi bi-box-arrow-right"></i>
                <span className="ms-2 text-color">Cerrar sesión</span>
            </button>
        </div>
    );
}

export default NavAdministrador;


