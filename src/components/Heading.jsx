// import PropTypes from "prop-types";

import PropTypes from "prop-types";

import { useLocation } from "react-router-dom";

const Heading = ({ title, subtitle }) => {
  const dashLocation = useLocation();
  const isDashLocation = dashLocation.pathname === "/dashboard";

  return (
    // <div className="bg-[#9538E2] h-[160px] text-center pt-5">
    <div
      className={`bg-[#9538E2] ${
        isDashLocation ? "h-[250px]" : "h-[160px]"
      } text-center pt-5`}
    >
      <h3 className="text-3xl font-bold text-white">{title}</h3>
      <p className="text-base font-normal text-[#FFFFFF] w-2/4 mx-auto mt-3">
        {subtitle}
      </p>
      {isDashLocation && (
        <div className="mt-10">
          <button className="mr-4 bg-white text-[#9538E2] px-4 py-2 rounded-full w-32">
            Cart
          </button>
          <button className="bg-white text-[#9538E2] px-4 py-2 rounded-full w-32">
            Wishlist
          </button>
        </div>
      )}
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Heading;
