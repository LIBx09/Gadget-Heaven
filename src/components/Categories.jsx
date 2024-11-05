import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Categories = ({ cate }) => {
  //   console.log(cate);

  return (
    <>
      <div
        role="tablist"
        className="tabs tabs-lifted border bg-[#09080F0D] p-2 gap-2 rounded-lg"
      >
        {cate.map((category) => (
          <Link
            to={`/category/${category.category}`}
            key={category.id}
            category={category}
            // state={{ selectedCategory: category.category }}
            role="tab"
            className="text-xl font-bold bg-white p-2 rounded-lg"
          >
            {category.category}
          </Link>
        ))}
      </div>
    </>
  );
};

Categories.propTypes = {
  cate: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Categories;
