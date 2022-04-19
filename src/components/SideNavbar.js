import React from "react";
import { NavLink } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./SideNavbar.css";
import SyneosHealthLogo from "../logos/syneos-health-logo.svg";

function SideNavbar() {
  return (
    <>
      <nav className="sidebar">
        <header>
          <img src={SyneosHealthLogo} alt="Syneos Health Logo" />
        </header>
        <ul className="nav-menu-items">
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <NavLink
                  to={item.path}
                  className="menu-bars"
                  activeClassName="active"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default SideNavbar;
