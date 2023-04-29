import { useRef, useState } from "react";
import { useBasket } from "../../../contexts/BasketContext";
import {
  Alert,
  Link,
  Image,
  Button,
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";

import { postOrder } from "../../api";

function Basket() {
  const { baskets, removeToBasket, emptyBasket } = useBasket();
  const {
    isOpen: isOrderOpen,
    onOpen: onOrderOpen,
    onClose: onOrderClose,
  } = useDisclosure();
  const {
    isOpen: isSuccOpen,
    onOpen: onSuccOpen,
    onClose: onSuccClose,
  } = useDisclosure();
  const initialRef = useRef(null);
  const [address, setAddress] = useState();
  

  const total = baskets.reduce((acc, obj) => acc + obj.price, 0);

  const handleSubmitForm = async () => {
    
    
    const itemIds = baskets.map((basket) => basket._id);
    const input = {
      address,
      items: JSON.stringify(itemIds),
    };
    

    await postOrder(input);
    onOrderClose();
    onSuccOpen();
    setTimeout(()=>emptyBasket(),2000);
    
    
  };
    
  return (
    <Box p="5">
      {baskets.length < 1 && (
        <>
          <Alert status="warning">You have not any items in your basket </Alert>
        </>
      )}
      {baskets.length > 0 && (
        <>
          <ul>
            {baskets.map((basket) => (
              <li key={basket._id}>
                <Link to={`/products/${basket._id}`}>
                  {basket.title} - {basket.price}
                  <Image
                    htmlWidth={200}
                    src={basket.photos[0]}
                    alt={basket.title}
                    loading="lazy"
                  />
                </Link>
                <Button
                  colorScheme="red"
                  mt="5"
                  onClick={() => {
                    removeToBasket(basket);
                  }}
                >
                  Remove from basket
                </Button>
              </li>
            ))}
          </ul>

          <Box mt="10">
            <Text fontSize="25">Total - {total}</Text>
          </Box>

          <Button mt="2" size="sm" colorScheme="green" onClick={onOrderOpen}>
            Order
          </Button>

          <Modal
            initialFocusRef={initialRef}
            isOpen={isOrderOpen}
            onClose={onOrderClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Order</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Textarea
                    ref={initialRef}
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleSubmitForm}>
                  Save
                </Button>
                <Button onClick={onOrderClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Modal isOpen={isSuccOpen} onClose={onSuccClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Succsessfuly</ModalHeader>
              
              <ModalBody justifyContent="center" alignItems="center">
                <Text >Ordered Successfuly</Text>
              </ModalBody>

              <ModalFooter>
                
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </Box>
  );
}

export default Basket;
