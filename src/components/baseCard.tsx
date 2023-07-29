
import { Box, } from "@chakra-ui/react";

export const BaseCard = ({
  children, bgk = '#ffffff',
  }) => {

  return (
    <Box 
      borderRadius='10px' 
      bg= {bgk} /* '#ffffff' */ 
      color='#011241'
      py='3' 
      px='5' 
      boxShadow='0 2px 1px -1px rgba(0 0 0 / 0.2), 0 1px 1px 0px rgba(0 0 0 / 14%), 0 1px 3px 0px rgba(0 0 0 / 12%)' >
      {children}
    </Box>
  );
};