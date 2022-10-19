import { useEffect, useState } from "react";
import {
  faBagShopping,
  faUser,
  faSun,
  faMagnifyingGlass,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
// import { faSun } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";

import "./header.css";

import LogoSvg from "./Logo";
import { Burger } from "../../utility/burger";
import SwitchTheme from "react-switch";
import NavBar from "./NavBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [heightHeader, setHeightHeader] = useState("h-16");
  const [burgerActive, setBurgerActive] = useState("");
  const [switchState, setSwitchState] = useState(true);

  const handlerClickLink = () => {
    setHeightHeader("h-16");
    burgerActive === "burger--active"
      ? setBurgerActive("")
      : setBurgerActive("burger--active");
  };

  useEffect(() => {
    localStorage.theme === "dark"
      ? setSwitchState(false)
      : setSwitchState(true);
  }, []);

  const handlerButtonTheme = () => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setSwitchState(true);
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setSwitchState(false);
    }
  };

  return (
    <>
      <header
        className={`bg-white dark:bg-neutral-600 fixed top-0 left-0 z-10 w-full overflow-hidden lg:flex ${heightHeader} lg:items-center lg:justify-between lg:pr-5 lg:h-16 pl-5 `}
      >
        <Burger
          height={setHeightHeader}
          currentHeight={heightHeader}
          active={setBurgerActive}
          currentActive={burgerActive}
        />
        <LogoSvg statusTheme={switchState} />
        <NavBar onHandlerClick={handlerClickLink} />

        <div className="static top-4 left-1/3 sm:absolute flex flex-col justify-center items-center lg:block lg:static mt-3 sm:mt-0">
          <form>
            <input
              type={"search"}
              placeholder="Поиск"
              aria-label="Search"
              className="form-input pt-1 pb-1 border-slate-400 rounded bg-slate-200 dark:bg-[#1c1c1c] dark:text-gray-50"
            />
            <button className="ml-1">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="lg"
                className="hover:text-[#00cc00]"
              />
            </button>
          </form>
        </div>
        <div
          className={"absolute top-6 left-2/4 sm:left-2/3 lg:static lg:top-0"}
        >
          <NavLink to="/user" className="hover:text-[#00cc00] mx-2 ">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </NavLink>
          <NavLink to="/bag" className="hover:text-[#00cc00] ml-1 mr-1">
            <FontAwesomeIcon icon={faBagShopping} size="lg" />
          </NavLink>

          <span className="shop-bag--quantity dark:text-white">0</span>
        </div>
        <div className="flex flex-col justify-center items-center mt-4 sm:flex-row sm:absolute sm:top-6 sm:right-20 sm:mt-0 sm:ml-4 lg:static">
          <SwitchTheme
            onChange={handlerButtonTheme}
            checked={switchState}
            onColor={"#00cc00"}
            checkedIcon={
              <FontAwesomeIcon
                icon={faSun}
                className="text-white align-sub ml-[6px]"
              />
            }
            uncheckedIcon={
              <FontAwesomeIcon
                icon={faMoon}
                className="text-[#1c1c1c] align-sub ml-2"
              />
            }
          />
        </div>
      </header>
    </>
  );
};

export default Header;
