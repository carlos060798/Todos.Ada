import React ,{ useState,useRef,useEffect } from "react";
import { v4 as ID} from 'uuid'  // importacion de la libreria de id unicos
import Swal from 'sweetalert2'; // importacion de la libreria de alertas

const localStorageKey= "Tareas"; 

function useTareas(){
    const [tareas, setTareas] = useState([]); 
    const [pendiente, setPendiente] = useState(0);
  
  // referencia del imput de crear tareas
    const Tarearef = useRef(); 
    // funciones principales 
  
    function guardarTareas(tareas) { // guarda las tareas en el localstore
      localStorage.setItem(localStorageKey, JSON.stringify(tareas));
    }
  
  // useeffect maneja las siguinte funciones
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
        const task = Tarearef.current.value;
        if (task === "") return;
      
        const newTareas = [...tareas, { id: ID(), task, completed: false }];
        Tarearef.current.value = null;
      
        const pendiente = newTareas.filter((tarea) => !tarea.completed).length;
      
        Swal.fire({ // alerta de confirmacion de creacion de tarea
            title: "Felicitaciones",
            text: "¿Deseas agregar una nueva tarea?",
            icon: "success",
            showCancelButton: true,
            confirmButtonText: "Aceptar",
            cancelButtonText: "Cancelar"
          }).then((result) => {
            if (result.isConfirmed) {
              setTareas(newTareas);
              guardarTareas(newTareas);
              setPendiente(pendiente);
            }
          });
     
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
      Swal.fire({ // alerta de confirmacion de creacion de tarea
        title: "Seguro que deseas eliminar todas las Tareas",
        text: "¿Deseas eliminar todas las  tareas?",
        icon: "error",
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
            const newTareas = tareas.filter((tarea) => tarea.completed); // seleciona todas las tareas que tenga el complete en false y las elimina
            setTareas(newTareas); // actualiza el array de tareas  a un [] vacio
             // verificar y actulizar las tareas pendienrtes
            const pendiente = newTareas.filter((tarea) => tarea.completed).length;
            guardarTareas(newTareas);
            setPendiente(pendiente);
        }
      }); 
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

     return{
    tareas
    ,pendiente
    ,Tarearef
    ,handleTareaADD
    ,toggleTodo
    ,handleTareaDelete
    ,deleteTarea
    
     }

} 


export default useTareas;