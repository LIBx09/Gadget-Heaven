import { useLoaderData, useNavigate } from "react-router-dom";
import Heading from "../../components/Heading";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import { getStoredProductList, getStoredWishList } from "../../Utils";
import Cart from "./Cart";
import WishList from "./wishList";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const productData = useLoaderData();
  const navigate = useNavigate();

  const [productList, setProductList] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartIsEmpty, setCartIsEmpty] = useState(false); // Track if cart is empty

  useEffect(() => {
    const storedProductList = getStoredProductList() || [];
    const storedProductListInt = storedProductList.map((id) => parseInt(id));

    const filteredProductList = productData.filter((product) =>
      storedProductListInt.includes(product.id)
    );
    setProductList(filteredProductList);

    const calculatedTotal = Math.round(
      filteredProductList.reduce((sum, price) => sum + (price.price || 0), 0)
    );
    setTotal(calculatedTotal);
    setCartIsEmpty(filteredProductList.length === 0 || calculatedTotal === 0); // Update cart empty status
  }, [productData]);

  useEffect(() => {
    const storedWishlist = getStoredWishList() || [];
    const storedWishlistInt = storedWishlist.map((id) => parseInt(id));

    const filteredWishlist = productData.filter((wish) =>
      storedWishlistInt.includes(wish.id)
    );
    setWishlist(filteredWishlist);
  }, [productData]);

  // Handle sorting by price
  const handleSortByPrice = () => {
    const sortedPrice = [...productList].sort((a, b) => a.price - b.price);
    setProductList(sortedPrice);
  };

  const handlePurchase = () => {
    document.getElementById("my_modal_5").showModal();

    setProductList([]);
    setTotal(0);
    setCartIsEmpty(true);
    localStorage.removeItem("product-list");
  };

  const handleCloseModal = () => {
    navigate("/");
  };

  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Heading
        title={"Dashboard"}
        subtitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      />
      <div className=" text-center">
        <Tabs>
          <div className="bg-[#9538E2] h-16">
            <TabList>
              <Tab>Cart</Tab>
              <Tab>WishList</Tab>
            </TabList>
          </div>

          <TabPanel>
            <div className="flex justify-between items-center w-10/12 mx-auto my-10">
              <h3 className="border-sky-700 border-x-4 text-2xl font-bold p-2 rounded-lg">
                Cart
              </h3>
              <div className="flex flex-col md:flex-row items-center">
                <h4 className="md:w-72 border-sky-700 border-x-4 text-2xl font-bold p-2 rounded-lg my-5 md:my-1">
                  Total Cost: {total}
                </h4>
                <div>
                  <button
                    onClick={handleSortByPrice}
                    className="btn outline outline-violet-600 mx-4 text-[#9538E2]"
                  >
                    Sort by Price
                  </button>
                  <button
                    onClick={handlePurchase}
                    className="btn bg-violet-600 text-white"
                    disabled={cartIsEmpty}
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </div>

            <div className="my-10 w-10/12 mx-auto">
              {productList.length > 0 ? (
                productList.map((item) => <Cart key={item.id} item={item} />)
              ) : (
                <div>No products found in the cart.</div>
              )}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="my-10 w-10/12 mx-auto">
              {wishlist.length > 0 ? (
                wishlist.map((item) => <WishList key={item.id} item={item} />)
              ) : (
                <div>No products found in the wishlist.</div>
              )}
            </div>
          </TabPanel>
        </Tabs>
      </div>

      <dialog id="my_modal_5" className="modal">
        <div className="modal-box">
          <h2 className="text-2xl font-bold">Congratulations!</h2>
          <p>Your purchase was successful.</p>
          <div className="modal-action">
            <button className="btn" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;
