import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

// Páginas de Estudiante
import Home from "./pages/student/home";
import Cursos from "./pages/student/cursos";
import MisCursos from "./pages/student/misCursos";
import CourseView from "./pages/student/courseView";

// Páginas de Profesor y Admin
import HomeProfesor from "./pages/teacher/HomeProfesor";
import CursosProfesor from "./pages/teacher/CursosProfesor";
import MisCursosProfesor from "./pages/teacher/MisCursosProfesor";
import HomeAdmin from "./pages/admin/homeAdmin";
import GetUsuario from "./pages/admin/gesUsuario";
import GetCursos from "./pages/admin/getCursos";
import ReportesProgresos from "./pages/admin/reportesProgresos";

function AppRouter() {
  return (
    <Routes>
      {/* LOGIN */}
      <Route path="/" element={<Login />} />

      {/* ESTUDIANTE */}
      <Route path="/student/home" element={<Home />} />
      <Route path="/student/cursos" element={<Cursos />} />
      <Route path="/student/mis-cursos" element={<MisCursos />} />
      <Route path="/student/cursos/:id" element={<CourseView />} />


      {/* PROFESOR */}
      <Route path="/teacher/home" element={<HomeProfesor />} />
      <Route path="/teacher/cursos" element={<CursosProfesor />} />
      <Route path="/teacher/mis-cursos" element={<MisCursosProfesor />} />

      {/* ADMIN */}
      <Route path="/admin/home" element={<HomeAdmin />} />
      <Route path="/admin/getUsuario" element={<GetUsuario />} />
      <Route path="/admin/getCursos" element={<GetCursos />} />
      <Route path="/admin/reportesProgresos" element={<ReportesProgresos />} />
    </Routes>
  );
}

export default AppRouter;

 