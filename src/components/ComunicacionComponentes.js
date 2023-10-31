import React, { Component } from "react";

export default class Padre extends Component {
<<<<<<< HEAD

    state = {
        contador: 0,
    };

    incrementarContador = (e) => {
        this.setState({
            contador: this.state.contador + 1,
        })
    }

=======
>>>>>>> 8ab83d3b6bab8d51a314f9d41b3a5221b4f9592b
    render() {
        return (
            <>
                <h2>Comunicación entre Componentes</h2>
                <p>Contador: <b>{this.state.contador}</b></p>

                <Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje para el hijo 1" />
                <Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje para el hijo 2" />
            </>
        )
    }
}

function Hijo(props) {
    return(
    <>
        <h3>{props.mensaje}</h3>
        <button onClick={props.incrementarContador}>+</button>
    </>
    )
}