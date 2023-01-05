import React from "react";

export default function Pagination({ totalPosts, postPerPage, paginate }) {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((page) => (
          <li key={page} onClick={() => paginate(page)} className="page-item">
            <a href="!#" className="page-link">
              {page}{" "}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
