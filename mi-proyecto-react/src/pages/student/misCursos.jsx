import { Link } from "react-router-dom";
import logo from "../../assets/logo-cursos.png";
import NavStudent from "../../components/nav_student";
import img4 from "../../assets/img4.png";

function MisCursos() {
    return (
        <div className="row mx-0 vh-100">
            {/* Lateral */}
            <div className="col-2 mt-4 d-flex flex-column align-items-center">
                <div className="contenedor-logo mt-3">
                    <img src={logo} alt="Logo" />
                </div>
                <NavStudent />
            </div>

            {/* Contenido */}
            <div className="col-10 p-0 d-flex align-items-center">
                <div className="box-body rounded-5 p-5 box-scroll">

                    {/* HEADER */}
                    <header className="d-flex align-items-center justify-content-between">
                        <h3 className="mb-0">Cursos Inscritos</h3>
                        
                        {/* Categorías */}
                        <div className="mt-3">
                            <div className="dropdown">
                                <button
                                    className="btn btn-light dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                >
                                    Categoría de Cursos
                                </button>

                                <ul className="dropdown-menu bg-white">
                                    <li><a className="dropdown-item">Programación</a></li>
                                    <li><a className="dropdown-item">Diseño Web</a></li>
                                    <li><a className="dropdown-item">Marketing</a></li>
                                    <li><a className="dropdown-item">Negocios</a></li>
                                </ul>
                            </div>
                        </div>
                    </header>

                    {/* CONTENIDO PRINCIPAL */}
                    <main>
                        {/* TARJETAS */}
                        <div className="container mt-4 p-0">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

                                {[1, 2, 3].map((curso) => (
                                    <div className="col" key={curso}>
                                        <Link
                                            to="/student/courseView"   
                                            className="text-decoration-none text-dark"
                                        >
                                            <div className="card h-100 p-3 rounded-4 shadow-sm">
                                                <img src={img4} className="card-img-small mb-2" alt="curso" />

                                                <div className="card-body text-start">
                                                    <h5 className="card-title">Curso de HTML</h5>
                                                    <p className="card-text">
                                                        <strong>Lecciones:</strong> 25 <br />
                                                        <strong>Duración:</strong> 6 hrs
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </main>

                </div>
            </div>
        </div>
    );
}

export default MisCursos;
