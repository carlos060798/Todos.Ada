import React, { useRef } from "react";

import "./tarea.css";

function TareaItem({tarea, toggleTodo,deleteTarea,editarTarea}) {
  const { id, task, completed } = tarea; 
  const liItem = useRef();  
  const handleTodoClick = () => {
    toggleTodo(id);
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

  const hadleTodoEdit=()=>{
    editarTarea(id)
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
       <div>
      <button className="btn  mx-1 text-danger btn-list"  onClick={hadleTododeleteid}><i className="bi bi-x-circle"></i></button>
      <button className="btn  text-success btn-list"  onClick={hadleTodoEdit}><i className="bi bi-pencil-square"></i></button>
      </div>
    </li>
  );
}

export default TareaItem;
