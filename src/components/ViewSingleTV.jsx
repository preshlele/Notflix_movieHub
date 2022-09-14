import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "./Button";


const ViewSingleTV = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const shorten_string = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const fetchMovie = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=9db476c7ff7210e3afa19a2a536f7af7&language=en-US`
    );
    setMovie(data);
    console.log(data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);
  //
  //

  return (
    <>
      <Button />
      <img
        className="w-full h-[600px] object-cover"
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className="w-full h-full  text-black  bg-slate-200">
        <div className="h-full w-full inline">
          <div className="w-full  p-4 md:p-8">
            <h1 className="text-black  text-3xl md:text-5xl font-bold ">
              {movie?.name}
            </h1>
            <div className="flex pt-4">
              <h2>{movie?.episode_run_time}m</h2>
              <h2 className="px-8">
                {Math.round(movie?.vote_average * 10)}% Ratings
              </h2>
            </div>

            <div className=" py-4">
              <p className="text-gray-500 text-sm">
                {" "}
                Released: {movie?.first_air_date}
              </p>
              <p className="text-slate-800  text-xl text-justify w-full h-full mr-4 py-4 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[80%]">
                {shorten_string(movie?.overview)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ViewSingleTV;
