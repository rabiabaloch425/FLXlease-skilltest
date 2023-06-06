import { Box, Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';

const OverviewPage = () => {
  return (
    <>
      <Box
        display={{ base: 'grid', md: 'flex' }}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Box w={{ base: 'auto', md: '400px' }} mb={'1em'}>
          <Text
            className="primary-font-semibold"
            fontSize={{ base: '1em', md: '1.3em' }}
          >
            Property overview
          </Text>
          <Box mt={'1em'}>
            <Flex gap={'10px'}>
              <Box display={'flex'} w={'50%'} gap={'10px'}>
                <Image src="/images/wi-fi.png" alt="flxease-image" h={'15px'} />
                <Text
                  className="primary-font-medium"
                  fontSize={{ base: '10px', md: '13px' }}
                  color={'#000000'}
                >
                  Free Wifi
                </Text>
              </Box>
              <Box display={'flex'} w={'50%'} gap={'10px'}>
                <Image
                  src="/images/parking.png"
                  alt="flxease-image"
                  h={'15px'}
                />
                <Text
                  className="primary-font-medium"
                  fontSize={{ base: '10px', md: '13px' }}
                  color={'#000000'}
                >
                  Free parking
                </Text>
              </Box>
            </Flex>
            <Flex gap={'10px'} mt={'10px'}>
              <Box display={'flex'} w={'50%'} gap={'10px'}>
                <Image
                  src="/images/wind-sign.png"
                  alt="flxease-image"
                  h={'15px'}
                />
                <Text
                  className="primary-font-medium"
                  fontSize={{ base: '10px', md: '13px' }}
                  color={'#000000'}
                >
                  Air conditioning
                </Text>
              </Box>
              <Box display={'flex'} gap={'10px'} ml={'-5px'}>
                <Image src="/images/time.png" alt="flxease-image" h={'15px'} />
                <Text
                  className="primary-font-medium"
                  fontSize={{ base: '10px', md: '13px' }}
                  color={'#000000'}
                >
                  24-hour from desk
                </Text>
              </Box>
            </Flex>
            <Flex gap={'10px'} mt={'10px'}>
              <Image src="/images/shower.png" alt="flxease-image" h={'15px'} />
              <Text
                className="primary-font-medium"
                fontSize={{ base: '10px', md: '13px' }}
                color={'#000000'}
              >
                Private bathroom
              </Text>
            </Flex>
            <Flex gap={'10px'} mt={'10px'}>
              <Image src="/images/id-card.png" alt="flxease-image" h={'15px'} />
              <Text
                className="primary-font-medium"
                fontSize={{ base: '10px', md: '13px' }}
                color={'#000000'}
              >
                Key card access
              </Text>
            </Flex>
          </Box>
        </Box>
        <Box>
          <Image
            src="/images/map.png"
            alt="flxease-image"
            w={'300px'}
            cursor="pointer"
          />
        </Box>
      </Box>
    </>
  );
};

export default OverviewPage;
