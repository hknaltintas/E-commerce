import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Text, Button } from "@chakra-ui/react";
import moment from "moment";
import ImageGallery from "react-image-gallery";

import { fetchProduct } from "../../api";

import { useBasket } from "../../../contexts/BasketContext";
import { useAuth } from "../../../contexts/AuthContext";

function ProductDetail() {
  const { product_id } = useParams();
  const { addToBasket, baskets } = useBasket();
  const {loggedIn}=useAuth();
  const navigate=useNavigate();

  const { isLoading, isError, data } = useQuery(["product", product_id], () =>
    fetchProduct(product_id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error.</div>;
  }

  const findBasketItem=baskets.find((baskets)=>baskets._id===product_id)
  const images = data.photos.map((url) => ({ original : url }));

  

  return (
    <Box mt="5" ml="5">
      <Button  colorScheme={findBasketItem? "red" :"green"}  
      onClick={()=>
        !loggedIn ? navigate("/signin"):
      addToBasket(data, findBasketItem)
      }>
        {
          findBasketItem ? "Remove from basket" : "Add to Basket"
        }
      </Button>
      <Text as="h2" fontSize="2xl">
        {data.title}
      </Text>
      <Text>{moment(data.createdAt).format("DD/MM/YYYY ")}</Text>
      <p>{data.description}</p>
      <Box margin="10">
        <ImageGallery items={images} />
      </Box>
    </Box>
  );
}

export default ProductDetail;
