import { extendTheme } from '@chakra-ui/react';
//

const breakpoints = {
  sm: '640px',
  md: '1023px',
  lg: '1024px',
  xl: '1280px',
};

export const theme = extendTheme({
  breakpoints,
});
