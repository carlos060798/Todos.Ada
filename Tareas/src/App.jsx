//importacion de dependencias
import React ,{ useState,useRef,useEffect } from "react";
import "./App.css";
//generar id aleatorio
import { v4 as ID} from 'uuid'
import swal from 'sweetalert';
// importacion de componentes
import TareasList from "./Tareas/Tareas"; 
//variables  globales 

const localStorageKey= "Tareas"; // valor de variable del localStorage

function App() {
//use state para guardar valores y actulizar recibe valor   y metodo setdeontener nuevo valor a renderizar
  const [tareas, setTareas] = useState([]);  //estado inical del  ARRAY de tareas
  const [pendiente, setPendiente] = useState(0); // Estado pendiente inicializado en 0 

  const Tarearef = useRef(); // referencia del imput de crear tareas

  // funciones principales 

  function guardarTareas(tareas) { // guarda las tareas en el localstore
    localStorage.setItem(localStorageKey, JSON.stringify(tareas));
  }

// useeffect maneja las siguinte finciones
  useEffect(() => {
    const storedTareas = localStorage.getItem(localStorageKey); // recupera los valores del array que almacena el localstore
    if (storedTareas) {
      const parsedTareas = JSON.parse(storedTareas); // lista nuavemnete los valores obtendidos
      setTareas(parsedTareas); // referencia  los  valores obtenidos 
      const pendiente = parsedTareas.filter((tarea) => !tarea.completed).length; // actualiza el estado de pendientes
      setPendiente(pendiente); // actualiza pendiente con el valor obtenido del localstore
  
    }
  }, []);
// funcion de crear tarea
  function handleTareaADD() {
    const task = Tarearef.current.value;  //  recupera el valor del input de tarea
    if (task === "") return; // si es vacio su valor  termina la funcion

    const newTareas = [...tareas, { id: ID(), task, completed: false }];  // referencia los valores del objeto tarea
    setTareas(newTareas); // pasa el valor del objeto tarea al array de tareas
    Tarearef.current.value = null; // retorna a null el valor del input una vez creada la tarea para una nueva
     // verificar y actulizar las tareas pendienrtes
    const pendiente = newTareas.filter((tarea) => !tarea.completed).length; 
    swal("Felicitaciones", "Agregaste una nueva Tarea", "success") // genera la alerta de  creacion
    guardarTareas(newTareas);  // guarda la tarea nueva en el localstore
    setPendiente(pendiente); // actualiza el valor de pendientes
   
  }
  // funcion  de manejo de tareas pendientes y de contador de tareas completadas
  const toggleTodo = (id) => { // recibe un id
    const newTareas = [...tareas]; //genera una copia de tareas
    const todo = newTareas.find((todo) => todo.id === id); // devuelve la tarea que se seleciona y cambia de estado a completa
    todo.completed = !todo.completed; // cambia el estado de la  tarea dependiendo del valor 
    setTareas(newTareas);
     // verificar y actulizar las tareas pendientes
    const pendiente = newTareas.filter((tarea) => !tarea.completed).length; // cambia el valor de pendiente  dependiendo del check de la tara
    guardarTareas(newTareas);
    setPendiente(pendiente); // actyaliza el valor del contador de pendites
   
  };

  //   funcion de eliminar todas las tareas
  const handleTareaDelete = () => {
    const newTareas = tareas.filter((tarea) => tarea.completed); // seleciona todas las tareas que tenga el complete en false y las elimina
    setTareas(newTareas); // actualiza el array de tareas  a un [] vacio
     // verificar y actulizar las tareas pendienrtes
    const pendiente = newTareas.filter((tarea) => tarea.completed).length;
    swal("Tareas Eliminadas", "Eliminaste las  Tareas de la lista", "error")
    guardarTareas(newTareas);
    setPendiente(pendiente);
   
    
  };
  
// eliminacion de tarea individual por id 
   const  deleteTarea=(id) => { // referencia el id de  la tarea a eliminar
  
   const   newtareas=tareas.filter(tareas => tareas.id != id); // devuelve un array con los id diferennte al que se le remite
   setTareas(newtareas); // actualiza  el array de tareas
   const pendiente = newtareas.filter((tarea) => tarea.id).length; // actualiza los pendientes y la nueva logitud del array
   guardarTareas(newtareas); 
    setPendiente(pendiente);
    swal(" Tarea Eliminada", "Eliminaste  la  Tarea seleccionada", "error")
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
        <TareasList tareas={tareas} toggleTodo={toggleTodo} deleteTarea={deleteTarea} />
      </div> 
      <section className="container bg-light mt-5 d-flex  justify-content-between py-4"> 
          <p> Faltan <span className="fw-bold mx-1 text-primary">{pendiente}</span>tareas por completar</p>
          <button className="btn btn-danger mx-2 text-ligth" onClick={handleTareaDelete}>Clear All</button>
          </section>
    </>
  );
 

}


export default App;
