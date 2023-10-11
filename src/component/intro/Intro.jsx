import React, { Component } from 'react'

export default class Intro extends Component {
  render() {
    return (
        <div className="mi-componente">
        <div className="contenido">
          <div>
            <h1>Título</h1>
            <h2>Subtítulo</h2>
          </div>
        </div>
        <div className="imagen">
          <img
            src="tu_imagen.jpg"
            alt="Imagen"
          />
        </div>
      </div>
    )
  }
}
