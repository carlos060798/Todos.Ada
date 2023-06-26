
import React from 'react';
import { BrowserRouter as Router, Link as RouterLink, Routes, Route } from 'react-router-dom';
import { Box, Flex, Spacer, Breadcrumb, BreadcrumbItem, VStack, IconButton, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, HStack } from '@chakra-ui/react';
import { CopyIcon, ChevronRightIcon, HamburgerIcon } from '@chakra-ui/icons';
import ListTask from "./ListTasks";
import Home from "./paginas-inicio/Home";
import About from "./paginas-inicio/About";
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Router>
      <Box className="container" color="blue.500">
        <Flex alignItems="center" justifyContent="space-between" p={4}>
          <HStack spacing={2}>
            <CopyIcon w={6} h={15} boxSize={8} color="blue.500" />
            <Box fontSize="xl" fontWeight="bold">
              Task Manager
            </Box>
          </HStack>

          <Spacer />
          <HStack display={{ base: 'none', md: 'flex' }} spacing="8px">
            <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
              <BreadcrumbItem>
                <RouterLink to="/" mr={4} fontSize="lg" fontWeight="600">
                  Home
                </RouterLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <RouterLink to="/about" mr={4} fontSize="lg">
                  About
                </RouterLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <RouterLink to="/listtask" mr={4} fontSize="lg">
                  List Task
                </RouterLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </HStack>
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            icon={<HamburgerIcon />}
            variant="ghost"
            aria-label="Menu"
            onClick={onOpen}
          />
        </Flex>

        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/listtask" element={<ListTask />} />
        </Routes>
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4}>
                <RouterLink to="/" display="block" fontSize="lg" my={2}>
                  Home
                </RouterLink>
                <RouterLink to="/about" display="block" fontSize="lg" my={2}>
                  About
                </RouterLink>
                <RouterLink to="/listtask" display="block" fontSize="lg" my={2}>
                  List Task
                </RouterLink>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Router>
  );
}

export default App;


/*import { Box, Flex, Spacer, Breadcrumb, BreadcrumbItem, HStack } from "@chakra-ui/react";
import { CopyIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from "react-router-dom";
import ListTask from "./ListTasks";
import Home from "./paginas-inicio/Home";
import About from "./paginas-inicio/About";

function  App(){
  return (

   { /* <Router>
      <Box className="container" color="blue.500" >
        <Flex alignItems="center" justifyContent="space-between" p={4} >
          <HStack spacing={2}>
            <CopyIcon w={6} h={15} boxSize={8} color="blue.500" />
            <Box fontSize="xl" fontWeight="bold">
              Task Manager
            </Box>
          </HStack>

          <Spacer />
          <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
            <BreadcrumbItem>
              <RouterLink to="/" mr={4} fontSize="lg" fontWeight="600"> 
                Home
              </RouterLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <RouterLink to="/about" mr={4} fontSize="lg">
                About
              </RouterLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <RouterLink to="/listtask" mr={4} fontSize="lg">
              List Task
              </RouterLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>

        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/listtask" element={<ListTask />} />
        </Routes>
      </Box>
   </Router>
  );
};

export default App;




*/


/*import { Box, Button,Stack,Text } from "@chakra-ui/react";
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
*/

