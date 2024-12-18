const getStoredProductList = () => {
  const storedListStr = localStorage.getItem("product-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredProductList = (id) => {
  const storedList = getStoredProductList();
  if (storedList.includes(id)) {
    console.log(id, "already exists in the product list");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("product-list", storedListStr);
  }
};

const getStoredWishList = () => {
  const storedWishStr = localStorage.getItem("product-wish-list");
  if (storedWishStr) {
    const storedWish = JSON.parse(storedWishStr);
    return storedWish;
  } else {
    return [];
  }
};

const addToWishList = (id) => {
  const storedWish = getStoredWishList();
  if (storedWish.includes(id)) {
    console.log(id, "already exist");
  } else {
    storedWish.push(id);
    const storedWishStr = JSON.stringify(storedWish);
    localStorage.setItem("product-wish-list", storedWishStr);
  }
};

export {
  addToStoredProductList,
  getStoredProductList,
  addToWishList,
  getStoredWishList,
};
