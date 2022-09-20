import React from "react";
import { Container, Box, Heading, ChakraProvider } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <ChakraProvider>
      <Container centerContent maxW='container.xl'>
        <Box padding="4" color="black">
          <Heading as="h2" size="3xl" >
            Search For NFTs Collections 
          </Heading>
        </Box>
      </Container>
      </ChakraProvider>
  );
};
