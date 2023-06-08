import "./App.css";
import TareasList from "./Tareas/Tareas"; 
import useTareas from "./helpers/useTareas";


const localStorageKey= "Tareas"; 

function App() {

const{ tareas ,pendiente ,Tarearef ,handleTareaADD ,toggleTodo ,handleTareaDelete,deleteTarea}=useTareas()

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
