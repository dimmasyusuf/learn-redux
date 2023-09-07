import { VStack, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

function ShowProduct() {
  const { name, price } = useSelector((state) => state.product);
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
      <Text>Name: {name}</Text>
      <Text>Price: {price}</Text>
    </VStack>
  );
}

export default ShowProduct;
