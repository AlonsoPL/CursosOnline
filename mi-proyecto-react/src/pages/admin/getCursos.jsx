import img4 from "../../assets/img4.png";
import logo from "../../assets/logo-cursos.png";
import NavAdministrador from "../../components/nav_administrador";

function GetCursos() {

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
                    {/* BUSCADOR */}
                    <div className="mt-4">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Buscar nombre del cursos o editor encargado"
                            />
                            <button className="btn-t2 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                                <span className="ms-2">Buscar</span>
                            </button>
                        </div>
                    </div>
                    <div className="container mt-4">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                            {/* TARJETAS */}
                            {[1, 2, 3, 4].map((item, index) => (
                                <div className="col" key={index}>
                                    <div className="card-admi bg-light h-100 rounded-4 p-0">

                                        {/* IMAGEN */}
                                        <img src={img4} className="card-img-small" alt="curso" />

                                        {/* CUERPO */}
                                        <div className="card-body text-start p-3">

                                            <span className="badge bg-light text-dark mb-2 px-0">
                                                CATEGORIA
                                            </span>

                                            <h6 className="m-0 fw-bold">NOMBRE DEL CURSO</h6>
                                            <small className="text-muted">Javier Ochoa</small>

                                            <div className="mt-2 d-flex align-items-center gap-2 text-muted">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
                                                    <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                                </svg>
                                                <small>15 Lecciones (10h 5m)</small>
                                            </div>
                                        </div>

                                        {/* ICONOS */}
                                        <div className="px-3 pb-3 d-flex gap-3">
                                            <button
                                                className="btn btn-sm btn-warning me-2"
                                                data-bs-toggle="modal"
                                                data-bs-target="#modalEditarUsuario">
                                                Editar
                                            </button>
                                            <button
                                                className="btn btn-sm btn-danger"
                                                data-bs-toggle="modal"
                                                data-bs-target="#modalEliminarUsuario"
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* MODAL EDITAR */}
                            <div className="modal fade" id="modalEditarUsuario" tabIndex="-1" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content rounded-4">
                                        <div className="modal-header">
                                            <h5 className="modal-title fw-bold">Editar Curso</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                        </div>

                                        <div className="modal-body">

                                            <label className="form-label fw-bold">Portada:</label>
                                            <input type="file" className="form-control mb-3" />

                                            <label className="form-label fw-bold">Nombre del curso:</label>
                                            <input type="text" className="form-control mb-3" defaultValue="NOMBRE DEL CURSO" />

                                            <label className="form-label fw-bold">Descripción:</label>
                                            <textarea className="form-control mb-3" rows="3">Descripción de ejemplo...</textarea>

                                            <label className="form-label fw-bold">Categoría:</label>
                                            <select className="form-select mb-3">
                                                <option>Programación</option>
                                                <option>Diseño</option>
                                                <option>Ofimática</option>
                                            </select>

                                            <label className="form-label fw-bold">Editor responsable:</label>
                                            <select className="form-select mb-3">
                                                <option>Javier Ochoa</option>
                                                <option>Ana Rosales</option>
                                                <option>Pedro Jiménez</option>
                                            </select>

                                        </div>

                                        <div className="modal-footer">
                                            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                            <button className="btn btn-primary">Guardar cambios</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* MODAL ELIMINAR */}
                            <div className="modal fade" id="modalEliminarUsuario" tabIndex="-1" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content rounded-4">
                                        <div className="modal-header">
                                            <h5 className="modal-title text-danger fw-bold">Eliminar Curso</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                        </div>

                                        <div className="modal-body">
                                            <p className="m-0">
                                                ¿Estás seguro que deseas eliminar este curso?
                                            </p>
                                        </div>

                                        <div className="modal-footer">
                                            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                            <button className="btn btn-danger">Eliminar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* TARJETA DE AGREGAR */}
                            {/* TARJETA DE AGREGAR */}
                            <div className="col">
                                <div
                                    className="card h-100 rounded-4 d-flex justify-content-center align-items-center"
                                    style={{ minHeight: "280px", cursor: "pointer" }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalAgregarCurso"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor"
                                        className="bi bi-cloud-arrow-up" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708z" />
                                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 
                                            6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 
                                            0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 
                                            1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 
                                            6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 
                                            15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 
                                            3a4.53 4.53 0 0 0-2.941 1.1z" />
                                    </svg>
                                </div>
                            </div>

                            {/* MODAL AGREGAR */}
                            <div className="modal fade" id="modalAgregarCurso" tabIndex="-1" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content rounded-4">
                                        <div className="modal-header">
                                            <h5 className="modal-title fw-bold">Agregar Curso</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                        </div>

                                        <div className="modal-body">

                                            {/* Subir portada */}
                                            <label className="form-label fw-bold">Portada del curso:</label>
                                            <input type="file" className="form-control mb-3" />

                                            {/* Nombre */}
                                            <label className="form-label fw-bold">Nombre del curso:</label>
                                            <input type="text" className="form-control mb-3" placeholder="Ej: Curso de HTML" />

                                            {/* Descripción */}
                                            <label className="form-label fw-bold">Descripción:</label>
                                            <textarea className="form-control mb-3" rows="3" placeholder="Descripción breve"></textarea>

                                            {/* Categoría */}
                                            <label className="form-label fw-bold">Categoría:</label>
                                            <select className="form-select mb-3">
                                                <option value="">Seleccionar categoría</option>
                                                <option>Programación</option>
                                                <option>Diseño</option>
                                                <option>Ofimática</option>
                                                <option>Marketing</option>
                                            </select>

                                            {/* Editor */}
                                            <label className="form-label fw-bold">Editor responsable:</label>
                                            <select className="form-select mb-3">
                                                <option value="">Seleccionar editor</option>
                                                <option>Javier Ochoa</option>
                                                <option>Ana Rosales</option>
                                                <option>Pedro Jiménez</option>
                                            </select>

                                        </div>

                                        <div className="modal-footer">
                                            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                            <button className="btn btn-primary">Guardar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetCursos;
