
import { Link } from "react-router-dom";
import Logo from "../../../assets/Navbar/navbarIcon.svg";
const Navbar = () => {
  return (
    <div className="flex justify-between bg-base-100 shadow-sm mx-8">
      <div className="navbar-start ">
        <div className="flex gap-4">
          <img src={Logo} className="w-10 h-9" alt="" />
          <h3 className="w-9 font-bold text-2xl red-hat-display-font ">
            QuickHire
          </h3>
        </div>
      </div>
      {/* nav btns container */}
      <div className="navbar-center gap-x-2 hidden lg:flex ">
        <button className="btn btn-soft btn-primary">Admin View</button>
        <button className="btn btn-soft btn-primary">Find Jobs</button>
        <button className="btn btn-soft btn-primary">Browse Companies</button>
      </div>

      <div className="navbar-end gap-x-6">
       <button className="hidden lg:inline-block btn btn-dash btn-primary lg:w-[92px] lg:h-[50px] lg:px-6 lg:py-3 lg:epilogue-font">
  Login
</button>

        <div className="border text-[#D6DDEB] h-12 hidden lg:inline-block"></div>
        <Link to="/signup" className="hidden lg:inline-block btn btn-primary lg:w-[108px] lg:h-[50px] lg:px-6 lg:py-3 lg:epilogue-font lg:text-[#FFFFFF] ">
          Sign Up
        </Link>

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
            <button className=" epilogue-font">
          Login
        </button>
         <button className="epilogue-font">
          Sign Up
        </button>
            <button className="text-center">Find Jobs</button>
            <button className="text-center">Browse Companies</button>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
