import { Box, Text, Stack, Input, Textarea, Flex, Button } from '@chakra-ui/react';

function FormTodo({ handleTareaADD, Tarearef, descriptionRef, tareaEror, descriptionError }) {
  return (
    <Box w={500} p={6}>
      <Stack spacing={4} mx={8} borderWidth="3px" borderColor="blue.300" borderRadius="md" p={6}>
        <Text textAlign="center" color="blue.500" fontWeight="bold" fontSize="xl" mt={4}>
          Create Todo List
        </Text>
        <Box>
          <Text textAlign="center" fontSize="lg" fontWeight="bold">
            Title
          </Text>
          <Input
            ref={Tarearef}
            variant="filled"
            color="black"
            placeholder="Enter a title for your todo"
          />
          {tareaEror && <Box color="red.500">{tareaEror}</Box>}
        </Box>
        <Box>
          <Text textAlign="center" fontWeight="bold">
            Task Description
          </Text>
          <Textarea
            ref={descriptionRef}
            variant="filled"
            color="black"
            placeholder="Enter a description for your todo"
            resize="vertical"
            minHeight="120px"
          />
          {descriptionError && <Box color="red.500">{descriptionError}</Box>}
        </Box>
        <Flex justifyContent="center" mt={4}>
          <Button colorScheme="green" onClick={handleTareaADD}>
          <i className="bi bi-plus-circle"></i>
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
}

export default FormTodo;






/*import { Box, Text, Stack, Input, Textarea, Flex, Button } from "@chakra-ui/react";


function FormTodo({ handleTareaADD,Tarearef,descriptionRef,tareaEror,descriptionError}) {
  
  

  return (
    <>
    <Box w={500}   p={6}>
       
        <Stack spacing={4} mx={8} borderWidth="3px" borderColor="blue.300" borderRadius="md"  paddingLeft="30px" paddingRight="30px">
        <Text textAlign="center" color="blue.500" fontWeight="bold" mt={4} fontSize={"xl"}>
          Create List Todo
        </Text>
          <Box>
            <Text textAlign="center"  fontSize={"lg"} fontWeight="bold">Title Todo</Text>
            <Input  ref={Tarearef}
              variant="filled"
              color={"black"}
              placeholder="New todo" />
             {tareaEror && <Box color="red.500">{tareaEror}</Box>}
          </Box>
          <Box>
            <Text textAlign="center" fontWeight="bold">Task Description</Text>
            <Textarea
             ref={descriptionRef} 
             variant="filled"
             color={"black"}
             placeholder="New todo"/>
             {descriptionError && <Box color="red.500">{descriptionError}</Box>}
          </Box>
          <Flex justifyContent="center" mt={4} mb={4}>
            <Button colorScheme="green" onClick={handleTareaADD}>
              <i className="bi bi-plus-circle"></i>
            </Button>
          </Flex>
        </Stack>
      </Box>
    </>
  )}

export default FormTodo;
*/