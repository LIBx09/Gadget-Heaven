import { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
// import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ProductProvider } from "../../../Provider/ProductContext";

// import Banner from "../../../components/Banner/Banner";

const Navbar = () => {
  const location = useLocation();
  const { cartList } = useContext(ProductProvider);
  console.log(cartList.length);
  const isLocation = location.pathname === "/";

  const navbar = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "btn btn-warning btn-outline" : "btn btn-ghost"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"dashboard"}
          className={({ isActive }) =>
            isActive ? "btn btn-warning btn-outline" : "btn btn-ghost"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"statistics"}
          className={({ isActive }) =>
            isActive ? "btn btn-warning btn-outline" : "btn btn-ghost"
          }
        >
          Statistics
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"future"}
          className={({ isActive }) =>
            isActive ? "btn btn-warning btn-outline" : "btn btn-ghost"
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      {/* className="navbar bg-red-600 rounded-t-lg"> */}
      <div
        className={`navbar ${
          isLocation
            ? "bg-[#9538E2] rounded-lg text-white w-[98%] mt-2 mx-auto  outline-double outline-cyan-500"
            : "bg-white text-black"
        }`}
      >
        <div className="navbar-start">
          <div className="border-x-2"></div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1]  mt-3 w-52 p-2 shadow"
            >
              {navbar}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Store</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4 ">{navbar}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <IoCartOutline />
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={cartList.length}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold text-black">
                  {cartList.length}
                </span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <Link to="/dashboard">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FaHeart />
              <span className="badge badge-xs badge-outline indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
      {/* <div>{isLocation && <Banner />}</div> */}
    </>
  );
};

export default Navbar;
