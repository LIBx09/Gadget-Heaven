/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  addToStoredProductList,
  getStoredProductList,
  addToWishList,
  getStoredWishList,
} from "../Utils";
import { toast } from "react-toastify";

export const ProductProvider = createContext();

const ProductContext = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  console.log(cartList);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setCartList(getStoredProductList());
    setWishlist(getStoredWishList());
  }, []);

  const addProduct = (id) => {
    console.log("Adding product:", id);
    if (!cartList.includes(id)) {
      setCartList((prev) => [...prev, id]);
      setWishlist((prev) => prev.filter((item) => item !== id));
      addToStoredProductList(id);
      const updatedWishList = wishlist.filter((item) => item !== id);
      localStorage.setItem(
        "product-wish-list",
        JSON.stringify(updatedWishList)
      );
      toast.success("Product added to cart!");
    }
  };

  const addWish = (id) => {
    console.log("Adding to wishlist:", id);
    if (!wishlist.includes(id)) {
      setWishlist((prev) => [...prev, id]);
      setCartList((prev) => prev.filter((item) => item !== id));
      addToWishList(id);
      const updatedCartList = cartList.filter((item) => item !== id);
      localStorage.setItem("product-list", JSON.stringify(updatedCartList));
      toast.success("Product added to cart!");
    }
  };

  const authInfo = {
    addProduct,
    addWish,
    cartList,
  };

  return (
    <ProductProvider.Provider value={authInfo}>
      {children}
    </ProductProvider.Provider>
  );
};

export default ProductContext;
