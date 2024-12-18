import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Categories = ({ cate }) => {
  console.log(cate);

  return (
    <>
      <div
        role="tablist"
        className="tabs tabs-lifted border bg-[#09080F0D] p-2 gap-2 rounded-lg"
      >
        {cate.map((category) => (
          <NavLink
            to={`/category/${category.category}`}
            key={category.id}
            category={category}
            // state={{ selectedCategory: category.category }}
            role="tab"
            className={({ isActive }) =>
              `text-xl font-bold p-2 rounded-lg ${
                isActive ? "bg-[#9538E2] tab-active" : "bg-white"
              }`
            }
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </>
  );
};

Categories.propTypes = {
  cate: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Categories;
