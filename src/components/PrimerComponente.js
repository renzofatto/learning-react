import React, {useState} from 'react';

export const PrimerComponente = () => {

  //let nombre = "Renzo";
  let apellido = "Fattorini";
  let lenguajes = ["Ruby", "C#", "Java"];

  const [nombre, setNombre] = useState("Renzo")

  const cambiarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
  }

  return (
    <div>
      <h1>Mi primer componente</h1>
      <p> Mi primer parrafo</p>
      <p>Mi nombre es: <strong className={nombre.length >= 4 ? 'verde' : 'rojo'}>{nombre}</strong></p>
      <p>Mi apellido es: {apellido}</p>
      <input type="text" onChange={ e => cambiarNombre(e.target.value)} placeholder='cambia el nombre'></input>
      <button onClick={ e => cambiarNombre("RENZO")}> Cambiar Nombre</button>
      <ul>
        {
          lenguajes.map((lenguaje, indice) => {
            return(<li key ={indice} >{lenguaje}</li>)
          })
        }
      </ul>
    </div>
  )
}
