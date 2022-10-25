import React from "react";
import PropTypes from "prop-types";
// import { useParams } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import GetImage from "../components/getImages/getImage";

const PlantPage = ({ id }) => {
  // const {plantId} = useParams();
  // const {planId} = useParams();

  // const history = useHistory();
  // console.log(history);
  const [isPlant, setPlant] = useState([]);
  // console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:9000/catalog?id=${id}`)
      .then((response) => {
        setPlant(response.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  console.log(isPlant);

  return (
    isPlant &&
    isPlant.map((item) => (
      <div key={item.id} className=" relative top-20 z-20 w-80 h-96">
        <div className="w-full h-full">
          <GetImage
            src={`${item.images[0]}`}
            alt={`${item.name}`}
            className="w-full h-full"
          />
        </div>
        <div>
          <h1>{item.name}</h1>
        </div>
      </div>
    ))
  );
};

PlantPage.propTypes = {
  id: PropTypes.string,
};

export default PlantPage;
