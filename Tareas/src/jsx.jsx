function App() {
    const [tareas, setTareas] = useState([]);
    const Tarearef = useRef();
  
    function handleTareaADD() {
      const task = Tarearef.current.value;
      console.log(task);
      if (task === "") return;
  
      const newTareas = [...tareas, { id: ID(), task, completed: false }];
      setTareas(newTareas);
      Tarearef.current.value = null;
  
      const pendiente = newTareas.filter((tarea) => !tarea.completed).length;
      setPendiente(pendiente);
    }
  
    const toggleTodo = (id) => {
      const newTodos = [...tareas];
      const todo = newTodos.find((todo) => todo.id === id);
      todo.completed = !todo.completed;
      setTareas(newTodos);
  
      const pendiente = newTodos.filter((tarea) => !tarea.completed).length;
      setPendiente(pendiente);
    };
  
    const handleTareaDelete = () => {
      const newTareas = tareas.filter((tarea) => !tarea.completed);
      setTareas(newTareas);
  
      const pendiente = newTareas.filter((tarea) => !tarea.completed).length;
      setPendiente(pendiente);
    };
  
    const pendiente = tareas.filter((tarea) => !tarea.completed).length;
  
    console.log(pendiente);
  
    return (
      <>
        <div className="container">
          <TareasList tareas={tareas} toggleTodo={toggleTodo} />
          <h1>Lista de Tareas</h1>
          <div className="mb-3 d-flex">
            <input ref={Tarearef} className="form-control" type="text" placeholder="nueva Tarea" />
            <button className="btn btn-success mx-2" onClick={handleTareaADD}>
              <i className="bi bi-plus-circle"></i>
            </button>
            <button className="btn btn-danger mx-2" onClick={handleTareaDelete}>
              <i className="bi bi-x-circle"></i>
            </button>
          </div>
          <div>{pendiente}</div>
        </div>
      </>
    );
  }
  
  export default App;
  