import React from "react";

export default function Propiedades(props) {
    return (
        <div>
            <h2>{props.porDefecto}</h2>
<<<<<<< HEAD
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.boolean ? "Verdadero" : "Falso"}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{props.objeto.nombre + " - " + props.objeto.apellido}</li>
                <li>{props.arreglo.map(props.funcion).join(", ")}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
=======
>>>>>>> 513b078583ed67a5a567c7009cc70c7999b62a6a
        </div>
    )
}

Propiedades.defaultProps = {
    porDefecto: "Las props"
}