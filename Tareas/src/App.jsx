import React ,{ useState,useRef,useEffect } from "react";
import "./App.css";
//generar id aleatorio
import { v4 as ID} from 'uuid'
import swal from 'sweetalert';

import TareasList from "./Tareas/Tareas";

function App() {
//use state para guardar valores y actulizar recibe valor   y metodo setdeontener nuevo valor a renderizar
  const [tareas, setTareas] = useState([]);
  const [pendiente, setPendiente] = useState(0); // Estado pendiente inicializado en 0
  const Tarearef = useRef(); 


  function handleTareaADD() {
    const task = Tarearef.current.value;
    console.log(task);
    if (task === "") return;

    const newTareas = [...tareas, { id: ID(), task, completed: false }];
    setTareas(newTareas);
    Tarearef.current.value = null;
     // verificar y actulizar las tareas pendienrtes
    const pendiente = newTareas.filter((tarea) => !tarea.completed).length; 
    swal("Felicitaciones", "Agregaste una nueva Tarea", "success")
    setPendiente(pendiente);
  }

  const toggleTodo = (id) => {
    const newTodos = [...tareas];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTareas(newTodos);
     // verificar y actulizar las tareas pendientes
    const pendiente = newTodos.filter((tarea) => !tarea.completed).length;
    setPendiente(pendiente);
  };

  const handleTareaDelete = () => {
    const newTareas = tareas.filter((tarea) => !tarea.completed);
    setTareas(newTareas);
     // verificar y actulizar las tareas pendienrtes
    const pendiente = newTareas.filter((tarea) => !tarea.completed).length;
    setPendiente(pendiente);
    swal
({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this imaginary file!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.
then
((willDelete) => {
  if (willDelete) {
    
swal
("Poof! Your imaginary file has been deleted!", {
      icon: "success",
    });
  } else {
    
swal
("Your imaginary file is safe!");
  }
});
  };
  
 
  return (
    <>
      <div className="container bg-light">
        <h1 className="fw-bold text-primary">List Todo</h1>
        <div className="mb-3 d-flex">
          <input ref={Tarearef} className="form-control inputWith" type="text" placeholder="New todo" />
          <button className="btn btn-success mx-2" onClick={handleTareaADD}>
            <i className="bi bi-plus-circle"></i>
          </button>
          
        </div>
        <TareasList tareas={tareas} toggleTodo={toggleTodo} />
      </div> 
      <section className="container bg-light mt-5 d-flex  justify-content-between py-4"> 
          <articule> Faltan <span className="fw-bold mx-1 text-primary">{pendiente}</span>tareas por completar</articule>
          <button className="btn btn-danger mx-2 text-ligth" onClick={handleTareaDelete}>Clear All</button>
          </section>
    </>
  );
 

}


export default App;
