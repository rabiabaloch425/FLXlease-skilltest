import { Box, Divider, Flex, Image, Progress, Text } from '@chakra-ui/react';
import React from 'react';

const ReviewsPage = () => {
  return (
    <Box paddingX={{ base: '1em', md: '6em' }} my={'2em'}>
      <Box>
        <Text
          className="primary-font-semibold"
          fontSize={{ base: '1em', md: '1.3em' }}
        >
          Reviews
        </Text>
      </Box>
      <Box display={{ base: 'grid', md: 'flex' }} my={'1em'}>
        <Box w={{ base: '100%', md: '25%' }}>
          <Text
            className="primary-font-regular"
            fontSize={{ base: '1em', md: '2em' }}
            color={'#3071ee'}
          >
            9.6/10
          </Text>
          <Box my={'1.5em'}>
            <Flex mb={'10px'} justifyContent={'space-between'}>
              <Text
                className="primary-font-regular"
                fontSize={{ base: '10px', md: '12px' }}
              >
                Cleanliness
              </Text>
              <Text
                className="primary-font-regular"
                fontSize={{ base: '10px', md: '12px' }}
                color={'#777'}
              >
                10/10
              </Text>
            </Flex>
            <Progress value={100} />
          </Box>
          <Box my={'1em'}>
            <Flex mb={'10px'} justifyContent={'space-between'}>
              <Text
                className="primary-font-regular"
                fontSize={{ base: '10px', md: '12px' }}
              >
                Amenities
              </Text>
              <Text
                className="primary-font-regular"
                fontSize={{ base: '10px', md: '12px' }}
                color={'#777'}
              >
                7/10
              </Text>
            </Flex>
            <Progress value={70} />
          </Box>
          <Box my={'1em'}>
            <Flex mb={'10px'} justifyContent={'space-between'}>
              <Text
                className="primary-font-regular"
                fontSize={{ base: '10px', md: '12px' }}
              >
                Location
              </Text>
              <Text
                className="primary-font-regular"
                fontSize={{ base: '10px', md: '12px' }}
                color={'#777'}
              >
                9/10
              </Text>
            </Flex>
            <Progress value={90} mb={'2em'} />
          </Box>
        </Box>
        <Box
          w={{ base: '100%', md: '75%' }}
          mb={'2em'}
          pl={{ base: '1em', md: '2em' }}
        >
          <Flex justifyContent={'space-between'}>
            <Box>
              <Text
                className="primary-font-semibold"
                fontSize={{ base: '12px', md: '1em' }}
              >
                Excelent value for the price!
              </Text>
              <Text
                my={'10px'}
                className="primary-font-regular"
                fontSize={{ base: '10px', md: '12px' }}
                color={'#777'}
              >
                Mark M.
              </Text>
              <Text
                my={'10px'}
                className="primary-font-regular"
                fontSize={{ base: '12px', md: '14px' }}
              >
                We enjoyed our stay at this hotel. We will definitely come back!
              </Text>
              <Flex mt={'2em'} gap={'10px'} mb={'10px'} alignItems={'center'}>
                <Image src="/images/plus.png" alt="flxease-image" h={'10px'} />
                <Text
                  className="primary-font-regular"
                  fontSize={{ base: '10px', md: '12px' }}
                >
                  Great location!
                </Text>
              </Flex>
              <Flex mt={'10px'} gap={'10px'} mb={'10px'} alignItems={'center'}>
                <Image src="/images/plus.png" alt="flxease-image" h={'10px'} />
                <Text
                  className="primary-font-regular"
                  fontSize={{ base: '10px', md: '12px' }}
                >
                  Service
                </Text>
              </Flex>
              <Flex
                mt={'10px'}
                gap={'10px'}
                mb={'10px'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Flex gap={'10px'} mb={'10px'} alignItems={'center'}>
                  <Image
                    src="/images/plus.png"
                    alt="flxease-image"
                    h={'10px'}
                  />
                  <Text
                    className="primary-font-regular"
                    fontSize={{ base: '10px', md: '12px' }}
                  >
                    Bottle of champagne in the room!
                  </Text>
                </Flex>
                <Box
                  position={'absolute'}
                  textAlign={'right'}
                  mt={'-1em'}
                  right={{ base: '1em', md: '6em' }}
                >
                  <Text
                    className="primary-font-regular"
                    color={'#777777'}
                    fontSize={{ base: '10px', md: '12px' }}
                  >
                    Reviewed on
                  </Text>
                  <Text
                    className="primary-font-regular"
                    color={'#777777'}
                    fontSize={{ base: '10px', md: '12px' }}
                  >
                    20 September, 2022
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Flex
              justifyContent={'space-between'}
              alignItems={'center'}
              position={'absolute'}
              right={{ base: '1em', md: '6em' }}
              mt={'-10px'}
              gap={{ base: '2px', md: '10px' }}
            >
              <Text
                className="primary-font-semibold"
                color={'#5bba86'}
                fontSize={{ base: '12px', md: '1em' }}
              >
                Exellent
              </Text>

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
                  10
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Divider my={'2em'} />
        </Box>
      </Box>

      <Box display={{ base: 'grid', md: 'flex' }} my={'1em'}>
        <Box w={{ base: '100%', md: '25%' }}></Box>
        <Box
          w={{ base: '100%', md: '75%' }}
          mb={'2em'}
          pl={{ base: '1em', md: '2em' }}
        >
          <Flex justifyContent={'space-between'}>
            <Box>
              <Text
                className="primary-font-semibold"
                fontSize={{ base: '12px', md: '1em' }}
              >
                Good Hotel but noisy location
              </Text>
              <Text
                my={'10px'}
                className="primary-font-regular"
                fontSize={{ base: '10px', md: '12px' }}
                color={'#777'}
              >
                Robert M.
              </Text>
              <Text
                my={'10px'}
                className="primary-font-regular"
                fontSize={{ base: '12px', md: '14px' }}
              >
                There were alot of noise in the surrounding, overall services
                were good!
              </Text>
              <Flex mt={'2em'} gap={'10px'} mb={'10px'} alignItems={'center'}>
                <Image src="/images/plus.png" alt="flxease-image" h={'10px'} />
                <Text
                  className="primary-font-regular"
                  fontSize={{ base: '10px', md: '12px' }}
                >
                  Great location!
                </Text>
              </Flex>
              <Flex mt={'10px'} gap={'10px'} mb={'10px'} alignItems={'center'}>
                <Image src="/images/plus.png" alt="flxease-image" h={'10px'} />
                <Text
                  className="primary-font-regular"
                  fontSize={{ base: '10px', md: '12px' }}
                >
                  Service
                </Text>
              </Flex>
              <Flex
                mt={'10px'}
                gap={'10px'}
                mb={'10px'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Flex gap={'10px'} mb={'10px'} alignItems={'center'}>
                  <Image
                    src="/images/plus.png"
                    alt="flxease-image"
                    h={'10px'}
                  />
                  <Text
                    className="primary-font-regular"
                    fontSize={{ base: '10px', md: '12px' }}
                  >
                    Bottle of champagne in the room!
                  </Text>
                </Flex>
                <Box
                  position={'absolute'}
                  textAlign={'right'}
                  mt={'-1em'}
                  right={{ base: '1em', md: '6em' }}
                >
                  <Text
                    className="primary-font-regular"
                    color={'#777777'}
                    fontSize={{ base: '10px', md: '12px' }}
                  >
                    Reviewed on
                  </Text>
                  <Text
                    className="primary-font-regular"
                    color={'#777777'}
                    fontSize={{ base: '10px', md: '12px' }}
                  >
                    20 September, 2022
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Flex
              justifyContent={'space-between'}
              alignItems={'center'}
              position={'absolute'}
              right={{ base: '1em', md: '6em' }}
              mt={'-10px'}
              gap={{ base: '2px', md: '10px' }}
            >
              <Text
                className="primary-font-semibold"
                color={'#e6c481'}
                fontSize={{ base: '12px', md: '1em' }}
              >
                Average
              </Text>

              <Box
                background={'#f7f0cc'}
                py={{ base: '5px', md: '10px' }}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                px={{ base: '1em', md: '1.5em' }}
                borderRadius={'50px'}
              >
                <Text
                  className="primary-font-semibold"
                  color={'#e6c481'}
                  fontSize={{ base: '12px', md: '1em' }}
                >
                  05
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewsPage;
