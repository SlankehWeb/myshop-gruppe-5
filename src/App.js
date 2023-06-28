// App.jsx

import { ChakraProvider } from '@chakra-ui/react';
import Products from './components/products';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <Products />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
