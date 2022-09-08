// import {useState} from 'react'
// import Dropdown from './Dropdown'

import MoviesMenu from './MoviesMenu'
import TvShowsMenu from './TvShowsMenu'
import SearchBar from "./SearchBar"
import PopularMenu from './PopularMenu'
import {NavLink} from 'react-router-dom'


const Header = () => {

  return (
    <div className='bg-primary h-20 flex items-center px-20 justify-between'>
        <div className='flex items-center text-white font-bold gap-10 ml-8 w-full z-[100]'>
          <NavLink to="/"><h1 className='text-red-600 font-bold cursor-pointer text-2xl'>NUTFLIX</h1></NavLink>  
        </div>
        <div className='w-full mr-[460px] flex px-8 gap-3 justify-between'>
        <MoviesMenu/>
        <TvShowsMenu/>
        <PopularMenu/> 
        </div>
        

        <div className="text-white flex items-center gap-5 font-bold">
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Login</button>
            <SearchBar/>
        </div>
    </div>
  )
}

export default Header