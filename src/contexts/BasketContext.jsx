import { useContext, createContext, useState } from "react";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [baskets, setBaskets] = useState([]);

  const addToBasket = (data, findBasketItem) => {
    if (!findBasketItem) {
      return setBaskets((prev) => [...prev, data]);
    }

    const removedBasket = baskets.filter(
        (basket) => basket._id !== findBasketItem._id
      );
  
       setBaskets(removedBasket);
  };

  const values = {
    baskets,
    setBaskets,
    addToBasket,
  };

  return (
    <BasketContext.Provider value={values}>{children}/</BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);

export { useBasket, BasketProvider };
