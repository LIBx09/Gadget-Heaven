import { CiHeart } from "react-icons/ci";

import { IoCartOutline } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";
import { ProductProvider } from "../Provider/ProductContext";
import { useContext } from "react";

const CardDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const { addProduct, addWish } = useContext(ProductProvider);

  const product = data.find((item) => item.id == id);

  const { image, title, price, description, specification, rating } = product;

  return (
    <>
      <div className="hero h-[650px] w-[85%] mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={image}
            className="h-[550px] md:w-[500px] p-10 rounded-lg bg-base-200"
          />
          <div className="lg:w-[60%] lg:h-[550px] border p-10 space-y-4">
            <div>
              <h1 className="text-4xl font-bold">{title}</h1>
              <h2 className="text-xl font-medium mt-2">Price: {price}$</h2>
            </div>
            <hr />
            <p className="border-2 bg-[#309C081A] w-24 text-center rounded-lg">
              inStock
            </p>

            <div>
              <p className="py-3">{description}</p>
              <hr />
              <div className="py-3">
                <p>
                  <span className="font-bold text-lg">Specification:</span>
                  {specification.map((spec, idx) => (
                    <li key={idx}>{spec}</li>
                  ))}
                </p>
                <div className="border-2 my-2"></div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">Rating: </span>
                    <span className="font-bold">{rating}/5</span>
                  </div>
                  <div className="rating">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <input
                        key={index}
                        type="radio"
                        name="rating-2"
                        className={`mask mask-star-2 ${
                          index < rating ? "bg-orange-400" : "bg-gray-300"
                        }`}
                        checked={index < rating}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => addProduct(id)}
                className="btn text-sm md:text-xl font-semibold w-44 bg-[#59C6D2] lg:mb-0"
              >
                Add to Cart <IoCartOutline />
              </button>
              <button
                onClick={() => addWish(id)}
                className="btn text-xl  font-semibold bg-[#59C6D2]"
              >
                <CiHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
