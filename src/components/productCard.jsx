import { Box, Text, Image, VStack, Button, HStack, Badge, Tag } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

function ProductCard({ product }) {
  return (
    <Box w="300px" boxShadow="lg" borderRadius="lg" overflow="hidden" p="6">
      <Image src={product.photos} alt={product.name} w="100%" h="200px" objectFit="cover" mb="6" />
      <HStack spacing={4} justify="start">
        <Badge colorScheme={product.stock <= 10 ? "red" : "green"}>📦 {product.stock} på lager</Badge><br></br>
      </HStack>
      <VStack align="start" spacing={3}>
        <Text fontSize="xl">{product.name}</Text>
        <Text fontSize="lg">{product.brand}</Text>
        <Text fontSize="md">DKK {product.price},-</Text>
        <Text fontSize="md">{product.shortdesc}</Text>
      </VStack>
      <HStack mt={4} spacing={4}>
        <Button colorScheme="blue">Læs mere</Button>
        <Button rightIcon={<ArrowForwardIcon />} colorScheme="teal" variant="solid">
          Læg i kurv
        </Button>
      </HStack>
    </Box>
  );
}

export default ProductCard;
