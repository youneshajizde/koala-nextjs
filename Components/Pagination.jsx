"use client";

export function PaginationDemo({ currentPage, setCurrentPage, elements }) {
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const pageCounter = Array.from({ length: elements }, (_, index) => index + 1);
  return (
    <ol className="flex justify-center text-xs font-medium space-x-1 mt-16">
      <li onClick={() => setCurrentPage(currentPage - 1)}>
        <button disabled={currentPage == 1 ? true : false}>
          <a className="inline-flex items-center justify-center cursor-pointer w-15 h-8 border font-semibold hover:bg-cyan-600 hover:border-cyan-600 hover:text-white border-gray-100 rounded p-2">
            {"< Previous "}
          </a>
        </button>
      </li>

      {[...pageCounter].map((_, i) => (
        <li
          key={i}
          className={
            i + 1 === currentPage
              ? "block w-8 h-8 text-center text-white bg-cyan-600 border-cyan-600 cursor-pointer rounded leading-8"
              : "block w-8 h-8 text-center border cursor-pointer border-gray-100 rounded leading-8"
          }
          onClick={() => handlePageClick(i + 1)}
        >
          {i + 1}
        </li>
      ))}

      <li
        onClick={() => {
          if (currentPage + 1 <= elements) {
            setCurrentPage(currentPage + 1);
          }
        }}
      >
        <button disabled={currentPage >= elements ? true : false}>
          <a className="inline-flex items-center justify-center min-w-20 cursor-pointer h-8 border hover:bg-cyan-600 hover:border-cyan-600 hover:text-white border-gray-100 font-semibold rounded p-2">
            {"Next >"}
          </a>
        </button>
      </li>
    </ol>
  );
}
