import { useEffect, useState } from "react";
import { todosPersonajes } from "../functions/function";

const Inicio = () => {

  const [ personajes, setPersonajes ]= useState( null )
useEffect( ()=>{
  todosPersonajes( setPersonajes )
},[])
  return (
    <>
    {personajes !== null ? (
      personajes.map(personaje =>(
        <div key={personaje.id}>
          <a href="#">{personaje.name}</a>
          <img src={personaje.image} alt=""/>
        </div>
      ))):('no hay personajes')}
    </>
  )
}

export default Inicio;