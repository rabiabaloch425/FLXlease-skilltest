import { Box } from '@chakra-ui/react';
import Dashboard from '@components/dashboard';
import MainNavBar from '@components/navBar';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <Box position={'relative'}>
        <Box>
          <MainNavBar borderBottom={'1px solid #1a1a1d1a'} />
        </Box>
        <Box position={'absolute'} top={'5em'}>
          <Dashboard />
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
