import { VStack } from '@chakra-ui/react';
import AddProduct from './components/AddProduct';
import ShowProduct from './components/ShowProduct';

function App() {
  return (
    <VStack w='100%' h='100vh' alignItems='center' justifyContent='center'>
      <AddProduct />
      <ShowProduct />
    </VStack>
  );
}

export default App;
