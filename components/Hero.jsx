import React from "react";
import { Container, Box, Heading } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <>
      <Container centerContent>
        <Box padding="4" bg="blue.400" color="black" maxW="md">
          <Heading as="h2" size="3xl" >
            Discover Every 
          </Heading>
          <Heading as="h2" size="3xl" >
            NFTs Collections 
          </Heading>
        </Box>
      </Container>
    </>
  );
};
