import "./styles.css";
import React from "react";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxAPIs from "./components/AjaxAPIs";
import AjaxHooks from "./components/AjaxHooks";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import HooksPersonalizados from "./components/HooksPersonalizados";

export default function App() {
  return (
    <div className="App">
      <br></br>
      <h1>Hola React</h1>
      <h2>
        Mi primera toma de contacto con React desde un repositorio de Sandbox!!!
      </h2>
      <p>Esto es un párrafo con Emmet</p>
      <p>Esto es un párrafo con Emmet</p>
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
          funcion={(num) => num * num}
          elementoReact={<i>Esto es un elemento React</i>}
          componenteReact={
            <Componente msg="Soy un componente pasado como prop" />
          }
        />
        <hr />
        <Estado />
        <hr />
        <RenderizadoCondicional />
        <hr />
        <RenderizadoElementos />
        <hr />
        <EventosES6 />
        <hr />
        <EventosES7 />
        <hr />
        <MasSobreEventos />
        <hr />
        <ComunicacionComponentes />
        <hr />
        <CicloVida />
        <hr />
        <AjaxAPIs />
        <hr />
        <ContadorHooks />
        <hr />
        <ScrollHooks />
        <hr />
        <RelojHooks />
        <hr />
        <AjaxHooks />
        <hr />
        <HooksPersonalizados />
      </section>
    </div>
  );
}
