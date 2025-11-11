import React, { use } from "react";
import { FcGlobe } from "react-icons/fc";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../../Provaider/AuthProvaider";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    // console.log("user logout click");
    logOut()
      .then(() => {
        alert("Your LogOut Susscessfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const link = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-Products"}>All Products</NavLink>
      </li>

      <li>
        <NavLink to={"/my-imports"}>My Imports</NavLink>
      </li>
      <li>
        <NavLink to={"/my-exports"}>My Exports</NavLink>
      </li>
      <li>
        <NavLink to={"/add-export"}>Add Exports</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li>
        <NavLink to={"/register"}>Register</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              z
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <Link
          to={"/"}
          className="md:text-2xl text-xl font-semibold md:font-bold text-blue-500 ml-2 flex items-center"
        >
          <FcGlobe className="md:w-[40px] md:h-[40px]" /> TradeFlow
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        <img
          className="w-12 mr-2  rounded-[50%] object-center items-center object-cover"
          src={`${user ? user.photoURL : " "}`}
          referrerPolicy="no-referrer"
          alt=""
        />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary md:px-8">
            {" "}
            Log Out
          </button>
        ) : (
          <Link to={"login"}>
            {" "}
            <button className="btn btn-primary md:px-8">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
