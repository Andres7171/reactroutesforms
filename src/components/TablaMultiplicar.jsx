import React, { Component } from "react";
import Tabla from "./Tabla.css";
export default class TablaMultiplicar extends Component {
  contador = 0;
  state = {
    tabla: [],
  };
  cajaNumero = React.createRef();
  resultados = [];
  generarTabla = (event) => {
    /*let operacion = numero+"*"+i
    let resultado=numero*i
    resultados.push(<tr key={i}
    <td>{operacion}</td>
    <td>{resultado}</td>
    </tr>)
    */
    event.preventDefault();
    let numero = parseInt(this.cajaNumero.current.value);
    for (var i = 0; i <= 10; i++) {
      this.resultados.push(numero * i);
    }
    this.setState({
      tabla: this.resultados,
    });
  };
  render() {
    return (
      <div>
        <h1>TablaMultiplicar</h1>
        <form onSubmit={this.generarTabla}>
          <label>Numero</label>
          <input type="number" ref={this.cajaNumero} />
          <button type="submit">Enviar</button>
        </form>
        <table className="tabla">
          <tr>
            <th>Operacion</th>
            <th>Resultado</th>
          </tr>

          {this.state.tabla.map((resultado, index) => {
            return (
              <tr>
                <td>
                  {parseInt(this.cajaNumero.current.value)}*{index}
                </td>
                <td>{resultado}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
