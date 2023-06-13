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
    
    <div className="container ">
    <div className="row d-flex justify-content-center text-center">
  <section className="col mt-5">
    <FormTodo
      handleTareaADD={handleTareaADD}
      Tarearef={Tarearef}
      descriptionRef={descriptionRef}
      descriptionError={descriptionError}
      tareaEror={tareaEror}
    />
  </section>
  <section className="col mt-5">
    <article className="col">
      <TareasList
        tareas={tareas}
        toggleTodo={toggleTodo}
        deleteTarea={deleteTarea}
        editarTarea={editarTarea}
      />
    </article>
    <article className="col bg-light mt-5 d-flex justify-content-between py-4">
      <p>
        Faltan
        <span className="fw-bold mx-1 text-primary">{pendiente}</span>
        tareas por completar
      </p>
      <button
        className="btn btn-danger mx-2 text-ligth"
        onClick={handleTareaDelete}
      >
        Clear All
      </button>
    </article>
  </section>
</div>
      {/*  <div className="row d-flex justify-content-center">
          <section className="col">
            <FormTodo
              handleTareaADD={handleTareaADD}
              Tarearef={Tarearef}
              descriptionRef={descriptionRef}
              descriptionError={descriptionError}
              tareaEror={tareaEror}
            />
          </section>
          <section className="col mt-5 ">
            <article className="col">
              <TareasList
                tareas={tareas}
                toggleTodo={toggleTodo}
                deleteTarea={deleteTarea}
                editarTarea={editarTarea}
              />
            </article>
            <article className="col bg-light mt-5 d-flex  justify-content-between py-4">
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
            </article>
          </section>
        </div> */}
        </div>
    
  );
}

export default App;
