import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavBar = ({ onHandlerClick }) => {
  const linkList = [
    {
      id: 1,
      name: "Каталог",
      path: "/catalog",
    },
    {
      id: 2,
      name: "Аксессуары",
      path: "/accessories",
    },
    {
      id: 3,
      name: "Уход за растениями",
      path: "/plantcare",
    },
    {
      id: 4,
      name: "Блог",
      path: "/blog",
    },
  ];

  return (
    <div className={"lg:flex-1"}>
      <nav
        className={
          "nav-link flex flex-col justify-center items-center lg:flex-row "
        }
      >
        {linkList.map(({ id, name, path }, i) => (
          <NavLink
            key={id}
            to={path}
            className={`text-[30px] lg:text-base ${
              linkList.length - 1 === i ? "" : "lg:mr-2"
            }`}
            onClick={onHandlerClick}
            activeClassName="active-link"
          >
            {name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

NavBar.propTypes = {
  onHandlerClick: PropTypes.func,
};

export default NavBar;
