import { Link } from "react-router-dom";
import { useState } from "react";

function CourseView() {
    const modules = [
        {
            title: "Módulo 1: Introducción",
            classes: [
                {
                    title: "¿Qué es HTML?",
                    video: "https://www.youtube.com/embed/MJkdaVFHrto",
                    description: "En esta clase aprenderás qué es HTML y para qué sirve."
                },
                {
                    title: "Instalación de VSCode",
                    video: "https://www.youtube.com/embed/bSrm9RXwBaI",
                    description: "Aprende a instalar y configurar Visual Studio Code."
                },
                {
                    title: "Estructura básica",
                    video: "https://www.youtube.com/embed/UB1O30fR-EE",
                    description: "Conoce cómo se estructura un documento HTML."
                }
            ]
        },
        {
            title: "Módulo 2: Etiquetas básicas",
            classes: [
                {
                    title: "Párrafos",
                    video: "https://www.youtube.com/embed/inn4hP6Z_7E",
                    description: "Cómo usar la etiqueta <p> y otros elementos de texto."
                },
                {
                    title: "Imágenes",
                    video: "https://www.youtube.com/embed/AEaK_8ZM3JQ",
                    description: "Aprende a mostrar imágenes con la etiqueta <img>."
                },
                {
                    title: "Enlaces",
                    video: "https://www.youtube.com/embed/XiT5J5YdS94",
                    description: "Cómo funcionan los enlaces con <a>."
                }
            ]
        },
        {
            title: "Módulo 3: Tablas y Formularios",
            classes: [
                {
                    title: "Tablas",
                    video: "https://www.youtube.com/embed/04xM_vyT6bI",
                    description: "Aprende a crear tablas con HTML."
                },
                {
                    title: "Inputs",
                    video: "https://www.youtube.com/embed/fNcJuPIZ2WE",
                    description: "Tipos de input y atributos importantes."
                },
                {
                    title: "Formularios completos",
                    video: "https://www.youtube.com/embed/Q2imkhmhOFo",
                    description: "Construye formularios completos en HTML."
                }
            ]
        }
    ];

    // Estado de la clase seleccionada
    const [classSelected, setClassSelected] = useState(modules[0].classes[0]);

    return (
        <div className="container-fluid p-4">

            {/* BOTÓN DE REGRESO */}
            <Link to="/student/home" className="btn btn-outline-primary mb-3">
                ← Regresar a los cursos
            </Link>

            <div className="row">

                {/* VIDEO PRINCIPAL */}
                <div className="col-lg-8 col-12">
                    <div className="ratio ratio-16x9 rounded overflow-hidden">
                        <iframe
                            src={classSelected.video}
                            title="Curso video"
                            allowFullScreen
                        />
                    </div>

                    <h2 className="mt-3">{classSelected.title}</h2>
                    <p>{classSelected.description}</p>
                </div>

                {/* MÓDULOS Y CLASES */}
                <div className="col-lg-4 col-12">
                    <div
                        className="list-group shadow-sm rounded"
                        style={{ maxHeight: "80vh", overflowY: "auto" }}
                    >
                        {modules.map((mod, i) => (
                            <div key={i} className="border-bottom">
                                <h6 className="m-2">{mod.title}</h6>

                                {mod.classes.map((clase, j) => (
                                    <button
                                        key={j}
                                        className={`list-group-item list-group-item-action 
                                            ${classSelected.title === clase.title ? "active" : ""}`}
                                        onClick={() => setClassSelected(clase)}
                                    >
                                        {clase.title}
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
