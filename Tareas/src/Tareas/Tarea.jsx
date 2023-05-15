import { useState } from 'react'


function TareaItem({tarea}) {
  const { id, task,estado }=tarea

  return (

    <li className="list-group-item">{task}</li>
  
  )
}

export default TareaItem