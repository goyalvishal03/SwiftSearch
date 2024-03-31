import React, { useState } from "react";
import fetchSearchResults from "../../utils/api";
import ResultCard from "../ResultCard/ResultCard";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);

    try {
      const data = await fetchSearchResults(searchTerm);
      setSearchResults(data.results); // Assuming this matches your API's structure
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container  mx-auto mt-8">
      {" "}
      <form
        className=" mx-auto mt-2 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        {" "}
        {/* Adjusted width */}
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500" // Removed dark mode class
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" // Removed dark mode classes
            placeholder="Search..."
            required=""
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
        {isLoading && (
          <div className="mt-4 text-center">
            Loading
          </div>
        )}
        {searchResults && (  
          <div className="mt-6 grid grid-cols-1 gap-4">
            {" "}
            {/* Grid for results */}
            {searchResults.map((result) => (
              <ResultCard key={result.position} result={result} />
            ))}
          </div>
        )}
      </form>
    </div>
  );
}

export default SearchBar;
