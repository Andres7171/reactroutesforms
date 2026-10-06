import React, { Component } from "react";

export default class SeleccionMultiple extends Component {
  state = {
    seleccionados: "",
  };
  selectMultiple = React.createRef();
  mostrarSeleccionados = (event) => {
    event.preventDefault();
    let options = this.selectMultiple.current.options;
    let data = "";
    for (var opt of options) {
      if (opt.selected == true) {
        data += opt.value + ", ";
      }
    }
    this.setState({
      seleccionados: data,
    });
  };

  render() {
    return (
      <div>
        <h1> SeleccionMultiple</h1>
        <h3>{this.state.seleccionados}</h3>
        <form onSubmit={this.mostrarSeleccionados}>
          <label htmlFor="">Seleccione elementos</label>
          <select size="6" multiple ref={this.selectMultiple}>
            <option>Elemento 1</option>
            <option>Elemento 2</option>
            <option>Elemento 3</option>
            <option>Elemento 4</option>
            <option>Elemento 5</option>
            <option>Elemento 6</option>
            <option>Elemento 7</option>
            <option>Elemento 8</option>
          </select>
          <button type="submit">Show select</button>
        </form>
      </div>
    );
  }
}
