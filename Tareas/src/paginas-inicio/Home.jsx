import { Box, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
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
          <ChakraLink
            as="button"
            to="/"
            className="block text-center my-5 text-gray-500"
            _hover={{ bg: "white", color: "black" }}
            px={3}
            py={2}
            fontWeight="bold"
          >
            Get Started
          </ChakraLink>
        </Link>
      </Box>
      <Box color="black" textAlign="center" py={3} mt={8}>
        <Text mb={0} fontWeight="semibold"  fontSize="xl">Task Manager &copy; 2023</Text>
      </Box>
    </>
  );
}

export default Home;
