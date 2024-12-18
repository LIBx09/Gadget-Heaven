import { MdOutlineDelete } from "react-icons/md";

/* eslint-disable react/prop-types */
const Cart = ({ item }) => {
  console.log("Cart Item:", item);
  if (!item) {
    return <p>No item found</p>;
  }
  console.log("item not found:", item);
  const { image, title, description } = item;

  return (
    <div className="card flex flex-col gap-4 md:flex-row bg-base-100 shadow-xl mx-5 md:mx-10 my-5">
      <figure className="flex justify-center p-4">
        <img
          src={image}
          className="w-full max-w-[200px] object-contain rounded-lg"
          alt="Movie"
        />
      </figure>
      <div className="p-5 space-y-5 flex flex-col text-center md:flex-row justify-between items-center w-full mx-4 md:mx-10">
        <div className="space-y-3 md:text-left">
          <h2 className="card-title text-lg md:text-xl">{title}</h2>
          <p className="text-sm md:text-base">About: {description}</p>
        </div>
        <div className="card-actions">
          <button className="btn btn-error flex items-center gap-2">
            <MdOutlineDelete />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
