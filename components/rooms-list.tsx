import {
  Box,
  Button,
  Image,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

interface CardItems {
  id: number;
  imageSrc: string;
  title: string;
  size: string;
  people: string;
  bed: string;
  price: string;
}

const cardItems: CardItems[] = [
  {
    id: 1,
    imageSrc: '/images/main-bed.jpg',
    title: 'Double standard room',
    size: '25 sqm',
    people: '2 people',
    bed: '  1 queen bed or 2 seprate beds',
    price: '180',
  },
  {
    id: 2,
    imageSrc: '/images/second-bed.jpg',
    title: 'Comfort single room',
    size: '21 sqm',
    people: '2 people',
    bed: '  1 king size bed',
    price: '220',
  },
  {
    id: 3,
    imageSrc: '/images/main-bed.jpg',
    title: 'Double standard room',
    size: '25 sqm',
    people: '2 people',
    bed: '  1 queen bed or 2 seprate beds',
    price: '180',
  },
  {
    id: 4,
    imageSrc: '/images/second-bed.jpg',
    title: 'Comfort single room',
    size: '21 sqm',
    people: '2 people',
    bed: '  1 king size bed',
    price: '220',
  },
];

const RoomsList = () => {
  return (
    <Box
      background={'#f8f8f8'}
      py={'1em'}
      paddingX={{ base: '1em', md: '6em' }}
    >
      <Text
        className="primary-font-semibold"
        fontSize={{ base: '1em', md: '1.3em' }}
      >
        Rooms
      </Text>
      <Flex flexWrap={'wrap'} justifyContent={'space-between'} my={'1em'}>
        {cardItems.map((item) => {
          return (
            <Card maxW="sm" key={item.id} borderRadius={'20px'} mb={'1em'}>
              <CardBody>
                <Image
                  src={item.imageSrc}
                  h={'200px'}
                  w={'330px'}
                  alt="flxease"
                  borderRadius="20px"
                />
                <Stack mt="6" spacing="3">
                  <Heading
                    size="md"
                    mt={'-10px'}
                    className="primary-font-semibold"
                  >
                    {item.title}
                  </Heading>
                  <Flex gap={'10px'} mt={'10px'}>
                    <Image
                      src="/images/visualization.png"
                      alt="flxease-image"
                      h={'15px'}
                    />
                    <Text
                      className="primary-font-medium"
                      fontSize={{ base: '10px', md: '13px' }}
                      color={'#777777'}
                    >
                      {item.size}
                    </Text>
                  </Flex>
                  <Flex gap={'10px'} mt={'8px'}>
                    <Image
                      src="/images/people.png"
                      alt="flxease-image"
                      h={'15px'}
                    />
                    <Text
                      className="primary-font-medium"
                      fontSize={{ base: '10px', md: '13px' }}
                      color={'#777777'}
                    >
                      {item.people}
                    </Text>
                  </Flex>
                  <Flex gap={'10px'} mt={'8px'}>
                    <Image
                      src="/images/sleeping.png"
                      alt="flxease-image"
                      h={'15px'}
                    />
                    <Text
                      className="primary-font-medium"
                      fontSize={{ base: '10px', md: '13px' }}
                      color={'#777777'}
                    >
                      {item.bed}
                    </Text>
                  </Flex>
                  <Text
                    className="primary-font-regular"
                    fontSize={{ base: '10px', md: '12px' }}
                  >
                    Non-refundable, Breakfast included
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Button
                  variant="solid"
                  w={'100%'}
                  background={'#1d64ec'}
                  color={'#ffffff'}
                  borderRadius={'50px'}
                >
                  Book now for ${item.price}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </Flex>
    </Box>
  );
};

export default RoomsList;
