import React, { useState, useRef, useEffect } from "react";
import { v4 as ID } from "uuid"; // importacion de la libreria de id unicos
import Swal from "sweetalert2"; // importacion de la libreria de alertas

const localStorageKey = "Tareas";

function useTareas() {
  const [tareas, setTareas] = useState([]);
  const [pendiente, setPendiente] = useState(0);
  const [edit, setEdit] = useState(false);
  const [tareaEror, setTareaError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  // referencia del imput de crear tareas
  const Tarearef = useRef();
  const descriptionRef = useRef();

  // funciones principales
  const calculatePendientes = (tareas) => {
    // funcion de calculo de tareas pendientes
    return tareas.filter((tarea) => !tarea.completed).length;
  };

  function guardarTareas(tareas) {
    // guarda las tareas en el localstore
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

  // funcion de validacion del formulario
  function ValidacionFormulario() {
    let isValid = true;
    if (Tarearef.current.value.length < 3) {
      setTareaError("El titulo debe tener al menos 3 caracteres");
      isValid = false;
    } else {
      setTareaError("");
    }

    if (descriptionRef.current.value === "") {
      setDescriptionError("La descripcion  no debe estar vacia");
      isValid = false;
    } else {
      setDescriptionError("");
    }
    return isValid;
  }

  function resetFormulario() {
    setTareaError("");
    setDescriptionError("");
    Tarearef.current.value = "";
    descriptionRef.current.value = "";
  }
  // funcion de crear tarea
  function handleTareaADD() {
    const task = Tarearef.current.value;
    const descripcion = descriptionRef.current.value;
    if (ValidacionFormulario()) {
      const newTareas = [
        ...tareas,
        { id: ID(), task, descripcion, completed: false },
      ];
      if (edit) {
        Swal.fire({
          title: "Has editado una tarea",
          text: "¿Deseas guardar los cambios?",
          icon: "info",
          showCancelButton: true,
          confirmButtonText: "Aceptar",
          cancelButtonText: "Cancelar",
        }).then((result) => {
          if (result.isConfirmed) {
            setTareas(newTareas);
            guardarTareas(newTareas);
            setPendiente(calculatePendientes(newTareas));
          }
        });
      } else {
        const pendiente = newTareas.filter((tarea) => !tarea.completed).length;
        Swal.fire({
          title: "Felicitaciones",
          text: "¿Deseas agregar una nueva Tarea?",
          icon: "success",
          showCancelButton: true,
          confirmButtonText: "Aceptar",
          cancelButtonText: "Cancelar",
        }).then((result) => {
          if (result.isConfirmed) {
            setTareas(newTareas);
            guardarTareas(newTareas);
            setPendiente(calculatePendientes(newTareas));
          }
        });
      }

      resetFormulario();
    }
  }

  // funcion  de manejo de tareas pendientes y de contador de tareas completadas
  const toggleTodo = (id) => {
    const newTareas = [...tareas];
    const todo = newTareas.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTareas(newTareas);
    const pendiente = newTareas.filter((tarea) => !tarea.completed).length;
    guardarTareas(newTareas);
    setPendiente(calculatePendientes(newTareas));
  };

  //   funcion de eliminar todas las tareas
  const handleTareaDelete = () => {
    Swal.fire({
      // alerta de confirmacion de eliminacion de tarea
      title: "Seguro que deseas eliminar todas las Tareas",
      text: "¿Deseas eliminar todas las  Tareas?",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const newTareas = tareas.filter((tarea) => tarea.completed);
        setTareas(newTareas);
        setPendiente(calculatePendientes(newTareas));
        guardarTareas(newTareas);
      }
    });
  };

  // eliminacion de tarea individual por id
  const deleteTarea = (id) => {
    Swal.fire({
      // alerta de confirmacion de eliminacion de una tarea
      title: "Seguro que deseas eliminar  la Tarea",
      text: "¿Deseas eliminar  la  Tarea?",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const newtareas = tareas.filter((tareas) => tareas.id != id); // devuelve un array con los id diferennte al que se le remite
        setTareas(newtareas); // actualiza  el array de tareas
        setPendiente(calculatePendientes(newtareas));
        guardarTareas(newtareas);
      }
    });
  };

  // funcion de editar

  const editarTarea = (id) => {
    console.log("soy la tarea seleccionada");
    const tarea = tareas.find((tarea) => tarea.id === id);
    Tarearef.current.value = tarea.task;
    descriptionRef.current.value = tarea.descripcion;
    setEdit(true);
    const newtareas = tareas.filter((tareas) => tareas.id != id); // devuelve un array con los id diferennte al que se le remite
    setTareas(newtareas); // actualiza  el array de tareas
    guardarTareas(newtareas);
    setPendiente(calculatePendientes(newtareas));
    guardarTareas(newtareas);
  };

  return {
    tareas,
    pendiente,
    Tarearef,
    handleTareaADD,
    toggleTodo,
    handleTareaDelete,
    deleteTarea,
    editarTarea,
    descriptionRef,
    tareaEror,
    descriptionError,
  };
}

export default useTareas;
