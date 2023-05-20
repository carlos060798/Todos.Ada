import React from "react";
import TareaItem from "./Tarea";

function TareasList({ tareas,toggleTodo,deleteTarea }) { // recibe el array d etareas y las  funciones de cada tareas

  return (
    <>
      <ul className="list-group">
        {tareas.map(tarea =>   // el map recorre el arrat de tareas y  lista cada  objeto de tarea del array que  encuentre
        <TareaItem key={tarea.id} tarea={tarea} toggleTodo={toggleTodo}  deleteTarea={deleteTarea}/> )}
      </ul>
    </>
  );
}

export default TareasList;
