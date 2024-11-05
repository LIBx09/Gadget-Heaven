import PropTypes from "prop-types";

const Card = ({ product }) => {
  const { title, price, image } = product;
  return (
    <>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
            className="h-[200px] w-[150px] rounded-2xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <p className="text-xl font-medium tex">Price:{price}</p>
          <div className="card-actions">
            <button className="btn btn-accent btn-outline">View Details</button>
          </div>
        </div>
      </div>
    </>
  );
};
Card.propTypes = {
  product: PropTypes.object.isRequired, // Corrected syntax
};

export default Card;
