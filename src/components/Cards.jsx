import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Card from "./Card";

import { useLoaderData, useParams } from "react-router-dom";

// import Banner from "./Banner/Banner";

const Cards = () => {
  const data = useLoaderData();

  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category === "All") {
      setProducts(data);
    } else {
      const filteredByCategory = [...data].filter(
        (product) => product.category === category
      );
      setProducts(filteredByCategory);
    }
  }, [category, data]);

  return (
    <>
      <div className="">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.length > 0 ? (
            products.map((product) => (
              <Card key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center text-4xl font-bold bg-red-700 text-white p-4 rounded-lg">
              No data found.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

Cards.propTypes = {
  category: PropTypes.object,
};

export default Cards;
