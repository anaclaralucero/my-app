import React, { useState } from "react";
import "./App.css";

function App() {
  const [estaSonando, setEstaSonando] = useState("");
  const notas = [
    {
      nombre: "Do",
      link: require("./notes/do.wav"),
      tieneSostenido: true,
    },
    {
      nombre: "Re",
      link: require("./notes/re.wav"),
      tieneSostenido: true,
    },
    {
      nombre: "Mi",
      link: require("./notes/mi.wav"),
    },
    {
      nombre: "Fa",
      link: require("./notes/fa.wav"),
      tieneSostenido: true,
    },
    {
      nombre: "Sol",
      link: require("./notes/sol.wav"),
      tieneSostenido: true,
    },
    {
      nombre: "La",
      link: require("./notes/la.wav"),
      tieneSostenido: true,
    },
    {
      nombre: "si",
      link: require("./notes/si.wav"),
    },
  ];
  const handleClick = (nota) => {
    setEstaSonando(nota.nombre);
    const sonido = new Audio(nota.link);
    sonido.play();
    setTimeout(() => {
      setEstaSonando("");
    }, 300);
  };
  return (
    <div className="App">
      <div className="titulo">
        <h1>Piano con React</h1>
        <h2>Hecho con amor por Ana Clara</h2>
        {estaSonando &&
          <h3>Esta está sonando la nota {estaSonando} </h3>
          }
      </div>
      <div className="contenedor">
        {notas.map((nota) => {
          return (
            <div
              className={`nota ${estaSonando === nota.nombre && "estaSonando"}`}
              onClick={() => handleClick(nota)}
            >
              {nota.tieneSostenido && <div className="negra"> </div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;