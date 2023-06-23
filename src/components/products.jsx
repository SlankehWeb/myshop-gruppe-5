import { useState, useEffect } from 'react';
import { VStack, Flex } from '@chakra-ui/react';
import { fetchProducts } from '../api/supabase';
import ProductCard from './productCard';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    }

    getProducts();
  }, []);

  return (
    <Flex direction={{ base: "column", md: "row" }} justify="center" align="center" wrap="wrap" p="6">
       {products.map((product) => (
        <Flex key={product.id} m="4">
          <ProductCard product={product} />
        </Flex>
      ))}
    </Flex>
  );
}

export default Products;
