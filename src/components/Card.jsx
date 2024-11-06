import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { id, title, price, image } = product;
  return (
    <>
      <Link to={`/detail/${id}`}>
        <div className="card card-compact bg-base-100 shadow-xl h-[350px]">
          <figure>
            <img
              src={image}
              alt="Shoes"
              className="h-[150px] w-[150px] rounded-2xl "
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">{title}</h2>
            <p className="text-xl font-medium tex">Price:{price}</p>
            <div className="card-actions">
              <button className="btn btn-accent btn-outline">
                View Details
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
Card.propTypes = {
  product: PropTypes.object.isRequired, // Corrected syntax
};

export default Card;
