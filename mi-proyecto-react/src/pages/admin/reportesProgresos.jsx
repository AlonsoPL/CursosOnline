
import logo from "../../assets/logo-cursos.png";
import NavAdministrador from "../../components/nav_administrador";

function ReportesProgresos() {

    return (
        <div className="row mx-0 vh-100">
            {/* Barra lateral izquierda */}
            <div className="col-2 mt-4 d-flex flex-column align-items-center">
                <div className="contenedor-logo mt-3">
                    <img src={logo} alt="Logo" />
                </div>
                <NavAdministrador />
            </div>

            {/* Contenido principal */}
            <div className="col-10 p-0 d-flex align-items-center">
                <div className="box-body rounded-5 p-5">
                    <h1>En proceso....</h1>
                </div>
            </div>
        </div>
    );
};

export default ReportesProgresos;
