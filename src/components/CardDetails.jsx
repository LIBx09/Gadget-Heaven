import { useLoaderData, useParams } from "react-router-dom";
import Heading from "./Heading";

const CardDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const product = data.find((item) => item.id === id);

  return (
    <>
      <Heading
        title={"Product Details"}
        subtitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      />
      {/* <div className="hero h-[600px] w-[85%] mx-auto">
      <div className="hero-content flex-col lg:flex-row">
        <img src="{}" className="h-[500px] p-10 rounded-lg bg-base-200" />
        <div className="lg:w-[60%] lg:h-[500px] border p-10 space-y-4">
          <div>
            <h1 className="text-4xl font-bold">{}</h1>
            <h2 className="text-xl font-medium">By: {}</h2>
          </div>
          <p className="py-6 border-y-2">{}</p>
          <div>
            <p className="py-3">
              <span className="font-bold">Review:</span> {}
            </p>
            <div className="flex gap-5 items-center border-b-2 pb-5">
              <h1 className="font-bold">Tag:</h1>
              <h1 className="badge text-[#3b919b] bg-[#c4e5e9]">{[0]}</h1>
              <h1 className="badge text-[#3b919b] bg-[#c4e5e9]">{[1]}</h1>
            </div>
            <div className="py-3">
              <p>
                <span className="font-medium">Total Page: </span>
                <span className="font-bold">{}</span>
              </p>
              <p>
                <span className="font-medium">Publisher: </span>
                <span className="font-bold">{}</span>
              </p>
              <p>
                <span className="font-medium">Year of Publishing: </span>
                <span className="font-bold">{}</span>
              </p>
              <p>
                <span className="font-medium">Rating: </span>
                <span className="font-bold">{}</span>
              </p>
            </div>
          </div>
          <button
        onClick={() => handleMarkAsRead()}
        className="btn text-sm md:text-xl font-semibold w-14 md:w-44 bg-[#59C6D2] lg:mb-0"
      >
        Mark As Read
      </button>
      <button
        onClick={() => handleWishList(id)}
        className="btn ml-0 lg:ml-4 text-sm md:text-xl w-14 md:w-32 font-semibold bg-[#59C6D2]"
      >
        WishList
      </button> 
          
        </div>
      </div>
    </div> */}
    </>
  );
};

export default CardDetails;
