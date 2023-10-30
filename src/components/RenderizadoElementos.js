<<<<<<< HEAD
import React, { Component } from "react";

export default class RenderizadoElementos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seasons: ["Primavera", "Verano", "Otoño", "Invierno"]
        }
    }

    render() {
        return (
            <div>
                <h2>Renderizado de elementos</h2>
                <h4>Estaciones del año</h4>
                <ol>
                    {this.state.seasons.map(el => <li>{el}</li>)}
                </ol>
=======
import React, {Component} from "react";

export default class RenderizadoElementos extends Component {
    render(){
        return(
            <div>
                <h2>Renderizado de elementos</h2>
>>>>>>> 5875dd30c1228b4c6c0bd7653fb4362016e29975
            </div>
        )
    }
}