import { Box, Heading, Text,  Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Box
        bg="primary"
        backgroundColor={"blue.500"}
        color="white"
        textAlign="center"
        py={5}
        mt={"3rem"}
      >
        <Heading as="h1" size="xl">
          Task Manager
        </Heading>
        <Text fontSize="xl" mt={4}>
          Stay organized and productive
        </Text>
        <Link to="/listtask" mt={4}>
        <Button colorScheme="blackAlpha" mt={4}>
          Get Started
        </Button>
        </Link>
      </Box>
      <Box color="blue.500" textAlign="center" py={3} mt={8}>
        <Text mb={0} fontWeight="semibold"  fontSize="xl">Task Manager &copy; 2023</Text>
      </Box>
    </>
  );
}

export default Home;
