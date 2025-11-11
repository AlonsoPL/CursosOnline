import { useNavigate } from "react-router-dom";

function HomeProfesor() {
  const navigate = useNavigate();

  return (
    <div className="p-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Panel del Profesor </h1>
        <button className="btn btn-danger" onClick={() => navigate("/")}>
          Cerrar sesión
        </button>
      </div>
      <p>gestion de cursos</p>
    </div>
  );
}

export default HomeProfesor;
