import React from "react";
import { FaDumpster, FaFileImport, FaUser } from "react-icons/fa";
import { FcGlobe } from "react-icons/fc";
import { RiExportLine } from "react-icons/ri";
import { TiExportOutline } from "react-icons/ti";
import { Link, NavLink, Outlet } from "react-router";
import useRole from "../Hooks/useRole";
import { IoMdSettings } from "react-icons/io";

const DashboardLayout = () => {
  const [role] = useRole();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="px-4 text-3xl font-semibold text-blue-500">
            TradeFlow App
          </div>
        </nav>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* List item */}
            {/* tradflow home */}
            <li>
              <NavLink
                to={"/"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Home Page"
              >
                {/* Home icon */}
                <FcGlobe size={25} />
                <span className="is-drawer-close:hidden font-semibold text-2xl text-blue-600">
                  TradeFlow
                </span>
              </NavLink>
            </li>
            {/* dashboard home */}
            <li>
              <Link
                to={"/dashboard"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Dashboard Home"
              >
                {/* Home icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span className="is-drawer-close:hidden">Dashboard Home</span>
              </Link>
            </li>
            {/* my imports */}
            <li>
              <NavLink
                to={"my-imports"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Imports"
              >
                {/* Import icon */}
                <FaFileImport />
                <span className="is-drawer-close:hidden">My Imports</span>
              </NavLink>
            </li>
            {role === "admin" && (
              <>
                {/* my exports */}
                <li>
                  <NavLink
                    to={"my-exports"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="My Exports"
                  >
                    {/* Export icon */}
                    <TiExportOutline />
                    <span className="is-drawer-close:hidden">My Exports</span>
                  </NavLink>
                </li>
                {/* add exports */}
                <li>
                  <NavLink
                    to={"add-export"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Add Export"
                  >
                    {/* Add export icon */}
                    <RiExportLine />
                    <span className="is-drawer-close:hidden">Add Export</span>
                  </NavLink>
                </li>
                {/* user managment */}
                <li>
                  <NavLink
                    to={"users-managment"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Users Managment"
                  >
                    {/* user icon */}
                    <FaUser />
                    <span className="is-drawer-close:hidden">
                      Users Managment
                    </span>
                  </NavLink>
                </li>
              </>
            )}
            {/* List item */}
            <li>
              <NavLink
                to={"setting"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                {/* Settings icon */}
                <IoMdSettings />
                <span className="is-drawer-close:hidden">Settings</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
