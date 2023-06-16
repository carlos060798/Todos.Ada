import React, { useRef, useState, useEffect } from "react";
import { Box, Flex, Checkbox, IconButton } from "@chakra-ui/react";
import { CloseIcon, AddIcon } from "@chakra-ui/icons";

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
    <Box
      className={`list-group-item  mt-3 ${
        isChecked ? "text-decoration-line-through" : ""
      }`}
    >
      <Flex justifyContent="space-between">
        <p className="h5">
          <Checkbox
            mx={2}
            isChecked={completed}
            onClick={handleCheckboxClick}
            onChange={handleTodoClick}
          />
          {task}
        </p>
        <Flex>
          <IconButton
            mx={1}
            colorScheme="red"
            onClick={hadleTododeleteid }
            icon={<CloseIcon />}
          />
          <IconButton
            colorScheme="green"
            onClick={hadleTodoEdit}
            icon={<AddIcon />}
          />
        </Flex>
      </Flex>
      <p>{descripcion}</p>
    </Box>
  
  </>
  );
}

export default TareaItem;


   {/* <div
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
          <AddIcon/>a
          </button>
         
        </div>
      </section>
      <p>{descripcion}</p>
    </div>*/}