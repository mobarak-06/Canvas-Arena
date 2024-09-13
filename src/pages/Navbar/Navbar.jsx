import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import userPic from "../../assets/da7ed7b0-5f66-4f97-a610-51100d3b9fd2.jpg";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { logOut, user } = useAuth();
  const [theme, setTheme] = useState("light");

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("synthwave")
    }
    else{
      setTheme("light")
    }
  }

  console.log(theme);

  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])

  // sign out
  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("log out");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navLinks = (
    <>
      <li className="font-bold text-base text-secondary">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline decoration-2 decoration-sky-400" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="font-bold text-base text-secondary">
        <NavLink
          to="/allArt&Craft"
          className={({ isActive }) =>
            isActive ? "underline decoration-2 decoration-sky-400" : ""
          }
        >
          All Art & craft Items
        </NavLink>
      </li>
      <li className="font-bold text-base text-secondary">
        <NavLink
          to="/addCraft"
          className={({ isActive }) =>
            isActive ? "underline decoration-2 decoration-sky-400" : ""
          }
        >
          Add Craft Item
        </NavLink>
      </li>
      <li className="font-bold text-base text-secondary">
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
      <div className="navbar bg-base-100 fixed top-0 z-10 shadow-md md:px-24">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <GiHamburgerMenu size={27}/>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-2xl Libre-Baskerville">
            <span className="text-sky-400">Canvas</span>{" "}
            <span className="text-pink-400">Arena</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <label className="grid cursor-pointer place-items-center mr-2">
            <input
            onChange={handleToggle}
              type="checkbox"
              className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
            />
            <svg
              className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          {user ? (
            <div
              className="dropdown dropdown-end tooltip tooltip-left"
              data-tip={user?.displayName}
            >
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div
                  className="w-10 rounded-full tooltip tooltip-left"
                  data-tip="hello"
                >
                  <img alt="" src={user?.photoURL || userPic} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-80 p-2 shadow"
              >
                <li>
                  <a>
                    <span className="font-bold">Name:</span>
                    <span className=" font-semibold">
                      {user?.displayName}
                    </span>{" "}
                  </a>
                </li>
                <li>
                  <a>
                    <span className="font-bold">Email:</span>
                    <span className=" font-semibold">{user?.email}</span>{" "}
                  </a>
                </li>

                <li className="flex justify-center items-center">
                  <a
                    onClick={handleSignOut}
                    className="text-red-500 font-semibold"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
