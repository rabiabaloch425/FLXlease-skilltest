import { Box, Flex, Image, Stack } from '@chakra-ui/react';
import React from 'react';
import HotelDetail from './hotel-detail';
import RoomsList from './rooms-list';
import ReviewsPage from './reviews';

const Dashboard = () => {
  return (
    <>
      <Box paddingX={{ base: '1em', md: '6em' }}>
        <Box>
          <Image
            src="/images/arrow.png"
            alt="flxease-back"
            cursor="pointer"
            w={'20px'}
            h={'20px'}
            mt={'1em'}
          />
        </Box>
        <Box display={{ base: 'grid', md: 'flex' }} w={'100%'} gap={'20px'}>
          <Box w={{ base: '100%', md: '50%' }}>
            <Image
              src="/images/main-bed.jpg"
              alt="flxease-image"
              cursor="pointer"
              borderRadius={'30px'}
              w={'100%'}
              height={{ base: 'auto', md: '470px' }}
              mt={'10px'}
            />
          </Box>
          <Stack w={{ base: '100%', md: '50%' }}>
            <Flex gap={'20px'}>
              <Box w={{ base: '100%', md: '50%' }}>
                <Image
                  src="/images/hotel.jpg"
                  alt="flxease-image"
                  cursor="pointer"
                  borderRadius={'20px'}
                  w={'100%'}
                  h={{ base: '150px', md: '225px' }}
                  mt={'10px'}
                />
              </Box>
              <Box w={{ base: '100%', md: '50%' }}>
                <Image
                  src="/images/second-bed.jpg"
                  alt="flxease-image"
                  cursor="pointer"
                  borderRadius={'20px'}
                  w={'100%'}
                  h={{ base: '150px', md: '225px' }}
                  mt={'10px'}
                />
              </Box>
            </Flex>
            <Flex gap={'20px'}>
              <Box w={{ base: '100%', md: '50%' }}>
                <Image
                  src="/images/setting-area.jpg"
                  alt="flxease-image"
                  cursor="pointer"
                  borderRadius={'20px'}
                  w={'100%'}
                  h={{ base: '150px', md: '225px' }}
                  mt={'10px'}
                />
              </Box>
              <Box w={{ base: '100%', md: '50%' }}>
                <Image
                  src="/images/washroom.jpg"
                  alt="flxease-image"
                  cursor="pointer"
                  borderRadius={'20px'}
                  w={'100%'}
                  h={{ base: '150px', md: '225px' }}
                  mt={'10px'}
                />
              </Box>
            </Flex>
          </Stack>
        </Box>
      </Box>
      <HotelDetail />
      <RoomsList />
      <ReviewsPage />
    </>
  );
};

export default Dashboard;
