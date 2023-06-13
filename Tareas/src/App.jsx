import "./App.css";
import FormTodo from "./Tareas/Form";
import TareasList from "./Tareas/Tareas";
import useTareas from "./hooks/useTareas";



function App() {
  const {
    tareas,
    pendiente,
    handleTareaADD,
    toggleTodo,
    handleTareaDelete,
    deleteTarea,
    editarTarea,
    Tarearef,
    descriptionRef,
    tareaEror,
    descriptionError,
  } = useTareas();

  return (
    <>
      <div className="container">
      <FormTodo  handleTareaADD={handleTareaADD} Tarearef={Tarearef}  descriptionRef={descriptionRef }descriptionError={descriptionError} tareaEror={tareaEror} />  
      <section className="container mt-5 d-flex  justify-content-between py-4">
      <TareasList tareas={tareas} toggleTodo={toggleTodo} deleteTarea={deleteTarea} editarTarea={editarTarea}/>
        </section>
      <section className="container bg-light mt-5 d-flex  justify-content-between py-4">
          <p>
          
            Faltan
            <span className="fw-bold mx-1 text-primary">{pendiente}</span>
            tareas por completar
          </p>
          <button
            className="btn btn-danger mx-2 text-ligth "
            onClick={handleTareaDelete}
          >
            Clear All
          </button>
        </section>
      </div>
    </>
  );
}

export default App;
