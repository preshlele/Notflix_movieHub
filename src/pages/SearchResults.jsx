import React, { useState, useEffect } from "react";
import axios from "axios";
import { requestSearch } from "../Requests";
import { useDebouncer } from "../hooks/useDebouncer";
import SingleMovie from "../components/SingleMovie";

const SearchResults= () => {
  // const apiSearch = requests.searchApi
  const [searchKey, setSearchKey] = useState("");
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const debounce = useDebouncer(searchKey);
  const searchMovies = async () => {
    axios.get(requestSearch(debounce, pageNumber)).then((response) => {
      // if(response.data.results.length < 1   ) {
      //   setPageNumber(pageNumber+1);
        
      // }
      
      // console.log(response?.data?.total_pages);
      setData(response?.data?.results);
      // console.log(response)
      
    });
    
  };

  useEffect(() => {
    searchMovies();
  }, [debounce, searchKey, pageNumber]);

   const fetchNextPage = () => {
     setPageNumber(pageNumber + 1);
   }

  return (
    <>
      <div className="flex gap-3 justify-center ">
        <div className="mt-10 xl:w-96">
          <div className="input-group relative flex  items-stretch w-full mb-4">
            <input
              type="search"
              placeholder="Search Movies"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
              onChange={(e) => setSearchKey(e.target.value)}
            />
            <button
              onclick={searchMovies}
              className='btn inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button'
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {data.map((item, id) => {
        // console.log(item);
        
        return (
      
        <SingleMovie item={item} id={id} />
        // <div
        //   key={id}
        //   item={item}
        //   className="cursor-pointer m-0 ml-0
        //      w-[160px] sm:w-[200px] md:w-60 lg:w-[300px] inline-block p-2"
        // >
        //   <img
        //     className="w-full h-auto block rounded-md object-cover"
        //     src={`https://image.tmdb.org/t/p/w500/${
        //       item.poster_path ? item.poster_path : item.profile_path
        //     }`}
        //     alt={"search Item"}
        //   />
        //   <div className="whitespace-normal bg-gray-100 rounded-md   py-8 drop-shadow-2xl font-semibold text-center">
        //     <p className="truncate center px-5 scrollbar-hide ">
        //       {item.name ? item.name : item.title}
        //     </p>
        //     {/* <p className="text-xs">{item.release_date?item.release_date:item.first_air_date}</p> */}
        //   </div>
        // </div>
      )})}
      <div class="flex space-x-2 justify-center p-6">
        <button
          onClick={fetchNextPage}
          type="button"
          class="inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default SearchResults;
