import React from "react";
import PropTypes from "prop-types";
// import _ from "lodash";
import { usePagination, DOTS } from "../../hooks/usePagination";

const Pagination = ({
  totalCount,
  pageSize,
  onPageChange,
  currentPage,
  siblingCount,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // Если в диапазоне разбиения на страницы меньше 2, мы не будем отображать компонент
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="flex justify-center">
      <ul className="list-style-none flex">
        {/* Левая кнопка пагинации "Назад" */}
        <li className="hidden px-1 sm:block">
          <button
            className={`relative rounded border-0 bg-transparent py-1.5 px-3 outline-none transition-all duration-300 focus:shadow-none  ${
              currentPage === 1
                ? "pointer-events-none text-gray-500"
                : "text-[#1c1c1c] hover:bg-[#0d0] hover:text-white dark:text-white dark:hover:text-[#1c1c1c]"
            }`}
            onClick={onPrevious}
          >
            Назад
          </button>
        </li>
        {paginationRange.map((pageNum, idx) => {
          // Если элемент страницы представляет собой ТОЧКИ, отобразите ТОЧКИ символом юникод
          if (pageNum === DOTS) {
            return (
              <li
                key={`page_${idx}`}
                className="relative top-[6px] bg-transparent px-1 text-[#1c1c1c] dark:text-white"
              >
                &#8230;
              </li>
            );
          }
          // Визуализация нашей страницы.
          return (
            <li key={`page_${idx}`} className="px-1">
              <button
                className={`relative rounded border-0 py-1.5 px-3 text-[#1c1c1c] outline-none transition-all duration-300 focus:shadow-none dark:text-white 2xl:hover:bg-[#0d0] 2xl:hover:text-white 2xl:dark:hover:text-[#1c1c1c] ${
                  currentPage === pageNum ? "bg-[#0c0]" : ""
                }`}
                // to={"/#"}
                onClick={() => onPageChange(pageNum)}
              >
                {pageNum}
              </button>
            </li>
          );
        })}
        {/* Правая кнопка пагинации "Вперёд" */}
        <li className="hidden px-1 sm:block">
          <button
            className={`relative rounded border-0 bg-transparent py-1.5 px-3 outline-none transition-all duration-300 focus:shadow-none  ${
              currentPage >= lastPage
                ? "pointer-events-none text-gray-500"
                : "text-[#1c1c1c] hover:bg-[#0d0] hover:text-white dark:text-white dark:hover:text-[#1c1c1c]"
            }`}
            onClick={onNext}
          >
            Вперёд
          </button>
        </li>
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  totalCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  siblingCount: PropTypes.number,
};

Pagination.defaultProps = {
  siblingCount: 1,
};

export default Pagination;
