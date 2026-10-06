import React, { Component } from "react";

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul id="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/cine">Cine</a>
          </li>
          <li>
            <a href="/musica">Musica</a>
          </li>
          <li>
            <a href="/form">Formulario</a>
          </li>
          <li>
            <a href="/collatz">Collatz</a>
          </li>
          <li>
            <a href="/tabla">Tabla multiplicar</a>
          </li>
          <li>
            <a href="/tabla">Select / Tabla multiplicarV2 </a>
          </li>
          <li>
            <a href="/select">Select Multiple </a>
          </li>
        </ul>
      </div>
    );
  }
}
