import React, { useRef, useState, useEffect } from "react";
import "./tarea.css";

function TareaItem({ tarea, toggleTodo, deleteTarea, editarTarea }) {
  const { id, task, descripcion, completed } = tarea;
  const liItem = useRef();
  const [isChecked, setIsChecked] = useState(completed);

  useEffect(() => {
    setIsChecked(completed);
  }, [completed]);

  const handleTodoClick = () => {
    toggleTodo(id);
    setIsChecked(!isChecked);
  };

  const handleCheckboxClick = (event) => {
    const checkbox = event.target;
    const elemento = checkbox.parentNode;

    if (!checkbox.checked) {
      setCompletedStyle("text-decoration-line-through");
    }
  };

  const hadleTododeleteid = () => {
    deleteTarea(id);
  };

  const hadleTodoEdit = () => {
    editarTarea(id);
  };

  return (
    <>
    <div
      className={`list-group-item  mt-3 ${
        isChecked ? "text-decoration-line-through" : ""
      }`}
    >
      <section className="d-flex justify-content-between">
        <p className="h5">
          <input
            type="checkbox"
            className="mx-2 btn-checkbox"
            checked={completed}
            onClick={handleCheckboxClick}
            onChange={handleTodoClick}
          />
          {task}{" "}
        </p>
        <div>
          <button
            className="btn mx-1 text-danger btn-list"
            onClick={hadleTododeleteid}
          >
            <i className="bi bi-x-circle"></i>
          </button>
          <button className="btn text-success btn-list" onClick={hadleTodoEdit}>
            <i className="bi bi-pencil-square"></i>
          </button>
        </div>
      </section>
      <p>{descripcion}</p>
    </div>
  </>
  );
}

export default TareaItem;
