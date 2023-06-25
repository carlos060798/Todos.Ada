import { Box, Button, Stack, Text } from "@chakra-ui/react";
import FormTodo from "./Tareas/Form";
import TareasList from "./Tareas/Tareas";
import useTareas from "./hooks/useTareas";
function ListTask() {
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
    <Box display="flex" justifyContent="center" mt={5}>
      <FormTodo
        handleTareaADD={handleTareaADD}
        Tarearef={Tarearef}
        descriptionRef={descriptionRef}
        descriptionError={descriptionError}
        tareaEror={tareaEror}
      />

      <Box w={600} ml={5}>
        <Stack spacing={4} mt={5}>
          <Box>
            <TareasList
              tareas={tareas}
              toggleTodo={toggleTodo}
              deleteTarea={deleteTarea}
              editarTarea={editarTarea}
            />
          </Box>
        </Stack>
        <Box
  bg="gray.100"
  display="flex"
  justifyContent="space-evenly"
  alignItems="center"
  mt={4}
  py={3}
>
  <Text color="black" px={5} py={3} fontWeight="bold">
    Pending Tasks
    <Text as="span" ml={1}>
      {pendiente}
    </Text>
  </Text>
  <Button colorScheme="red" ml={4} rounded="md" onClick={handleTareaDelete}>
    Clear Task
  </Button>
</Box>
      </Box>
    </Box>
  );
}

export default ListTask;
