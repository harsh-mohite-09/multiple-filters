import { createContext, useContext, useState } from "react";
import { useData } from "../hooks/useData";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const { data } = useData();
  const [cart, setCart] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState({
    search: "",
    radio: "",
    checkbox: []
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filterWithSearch = (arr) =>
    appliedFilters.search.length > 0
      ? arr.filter((item) =>
          item.name.toLowerCase().includes(appliedFilters.search.toLowerCase())
        )
      : arr;

  const filterWithCheck = (arr) =>
    appliedFilters.checkbox.length > 0
      ? arr.filter((item) =>
          appliedFilters.checkbox.some((filter) => item[filter])
        )
      : arr;

  const sortWithRadio = (arr) =>
    !appliedFilters.radio
      ? arr
      : appliedFilters.radio === "lth"
      ? [...arr].sort((a, b) => a.price - b.price)
      : [...arr].sort((a, b) => b.price - a.price);

  const getFilteredItems = () => {
    const filterFunctions = [filterWithSearch, filterWithCheck, sortWithRadio];
    return filterFunctions.reduce((acc, currFunc) => currFunc(acc), data);
  };

  return (
    <AppContext.Provider
      value={{
        data,
        // filteredItems,
        getFilteredItems,
        cart,
        addToCart,
        appliedFilters,
        setAppliedFilters
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
