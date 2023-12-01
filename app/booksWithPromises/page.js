"use client";
import React, { useState, useEffect } from "react";
import { getSampleToDoList } from "../../api/send/apiService";
import Pagination from "../utils/PaginationsBooks";

function BooksWithPromises() {
  const [sampleTodoList, setSampleTodoList] = useState([]);
  const [displayedTodoList, setDisplayedTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [allPages, setAllPages] = useState(0);
  const [showPagination, setShowPagination] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);
  const [sampleText, setSampleText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task complete after 2 sec");
      }, 2000);
    }).then((result) => {
      setSampleText(result);
    });
  }, []);

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

  useEffect(() => {
    const fetchSampleToDoList = async () => {
      const list = await getSampleToDoList();
      setSampleTodoList(list);
      setAllPages(Math.ceil(list.length / 10));
    };

    fetchSampleToDoList();
  }, []);

  const fetchSampleData = () => {
    setIsLoading(true);
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(getSampleToDoList());
      }, 2000);
    })
      .then((list) => {
        setSampleTodoList(list);
        setAllPages(Math.ceil(list.length / itemsPerPage));
        setDisplayedTodoList(list.slice(0, itemsPerPage));
        setShowPagination(true);
        setCurrentPage(1);
      })
      .catch((error) => {
        console.error("Error fetching sample data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleTodoPageChange = (newPage) => {
    setCurrentPage(newPage);
    const start = (newPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setDisplayedTodoList(sampleTodoList.slice(start, end));
  };

  return (
    <section
      className="w-full bg-[#121212] p-2 mb-4 pt-20 text-white"
      id="booksWithPromisse"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col justify-center items-center mt-4 mb-10 px-4">
        <h3 className="text-center text-2xl md:text-4xl font-bold text-white mt-4 mb-8">
          Sample Todo List With Promises
        </h3>
        <div className="text-sm md:text-base lg:text-lg text-white">
          <h2>Exploring Asynchronous JavaScript</h2>
          <p>
            Dive into the world of asynchronous operations in JavaScript. Here we demonstrate how Promises elegantly handle delayed operations, like fetching data, with ease and efficiency.
          </p>
          <p className="text-xs sm:text-sm md:text-md lg:text-lg font-bold mt-4">
            {sampleText}
          </p>
        </div>
      </div>
      <div className="max-w-6xl w-full mx-auto mt-4 mb-10 p-2 bg-light border rounded-3 px-4">
        <h3 className="text-center text-2xl md:text-4xl font-bold text-white mt-4 mb-8">
          Interactive Todo List
        </h3>
        <div className="text-sm md:text-lg text-white p-4">
          <p>
            Experience real-time data fetching with our interactive Todo List. Utilizing JavaScript Promises, this feature demonstrates the power and simplicity of handling asynchronous tasks in web applications.
          </p>
          <hr className="my-4 w-full" />
          <div className="text-center p-4">
            <button
              type="button"
              className="bg-gradient-to-br from-[#2869d9] to-[#46caef] text-white font-medium p-3 mt-2 mb-3 whitespace-nowrap rounded-lg"
              onClick={fetchSampleData}
              disabled={isLoading}
            >
              {isLoading ? "Fetching Data..." : "Fetch Data"}
            </button>
          </div>
          {displayedTodoList.length > 0 && (
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
          )}
          {showPagination && (
            <div className="mt-4 text-center" style={{ width: "100%" }}>
              <Pagination
                currentPage={currentPage}
                totalPages={allPages}
                onPageChange={handleTodoPageChange}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
          }  
export default BooksWithPromises;
