import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo-cursos.png";
import NavStudent from "../../components/nav_student";
import img4 from "../../assets/img4.png";

function Cursos() {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const openModal = () => {
        setShowModal(true);
    };

    const goToCourse = () => {
        setShowModal(false);
        navigate("/student/courseView");
    };

    return (
        <div className="row mx-0 vh-100">
            {/* Barra lateral */}
            <div className="col-2 mt-4 d-flex flex-column align-items-center">
                <div className="contenedor-logo mt-3">
                    <img src={logo} alt="Logo" />
                </div>
                <NavStudent />
            </div>

            {/* Contenido principal */}
            <div className="col-10 p-0 d-flex align-items-center">
                <div className="box-body rounded-5 p-5 box-scroll">
                    <header className="d-flex align-items-center justify-content-between">
                        <h3 className="mb-0">Cursos</h3>

                        {/* Usuario */}
                        <div className="user text-end py-2 d-flex align-items-center justify-content-end">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-person-circle me-2"
                                viewBox="0 0 16 16"
                            >
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
                                    data-bs-toggle="dropdown"
                                >
                                    Hector Ramon
                                </button>

                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <button className="dropdown-item">Perfil</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item text-danger">
                                            Cerrar sesión
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </header>

                    <main>
                        {/* CATEGORÍAS */}
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

                        {/* TARJETAS */}
                        <div className="container mt-4">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

                                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                                    <div className="col" key={n}>
                                        <div
                                            className="card h-100 p-3 rounded-4 shadow-sm"
                                            style={{ cursor: "pointer" }}
                                            onClick={openModal}
                                        >
                                            <img
                                                src={img4}
                                                className="card-img-small mb-2"
                                                alt="curso"
                                            />

                                            <div className="card-body text-start">
                                                <h5 className="card-title mb-2">Curso de HTML</h5>
                                                <p className="card-text">
                                                    <strong>Lecciones:</strong> 25 <br />
                                                    <strong>Duración:</strong> 6 hrs
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </main>
                </div>
            </div>

            {/* MODAL */}
            {showModal && (
                <div
                    className="modal fade show d-block"
                    style={{ background: "rgba(0,0,0,0.5)" }}
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title">Confirmar inscripción</h5>
                                <button
                                    className="btn-close"
                                    onClick={() => setShowModal(false)}
                                />
                            </div>

                            <div className="modal-body">
                                ¿Quieres entrar al curso?
                            </div>

                            <div className="modal-footer">
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancelar
                                </button>

                                <button
                                    className="btn btn-primary"
                                    onClick={goToCourse}
                                >
                                    ¿Deseas inscribirte en este curso?
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cursos;
