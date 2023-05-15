import React ,{ useState,useRef } from "react";
import "./App.css";
//generar id aleatorio
import { v4 as ID} from 'uuid'
import TareasList from "./Tareas/Tareas";
function App() {
  //use state para guardar valores y actulizar recibe valor   y metodo setdeontener nuevo valor a renderizar
  const [tareas, setTareas] = useState([{id:ID(),task:"tarea",completed:false},]);
  const [pendiente, setpendiente] = useState()
 // const [pendiente, setpendiente] = useState();
 
//referencia de elemetos con useRef para identofcar elemetos como  si fuera id en html

 const Tarearef=useRef()
 function handleTareaADD() {


// extraer valor del input
const task= Tarearef.current.value
console.log(task)
if(task=== "") return 

setTareas((prevtarea)=> [...prevtarea,{id:ID(),task,completed:false}])
Tarearef.current.value=null; //para limpiar  el input

 setpendiente(()=>{
  tareas.filter(tarea => !tarea.completed).length
 })
 }
  
 const toggleTodo = (id) => {
  const newTodos = [...tareas];
  const todo = newTodos.find((todo) => todo.id === id);
  todo.completed = !todo.completed;
  setTareas(newTodos);
};
const handleTareaDelete=()=>{
  const newTareas=tareas.filter(tarea => !tarea.completed)
  setTareas(newTareas)
}


 
 console.log(pendiente)


  return (
    <>
      <div className="container">
      <TareasList tareas={tareas} toggleTodo={toggleTodo} /> 
        <h1>Lista de Tareas</h1>
        <div className="mb-3 d-flex">
         <input ref={Tarearef}  className="form-control"type="text"placeholder="nueva Tarea"/>
         <button className="btn btn-success mx-2" onClick={handleTareaADD}><i className="bi bi-plus-circle"></i></button>
         <button className="btn btn-danger mx-2"onClick={handleTareaDelete}><i className="bi bi-x-circle"></i></button>
        </div>
        <div > {tareas.filter(tarea => !tarea.completed).length} </div>
      </div>
      
    </>
  );
}


export default App;
