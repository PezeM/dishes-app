import * as React from 'react';
import { ChakraProvider, Box, theme, Flex } from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import { DishFormContainer } from './components/DishFormContainer';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Flex minH="100vh" p={4} width="full" flexDirection={'column'}>
        <ColorModeSwitcher alignSelf="flex-end" />
        <DishFormContainer />
      </Flex>
    </Box>
  </ChakraProvider>
);
