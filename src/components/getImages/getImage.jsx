import React from "react";
import PropTypes from "prop-types";


const GetImage = ({ src, alt, className, width, height, ...attrs }) => {

  // const styles = {
  //   img: {
  //     objectFit:"contain"
  //   }
  // }
    // if (!src) {
    //     src = `https://via.placeholder.com/${width}x${height}`;
    // }
  return (
    <img src={src} alt={alt} className={className} {...attrs} />
  );
};

GetImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

GetImage.defaultProps = {
    src: "",
    alt: "Картинка цветка",
    className: ""
};

export default GetImage;
