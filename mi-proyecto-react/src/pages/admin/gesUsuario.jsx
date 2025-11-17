
import logo from "../../assets/logo-cursos.png";
import NavAdministrador from "../../components/nav_administrador";

function GetUsuario() {

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
                <main className="box-body rounded-5 p-5">
                    <div className="mt-4">
                        <h4>Usuarios</h4>
                    </div>
                    <form className="p-4 rounded bg-white shadow-sm mt-4">

                        <div className="row g-3">

                            {/* Nombre */}
                            <div className="col-md-6">
                                <label className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ingrese nombre"
                                />
                            </div>

                            {/* Apellido */}
                            <div className="col-md-6">
                                <label className="form-label">Apellido</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ingrese apellido"
                                />
                            </div>

                            {/* Correo */}
                            <div className="col-md-6">
                                <label className="form-label">Correo</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="ejemplo@correo.com"
                                />
                            </div>

                            {/* Contraseña */}
                            <div className="col-md-6">
                                <label className="form-label">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Ingrese contraseña"
                                />
                            </div>

                            {/* Rol */}
                            <div className="col-md-6">
                                <label className="form-label">Rol asignado</label>
                                <select className="form-select">
                                    <option value="estudiante">Estudiante</option>
                                    <option value="profesor">Profesor</option>
                                    <option value="administrador">Administrador</option>
                                </select>
                            </div>

                        </div>

                        {/* Botón */}
                        <div className="mt-4">
                            <button type="submit" className="btn-t2 px-4 rounded-1 p-2">
                                Crear Usuario
                            </button>
                        </div>

                    </form>
                    {/* BUSCADOR */}
                    <div className="mt-4">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Buscar alumno por nombre o correo..."
                            />
                            <button className="btn-t2 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                                <span className="ms-2">Buscar</span>
                            </button>
                        </div>
                    </div>

                    {/* TABLA DE ALUMNOS */}
                    <div className="mt-4">
                        <table className="table table-striped table-hover text-start">
                            <thead className="table-primary">
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Correo</th>
                                    <th>Rol</th>
                                    <th className="text-center">Acciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Juan</td>
                                    <td>Pérez</td>
                                    <td>juan@example.com</td>
                                    <td>Estudiante</td>
                                    <td className="text-center">
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

                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Maria</td>
                                    <td>Lopez</td>
                                    <td>maria@example.com</td>
                                    <td>Profesor</td>
                                    <td className="text-center">
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

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* MODAL EDITAR USUARIO */}
                    <div className="modal fade" id="modalEditarUsuario" tabIndex="-1">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h5 className="modal-title">Editar Usuario</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                <div className="modal-body">

                                    <label className="form-label">Nombre</label>
                                    <input type="text" className="form-control mb-2" defaultValue="Juan" />

                                    <label className="form-label">Apellido</label>
                                    <input type="text" className="form-control mb-2" defaultValue="Pérez" />

                                    <label className="form-label">Correo</label>
                                    <input type="email" className="form-control mb-2" defaultValue="juan@example.com" />

                                    <label className="form-label">Rol</label>
                                    <select className="form-select">
                                        <option selected>Estudiante</option>
                                        <option>Profesor</option>
                                        <option>Administrador</option>
                                    </select>

                                </div>

                                <div className="modal-footer">
                                    <button className="btn btn-secondary" data-bs-dismiss="modal">
                                        Cancelar
                                    </button>
                                    <button className="btn btn-primary" data-bs-dismiss="modal">
                                        Guardar
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* MODAL ELIMINAR USUARIO */}
                    <div className="modal fade" id="modalEliminarUsuario" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h5 className="modal-title text-danger">Eliminar Usuario</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                <div className="modal-body">
                                    <p className="mb-0">
                                        ¿Estás seguro de que deseas <strong>eliminar este usuario</strong>?
                                        <br />Esta acción no se puede deshacer.
                                    </p>
                                </div>

                                <div className="modal-footer">
                                    <button className="btn btn-secondary" data-bs-dismiss="modal">
                                        Cancelar
                                    </button>
                                    <button className="btn btn-danger" data-bs-dismiss="modal">
                                        Eliminar
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
};

export default GetUsuario;
