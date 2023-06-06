import {
  Box,
  Text,
  Image,
  Button,
  Flex,
  IconButton,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

interface PropsType {
  borderBottom?: string;
}

const MainNavBar = ({ borderBottom }: PropsType) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        display={{ base: 'block', md: 'none' }}
        w={'100%'}
        background={'#77777d7a'}
        justifyContent={'space-between'}
        position={'fixed'}
        paddingTop={'2em'}
        dir="rtl"
        zIndex={'1000'}
      >
        <IconButton
          size={'md'}
          icon={
            isOpen ? (
              <CloseIcon fontSize={'25px'} />
            ) : (
              <HamburgerIcon fontSize={'25px'} />
            )
          }
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          background={'transparent'}
          color={'#fff'}
          mr={'1em'}
          mt={'-1em'}
          mb={'1em'}
          onClick={isOpen ? onClose : onOpen}
        />

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack dir="ltr" spacing={4}>
              <Box>
                <Text
                  className="primary-font-regular"
                  cursor={'pointer'}
                  ml={'8px'}
                  p={'1em'}
                  fontSize={'12px'}
                >
                  Properties
                </Text>
                <Text
                  className="primary-font-regular"
                  cursor={'pointer'}
                  fontSize={'12px'}
                  ml={'8px'}
                  p={'1em'}
                >
                  Attractions
                </Text>
                <Text
                  className="primary-font-regular"
                  cursor={'pointer'}
                  ml={'8px'}
                  fontSize={'12px'}
                  p={'1em'}
                >
                  Popular
                </Text>
              </Box>
              <Flex justifyContent={'space-between'} pr={'1em'}>
                <Button
                  fontWeight={300}
                  py={1.5}
                  px={8}
                  mt={'5px'}
                  h={'38.35px'}
                  ml={'1em'}
                  w={'157px'}
                  color={'#1d64ec'}
                  fontSize={{ base: '13px', md: '16px' }}
                  className={'primary-font-regular'}
                  borderRadius={'50px'}
                  border={' 1px solid #1d64ec'}
                  background={'none'}
                  _hover={{
                    backgroundColor: 'none !important',
                  }}
                >
                  Sign up
                </Button>
                <Button
                  fontWeight={300}
                  py={1.5}
                  px={8}
                  mt={'5px'}
                  h={'38.35px'}
                  ml={'1em'}
                  w={'157px'}
                  color={'white'}
                  fontSize={{ base: '13px', md: '16px' }}
                  className={'primary-font-regular'}
                  borderRadius={'50px'}
                  backgroundColor={'#1d64ec'}
                  _hover={{
                    backgroundColor: '#1d64ec !important',
                  }}
                >
                  Log in
                </Button>
              </Flex>
            </Stack>
          </Box>
        ) : null}
        <Box>
          <Image
            src={'/images/logo.png'}
            alt="tripster"
            position={'absolute'}
            top={'1.2em'}
            left={'10px'}
            w={{ base: 'auto', md: '50px' }}
            h={'30.5px'}
          />
        </Box>
      </Box>

      <Box
        display={{ base: 'none', md: 'flex' }}
        w={'100%'}
        justifyContent={'space-between'}
        position={'fixed'}
        background={'#fff'}
        paddingY={'1em'}
        zIndex={'1000'}
        borderBottom={borderBottom}
        paddingX={'6em'}
      >
        <Flex
          gap={'20px'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text
            className="primary-font-Black"
            cursor={'pointer'}
            fontSize={'1.5em'}
          >
            Tripster
          </Text>
          <Text
            className="primary-font-regular"
            cursor={'pointer'}
            fontSize={'1em'}
          >
            Properties
          </Text>
          <Text
            className="primary-font-regular"
            cursor={'pointer'}
            fontSize={'1em'}
          >
            Attractions
          </Text>
          <Text
            className="primary-font-regular"
            cursor={'pointer'}
            fontSize={'1em'}
          >
            Popular
          </Text>
        </Flex>
        <Flex gap={'5px'} alignItems={'center'}>
          <Button
            fontWeight={300}
            py={1.5}
            px={8}
            display={{ base: 'none', md: 'block' }}
            mt={'5px'}
            h={'38.35px'}
            ml={'1em'}
            w={'157pxpx'}
            color={'#1d64ec'}
            fontSize={'16px'}
            className={'primary-font-regular'}
            borderRadius={'50px'}
            border={' 1px solid #1d64ec'}
            background={'none'}
            _hover={{
              backgroundColor: 'none !important',
            }}
          >
            Sign up
          </Button>
          <Button
            fontWeight={300}
            py={1.5}
            px={8}
            display={{ base: 'none', md: 'block' }}
            mt={'5px'}
            h={'38.35px'}
            ml={'1em'}
            w={'157pxpx'}
            color={'white'}
            fontSize={'16px'}
            className={'primary-font-regular'}
            borderRadius={'50px'}
            backgroundColor={'#1d64ec'}
            _hover={{
              backgroundColor: '#1d64ec !important',
            }}
          >
            Log in
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default MainNavBar;
