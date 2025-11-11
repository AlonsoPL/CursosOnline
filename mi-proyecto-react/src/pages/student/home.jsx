import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo-cursos.png";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import NavStudent from "../../components/nav_student";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="row mx-0 vh-100">
      {/* Barra lateral izquierda */}
      <div className="col-2 mt-4 d-flex flex-column align-items-center">
        <div className="contenedor-logo mt-3">
          <img src={logo} alt="Logo" />
        </div>
        <NavStudent />
      </div>

      {/* Contenido principal */}
      <div className="col-10 p-0 d-flex align-items-center">
        <div className="box-body rounded-5 p-5">
          {/* Sección saludo */}
          <div className="container-1 d-flex">
            <div className="box-saludo px-4 rounded-3">
              <div className="box-textoSaludo d-flex flex-column justify-content-center">
                <h5 className="texto-saludo">Hola.......; ¡Bienvenido!</h5>
                <p>Es bueno verte otra vez</p>
              </div>
              <div className="box-img">
                <img src={img1} alt="img1" />
              </div>
            </div>

            {/* Usuario */}
            <div className="box-datos">
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
                    id="userDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hector Ramon
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="userDropdown"
                  >
                    <li>
                      <button className="dropdown-item" type="button">
                        Perfil
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item text-danger"
                        type="button"
                        onClick={handleLogout}
                      >
                        Cerrar sesión
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tarjetas de progreso */}
              <div className="row mx-0 justify-content-end gap-4">
                <div className="col-5 rounded-3 card-porcentaje">
                  <div className="py-3 row mx-0">
                    <div className="col-2 icon-green d-flex justify-content-center align-items-center p-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-clipboard-check-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 
                        2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 
                        1a.5.5 0 0 1 .5.5v1a.5.5 0 0 
                        1-.5.5h-3a.5.5 0 0 
                        1-.5-.5v-1a.5.5 0 0 
                        1 .5-.5z" />
                        <path d="M4 1.5H3a2 2 0 0 0-2 
                        2V14a2 2 0 0 0 2 2h10a2 2 0 
                        0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 
                        2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 
                        4 2.5zm6.854 7.354-3 
                        3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 
                        0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 
                        0 0 1 .708.708" />
                      </svg>
                    </div>
                    <div className="col-10">
                      <h4 className="m-0">03</h4>
                      <p className="letra-pequeña m-0">Cursos completados</p>
                    </div>
                    <div className="col-12 mt-3 px-0 d-flex align-items-center gap-2">
                      <progress value="50" max="100" style={{ width: "80%" }}></progress>
                      <span>50%</span>
                    </div>
                  </div>
                </div>

                <div className="col-5 rounded-3 card-porcentaje">
                  <div className="py-3 row mx-0">
                    <div className="col-2 icon-oranje d-flex justify-content-center align-items-center p-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-graph-up-arrow"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M0 0h1v15h15v1H0zm10 
                          3.5a.5.5 0 0 1 .5-.5h4a.5.5 
                          0 0 1 .5.5v4a.5.5 0 0 
                          1-1 0V4.9l-3.613 
                          4.417a.5.5 0 0 1-.74.037L7.06 
                          6.767l-3.656 
                          5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 
                          0 0 1 .758-.06l2.609 
                          2.61L13.445 4H10.5a.5.5 0 0 
                          1-.5-.5"
                        />
                      </svg>
                    </div>
                    <div className="col-10">
                      <h4 className="m-0">02</h4>
                      <p className="letra-pequeña m-0">Cursos en progreso</p>
                    </div>
                    <div className="col-12 mt-3 px-0 d-flex align-items-center gap-2">
                      <progress value="40" max="100" style={{ width: "80%" }}></progress>
                      <span>40%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Banner principal */}
          <div className="container-2 d-flex rounded-5 mt-4">
            <div className="img-home">
              <img src={img2} alt="img2" />
            </div>
            <div className="text-home d-flex flex-column justify-content-center px-3">
              <h1 className="texto-saludo">Aprende a tu ritmo,</h1>
              <p className="text-2">mejora cada día</p>
              <span className="text-3">
                Domina nuevas habilidades y alcanza tus metas con los mejores cursos online.
              </span>
            </div>
          </div>

          {/* Cursos populares y actividades */}
          <div className="container-3 row mx-0 mt-3">
            <div className="col-8 row mx-0 gap-4 justify-content-between">
              <div className="col-12 d-flex justify-content-between">
                <h5 className="texto-saludo">Cursos Populares</h5>
                <button className="btn-verTodo rounded px-2">Ver Todos</button>
              </div>

              {[img4, img3].map((img, index) => (
                <div key={index} className="col-5 rounded card-curso row mx-0 p-2">
                  <div className="col-6 img-card px-0 rounded">
                    <img src={img} alt={`curso-${index}`} />
                  </div>
                  <div className="col-6 p-2">
                    <h6>Nombre del curso</h6>
                    <span className="letra-pequeña p-0 m-0">Inicia.......</span>
                    <p className="icon-oranje letra-mediana pt-3">N° de Alumnos</p>
                  </div>
                  <div className="col-12 letra-mediana p-2">
                    <p className="mb-0">
                      Digital Marketing Ethics: Navigating the Ethical Landscape
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actividades */}
            <div className="col-4">
              <h5 className="texto-saludo">Actividades</h5>
              {["Hacer la actividad de Word....", "Avance de Proyecto en Python...."].map(
                (texto, i) => (
                  <div key={i} className="col-12 card-actividades p-3 rounded mb-3">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="blue"
                        className="bi bi-file-earmark-text-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M9.293 0H4a2 2 0 0 0-2 
                          2v12a2 2 0 0 0 2 2h8a2 2 
                          0 0 0 2-2V4.707A1 1 0 0 
                          0 13.707 4L10 .293A1 1 0 0 
                          0 9.293 0M9.5 3.5v-2l3 3h-2a1 
                          1 0 0 1-1-1M4.5 9a.5.5 0 0 
                          1 0-1h7a.5.5 0 0 1 0 
                          1zM4 10.5a.5.5 0 0 1 
                          .5-.5h7a.5.5 0 0 1 0 
                          1h-7a.5.5 0 0 1-.5-.5m.5 
                          2.5a.5.5 0 0 1 0-1h4a.5.5 
                          0 0 1 0 1z"
                        />
                      </svg>
                      <p className="mb-0 letra-mediana">{texto}</p>
                    </div>
                    <div className="d-flex justify-content-end gap-3">
                      <button className="btn-t1">Omitir</button>
                      <button className="btn-t2 p-2 rounded">Ir a Actividad</button>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

