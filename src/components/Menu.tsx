import axios from "axios";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
//import { Link } from "react-router-dom";

const Menu = () => {
  const logout = async () => {
    await axios.post("logout");
  };
  return (
    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      {/* <div className="offcanvas-md offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel"> */}
      <div
        className="offcanvas-md offcanvas-end bg-body-tertiary"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            Company name
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink
                to={"/"}
                className="nav-link d-flex align-items-center gap-2 "
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/users"}
                className="nav-link d-flex align-items-center gap-2 "
              >
                User
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/roles"}
                className="nav-link d-flex align-items-center gap-2 "
              >
                Roles
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/products"}
                className="nav-link d-flex align-items-center gap-2 "
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/orders"}
                className="nav-link d-flex align-items-center gap-2 "
              >
                Orders
              </NavLink>
            </li>
          </ul>

          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <NavLink
                to="/profile"
                className="nav-link d-flex align-items-center gap-2"
              >
                {/* <svg className="bi"><use xlink:href="#gear-wide-connected"/></svg> */}
                Settings
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/login"
                className="nav-link d-flex align-items-center gap-2"
                onClick={logout}
              >
                {/* <svg className="bi"><use xlink:href="#door-closed"/></svg> */}
                Sign out
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
