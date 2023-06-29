// App.jsx

import { ChakraProvider } from '@chakra-ui/react';
import Products from './components/products';
import Slide from './components/highlights';


function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Slide />
        <Products />
      </div>
    </ChakraProvider>
  );
}

export default App;
