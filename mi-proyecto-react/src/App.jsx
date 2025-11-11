import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

// 🧩 Páginas de Estudiante
import Home from "./pages/student/home";
import Cursos from "./pages/student/cursos";
import MisCursos from "./pages/student/misCursos";

// 🧩 Páginas de Profesor y Admin
import HomeProfesor from "./pages/teacher/HomeProfesor";
import HomeAdmin from "./pages/admin/HomeAdmin";

function AppRouter() {
  return (
    <Routes>
      {/* LOGIN */}
      <Route path="/" element={<Login />} />

      {/* ESTUDIANTE */}
      <Route path="/student/home" element={<Home />} />
      <Route path="/student/cursos" element={<Cursos />} />
      <Route path="/student/mis-cursos" element={<MisCursos />} />

      {/* PROFESOR */}
      <Route path="/teacher/home" element={<HomeProfesor />} />

      {/* ADMIN */}
      <Route path="/admin/home" element={<HomeAdmin />} />
    </Routes>
  );
}

export default AppRouter;
