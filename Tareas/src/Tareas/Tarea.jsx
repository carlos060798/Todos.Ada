import { Box, Flex, Text, Checkbox, IconButton,} from "@chakra-ui/react";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

function TareaItem({ tarea, toggleTodo, deleteTarea, editarTarea }){
  const { id, task, descripcion, completed } = tarea;
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
    <Box
      className={`list-group-item mt-3 ${isChecked ? "text-decoration-line-through" : ""}`}
      borderWidth={1}
      borderColor="gray.200"
      borderRadius="md"
      p={4}
    >
      <Flex justifyContent="space-between">
        <Text as="p" fontSize="lg" fontWeight="bold">
          <Checkbox
            mx={2}
            isChecked={completed}
            onClick={handleCheckboxClick}
            onChange={handleTodoClick}
          />
          {task}
        </Text>
        <Flex>
          <IconButton
            mx={1}
            onClick={hadleTododeleteid}
            icon={<CloseIcon  color="red"/>}
          />
          <IconButton
            onClick={hadleTodoEdit}
            icon={<EditIcon  color="green" />}
          />
        </Flex>
      </Flex>
      <Text>{descripcion}</Text>
    </Box>
  );
};

export default TareaItem;





