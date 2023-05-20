import React from "react";
import TareaItem from "./Tarea";

function TareasList({ tareas,toggleTodo,deleteTarea }) {

  return (
    <>
      <ul className="list-group">
        {tareas.map(tarea =>  
        <TareaItem key={tarea.id} tarea={tarea} toggleTodo={toggleTodo}  deleteTarea={deleteTarea}/> )}
      </ul>
    </>
  );
}

export default TareasList;
