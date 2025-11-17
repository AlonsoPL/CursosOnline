import { useParams, Link } from "react-router-dom";

function CourseView() {
    const { id } = useParams();

    const modules = [
        {
            title: "Módulo 1: Introducción",
            classes: ["¿Qué es HTML?", "Instalación VSCode", "Estructura básica"]
        },
        {
            title: "Módulo 2: Etiquetas básicas",
            classes: ["Parrafos", "Imágenes", "Enlaces"]
        },
        {
            title: "Módulo 3: Tablas y Formularios",
            classes: ["Tablas", "Inputs", "Formularios completos"]
        }
    ];

    return (
        <div className="container-fluid p-4">

            {/* BOTÓN DE REGRESO */}
            <Link to="/student/home" className="btn btn-outline-primary mb-3">
                ← Regresar a los cursos
            </Link>

            <div className="row">
                {/* Video principal */}
                <div className="col-lg-8 col-12">
                    <div className="ratio ratio-16x9 rounded overflow-hidden">
                        <iframe
                            src="https://www.youtube.com/embed/MJkdaVFHrto"
                            title="Curso video"
                            allowFullScreen
                        />
                    </div>

                    <h2 className="mt-3">Curso de HTML — Clase {id}</h2>
                    <p>
                        Aquí va la información o descripción del curso.
                    </p>
                </div>

                {/* Módulos y clases */}
                <div className="col-lg-4 col-12">
                    <div className="list-group shadow-sm rounded"
                        style={{ maxHeight: "80vh", overflowY: "auto" }}>
                        {modules.map((mod, i) => (
                            <div key={i} className="border-bottom">
                                <h6 className="m-2">{mod.title}</h6>

                                {mod.classes.map((clase, j) => (
                                    <button
                                        key={j}
                                        className="list-group-item list-group-item-action"
                                        onClick={() => console.log("Abrir clase:", clase)}
                                    >
                                        {clase}
                                    </button>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseView;
