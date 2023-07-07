"use client";

import { useEffect, useState } from "react";
import StockFlow from "../components/StockFlow";
import Loading from "./loading";
import BackToTop from "../components/BackToTop";

const TechTalksPage = () => {
  const [stockData, setStockData] = useState([]);
  const [search, setSearch] = useState("programming");
  const [searchToggle, setSearchToggle] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (search === "") {
      return;
    }
    const dataFetch = async () => {
      setLoading(true);
      const data = await (
        await fetch(
          `https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${search}&site=stackoverflow`
        )
      ).json();

      // set state when the data received
      setStockData(data.items);
      setLoading(true);
    };

    dataFetch();
  }, [search]);

  // console.log(stockData);

  const arrPage = [];
  const lastIndex = currentPage * 6;
  const firstIndex = lastIndex - 6;
  const currentPost = stockData.slice(firstIndex, lastIndex);
  const totalPost = stockData.length;
  for (let i = 1; i <= Math.floor(totalPost / 6); i++) {
    arrPage.push(i);
  }
  console.log(arrPage);
  const clickSearch = (e) => {
    e.preventDefault();
    setSearch(searchToggle);
  };

  return (
    <div className="bg-slate-800">
     <div className="pt-28">
        <section class="bg-violet-200 mb-10">
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
              <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Tech Talks</h1>
              <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">Stackoverflow Discussions</p>
          </div>
        </section>
      </div>

      <div className="grid grid-cols-2 justify-stretch gap-x-4 gap-y-5 justify-items-center">
        <div className="searchSpan col-span-2 sm:col-span-2">
          <htmlForm className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                onChange={(e) => setSearchToggle(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full pl-10 p-2.5"
                placeholder="Search"
                required
              />
            </div>
            <button
              type="submit"
              onClick={(e) => clickSearch(e)}
              className="p-2.5 ml-2 text-sm font-medium text-white bg-violet-700 rounded-lg border border-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </htmlForm>
        </div>
        {/* <Loading/> */}
        {loading ? null : <Loading />}
        {currentPost.map((item) => (
          <StockFlow data={item} />
        ))}
      </div>
      <p className="grid grid-cols-5 gap-2 px-96">
        {arrPage.map((item, index) => (
          <span
            className="bg-slate-400 text-center cursor-pointer hover:bg-slate-300"
            onClick={() => setCurrentPage(index + 1)}
            key={index}
          >
            {index + 1}
          </span>
        ))}
      </p>
      <BackToTop/>
    </div>
  );
};

export default TechTalksPage;
