import React from "react";
import { Link } from "react-router-dom";
import SocialNetwork from "../socialNetwork/socialNetwork";
import "./banner.css";
// import PropTypes from "prop-types";

const Banner = () => {
  return (
    <section className="banner">
      <h1 className="banner__title dark:text-white dark:mix-blend-difference">
        Комнатные растения
      </h1>
      <span className="banner__txt drop-shadow-lg dark:text-green-600">
        с любовью...
      </span>
      <p className="banner__description dark:text-white dark:mix-blend-difference">
        Мы поможем вам подобрать лучшие растения для вашего помещения, доставим
        их к вашей двери и поможем ухаживать за ними.
      </p>
      <Link to="/plants" className="banner__link">
        Просмотреть каталог
      </Link>

      <SocialNetwork styles="absolute right-0 top-1/2 -translate-y-2/4" />
    </section>
  );
};

// Banner.propTypes = {};

export default Banner;
