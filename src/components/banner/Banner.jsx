import React from "react";
import { Link } from "react-router-dom";
import SocialNetwork from "../socialNetwork/socialNetwork";
import "./banner.css";
// import PropTypes from "prop-types";

const Banner = () => {
  return (
    <section className=" relative top-24 px-4 sm:px-5 z-10">
      <div className="banner-img absolute top-[200px] sm:top-0 right-0 sm:right-auto sm:left-[20vw] w-[80vw] h-[80vw] sm:w-[70vw] sm:h-[50vw] lg:h-[40vw] rounded "></div>
      <div className="relative max-w-lg sm:top-[15vw]">
        <h1 className=" banner-title absolute sm:top-[-3vw] dark:text-white dark:mix-blend-difference whitespace-nowrap">
          Комнатные растения
        </h1>
        <span className="banner-txt  text-[#00cc00] top-[10vw] sm:top-[3vw] left-[30vw] sm:left-[20vw]">
          с любовью...
        </span>
        <p className="absolute leading-[24px] top-[20vw] sm:top-[15vw] lg:top-40 dark:text-white dark:mix-blend-difference">
          Мы поможем вам подобрать лучшие растения для вашего помещения,
          доставим их к вашей двери и поможем ухаживать за ними.
        </p>
        <div>
          <Link
            to="/catalog"
            className="banner-link absolute m-0 focus:outline-none top-56 sm:top-64 py-2 px-5 sm:py-3 sm:px-8 rounded"
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
