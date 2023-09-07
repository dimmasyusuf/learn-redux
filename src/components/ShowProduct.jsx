import { VStack, Text } from '@chakra-ui/react';

function ShowProduct() {
  return (
    <VStack
      borderWidth='1px'
      shadow='md'
      borderRadius='lg'
      alignItems='flex-start'
      spacing='6'
      p='6'
      w={{ base: '90%', sm: '70%', md: '50%', lg: '30%' }}
    >
      <Text>Title: </Text>
      <Text>Price: </Text>
    </VStack>
  );
}

export default ShowProduct;
