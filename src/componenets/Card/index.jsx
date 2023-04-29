import React from "react";
import moment from "moment";
import { Box, Image, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

import { useBasket } from "../../contexts/BasketContext";
import { useAuth } from "../../contexts/AuthContext";





function Card({ item }) {

  const { addToBasket, baskets } = useBasket();
  const {loggedIn}=useAuth();
  const navigate=useNavigate()


  const findBasketItem=baskets.find((baskets)=>baskets._id===item._id)
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link to={`/product/${item._id}`}>
        <Image src={item.photos[0]} alt="product" loading="lazy" />
        <Box p="6">
          <Box d="plex" alignItems="baseline">
            {moment(item.createdAt).format("DD/MM/YYYY")}
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {item.title}
          </Box>
          <Box>{item.price} TL</Box>
        </Box>
      </Link>
      <Button 
      colorScheme={findBasketItem ? "red" :"green"} 
      onClick={()=>loggedIn ? addToBasket(item, findBasketItem):navigate("/signin")} >
        {findBasketItem ? "Remove item":"Add to basket"}
        </Button>
    </Box>
  );
}

export default Card;
