import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/register";
import ForgotPassword from "./pages/ForgotPassword";
import EmailSent from "./pages/Emailsent";

//  Estudiante
import Home from "./pages/student/home";
import Cursos from "./pages/student/cursos";
import MisCursos from "./pages/student/misCursos";
import CourseView from "./pages/student/courseView";

//  Profesor
import HomeProfesor from "./pages/teacher/HomeProfesor";
import MisCursosProfesor from "./pages/teacher/MisCursosProfesor";
import CourseViewProfesor from "./pages/teacher/courseViewProfesor";
import ProgresoEstudiante from "./pages/teacher/ProgresoEstudiante";

//  Admin
import HomeAdmin from "./pages/admin/HomeAdmin";
import GetUsuario from "./pages/admin/gesUsuario";
import GetCursos from "./pages/admin/getCursos";
import ReportesProgresos from "./pages/admin/reportesProgresos";

function AppRouter() {
  return (
    <Routes>
      {/* LOGIN */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/email-sent" element={<EmailSent />} />

      {/* ESTUDIANTE */}
      <Route path="/student/home" element={<Home />} />
      <Route path="/student/cursos" element={<Cursos />} />
      <Route path="/student/mis-cursos" element={<MisCursos />} />
      <Route path="/student/courseView" element={<CourseView />} /> 

      {/* PROFESOR */}
      <Route path="/teacher/home" element={<HomeProfesor />} />
      <Route path="/teacher/cursos" element={<MisCursosProfesor />} />
      <Route path="/teacher/curso" element={<CourseViewProfesor />} />
      <Route path="/teacher/progreso" element={<ProgresoEstudiante />} />

      {/* ADMINISTRADOR */}
      <Route path="/admin/home" element={<HomeAdmin />} />
      <Route path="/admin/getUsuario" element={<GetUsuario />} />
      <Route path="/admin/getCursos" element={<GetCursos />} />
      <Route path="/admin/reportesProgresos" element={<ReportesProgresos />} />
    </Routes>
  );
}

export default AppRouter;
