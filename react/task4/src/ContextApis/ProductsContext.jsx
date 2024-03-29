import React, { createContext, useEffect, useMemo, useState, useCallback } from "react";
import axios from "axios";

const ProductsContext = createContext();

export const ProductsContextProvider = (props) => {
  const { children } = props;
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(() => {
    axios
      .get("http://localhost:2000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const addProduct = useCallback((newProduct) => {
    axios
      .post("http://localhost:2000/products", newProduct)
      .then((res) => {
        setProducts((prevProducts) => [...prevProducts, res.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  const editProduct = useCallback((id, updatedProduct) => {
    axios
      .put(`http://localhost:2000/products/${id}`, updatedProduct)
      .then((res) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === id ? res.data : product
          )
        );
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteProduct = useCallback((id) => {
    axios
      .delete(`http://localhost:2000/products/${id}`)
      .then(() => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
      })
      .catch((err) => console.log(err));
  }, []);

  const contextValue = useMemo(
    () => ({
      products,
      addProduct,
      editProduct,
      deleteProduct,
      getProducts,
    }),
    [products, addProduct, editProduct, deleteProduct, getProducts]
  );

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
