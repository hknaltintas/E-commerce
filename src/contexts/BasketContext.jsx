import { useContext, createContext, useState, useEffect } from "react";

const BasketContext = createContext();
const defaultBasket=JSON.parse(localStorage.getItem("basket")) || []

const BasketProvider = ({ children }) => {
  const [baskets, setBaskets] = useState(defaultBasket);

  useEffect(()=>{
    localStorage.setItem("basket",JSON.stringify(baskets))
  },[baskets])

  const addToBasket = (data, findBasketItem) => {
    if (!findBasketItem) {
      return setBaskets((prev) => [...prev, data]);
    }

    const removedBasket = baskets.filter(
      (basket) => basket._id !== findBasketItem._id
    );

    setBaskets(removedBasket);
  };
  const removeToBasket=(data)=>{
    const removedBasket = baskets.filter(
      (basket) => basket._id !== data._id
    );

    setBaskets(removedBasket);
  }

  const emptyBasket=()=>{
    setBaskets([]);
    
  }

  const values = {
    baskets,
    setBaskets,
    addToBasket,
    removeToBasket,
    emptyBasket,
  };

  return (
    <BasketContext.Provider value={values}>{children}/</BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);

export { useBasket, BasketProvider };
