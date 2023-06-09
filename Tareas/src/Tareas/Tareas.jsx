import React from "react";
import TareaItem from "./Tarea";

function TareasList({ tareas,toggleTodo,deleteTarea,editarTarea }) { 
  return (
    <>
      <ul className="list-group">
        {tareas.map(tarea =>  
        <TareaItem key={tarea.id} tarea={tarea} toggleTodo={toggleTodo}  deleteTarea={deleteTarea} editarTarea={editarTarea}/>)}
      </ul>
    </>
  );
}

export default TareasList;
