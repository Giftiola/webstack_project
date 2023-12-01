"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getBook, getSampleToDoList } from "../../api/send/apiService";

import Pagination from "../utils/PaginationsBooks";
import LoadingOverlay from "../utils/LoadingOverlay";

function BooksWithPromises () {
  const [queryField, setQueryField] = useState("");
  const [items, setItems] = useState([]);
  const [sampleTodoList, setSampleTodoList] = useState([]);
  const [displayedTodoList, setDisplayedTodoList] = useState([]);
  const [allPages, setAllPages] = useState(0);
  const [showPagination, setShowPagination] = useState(false);
  const [currentBookPage, setCurrentBookPage] = useState(1);
  const booksPerPage = 12;
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fetchSampleData = async () => {
    try {
      setLoading(true);
      const list = await getSampleToDoList();
      setSampleTodoList(list);
      setAllPages(Math.ceil(list.length / 10));
      setDisplayedTodoList(list.slice(0, 10));
      setShowPagination(true);
      setCurrentPage(1);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    } catch (error) {
      console.error("Error fetching sample data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchSampleToDoList = async () => {
      const list = await getSampleToDoList();
      setSampleTodoList(list);
      setAllPages(Math.ceil(list.length / 10));
    };

    fetchSampleToDoList();
  }, []);

  const handleTodoPageChange = (newPage) => {
    setCurrentPage(newPage);
    const start = (newPage - 1) * 10;
    const end = start + 10;
    setDisplayedTodoList(sampleTodoList.slice(start, end));
  };

  const handleSearchChange = async (query) => {
    setLoading(true);
    console.log("Loading set to:", loading); 
    const results = await getBook(query);
    setItems(results.items || []);
    setLoading(false);
    console.log("Loading set to:", loading); 
  };


  const handleInputChange = (e) => {
    setQueryField(e.target.value);
    handleSearchChange(e.target.value);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const start = (currentBookPage - 1) * booksPerPage;
    const end = start + booksPerPage;
    setDisplayedBooks(items.slice(start, end));
  }, [items, currentBookPage]);

  const handleBookPageChange = (newPage) => {
    setCurrentBookPage(newPage);
    const start = (newPage - 1) * booksPerPage;
    const end = start + booksPerPage;
    setDisplayedBooks(items.slice(start, end));
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center",
  };

  return (
    <section
    className="w-full bg-[#121212] overflow-y-auto p-2 mb-4 pt-20 text-white"
    id="books"
  >
    {loading && <LoadingOverlay />}
    <div className="max-w-[1240px] w-full mx-auto flex flex-col justify-center items-center mt-4 mb-10">
      <h3 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Search Functionality with Observables
      </h3>
      <div className="text-base lg:text-lg text-white">
        <p className="text-base lg:text-xl semi">
          Explore the power of reactive programming in JavaScript.  </p> <br />
          <p> This feature leverages Observables to provide a dynamic and efficient search experience. As you type, results are streamlined and updated in real-time, enhancing user interaction and responsiveness.
        </p> <br />
        <ul>
          <li>
            debounceTime: Reduces the frequency of search requests by waiting for a pause in typing, optimizing performance and network usage.
          </li>
          <li>
            distinctUntilChanged: Ensures that the search function triggers only when the query actually changes, preventing redundant operations.
          </li>
          <li>
            finalize: Handles cleanup logic once the Observable sequence completes, ensuring resource efficiency.
          </li>
        </ul>
      </div>
    </div>
      <div className="max-w-[1240px] w-full mx-auto mt-4 mb-10 p-2 bg-light border rounded-3">
        <h3 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          Sample Todo List
        </h3>
        <div className="text-base lg:text-lg text-white">
          <p>
            This is a simple placeholder to fetch data from API using a button
          </p>
          <hr className="my-4 w-full" />
    
          <div className="text-center p-4">
            <button
              type="button"
              className="bg-gradient-to-br from-[#2869d9] to-[#46caef] items-center justify-center text-white font-medium p-3 mt-2 mb-3 whitespace-nowrap  w-52 rounded-lg "
              onClick={fetchSampleData}
              >
                Button to fetch data
              </button>
              </div>
          {displayedTodoList.length > 0 && (
            <div>
                    <div className="overflow-x-auto">
              <table className="w-full mt-4 table-auto border-collapse">
                <thead>
                  <tr className="bg-[#4b5563]">
                    <th className="px-4 py-2 text-left">Id</th>
                    <th className="px-4 py-2 text-left">Title</th>
                    <th className="px-4 py-2 text-left sm:table-cell">UserId</th>
                    <th className="px-4 py-2 text-left sm:table-cell">Completed</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedTodoList.map((list, index) => (
                    <tr key={list.id} className={`${index % 2 === 0 ? "bg-[#6b7280]" : "bg-[#4b5563]"}`}>
                      <td className="px-4 py-2 text-left">{list.id}</td>
                      <td className="px-4 py-2 text-left">{list.title}</td>
                      <td className="px-4 py-2 text-left sm:table-cell">{list.userId}</td>
                      <td className="px-4 py-2 text-left sm:table-cell">{list.completed.toString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
              {showPagination && (
                <div className="mt-4 p-4 text-center" style={{ width: "100%" }}>
                  <Pagination
                    currentPage={currentPage}
                    totalPages={allPages}
                    onPageChange={handleTodoPageChange}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="max-w-[1240px] w-full mx-auto mt-4 mb-10 flex flex-col justify-start items-start">
        <div className="w-full flex flex-col justify-start items-start">
          <div className="w-full">
            <h3 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
              Search to know more about your favourite books
            </h3>
            <input
      value={queryField}
      onChange={handleInputChange}
      id="keyword"
      type="search"
      placeholder="Search for books"
      className="form-control w-full h-14 rounded-full p-5 text-black"
    />
          </div>
        </div>
        {queryField && (
          <div className="contents w-full">
            <div className="mt-4 w-full">
              {displayedBooks.length > 0 && (
                <div className="mt-5 w-full">
                  <div className="flex flex-wrap -m-2">
                    {displayedBooks.map((product) => (
                      <div
                        key={product.id}
                        className="w-1/4 p-2 mb-4 book-display"
                      >
                        {product.volumeInfo.imageLinks && (
                         <div className="book-thumbnail flex justify-center items-center h-48">
                            <Image
                          src={product.volumeInfo.imageLinks.thumbnail}
                          alt={product.volumeInfo.title}
                          width={100}
                          height={100}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={true}
                          className="transition-opacity duration-700 ease-in-out"
                          style={imageStyle}
                        />
                          </div>
                        )}
                        <div className="authors">
                          {product.volumeInfo.authors &&
                            product.volumeInfo.authors.map((aut) => (
                              <div key={aut}>Authors: {aut}</div>
                            ))}
                        </div>
                        <div className="details">
                          Title: {product.volumeInfo.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="mt-4 text-center" style={{ width: "100%" }}>
              {items.length > itemsPerPage && (
                <Pagination
                  currentPage={currentBookPage}
                  totalPages={Math.ceil(items.length / booksPerPage)}
                  onPageChange={handleBookPageChange}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default BooksWithPromises;