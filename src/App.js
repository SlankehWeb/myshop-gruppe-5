// App.jsx

import { ChakraProvider } from '@chakra-ui/react';
import Products from './components/products';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Products />
      </div>
    </ChakraProvider>
  );
}

export default App;
