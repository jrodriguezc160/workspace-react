import "./styles.css";
import React from "react";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";

export default function App() {
  return (
    <div className="App">
      <br></br>
      <h1>Hola React</h1>
      <h2>Mi primera toma de contacto con React desde un repositorio de Sandbox!!!</h2>
      <br />
      <br />
      <section>
        <Componente msg="Hola, soy un componente funcional expresado desde una prop" />
        <Propiedades
          cadena={"Esto es una cadena de texto"}
          numero={19}
          booleano={true}
          arreglo={[1, 2, 3]}
          objeto={{ nombre: "Cristiano", apellido: "Ronaldo" }}
          funcion={num => num * num}
          elementoReact={<i>Esto es un elemento React</i>}
          componenteReact={<Componente msg="Soy un componente pasado como prop" />}
        />
        <hr/>
        <Estado/>
<<<<<<< HEAD
        <hr/>
=======
>>>>>>> 916aeb73433bfd5ed6b8a215c3969314c5f66fb5
        <RenderizadoCondicional/>
      </section>
    </div>
  );
}
