import React from "react";
import { NavLink } from "react-router-dom";

const SingleTV = ({ item, id }) => {
  const url = `/tv/${item?.id}`;

  return (
    <NavLink to={url}>
      <div
        key={id}
        item={item}
        className="cursor-pointer m-0  w-[160px] sm:w-[200px] md:w-60 lg:w-[300px] inline-block p-2"
      >
        <img
          className="w-full h-auto block rounded-md"
          src={`https://image.tmdb.org/t/p/w500/${
            item.backdrop_path ? item.backdrop_path : item.profile_path
          }`}
          alt={"Popular movies"}
        />
        <div className="whitespace-normal bg-gray-100 rounded-md   py-8 drop-shadow-2xl font-semibold text-center">
          <p className="truncate center px-5 scrollbar-hide h">
            {item.name ? item.name : item.title}
          </p>
          <p className="text-xs">
            {item.release_date ? item.release_date : item.first_air_date}
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default SingleTV;
