import { Link, NavLink } from "react-router-dom";
import Home from "../Home/Home";

const Header = () => {
  return (
    <div className="navbar shadow-sm bg-[#2b2b2b] flex justify-center !mb-2.5 !rounded-none">
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 !mb-0">
          <li>
            <NavLink
              to="/"
              className={(navDate) =>
                navDate.isActive
                  ? "!text-white text-2xl !no-underline !bg-green-800 mx-1"
                  : "!text-white text-2xl !no-underline mx-1"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={(navDate) =>
                navDate.isActive
                  ? "!text-white text-2xl !no-underline !bg-green-800 mx-1"
                  : "!text-white text-2xl !no-underline mx-1"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              className={(navDate) =>
                navDate.isActive
                  ? "!text-white text-2xl !no-underline !bg-green-800 mx-1"
                  : "!text-white text-2xl !no-underline mx-1"
              }
            >
              Posts
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
