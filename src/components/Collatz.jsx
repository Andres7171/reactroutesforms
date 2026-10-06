import React, { Component } from "react";

export default class Collatz extends Component {
  cajaNumero = React.createRef();

  generarCollatz = (event) => {
    event.preventDefault();
    let numero = parseInt(this.cajaNumero.current.value);
    let almacenNumeros = [];
    while (numero != 1) {
      if (numero % 2 == 0) {
        numero = numero / 2;
      } else {
        numero = numero * 3 + 1;
      }
      almacenNumeros.push(numero);
    }
    this.setState({
      numeros: almacenNumeros,
    });
  };

  state = {
    numeros: [],
  };
  render() {
    return (
      <div>
        <h1>Collatz</h1>
        <form onSubmit={this.generarCollatz}>
          <label>Introduce un numero</label>
          <input type="number" ref={this.cajaNumero} />
          <button>Mostrar Collatz</button>
        </form>

        <ul>
          {this.state.numeros.map((num, index) => {
            return <li key={index}>{num}</li>;
          })}
        </ul>
      </div>
    );
  }
}
