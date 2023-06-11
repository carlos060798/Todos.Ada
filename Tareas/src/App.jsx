import "./App.css";
import TareasList from "./Tareas/Tareas";
import useTareas from "./helpers/useTareas";

const localStorageKey = "Tareas";

function App() {
  const {
    tareas,
    pendiente,
    Tarearef,
    handleTareaADD,
    toggleTodo,
    handleTareaDelete,
    deleteTarea,
    editarTarea,
    descriptionRef,
  } = useTareas();

  return (
    <>
      <div className="container   ">
        <h1 className="fw-bold text-primary">List Todo</h1>
        <div className="container d-flex justify-content-center align-items-center bg-light col-8">
          <div className="mb-3 col-12 flex-column">
            <div className="text-center">
              <label className="form-label mx-2">Title new Todo</label>
              <input
                ref={Tarearef}
                className="form-control"
                type="text"
                placeholder="New todo"
              />
            </div>
            <div className="text-center">
              <label className="form-label mx-2">Description</label>
              <textarea
                ref={descriptionRef}
                className="form-control"
                placeholder="New todo"
              />
            </div>
            <div className="d-flex justify-content-center mt-2">
              <button className="btn btn-success" onClick={handleTareaADD}>
                <i className="bi bi-plus-circle"></i>
              </button>
            </div>
          </div>
        </div>
        <section className="container mt-5 d-flex  justify-content-between py-4">
          <TareasList
            tareas={tareas}
            toggleTodo={toggleTodo}
            deleteTarea={deleteTarea}
            editarTarea={editarTarea}
          />
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
