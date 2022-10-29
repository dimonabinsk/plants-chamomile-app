import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Loader from "../utility/loader/loader";
import GetImage from "../components/getImages/getImage";
import Pagination from "../components/pagination/Pagination";


const PlantsCatalog = () => {
  const [catalog, setCatalog] = useState([]);
  const [isFetching, setFetching] = useState(true);
  const PageSize = 4;
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
        setFetching(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const catalogCrop = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return catalog.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, catalog]);

  return isFetching ? (
    <Loader />
  ) : (
    <>
      <div className={` mx-5 sm:mx-10`}>
        <h1 className=" text-3xl">Цветы</h1>
        <div className="-mx-5 mt-36 grid grid-cols-1 sm:-mx-10 sm:grid-cols-2 lg:grid-cols-4">
          {catalogCrop.map((item) => {
            return (
              <div key={item.id} className=" mx-[10px] mb-8  pb-3 sm:mx-[20px]">
                <div className="max-h-[400px]  overflow-hidden rounded">
                  <Link to={`/catalog/${item.id}`}>
                    <GetImage
                      src={`${item.images[0]}`}
                      alt={item.name}
                      className={
                        "h-full w-full object-cover transition hover:scale-[1.1]"
                      }
                    />
                  </Link>
                </div>

                <div className=" mt-3 flex flex-col items-center">
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
