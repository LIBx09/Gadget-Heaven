import { MdOutlineDelete } from "react-icons/md";

/* eslint-disable react/prop-types */
const Cart = ({ item }) => {
  console.log("Cart Item:", item);
  if (!item) {
    return <p>No item found</p>;
  }
  console.log("item not found:", item);
  const { id, image, title, description } = item;

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            className="w-[200px] ml-20 p-4 rounded-lg"
            alt="Movie"
          />
        </figure>
        <div className="p-5 space-y-5 flex justify-between items-center w-full mx-20">
          <div>
            <h2 className="card-title">
              {title}
              {id}
            </h2>
            <p>About:{description}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-error">
              {" "}
              <MdOutlineDelete className="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
