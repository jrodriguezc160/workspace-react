import "./styles.css";
import React from "react";
import Componente from "./components/Componente";

export default function App() {
  return (
    <div className="App">
      <h1>Hola React</h1>
      <h2>Mi primera toma de contacto con React desde un repositorio de Sandbox!!!</h2>
      <br/>
      <br/>
      <section>
        <Componente msg="Hola, soy un componente desde una prop"/>
      </section>
    </div>
  );
}
