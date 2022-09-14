// import {useState} from 'react'
// import Dropdown from './Dropdown'

import MoviesMenu from './MoviesMenu'
import TvShowsMenu from './TvShowsMenu'
import PopularMenu from './PopularMenu'
import {NavLink} from 'react-router-dom'
import {FiMenu} from 'react-icons/fi'

const Header = () => {

  return (
    <div className="bg-orange-500 h-20  md:flex md:items-center md:justify-between px-20 justify-between">
      <div className="flex items-center text-white font-bold gap-10 2xl:ml-8 w-full">
        <NavLink to="/">
          <h1 className="text-red-600 font-bold font-mono cursor-pointer text-2xl">
           MOVEEZ
          </h1>
        </NavLink>
        <span>
          <FiMenu></FiMenu>
        </span>
      </div>
      <div className="w-full 2xl:mr-[460px] md:flex md:items-center my-12 md:my-0 px-8 gap-3 justify-between z-[100] md:z-auto bg-green-200 relative md:static md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        <MoviesMenu  />
        <TvShowsMenu/>
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