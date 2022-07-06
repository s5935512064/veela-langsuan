import React, { useState, useEffect } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate }) => {

    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i);
    }


    return (
        <div>
            <ul className="flex gap-2 m-2">
                {pageNumber.map((number, index) => (
                    <li key={index} >
                        <button className={classNames(currentPage === number ? "bg-black text-white" : "bg-white", "hover:bg-black hover:text-white duration-300 border rounded-md py-2 px-4")} onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Pagination;