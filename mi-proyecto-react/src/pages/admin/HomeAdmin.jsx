import { useNavigate } from "react-router-dom";

function HomeAdmin() {
  const navigate = useNavigate();

  return (
    <div className="p-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Panel del Administrador </h1>
        <button className="btn btn-danger" onClick={() => navigate("/")}>
          Cerrar sesión
        </button>
      </div>
      <p>Administrador de usuarios, cursos y configuraciones del sistema</p>
    </div>
  );
}

export default HomeAdmin;
