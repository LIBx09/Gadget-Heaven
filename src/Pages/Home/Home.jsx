import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../../components/Categories";
import Banner from "../../components/Banner/Banner";
import { Helmet } from "react-helmet";

// import Navbar from "../Shared/Navbar/Navbar";
// import Cards from "../../components/Cards";
// import { useEffect, useState } from "react";

const Home = () => {
  const categories = useLoaderData();

  // const isLocation = location.pathname === "/";
  // const selectedCategory = location.state?.selectedCategory;
  // console.log(selectedCategory);

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("/data.json")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  // const filterProduct =
  //   selectedCategory == "All"
  //     ? products
  //     : products.filter((product) => product.category == selectedCategory);

  return (
    <>
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Banner />

        <h2 className="font-bold text-4xl text-black text-center mt-10">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 w-10/12 mx-auto gap-3 mb-20 mt-5">
          <div className="">
            <Categories cate={categories} />
          </div>
          <div className="col-span-3">
            {/* {selectedCategory && (
                  <Cards
                    // key={filterProduct.id}
                    selectedCategory={selectedCategory}
                    products={filterProduct}
                  />
                )} */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
