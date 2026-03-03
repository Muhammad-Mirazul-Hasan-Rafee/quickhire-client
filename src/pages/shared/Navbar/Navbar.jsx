import React from "react";
import Logo from "../../../assets/Navbar/navbarIcon.svg";
const Navbar = () => {
  return (
    <div className="flex justify-between bg-base-100 shadow-sm mx-5">
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
        <button className="btn btn-soft btn-primary">Find Jobs</button>
        <button className="btn btn-soft btn-primary">Browse Companies</button>
      </div>

      <div className="navbar-end gap-x-6">
        <button className="btn btn-dash btn-primary w-[92px] h-[50px] px-6 py-3 epilogue-font">
          Login
        </button>
        <div className="border text-[#D6DDEB] h-12"></div>
        <button className="btn btn-primary w-[108px] h-[50px] px-6 py-3 epilogue-font text-[#FFFFFF]">
          Sign Up
        </button>

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
            className="menu menu-sm mr-12 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <button className="text-center">Find Jobs</button>
            <button className="text-center">Browse <br />Companies</button>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
