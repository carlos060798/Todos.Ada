import { Box, Text, Stack, Input, Textarea, Flex, Button } from "@chakra-ui/react";


function FormTodo({ handleTareaADD,Tarearef,descriptionRef,tareaEror,descriptionError}) {
  
  

  return (
    <>
    <Box w={400} bg="gray.100" p={6}>
        <Text textAlign="center" color="blue.500" fontWeight="bold" mt={4}>
          Create List Todo
        </Text>
        <Stack spacing={4} mt={8}>
          <Box>
            <Text textAlign="center">Title Todo</Text>
            <Input  ref={Tarearef}
              variant="filled"
              placeholder="New todo" />
             {tareaEror && <Box color="red.500">{tareaEror}</Box>}
          </Box>
          <Box>
            <Text textAlign="center">Task Description</Text>
            <Textarea
             ref={descriptionRef} 
             variant="filled"
             placeholder="New todo"/>
             {descriptionError && <Box color="red.500">{descriptionError}</Box>}
          </Box>
          <Flex justifyContent="center" mt={4}>
            <Button colorScheme="green" onClick={handleTareaADD}>
              <i className="bi bi-plus-circle"></i>
            </Button>
          </Flex>
        </Stack>
      </Box>
    {/*  <Heading as="h1" fontWeight="bold" color="blue.500">
        New Todo
      </Heading>
      <Flex justifyContent="center" bg="gray.100">
        <Box mt={5} w="100%" p={4}>
          <Box textAlign="center">
            <FormLabel mx={2}>Title new Todo</FormLabel>
            <Input
              ref={Tarearef}
              variant="filled"
              placeholder="New todo"
            />
            {tareaEror && <Box color="red.500">{tareaEror}</Box>}
          </Box>
          <Box textAlign="center" mt={4}>
            <FormLabel mx={2}>Description</FormLabel>
            <Textarea
              ref={descriptionRef}
              variant="filled"
              placeholder="New todo"
            />
            {descriptionError && <Box color="red.500">{descriptionError}</Box>}
          </Box>
          <Flex justifyContent="center" mt={4}>
            <Button colorScheme="green" onClick={handleTareaADD}>
              <i className="bi bi-plus-circle"></i>
            </Button>
          </Flex>
        </Box>
      </Flex> */}
    </>
  );


    {/* <h1 className="fw-bold text-primary">New Todo</h1>
        <div className=" d-flex justify-content-center align-items-center bg-light col-12 col-md-8">
          <div className="mb-3 col-12 flex-column">
            <div className="text-center">
              <label className="form-label mx-2">Title new Todo</label>
              <input
                ref={Tarearef}
                className="form-control"
                type="text"
                placeholder="New todo"
              />
               { tareaEror && <div className="text-danger">{tareaEror}</div> }
            </div>
            <div className="text-center">
              <label className="form-label mx-2">Description</label>
              <textarea
                ref={descriptionRef}
                className="form-control"
                placeholder="New todo"
              />
               { descriptionError && <div className="text-danger">{descriptionError}</div> }
            </div>
            <div className="d-flex justify-content-center mt-2">
              <button className="btn btn-success" onClick={handleTareaADD}>
                <i className="bi bi-plus-circle"></i>
              </button>
             
            </div>
          </div>
        </div>*/}
    
  
}

export default FormTodo;