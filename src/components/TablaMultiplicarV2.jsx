import React, { Component } from "react";
import Tabla from "./Tabla.css";
export default class TablaMultiplicarV2 extends Component {
  contador = 0;
  state = {
    tabla: [],
    numeros: [],
  };
  cajaNumero = React.createRef();
  resultados = [];
  generarTabla = (event) => {
    event.preventDefault();
    let numero = parseInt(this.cajaNumero.current.value);
    for (let i = 0; i <= 10; i++) {
      this.resultados.push(numero * i);
    }
    this.setState({
      tabla: this.resultados,
    });
  };

  generarNumeros = () => {
    let aux = [];
    for (var i = 0; i <= 5; i++) {
      let aleat = parseInt(Math.random() * 50) + 1;
      aux.push(aleat);
    }
    this.setState({
      numeros: aux,
    });
  };
  componentDidMount=()=>{
    this.generarNumeros()
  }
  render() {
    return (
      <div>
        <h1>TablaMultiplicar</h1>
        <button onClick={this.generarNumeros}>Generar Numeros</button>
        <form onSubmit={this.generarTabla}>
          <label>Numero</label>
          <select ref={this.cajaNumero}>
            {this.state.numeros.map((num, index) => {
              return <option>{num}</option>;
            })}
          </select>
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
