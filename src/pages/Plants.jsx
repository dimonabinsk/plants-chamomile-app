import React from "react";
import { useParams } from "react-router-dom";
import PlantPage from "./PlantPage";
import PlantsCatalog from "./Plants.catalog";
// import PropTypes from "prop-types";

const Plants = () => {
  const { plantId } = useParams();
  //   console.log(plantId);
  return plantId ? <PlantPage id={plantId} /> : <PlantsCatalog />;
};

// Plants.propTypes = {};

export default Plants;
