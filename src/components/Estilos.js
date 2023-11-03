import React from "react";
import "./Estilos.css";
import moduleStyles from "./Estilos.module.css";

export default function Estilos() {
  let myStyles = {
    border: "none",
    borderRadius: "2rem",
    backgroundColor: "#61dafb",
    margin: "1rem auto",
    padding: ".75rem 1.75rem",
    width: "fit-content",
  };

  return (
    <>
      <section className="estilos">
        <h2>Estilos CSS en React</h2>
        <h3 className="bg-react">Estilos en hoja CSS externa</h3>
        <h3 style={{ color: "red" }}>Estilos en línea</h3>
        <h3 style={myStyles}>Estilos con variable 1</h3>
        <h3 style={myStyles}>Estilos con variable 2</h3>
        <h3 style={myStyles}>Estilos con variable 3</h3>
        <h3 style={{ ...myStyles, backgroundColor: "violet" }}>
          Aplicamos normalize con <code>@import-normalize;</code>
        </h3>

        <h3 className={moduleStyles.error}>Estilos con módulos - error</h3>
        <h3 className={moduleStyles.success}>Estilos con módulos - éxito</h3>
      </section>
    </>
  );
}
