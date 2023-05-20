import React, { useRef } from "react";

import "./tarea.css";

function TareaItem({tarea, toggleTodo,deleteTarea }) {
  const { id, task, completed } = tarea;  // desctructuracion del objeto tareas
  const liItem = useRef();  
  const handleTodoClick = () => {
    toggleTodo(id);
  //  liItem.classList.add("item");

   // console.log("click");
  };
  const handleCheckboxClick = (event) => {
    const checkbox = event.target;
    const elemento = checkbox.parentNode;

    if (checkbox.checked) {
      elemento.classList.add("text-decoration-line-through");
    } else {
      elemento.classList.remove("text-decoration-line-through");
    }
  }; 

  const hadleTododeleteid=()=>{
    deleteTarea(id)
  }
  return (
    <li className="list-group-item d-flex  justify-content-between mt-3"> 
     <p className="h5">
      <input
        type="checkbox"
        className="mx-2 btn-checkbox"
        checked={completed}
        onClick={handleCheckboxClick}
        onChange={handleTodoClick}
      />
      {task}{" "} </p>
      <button className="btn btn-danger mx-2 text-ligth btn-list"  onClick={hadleTododeleteid}><i className="bi bi-x-circle"></i></button>
    </li>
  );
}

export default TareaItem;
