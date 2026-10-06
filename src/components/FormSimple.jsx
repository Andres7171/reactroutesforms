import React, { Component } from "react";

export default class FormSimple extends Component {
  cajaNombre = React.createRef();

  submitForm = (event) => {
    
    let nombre=this.cajaNombre.current.value
    event.preventDefault();
    console.log(`Datos enviados: ${nombre}`);
    
  };

  render() {
    return (
      <div>
        <h1>Form Simple</h1>
        <form onSubmit={this.submitForm}>
          <label>Nombre:</label>
          <input type="text" ref={this.cajaNombre} />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
