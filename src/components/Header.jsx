// import {useState} from 'react'
// import Dropdown from './Dropdown'

import MoviesMenu from './MoviesMenu'
import TvShowsMenu from './TvShowsMenu'
import SearchBar from "./SearchBar"
import PopularMenu from './PopularMenu'
import {NavLink} from 'react-router-dom'


const Header = () => {

  return (
    <div className="bg-primary h-20 flex items-center px-20 justify-between">
      <div className="flex items-center text-white font-bold gap-10 ml-8 w-full z-[100]">
        <NavLink to="/">
          <h1 className="text-red-600 font-bold cursor-pointer text-2xl">
            NUTFLIX
          </h1>
        </NavLink>
      </div>
      <div className="w-full mr-[460px] flex px-8 gap-3 justify-between">
        <MoviesMenu />
        <TvShowsMenu />
        <PopularMenu />
      </div>

      <div className="text-white flex items-center gap-5 font-bold">
        <NavLink to="/search-results">
          <button className='btn inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button'>
            Search
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Header