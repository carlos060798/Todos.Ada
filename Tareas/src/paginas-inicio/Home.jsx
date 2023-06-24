
import { Box, Heading, Text, Button } from "@chakra-ui/react";

function Home() {
    return (<>
      <Box bg="primary" color="white" textAlign="center" py={5} mt={5}>
      <Heading as="h1" size="xl">
        Task Manager
      </Heading>
      <Text fontSize="xl" mt={4}>
        Stay organized and productive
      </Text>
      <Button colorScheme="primary" variant="outline" mt={4}>
        Get Started
      </Button>
     </Box>
     <Box bg="gray.100" color="black" textAlign="center" py={3}>
      <Text mb={0}>Task Manager &copy; 2023</Text>
    </Box>
    
    </>  );
}

export default Home;