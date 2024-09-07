
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const navLinks = (
    <>
      <li className="font-bold text-base text-[#993333]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline decoration-2 decoration-sky-400" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="font-bold text-base text-[#993333]">
        <NavLink
          to="/allArt&Craft"
          className={({ isActive }) =>
            isActive ? "underline decoration-2 decoration-sky-400" : ""
          }
        >
          All Art & craft Items
        </NavLink>
      </li>
      <li className="font-bold text-base text-[#993333]">
        <NavLink
          to="/addCraft"
          className={({ isActive }) =>
            isActive ? "underline decoration-2 decoration-sky-400" : ""
          }
        >
          Add Craft Item
        </NavLink>
      </li>
      <li className="font-bold text-base text-[#993333]">
        <NavLink
          to="/myArt&Craft"
          className={({ isActive }) =>
            isActive ? "underline decoration-2 decoration-sky-400" : ""
          }
        >
          My Art&Craft List
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 fixed top-0 z-10 shadow-sm px-24">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl Libre-Baskerville">
            <span className="text-sky-400">Canvas</span>{" "}
            <span className="text-pink-400">Arena</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link
          to="/login"
          className="px-5 py-2.5 relative rounded group text-white font-medium inline-block"
        >
          <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
          <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
          <button className="relative">Login</button>
        </Link>
        </div>

        
      </div>
    </div>
  );
};

export default Navbar;
