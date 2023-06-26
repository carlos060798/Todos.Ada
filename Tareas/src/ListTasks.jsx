import React from 'react';
import { Box, Button, Stack, Text, Flex } from '@chakra-ui/react';
import FormTodo from './Tareas/Form';
import TareasList from './Tareas/Tareas';
import useTareas from './hooks/useTareas';

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
    <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems="stretch" mt={5}>
      <Box flex={{ base: 1, md: 0 }} mr={{ base: 0, md: 5 }} mb={{ base: 5, md: 0 }}>
        <FormTodo
          handleTareaADD={handleTareaADD}
          Tarearef={Tarearef}
          descriptionRef={descriptionRef}
          descriptionError={descriptionError}
          tareaEror={tareaEror}
        />
      </Box>

      <Box flex={1}>
        <Stack spacing={4} mt={5}>
          <Box>
            <TareasList
              tareas={tareas}
              toggleTodo={toggleTodo}
              deleteTarea={deleteTarea}
              editarTarea={editarTarea}
            />
          </Box>

          <Box bg="gray.100" py={3} display="flex" justifyContent="space-between" alignItems="center">
            <Text color="black" fontWeight="bold" px={5}>
              Pending Tasks:
              <Text as="span" ml={1}>
                {pendiente}
              </Text>
            </Text>
            <Button colorScheme="red" ml={4} rounded="md" onClick={handleTareaDelete}>
              Clear Task
            </Button>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
}

export default ListTask;

