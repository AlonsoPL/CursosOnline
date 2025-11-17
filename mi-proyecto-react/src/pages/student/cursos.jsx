import { Link } from "react-router-dom";
import logo from "../../assets/logo-cursos.png";
import NavStudent from "../../components/nav_student";
import img4 from "../../assets/img4.png";

function Cursos() {
    return (
        <div className="row mx-0 vh-100 ">
            <div className="col-2 mt-4 d-flex flex-column align-items-center">
                <div className="contenedor-logo mt-3">
                    <img src={logo} alt="Logo" />
                </div>
                <NavStudent />
            </div>
            <div className="col-10 p-0 d-flex align-items-center">
                <div className="box-body rounded-5 p-5 box-scroll">
                    <header className="d-flex align-items-center justify-content-between">
                        <h3 className="mb-0">Cursos</h3>
                        <div className="user text-end py-2 d-flex align-items-center justify-content-end">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-person-circle me-2"
                                viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path
                                    fillRule="evenodd"
                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 
                    11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 
                    2.37A7 7 0 0 0 8 1"
                                />
                            </svg>
                            <div className="dropdown">
                                <button
                                    className="btn btn-sm dropdown-toggle"
                                    type="button"
                                    id="userDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Hector Ramon
                                </button>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="userDropdown">
                                    <li>
                                        <button className="dropdown-item" type="button">
                                            Perfil
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="dropdown-item text-danger"
                                            type="button">
                                            Cerrar sesión
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </header>
                    <main>
                        <div className="mt-3">
                            <div class="dropdown">
                                <button
                                    class="btn btn-light dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Categoría de Cursos
                                </button>

                                <ul class="dropdown-menu bg-white">
                                    <li><a class="dropdown-item" href="#">Programación</a></li>
                                    <li><a class="dropdown-item" href="#">Diseño Web</a></li>
                                    <li><a class="dropdown-item" href="#">Marketing</a></li>
                                    <li><a class="dropdown-item" href="#">Negocios</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="container mt-4 p-0">
                            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                <Link to="/student/cursos/1" className="text-decoration-none text-dark">
                                    <div className="card h-100 p-3 rounded-4">
                                        <img src={img4} className="card-img-small" alt="curso" />
                                        <div className="card-body text-start mt-2">
                                            <h5 className="card-title">Curso de HTML</h5>
                                            <p className="card-text">
                                                <strong>Lecciones:</strong> 25 <br />
                                                <strong>Duración:</strong> 6 hrs
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/student/cursos/1" className="text-decoration-none text-dark">
                                    <div className="card h-100 p-3 rounded-4">
                                        <img src={img4} className="card-img-small" alt="curso" />
                                        <div className="card-body text-start mt-2">
                                            <h5 className="card-title">Curso de HTML</h5>
                                            <p className="card-text">
                                                <strong>Lecciones:</strong> 25 <br />
                                                <strong>Duración:</strong> 6 hrs
                                            </p>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/student/cursos/1" className="text-decoration-none text-dark">
                                    <div className="card h-100 p-3 rounded-4">
                                        <img src={img4} className="card-img-small" alt="curso" />
                                        <div className="card-body text-start mt-2">
                                            <h5 className="card-title">Curso de HTML</h5>
                                            <p className="card-text">
                                                <strong>Lecciones:</strong> 25 <br />
                                                <strong>Duración:</strong> 6 hrs
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/student/cursos/1" className="text-decoration-none text-dark">
                                    <div className="card h-100 p-3 rounded-4">
                                        <img src={img4} className="card-img-small" alt="curso" />
                                        <div className="card-body text-start mt-2">
                                            <h5 className="card-title">Curso de HTML</h5>
                                            <p className="card-text">
                                                <strong>Lecciones:</strong> 25 <br />
                                                <strong>Duración:</strong> 6 hrs
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/student/cursos/1" className="text-decoration-none text-dark">
                                    <div className="card h-100 p-3 rounded-4">
                                        <img src={img4} className="card-img-small" alt="curso" />
                                        <div className="card-body text-start mt-2">
                                            <h5 className="card-title">Curso de HTML</h5>
                                            <p className="card-text">
                                                <strong>Lecciones:</strong> 25 <br />
                                                <strong>Duración:</strong> 6 hrs
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/student/cursos/1" className="text-decoration-none text-dark">
                                    <div className="card h-100 p-3 rounded-4">
                                        <img src={img4} className="card-img-small" alt="curso" />
                                        <div className="card-body text-start mt-2">
                                            <h5 className="card-title">Curso de HTML</h5>
                                            <p className="card-text">
                                                <strong>Lecciones:</strong> 25 <br />
                                                <strong>Duración:</strong> 6 hrs
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/student/cursos/1" className="text-decoration-none text-dark">
                                    <div className="card h-100 p-3 rounded-4">
                                        <img src={img4} className="card-img-small" alt="curso" />
                                        <div className="card-body text-start mt-2">
                                            <h5 className="card-title">Curso de HTML</h5>
                                            <p className="card-text">
                                                <strong>Lecciones:</strong> 25 <br />
                                                <strong>Duración:</strong> 6 hrs
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/student/cursos/1" className="text-decoration-none text-dark">
                                    <div className="card h-100 p-3 rounded-4">
                                        <img src={img4} className="card-img-small" alt="curso" />
                                        <div className="card-body text-start mt-2">
                                            <h5 className="card-title">Curso de HTML</h5>
                                            <p className="card-text">
                                                <strong>Lecciones:</strong> 25 <br />
                                                <strong>Duración:</strong> 6 hrs
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
export default Cursos;
