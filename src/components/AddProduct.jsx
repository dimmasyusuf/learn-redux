import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

function AddProduct() {
  return (
    <Box
      borderWidth='1px'
      borderRadius='lg'
      shadow='md'
      p='6'
      mb='6'
      w={{ base: '90%', sm: '70%', md: '50%', lg: '30%' }}
    >
      <form>
        <FormControl mb='4'>
          <FormLabel>Name</FormLabel>
          <Input type='text' placeholder='Enter your product name' />
        </FormControl>
        <FormControl mb='6'>
          <FormLabel>Price</FormLabel>
          <Input type='number' placeholder='Enter your product price' />
        </FormControl>
        <Button type='submit' colorScheme='teal' w='100%'>
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default AddProduct;
