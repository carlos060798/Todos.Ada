import { Box, Button,Stack,Text } from "@chakra-ui/react";
import FormTodo from "./Tareas/Form";
import TareasList from "./Tareas/Tareas";
import useTareas from "./hooks/useTareas";
function App (){
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

        <Stack direction="row" alignItems="center" mt={4}>
          <Text bg="blue.500" color="white" px={5} py={3} fontWeight="bold">
            pending tasks
            <Text as="span" ml={1}>
            {pendiente}
            </Text>
          </Text>
          <Button colorScheme="red" ml={4}
           onClick={handleTareaDelete}>
            clear todo
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default App;


/*import { Box, Flex, Button, Text } from "@chakra-ui/react";
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
    <Box className="container">
    <Flex justifyContent="center" textAlign="center">
      <Box mt={5} width="50%">
        <FormTodo
          handleTareaADD={handleTareaADD}
          Tarearef={Tarearef}
          descriptionRef={descriptionRef}
          descriptionError={descriptionError}
          tareaEror={tareaEror}
        />
      </Box>
      <Box mt={5} width="50%">
        <Box>
          <TareasList
            tareas={tareas}
            toggleTodo={toggleTodo}
            deleteTarea={deleteTarea}
            editarTarea={editarTarea}
          />
        </Box>
        <Box bg="gray.100" mt={5} p={4} d="flex" justifyContent="space-between">
          <Text>
            Faltan
            <Box as="span" fontWeight="bold" mx={1} color="blue.500">
              {pendiente}
            </Box>
            tareas por completar
          </Text>
          <Button
            colorScheme="red"
            mx={2}
            onClick={handleTareaDelete}
          >
            Clear All
          </Button>
        </Box>
      </Box>
    </Flex>
  </Box>
  );

 {/* 
  return (
    <ChakraProvider>

    </ChakraProvider>
   {/* <div className="container ">
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
    
        </div>
    
  );


export default App;*/
