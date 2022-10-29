import React from "react";
import { Link } from "react-router-dom";
import SocialNetwork from "../socialNetwork/socialNetwork";
import "./banner.css";
// import PropTypes from "prop-types";

const Banner = () => {
  return (
    <section className=" relative top-24 z-10 px-4 sm:px-5">
      <div className="banner-img absolute top-[200px] right-0 h-[80vw] w-[80vw] rounded sm:top-0 sm:right-auto sm:left-[20vw] sm:h-[50vw] sm:w-[70vw] lg:h-[40vw] "></div>
      <div className="relative max-w-lg sm:top-[15vw]">
        <h1 className=" banner-title absolute whitespace-nowrap dark:text-white dark:mix-blend-difference sm:top-[-3vw]">
          Комнатные растения
        </h1>
        <span className="banner-txt  top-[10vw] left-[30vw] text-[#00cc00] sm:top-[3vw] sm:left-[20vw]">
          с любовью...
        </span>
        <p className="absolute top-[20vw] leading-[24px] dark:text-white dark:mix-blend-difference sm:top-[15vw] lg:top-40">
          Мы поможем вам подобрать лучшие растения для вашего помещения,
          доставим их к вашей двери и поможем ухаживать за ними.
        </p>
        <div>
          <Link
            to="/catalog"
            className="banner-link absolute top-56 m-0 rounded py-2 px-5 focus:outline-none sm:top-64 sm:py-3 sm:px-8"
            role="button"
          >
            Просмотреть каталог
          </Link>
        </div>
      </div>

      <SocialNetwork styles="absolute top-[290px] left-[-5px] sm:left-auto sm:top-[15vw] sm:right-5" />
    </section>
  );
};

// Banner.propTypes = {};

export default Banner;
