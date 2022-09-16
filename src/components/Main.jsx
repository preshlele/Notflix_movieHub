import React, { useState, useEffect } from "react";
import requests from "../Requests";
import axios from "axios";
import "@fontsource/poppins";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopularMovies).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  //  console.log(movie)

  const shorten_string = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  //This is for the hero banner
  return (
    <div className="w-full h-[480px] text-white bg-slate-300">
      <div className="h-full w-full">
        <div className="absolute w-full h-[480px] bg-gradient-to-r from-presh"></div>
        <div className="w-full absolute top-[20%] p-4 md:p-8">
          <h1 className="text-white text-3xl font-[poppins] md:text-5xl font-bold ml-8">
            {movie?.title}
          </h1>
          <div className="ml-8 py-4 font-[poppins]">
            <p className="text-slate-400 text-sm">
              {" "}
              Released: {movie?.release_date}
            </p>
            <p className="text-gray-200 w-full py-4 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
              {shorten_string(movie?.overview)}
            </p>
          </div>
        </div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
    </div>
  );
};

export default Main;
