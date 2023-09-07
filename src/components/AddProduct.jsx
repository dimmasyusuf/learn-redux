import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { update } from '../features/productSlice';

function AddProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();

  const addProduct = (event) => {
    event.preventDefault();
    dispatch(update({ name, price }));
  };

  return (
    <Box
      borderWidth='1px'
      borderRadius='lg'
      shadow='md'
      p='6'
      mb='6'
      w={{ base: '90%', sm: '70%', md: '50%', lg: '30%' }}
    >
      <form onSubmit={addProduct}>
        <FormControl mb='4'>
          <FormLabel>Name</FormLabel>
          <Input
            type='text'
            placeholder='Enter your product name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </FormControl>
        <FormControl mb='6'>
          <FormLabel>Price</FormLabel>
          <Input
            type='number'
            placeholder='Enter your product price'
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </FormControl>
        <Button type='submit' colorScheme='teal' w='100%'>
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default AddProduct;
