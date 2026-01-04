// import React, { useEffect, useState, useContext } from "react";
// import { FcGlobe } from "react-icons/fc";
// import { CiImport } from "react-icons/ci";
// import { RiExportLine } from "react-icons/ri";
// import { FiBox } from "react-icons/fi";
// import { Link, NavLink } from "react-router";
// import { TiExportOutline } from "react-icons/ti";
// import { FaMoon, FaSun } from "react-icons/fa";
// import { HiOutlineHome } from "react-icons/hi2";
// import "./Navbar.css";
// import { AuthContext } from "../../Provaider/AuthProvaider";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

//   useEffect(() => {
//     document.documentElement.setAttribute(
//       "data-theme",
//       dark ? "dark" : "light"
//     );
//     localStorage.setItem("theme", dark ? "dark" : "light");
//   }, [dark]);

//   const handleLogOut = () => logOut();

//   const navLinks = (
//     <>
//       <li>
//         <NavLink to="/">
//           <HiOutlineHome /> Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to="/all-Products">
//           <FiBox /> All Products
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to="/my-imports">
//           <CiImport /> My Imports
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to="/my-exports">
//           <TiExportOutline /> My Exports
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to="/add-export">
//           <RiExportLine /> Add Exports
//         </NavLink>
//       </li>

//       {/* 🌙 ICON THEME SWITCH */}
//       <li>
//         <button
//           onClick={() => setDark(!dark)}
//           className="text-xl p-2 rounded-full hover:bg-base-200 transition"
//           title="Toggle Theme"
//         >
//           {dark ? (
//             <FaSun className="text-yellow-400" />
//           ) : (
//             <FaMoon className="text-gray-700 dark:text-white" />
//           )}
//         </button>
//       </li>
//     </>
//   );

//   return (
//     <div className="navbar bg-base-100 shadow-md px-4 rounded-b-xl">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             ☰
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
//           >
//             {navLinks}
//           </ul>
//         </div>

//         <Link
//           to="/"
//           className="text-2xl font-bold text-blue-500 flex items-center gap-2"
//         >
//           <FcGlobe size={36} /> TradeFlow
//         </Link>
//       </div>

//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal gap-2">{navLinks}</ul>
//       </div>

//       <div className="navbar-end flex items-center gap-3">
//         {user && (
//           <img
//             src={user.photoURL}
//             className="w-10 h-10 rounded-full object-cover border"
//           />
//         )}
//         {user ? (
//           <button onClick={handleLogOut} className="btn btn-primary">
//             Logout
//           </button>
//         ) : (
//           <Link to="/login">
//             <button className="btn btn-primary">Login</button>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useEffect, useState, useContext } from "react";
import { FcGlobe } from "react-icons/fc";
import { CiImport } from "react-icons/ci";
import { RiExportLine } from "react-icons/ri";
import { FiBox } from "react-icons/fi";
import { Link, NavLink } from "react-router";
import { TiExportOutline } from "react-icons/ti";
import { FaMoon, FaSun } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi2";
import "./Navbar.css";
import { AuthContext } from "../../Provaider/AuthProvaider";
import { MdDashboard } from "react-icons/md";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    );
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">
          <HiOutlineHome /> Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/all-Products">
          <FiBox /> All Products
        </NavLink>
      </li>

      {user && (
        <>
          {/* <li>
            <NavLink to="/dashboard/my-imports">
              <CiImport /> My Imports
            </NavLink>
          </li> */}

          {/* <li>
            <NavLink to="/my-exports">
              <TiExportOutline /> My Exports
            </NavLink>
          </li>

          <li>
            <NavLink to="/add-export">
              <RiExportLine /> Add Exports
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/dashboard">
              <MdDashboard /> Dashboard
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/about">
          <FiBox /> About Us
        </NavLink>
      </li>

      <li>
        <button
          onClick={() => setDark(!dark)}
          className="text-xl p-2 rounded-full hover:bg-base-200 transition"
          title="Toggle Theme"
        >
          {dark ? <FaSun className="text-yellow-400" /> : <FaMoon />}
        </button>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4 rounded-b-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>

        <Link
          to="/"
          className="text-2xl font-bold text-blue-500 flex items-center gap-2"
        >
          <FcGlobe size={36} aria-label="TradeFlow logo" />
          TradeFlow
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">{navLinks}</ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        {user && (
          <img
            src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover border"
          />
        )}

        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary">
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
