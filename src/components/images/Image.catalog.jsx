import React from "react";
import PropTypes from "prop-types";

const ImageCatalog = ({ src, alt, className, width, height, ...attrs }) => {
    if (!src) {
        src = `https://via.placeholder.com/${width}x${height}`;
    }
  return (
    <img src={src} alt={alt} className={className} width={width} {...attrs} />
  );
};

ImageCatalog.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

ImageCatalog.defaultProps = {
    src: "",
    alt: "Картинка цветка",
    className: "",
    width: 100,
    height: 100
};

export default ImageCatalog;
