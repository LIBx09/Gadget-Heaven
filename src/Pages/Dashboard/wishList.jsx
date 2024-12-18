import { MdOutlineDelete } from "react-icons/md";

/* eslint-disable react/prop-types */
const WishList = ({ item }) => {
  if (!item) {
    return <p>No item found</p>;
  }
  console.log(item);
  const { image, title, description } = item;

  return (
    <div className="card flex flex-col md:flex-row bg-base-100 shadow-xl mx-5 md:mx-10 my-5">
      <figure className="flex justify-center md:justify-start p-4">
        <img
          src={image}
          className="w-full max-w-[150px] md:max-w-[200px] object-contain"
          alt="Movie"
        />
      </figure>
      <div className="p-5 flex flex-col md:flex-row justify-between items-center w-full">
        <div className="space-y-3 text-center md:text-left">
          <h2 className="card-title text-lg md:text-xl">{title}</h2>
          <p className="text-sm md:text-base">About: {description}</p>
        </div>
        <div className="card-actions mt-4 md:mt-0">
          <button className="btn btn-error flex items-center gap-2">
            <MdOutlineDelete />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishList;
