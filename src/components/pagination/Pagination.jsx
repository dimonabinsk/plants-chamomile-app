import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) {
    return null;
  }
  const pages = _.range(1, pageCount + 1);

  return (
    <div className="flex justify-center">
      <ul className="flex list-style-none">
        <li className="px-1 hidden sm:block">
          <button
            className={`relative py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded focus:shadow-none  ${
              currentPage <= 1
                ? "text-gray-500 pointer-events-none"
                : "text-[#1c1c1c] dark:text-white hover:text-white dark:hover:text-[#1c1c1c] hover:bg-[#0d0]"
            }`}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Назад
          </button>
        </li>
        {pages.map((page) => (
          <li key={`page_${page}`} className="page-item px-1">
            <button
              className={`relative py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded text-[#1c1c1c] dark:text-white hover:text-white dark:hover:text-[#1c1c1c] hover:bg-[#0d0] focus:shadow-none ${
                currentPage === page ? "bg-[#0c0]" : ""
              }`}
              // to={"/#"}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li className="px-1 hidden sm:block">
          <button
            className={`relative py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded focus:shadow-none  ${
              currentPage >= pages.length
                ? "text-gray-500 pointer-events-none"
                : "text-[#1c1c1c] dark:text-white hover:text-white dark:hover:text-[#1c1c1c] hover:bg-[#0d0]"
            }`}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Вперёд
          </button>
        </li>
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
