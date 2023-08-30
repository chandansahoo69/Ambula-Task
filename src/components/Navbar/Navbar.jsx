import React, { useState } from "react";
import "./Navbar.css";
import menuItems from "utils/MenuItems";
import ReactIcon from "components/ReactIcon/ReactIcon";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Ambula Task</h1>
      <div className="menu-icon" onClick={handleClick}>
        {active ? (
          <ReactIcon className="fa-bars" iconName={"zondicons:close-outline"} />
        ) : (
          <ReactIcon
            className="fa-times"
            iconName={"ant-design:bars-outlined"}
          />
        )}
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                to={item.url}
                className={item.cName}
                onClick={handleClick}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
