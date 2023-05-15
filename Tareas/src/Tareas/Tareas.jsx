import { useState } from "react";
import TareaItem from "./Tarea";

function TareasList({ tareas }) {
  return (
    <>
      <ul className="list-group">
        {tareas.map(tarea =>  
        <TareaItem tarea={tarea}/> )}
      </ul>
    </>
  );
}

export default TareasList;
