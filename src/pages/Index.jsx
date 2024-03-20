import React, { useState } from "react";
import { Box, Heading, Text, Image, Grid, GridItem, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { FaStore, FaShoppingCart, FaShippingFast } from "react-icons/fa";

const categories = ["Clothing", "Fragrances", "Furniture"];
const stores = [
  {
    name: "Trendy Threads",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMHN0b3JlJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzEwOTQwOTM0fDA&ixlib=rb-4.0.3&q=80&w=1080",
    products: [
      { name: "Stylish Shirt", price: 29.99, image: "https://images.unsplash.com/photo-1515734674582-29010bb37906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwc2hpcnR8ZW58MHx8fHwxNzEwOTQwOTM0fDA&ixlib=rb-4.0.3&q=80&w=1080" },
      { name: "Fashionable Jeans", price: 49.99, image: "https://images.unsplash.com/photo-1604244420088-ec41206f5271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYXNoaW9uYWJsZSUyMGplYW5zfGVufDB8fHx8MTcxMDk0MDkzNXww&ixlib=rb-4.0.3&q=80&w=1080" },
    ],
  },
  {
    name: "Essence of Aroma",
    category: "Fragrances",
    image: "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmcmFncmFuY2UlMjBzdG9yZSUyMGludGVyaW9yfGVufDB8fHx8MTcxMDk0MDkzNXww&ixlib=rb-4.0.3&q=80&w=1080",
    products: [
      { name: "Enchanting Perfume", price: 59.99, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlfGVufDB8fHx8MTcxMDk0MDkzNXww&ixlib=rb-4.0.3&q=80&w=1080" },
      { name: "Refreshing Cologne", price: 49.99, image: "https://images.unsplash.com/photo-1663869960499-6866301c0259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2xvZ25lJTIwYm90dGxlfGVufDB8fHx8MTcxMDk0MDkzNnww&ixlib=rb-4.0.3&q=80&w=1080" },
    ],
  },
  {
    name: "Cozy Living",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBzdG9yZSUyMGludGVyaW9yfGVufDB8fHx8MTcxMDk0MDkzNnww&ixlib=rb-4.0.3&q=80&w=1080",
    products: [
      { name: "Elegant Sofa", price: 899.99, image: "https://images.unsplash.com/photo-1495754149474-e54c07932677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwc29mYXxlbnwwfHx8fDE3MTA5NDA5Mzd8MA&ixlib=rb-4.0.3&q=80&w=1080" },
      { name: "Modern Coffee Table", price: 299.99, image: "https://images.unsplash.com/photo-1491336238524-c990bd671778?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2ZmZWUlMjB0YWJsZXxlbnwwfHx8fDE3MTA5NDA5Mzh8MA&ixlib=rb-4.0.3&q=80&w=1080" },
    ],
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleStoreClick = (store) => {
    setSelectedStore(store);
    onOpen();
  };

  return (
    <Box>
      <Heading as="h1" size="2xl" textAlign="center" my={8}>
        Virtual Shopping Experience
      </Heading>

      <Grid templateColumns="repeat(3, 1fr)" gap={6} my={8}>
        {categories.map((category) => (
          <GridItem key={category} onClick={() => handleCategoryClick(category)} cursor="pointer">
            <Box borderWidth={1} borderRadius="lg" p={4} textAlign="center">
              <FaStore size={48} />
              <Heading as="h2" size="xl" mt={4}>
                {category}
              </Heading>
            </Box>
          </GridItem>
        ))}
      </Grid>

      {selectedCategory && (
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Stores in {selectedCategory}
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {stores
              .filter((store) => store.category === selectedCategory)
              .map((store) => (
                <GridItem key={store.name} onClick={() => handleStoreClick(store)} cursor="pointer">
                  <Box borderWidth={1} borderRadius="lg" overflow="hidden">
                    <Image src={store.image} alt={store.name} />
                    <Box p={4}>
                      <Heading as="h3" size="lg">
                        {store.name}
                      </Heading>
                    </Box>
                  </Box>
                </GridItem>
              ))}
          </Grid>
        </Box>
      )}

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedStore?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedStore && (
              <Box>
                <Image src={selectedStore.image} alt={selectedStore.name} mb={8} />
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                  {selectedStore.products.map((product) => (
                    <GridItem key={product.name}>
                      <Box borderWidth={1} borderRadius="lg" overflow="hidden">
                        <Image src={product.image} alt={product.name} />
                        <Box p={4}>
                          <Heading as="h4" size="md">
                            {product.name}
                          </Heading>
                          <Text fontSize="lg" fontWeight="bold" mt={2}>
                            ${product.price}
                          </Text>
                          <Button leftIcon={<FaShoppingCart />} colorScheme="blue" mt={4}>
                            Add to Cart
                          </Button>
                        </Box>
                      </Box>
                    </GridItem>
                  ))}
                </Grid>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

      <Box textAlign="center" my={8}>
        <FaShippingFast size={48} />
        <Heading as="h2" size="xl" mt={4}>
          Fast Shipping
        </Heading>
        <Text fontSize="lg">Get your products delivered quickly to your doorstep.</Text>
      </Box>
    </Box>
  );
};

export default Index;
