import { useState,useRef } from "react";
import "./App.css";
//generar id aleatorio
import { v4 as ID} from 'uuid'
import TareasList from "./Tareas/Tareas";
function App() {
  //use state para guardar valores y actulizar recibe valor   y metodo setdeontener nuevo valor a renderizar

  const [tareas, settareas] = useState([ { id: 1, task: "tarea1", estado: false },]);

//referencia de elemetos con useRef para identofcar elemetos como  si fuera id en html

 const Tarearef=useRef()
 function handleTareaADD() {
// extraer valor del input
const task= Tarearef.current.value
console.log(task)
if(task=== "") return 

settareas((prevtarea)=>{ return [...prevtarea,{id:ID(),task,estado:false}]})
Tarearef.current.value=null; //para limpiar  el input
 }
  
 
  return (
    <>
      <div className="container">
        <h1>Lista de Tareas</h1>
        <div className="mb-3 d-flex">
         <input ref={Tarearef}  className="form-control"type="text"placeholder="nueva Tarea"/>
         <button className="btn btn-success mx-2" onClick={handleTareaADD}><i className="bi bi-plus-circle"></i></button>
         <button className="btn btn-danger mx-2"><i className="bi bi-x-circle"></i></button>
        </div>
        <TareasList tareas={tareas} />
      </div>
    </>
  );
}

export default App;
