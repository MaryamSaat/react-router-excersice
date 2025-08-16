import { Route, Routes, Navigate } from "react-router-dom";
import About from "./About";
import Show from "./Show";
import Contact from "./Contact";

const RouterAbout = ({ login }) => {
  return (
    <Routes>
      <Route path="/" element={login === true ? <About /> : <Navigate to={"/"} />} />
      <Route path="/:id" element={login === true ? <Show /> : <Navigate to={"/"} />} />
      <Route path="/contact" element={login === true ? <Contact /> : <Navigate to={"/"} />} />
    </Routes>
  );
};

export default RouterAbout;
