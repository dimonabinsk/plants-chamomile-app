import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCatalog from "../components/images/Image.catalog";

const Catalog = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/catalog")
    .then((response) => {
        setCatalog(response.data);
      
    })
    .catch(error => console.error(error))
  }, []);
  // console.log(catalog);
  return (
    <>
      <h1 className={"mt-28"}>Каталог</h1>
      {catalog &&
        catalog.map((item) => {
          // console.log(item.images);
          return <ImageCatalog key={item} src={`${item.images}`} width={200} alt={"Алое Вера"} />;
        })}
    </>
  );
};

export default Catalog;
