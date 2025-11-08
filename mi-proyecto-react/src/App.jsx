import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login";
import Home from "../src/pages/student/home";
import Cursos from "../src/pages/student/cursos";
import MisCursos from "../src/pages/student/misCursos";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/mis-cursos" element={<MisCursos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
