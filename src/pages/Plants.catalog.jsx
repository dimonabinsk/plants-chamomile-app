import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Loader from "../utility/loader/loader";
import GetImage from "../components/getImages/getImage";
import Pagination from "../components/pagination/Pagination";
// import { paginate } from "../utility/pagination/pagination";

const PlantsCatalog = () => {
  const [catalog, setCatalog] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const PageSize = 1;
  const [currentPage, setCurrentPage] = useState(1);
  const count = catalog.length;

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  useEffect(() => {
    axios
      .get("http://localhost:9000/catalog")
      .then((response) => {
        setCatalog(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    count > 0 ? setFetching(false) : setFetching(true);
  }, [count]);

  const catalogCrop = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return catalog.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, catalog]);

  return isFetching ? (
    <Loader />
  ) : (
    <>
      <div className=" mx-5 sm:mx-10">
        <h1 className="mt-28 text-3xl">Цветы</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-36 -mx-5 sm:-mx-10">
          {catalogCrop.map((item) => {
            return (
              <div key={item.id} className=" mx-[10px] sm:mx-[20px]  pb-3 mb-8">
                <div className="max-h-[400px]  overflow-hidden rounded">
                  <Link to={`/catalog/${item.id}`}>
                    <GetImage
                      src={`${item.images[0]}`}
                      alt={item.name}
                      className={
                        "transition hover:scale-[1.1] w-full h-full object-cover"
                      }
                    />
                  </Link>
                </div>

                <div className=" flex flex-col items-center mt-3">
                  <h3 className="mb-2">{item.name}</h3>
                  <span>от {item.price} руб.</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Pagination
        totalCount={count}
        currentPage={currentPage}
        pageSize={PageSize}
        onPageChange={handlePageChange}
      />
      <div className=" h-96"></div>
    </>
  );
};

export default PlantsCatalog;
