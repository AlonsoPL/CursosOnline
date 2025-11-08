import { Link } from "react-router-dom";
import logo from "../../assets/logo-cursos.png";
import NavStudent  from "../../components/nav_student";

function MisCursos() {
        return (
        <div className="row mx-0 pt-3 vh-100 ">
            <div className="col-2 mt-4 d-flex flex-column align-items-center">
                <div className="contenedor-logo mt-3">
                    <img src={logo} alt="Logo" />
                </div>
                <NavStudent />
            </div>
            <div className="col-10 p-0 d-flex align-items-center">
                <div className="box-body rounded-5 p-3">
                    MIS CURSOS
                </div>
            </div>
        </div>
    );
}
export default MisCursos;
