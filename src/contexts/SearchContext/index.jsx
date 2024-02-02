import { useState, useEffect, createContext } from "react";
import PropTypes from 'prop-types';

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [imageProduct, setImageProduct] = useState("");
  const [titleProduct, setTitleProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [rateProduct, setRateProduct] = useState("");
  const [priceSortOrder, setPriceSortOrder] = useState("Default");
  const [categoryFilters, setCategoryFilters] = useState([]);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList = await getData();
        setProducts(productList);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const searchedProducts = products.filter((product) => {
    const productName = product.title.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return productName.includes(searchText);
  });

  const filterProductsByCategory = (products) =>
    products.filter(({ category }) =>
      categoryFilters.length === 0 || categoryFilters.includes(category)
  );

  function sortProductsByPrice(products) {

    const compareFunction = (a, b) => {
      switch (priceSortOrder) {
        case 'Price_High':
          return b.price - a.price;
        case 'Price_Low':
          return a.price - b.price;
        default:
          return 0;
      }
    };
    products.sort(compareFunction);

    return products;
  }

  const sortedProducts = sortProductsByPrice(searchedProducts)
  const filteredProducts = filterProductsByCategory(sortedProducts)

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        filteredProducts,
        isLoading,
        isOpen,
        setIsOpen,
        imageProduct,
        setImageProduct,
        titleProduct,
        setTitleProduct,
        priceProduct,
        setPriceProduct,
        descriptionProduct,
        setDescriptionProduct,
        setRateProduct,
        rateProduct,
        setPriceSortOrder,
        categoryFilters,
        setCategoryFilters,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export { SearchContext, SearchProvider };
