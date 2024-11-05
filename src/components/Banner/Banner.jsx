import img from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="h-[620px] lg:h-[890px]">
      <div className="text-center bg-[#9538E2] rounded-b-lg h-[500px] lg:h-[610px] pt-10 w-[98%]  mx-auto rounded-lg mt-1 outline-double outline-red-300 ">
        <h2 className="text-2xl lg:text-5xl text-white font-bold  w-9/12 mx-auto">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h2>
        <p className="text-base text-white font-medium w-10/12 lg:w-6/12 mx-auto my-5">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!{" "}
        </p>
        <button className="btn bg-white w-44 rounded-full text-[#9538E2] mt-5 ">
          Shop Now
        </button>
      </div>
      <div className="w-full mx-auto flex justify-center items-center relative">
        <div className="bg-white bg-opacity-60 backdrop-blur-sm outline-double outline-cyan-500 absolute w-[260px] h-[210px] lg:w-[920px] lg:h-[520px] rounded-lg">
          <img
            src={img}
            alt=""
            className="w-[250px] h-[210px] lg:w-[900px] lg:h-[500px] rounded-lg pt-2 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
