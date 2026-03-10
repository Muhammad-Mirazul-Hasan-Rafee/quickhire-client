import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/Navbar/navbarIcon.svg";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext/AuthContext";
const Navbar = () => {
  const { loading, user, logoutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        console.log("Logout successfull!!");
      })
      .catch((err) => console.log("Logout unsuccessfull!!", err));
  };
  // loading
  if (loading) {
    return (
      <div className="flex justify-center items-center h-12">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }
  return (
    <div className="flex justify-between bg-base-100   shadow-sm mx-8">
      <div className="navbar-start ">
        <Link to="/" className="flex gap-4">
          <img src={Logo} className="w-10 h-9" alt="" />
          <h3 className="w-9 font-bold text-2xl red-hat-display-font ">
            QuickHire
          </h3>
        </Link>
      </div>
      {/* nav btns container */}
      <div className="navbar-center gap-x-2 hidden lg:flex ">
        <NavLink
          to="/addjobs"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold btn bg-slate-950 "
              : "text-[#4640DE] btn btn-soft btn-primary"
          }
        >
          Admin View
        </NavLink>
        <NavLink
          to="/alljobs"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold btn bg-slate-950 "
              : "text-[#4640DE] btn btn-soft btn-primary"
          }
        >
          Find Jobs
        </NavLink>
        <NavLink to="/companies"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold btn bg-slate-950 "
              : "text-[#4640DE] btn btn-soft btn-primary"
          }
        >
          Browse Companies
        </NavLink>
        <NavLink
          to="/myapplications"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold btn bg-slate-950 "
              : "text-[#4640DE] btn btn-soft btn-primary"
          }
        >
          My Applications
        </NavLink>
      </div>

      <div className="navbar-end gap-x-6">
        {user ? (
          <>
            <Link
              onClick={handleLogout}
              className="hidden lg:inline-block btn btn-dash btn-primary lg:w-[92px] lg:h-[50px] lg:px-6 lg:py-3 lg:epilogue-font"
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="hidden lg:inline-block btn btn-dash btn-primary lg:w-[92px] lg:h-[50px] lg:px-6 lg:py-3 lg:epilogue-font"
            >
              Login
            </Link>
            <div className="border text-[#D6DDEB] h-12 hidden lg:inline-block"></div>
            <Link
              to="/signup"
              className="hidden lg:inline-block btn btn-primary lg:w-[108px] lg:h-[50px] lg:px-6 lg:py-3 lg:epilogue-font lg:text-[#FFFFFF] "
            >
              Sign Up
            </Link>
          </>
        )}

        {/* dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <li
            tabIndex="-1"
            className="menu menu-sm mr-8 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {user ? (
              <>
                <button
                  onClick={handleLogout}
                  className="hidden lg:inline-block btn btn-dash btn-primary lg:w-[92px] lg:h-[50px] lg:px-6 lg:py-3 lg:epilogue-font"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hidden lg:inline-block btn btn-dash btn-primary lg:w-[92px] lg:h-[50px] lg:px-6 lg:py-3 lg:epilogue-font"
                >
                  <button>Login</button>
                </Link>
                <div className="border text-[#D6DDEB] h-12 hidden lg:inline-block"></div>
                <Link
                  to="/signup"
                  className="hidden lg:inline-block btn btn-primary lg:w-[108px] lg:h-[50px] lg:px-6 lg:py-3 lg:epilogue-font lg:text-[#FFFFFF] "
                >
                  Sign Up
                </Link>
              </>
            )}
            <button className="text-center">Find Jobs</button>
            <button className="text-center">Browse Companies</button>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
