import React, {useRef}from "react";

import "./tarea.css";

function TareaItem({tarea, toggleTodo}) {
  const { id, task,completed }=tarea 
const liItem=useRef()
const handleTodoClick=()=>{
  toggleTodo(id) 
  liItem.classList.add("item")

  console.log("click")
}
const handleCheckboxClick=(event)=>{
  const checkbox = event.target;
  const elemento = checkbox.parentNode;

  if (checkbox.checked) {
    elemento.classList.add("subrayado");
  } else {
    elemento.classList.remove("subrayado");
}}
  return (

    <li className="list-group-item "   ><input type="checkbox"  className='mx-2' checked={completed} onClick={handleCheckboxClick} onChange={handleTodoClick}/>{task}</li>
  
  )
}

export default TareaItem 