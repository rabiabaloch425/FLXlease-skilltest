import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import HotelDetailTabs from './hotel-detail-tabs';

const HotelDetail = () => {
  return (
    <Box paddingX={{ base: '1em', md: '6em' }} my={'2em'}>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Box>
          <Text
            className="primary-font-extraBold"
            fontSize={{ base: '1em', md: '1.5em' }}
          >
            Hotel Norrebro
          </Text>
          <Text
            className="primary-font-regular"
            fontSize={{ base: '10px', md: '12px' }}
          >
            3-star hotel located in the heart of copenhagen
          </Text>
        </Box>
        <Flex gap={{ base: '2px', md: '10px' }}>
          <Box textAlign={'right'}>
            <Text
              className="primary-font-semibold"
              color={'#5bba86'}
              fontSize={{ base: '12px', md: '1em' }}
            >
              Exellent
            </Text>
            <Text
              className="primary-font-regular"
              color={'#777'}
              fontSize={{ base: '10px', md: '12px' }}
            >
              1,920 reviews
            </Text>
          </Box>
          <Box
            background={'#e1ffd7'}
            py={{ base: '5px', md: '10px' }}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            px={{ base: '1em', md: '1.5em' }}
            borderRadius={'50px'}
          >
            <Text
              className="primary-font-semibold"
              color={'#5bba86'}
              fontSize={{ base: '12px', md: '1em' }}
            >
              9.6
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Box my={'2em'}>
        <HotelDetailTabs />
      </Box>
    </Box>
  );
};

export default HotelDetail;
