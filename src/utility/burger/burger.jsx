import React from 'react';
import "./burger.css";

export const Burger = ({ currentHeight, height, active, currentActive }) => {
  const handlerClickBurger = () => {
    currentHeight === "h-full" ? height("h-16") : height("h-full");
    currentActive === "burger--active" ? active("") : active("burger--active");
  };

  return (
    <div className={"mr-4 sm:mr-6 sm:block lg:hidden"}>
      <button
        className={`burger ${currentActive}`}
        onClick={handlerClickBurger}
      >
        <span className="burger__line bg-slate-900 dark:bg-slate-300"></span>
        <span className="burger__line bg-slate-900 dark:bg-slate-300"></span>
        <span className="burger__line bg-slate-900 dark:bg-slate-300"></span>
      </button>
    </div>
  );
};
