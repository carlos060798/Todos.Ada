import React from 'react';
import { Box, Button, Heading, Text, UnorderedList, ListItem, Stack, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <Box backgroundColor="blue.500" color="white" textAlign="center" py={5}>
        <Heading as="h1" fontSize="4xl">
          Task Manager
        </Heading>
        <Text fontSize="xl" mt={4}>
          Stay organized and productive
        </Text>
        <Link to="/" mt={4}>
          <Button colorScheme="blackAlpha" mt={4}>
            Back to Home
          </Button>
        </Link>
      </Box>

      <Stack direction={{ base: 'column', md: 'row' }} mt={5} p={6} maxW="container" spacing={8}>
        <Box flexBasis={{ base: '100%', md: '60%' }}>
          <Heading as="h2" fontSize="2xl">
            About Task Manager
          </Heading>
          <Text mt={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ligula ut turpis auctor scelerisque. Nulla
            facilisi. In eget arcu id ligula posuere bibendum. Aliquam ut vulputate lacus.
          </Text>
          <Text mt={4}>
            Phasellus quis lectus in massa fermentum pharetra. In nec arcu eu felis consectetur fringilla. Duis eu massa
            consectetur, viverra ipsum vitae, dapibus lorem. Donec pharetra rhoncus metus non vestibulum.
          </Text>
        </Box>

        <Box flexBasis={{ base: '100%', md: '40%' }}>
          <Heading as="h2" fontSize="2xl">
            Key Features
          </Heading>
          <Divider mt={4} />
          <UnorderedList mt={4}>
            <ListItem>Task creation and management</ListItem>
            <ListItem>Priority and due date settings</ListItem>
            <ListItem>Task assignment to team members</ListItem>
            <ListItem>Real-time updates and notifications</ListItem>
            <ListItem>Progress tracking and reporting</ListItem>
          </UnorderedList>
        </Box>
      </Stack>

      <Box color="blue.500" textAlign="center" py={3}>
        <Text fontWeight="semibold" fontSize="2xl">
          Task Manager © 2023
        </Text>
      </Box>
    </>
  );
}

export default About;

