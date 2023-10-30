import "./styles.css";
import React from "react";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";

export default function App() {
  return (
    <div className="App">
      <h1>Hola React</h1>
      <h2>Mi primera toma de contacto con React desde un repositorio de Sandbox!!!</h2>
      <br />
      <br />
      <section>
        <Componente msg="Hola, soy un componente funcional expresado desde una prop" />
        <Propiedades
          cadena="Esto es una cadena de texto"
          numero={19} boolean={true}
          arreglo={[1, 2, 3]}
          objeto={{ nombre: "Eduardo", apellido: "Camavinga" }}
          funcion={num => num * num}
          elementoReact={<i>Esto es un elemento React</i>}
          componenteReact={<Componente msg="Soy un componente pasado como Prop" />}
        />
      </section>
    </div>
  );
}
