import { Box, Button, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

function About() {
  return (
    <>
      <Box bg="primary" color="white" textAlign="center" py={5}>
        <Heading as="h1" fontSize="4xl">Task Manager</Heading>
        <Text fontSize="xl" mt={4}>Stay organized and productive</Text>
        <Button colorScheme="blackAlpha" mt={4}>Back to Home</Button>
      </Box>

      <Box mt={5} p={6} maxW="container.md">
        <Box>
          <Heading as="h2" fontSize="2xl">About Task Manager</Heading>
          <Text mt={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ligula ut turpis auctor scelerisque. Nulla facilisi. In eget arcu id ligula posuere bibendum. Aliquam ut vulputate lacus.
          </Text>
          <Text mt={4}>
            Phasellus quis lectus in massa fermentum pharetra. In nec arcu eu felis consectetur fringilla. Duis eu massa consectetur, viverra ipsum vitae, dapibus lorem. Donec pharetra rhoncus metus non vestibulum.
          </Text>
        </Box>

        <Box mt={8}>
          <Heading as="h2" fontSize="2xl">Key Features</Heading>
          <UnorderedList mt={4}>
            <ListItem>Task creation and management</ListItem>
            <ListItem>Priority and due date settings</ListItem>
            <ListItem>Task assignment to team members</ListItem>
            <ListItem>Real-time updates and notifications</ListItem>
            <ListItem>Progress tracking and reporting</ListItem>
          </UnorderedList>
        </Box>
      </Box>

      <Box bg="gray.100" textAlign="center" py={3}>
        <Text>Task Manager &copy; 2023</Text>
      </Box>
    </>
  );
};

export default About;
