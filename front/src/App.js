import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";

import Institucional from "./pagina/Institucional";
import Novedades from "./pagina/Novedades";
import Departamentos from "./pagina/Departamentos";
import Galeria from "./pagina/Galeria";
import Practicasprofesionalizantes from "./pagina/Practicasprofesionalizantes";
import Aic from "./pagina/Aic";
import Pei from "./pagina/Pei";
import Contacto from "./pagina/Contacto";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Institucional />} />
          <Route path="/Novedades" element={<Novedades />} />
          <Route path="/Departamentos" element={<Departamentos />} />
          <Route path="/Galeria" element={<Galeria />} />
          <Route path="/Practicasprofesionalizantes" element={<Practicasprofesionalizantes />} />
          <Route path="/Aic" element={<Aic />} />
          <Route path="/Pei" element={<Pei />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
