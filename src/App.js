// App.jsx

import { ChakraProvider } from '@chakra-ui/react';
import Products from './components/products';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <Products />
      </div>
    </ChakraProvider>
  );
}

export default App;
