import React from "react";



function TareaItem({tarea, toggleTodo}) {
  const { id, task,completed }=tarea
const handleTodoClick=()=>{
  toggleTodo(id)
  console.log("click")
}
  return (

    <li className="list-group-item" ><input type="checkbox"  className='mx-2' checked={completed} onChange={handleTodoClick}/>{task}</li>
  
  )
}

export default TareaItem 