import { useEffect, useState, useMemo } from "react";
import { useDarkMode } from "../../hooks/useDarkMode";

// import { fixed } from "../../utility/fixed/fixed";
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
import { Burger } from "../../utility/burger/burger";
import SwitchTheme from "react-switch";
import NavBar from "./NavBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useMemo } from "react";

const Header = () => {
  const [isDarkMode, setDarkMode] = useDarkMode();
  const [heightHeader, setHeightHeader] = useState("h-16");
  const [burgerActive, setBurgerActive] = useState("");
  const [switchState, setSwitchState] = useState(true);


  const [fixedHeader, setFixedHeader] = useState(false);
  useMemo(() => {
    let lastScrollTop = 0;
    window.onscroll = () => {
      let scrollDistance = window.scrollY;
      if (scrollDistance > lastScrollTop || scrollDistance === 0) {
        setFixedHeader(false);
      } else {
        
        setFixedHeader(true);
      }
      lastScrollTop = scrollDistance;
    };
  }, []);

  const handlerModeTheme = () => {
    if (isDarkMode) {
      setDarkMode();
      setSwitchState(!switchState);
    }
    setDarkMode();
    setSwitchState(!switchState);
  };

  const handlerClickLink = () => {
    setHeightHeader("h-16");
    burgerActive === "burger--active"
      ? setBurgerActive("")
      : setBurgerActive("burger--active");
  };

  useEffect(() => {
    isDarkMode ? setSwitchState(false) : setSwitchState(true);
  }, [isDarkMode]);

  return (
    <>
      <header
        className={`header ${
          fixedHeader ? "fixed" : ""
        } top-0 left-0 z-20 w-full overflow-hidden bg-white dark:bg-neutral-600 lg:flex ${heightHeader} px-4 sm:pr-0 lg:h-16 lg:items-center lg:justify-between lg:p-5 `}
      >
        <Burger
          height={setHeightHeader}
          currentHeight={heightHeader}
          active={setBurgerActive}
          currentActive={burgerActive}
        />
        <LogoSvg statusTheme={switchState} />
        <NavBar onHandlerClick={handlerClickLink} />

        <div className="static top-4 left-1/3 mt-3 flex flex-col items-center justify-center sm:absolute sm:mt-0 lg:static lg:block">
          <form>
            <input
              type={"search"}
              placeholder="Поиск"
              aria-label="Search"
              className="form-input rounded border-slate-400 bg-slate-200 pt-1 pb-1 focus:border-transparent dark:bg-[#1c1c1c] dark:text-gray-50"
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
          <NavLink to="/user" className="mx-2 hover:text-[#00cc00] ">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </NavLink>
          <NavLink to="/bag" className="ml-1 mr-1 hover:text-[#00cc00]">
            <FontAwesomeIcon icon={faBagShopping} size="lg" />
          </NavLink>

          <span className="shop-bag--quantity dark:text-white">0</span>
        </div>
        <div className="mt-4 flex flex-col items-center justify-center sm:absolute sm:top-5 sm:right-20 sm:mt-0 sm:ml-4 sm:flex-row lg:static">
          <SwitchTheme
            onChange={handlerModeTheme}
            checked={switchState}
            onColor={"#ffae42"}
            checkedIcon={
              <FontAwesomeIcon
                icon={faSun}
                className="ml-[6px] align-sub text-white"
              />
            }
            uncheckedIcon={
              <FontAwesomeIcon
                icon={faMoon}
                className="ml-2 align-sub text-[#1c1c1c]"
              />
            }
          />
        </div>
      </header>
    </>
  );
};

export default Header;
