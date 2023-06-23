import { useEffect, useState } from 'react';
import { VStack, Flex, Box } from "@chakra-ui/react";
import { fetchProducts } from '../api/supabase';
import ProductCard from '../components/productCard';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    getProducts();
  }, []);

  return (
    <Flex justify="center" wrap="wrap" p="6">
      {products.slice(0, 2).map((product) => (
        <Box key={product.id} m="4">
          <ProductCard product={product} />
        </Box>
      ))}
    </Flex>
  );
}

export default Products;
