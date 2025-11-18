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
                <div className="box-body rounded-5 p-5 w-100">

                    {/* Título + Filtros + Botones */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h3 className="m-0">Reporte de Cursos</h3>

                        <div className="d-flex align-items-center gap-3">

                            {/* SELECT FILTRO */}
                            <select className="form-select" style={{ width: "200px" }}>
                                <option value="">Cursos populares</option>
                                <option value="">Cursos recientes</option>
                                <option value="">Con más alumnos</option>
                                <option value="">Con menos alumnos</option>
                            </select>

                            {/* BOTÓN PDF */}
                            <button className="btn btn-danger d-flex align-items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filetype-pdf" viewBox="0 0 16 16">
                                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3.5-.5a.5.5 0 0 1-.5-.5V1H4a1 1 0 0 0-1 1v12c0 .552.448 1 1 1h8c.552 0 1-.448 1-1V4h-2.5z"/>
                                </svg>
                                PDF
                            </button>

                            {/* BOTÓN EXCEL */}
                            <button className="btn btn-success d-flex align-items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-excel" viewBox="0 0 16 16">
                                    <path d="M5.884 6.68a.5.5 0 0 1 .737-.675L8 7.807l1.379-1.802a.5.5 0 1 1 .784.62L8.716 8.5l1.447 1.88a.5.5 0 1 1-.784.62L8 9.193l-1.379 1.807a.5.5 0 1 1-.784-.62L7.284 8.5 5.884 6.68z" />
                                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM10.5 4a.5.5 0 0 1-.5-.5V1H4a1 1 0 0 0-1 1v12c0 .552.448 1 1 1h8c.552 0 1-.448 1-1V4h-2.5z"/>
                                </svg>
                                Excel
                            </button>

                        </div>
                    </div>

                    {/* TABLA DE REPORTE */}
                    <table className="table table-striped table-hover table-bordered text-start mt-3">
                        <thead className="table-primary">
                            <tr>
                                <th>#</th>
                                <th>Curso</th>
                                <th>Profesor</th>
                                <th>Alumnos Inscritos</th>
                                <th>Alumnos Finalizaron</th>
                                <th>Duración</th>
                                <th>Fecha de creación</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>HTML desde Cero</td>
                                <td>Juan Pérez</td>
                                <td>35</td>
                                <td>20</td>
                                <td>6 horas</td>
                                <td>12/02/2025</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>CSS Avanzado</td>
                                <td>María López</td>
                                <td>28</td>
                                <td>15</td>
                                <td>8 horas</td>
                                <td>08/02/2025</td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>JavaScript Profesional</td>
                                <td>Carlos Rivera</td>
                                <td>42</td>
                                <td>30</td>
                                <td>12 horas</td>
                                <td>01/02/2025</td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>React Básico</td>
                                <td>Lucía Torres</td>
                                <td>19</td>
                                <td>11</td>
                                <td>10 horas</td>
                                <td>15/01/2025</td>
                            </tr>

                            <tr>
                                <td>5</td>
                                <td>Backend con NodeJS</td>
                                <td>Pedro García</td>
                                <td>30</td>
                                <td>18</td>
                                <td>15 horas</td>
                                <td>10/01/2025</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default ReportesProgresos;
