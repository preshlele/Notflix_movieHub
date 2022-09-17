import {useState} from 'react'
// import Dropdown from './Dropdown'

import MoviesMenu from './MoviesMenu'
import TvShowsMenu from './TvShowsMenu'
import PopularMenu from './PopularMenu'
import {NavLink} from 'react-router-dom'
import {MdMenu, MdClose, MdSearch} from 'react-icons/md'
import "@fontsource/poppins";

const Header = () => {

  let [open, setOpen] = useState(false)
  return (
    <div className="bg-presh h-20  md:flex md:items-center md:justify-between px-20 justify-between">
      <div className="flex items-center  text-white font-bold gap-20 2xl:ml-8 w-full py-3 ">
        <NavLink to="/">
          <h1 className="text-white  px-2 font-bold font-[poppins] cursor-pointer text-3xl ml-4">
            Nutflix
          </h1>
        </NavLink>
        <div onClick={() => setOpen(!open)} className="bg-red-600 md:hidden rounded-md  text-3xl">
          {open ? <MdClose /> : <MdMenu />}
        </div>
      </div>
      <div
        className={`w-full 2xl:mr-[460px] md:flex md:items-center my-3 md:my-0 md:px-8 gap-3 justify-between z-[100] rounded md:z-auto bg-presh relative md:static  md:pb-0 transition-all ease-in duration-500  ${
          open ? "top-0" : "top-[-490px]"
        }`}
      >
        <MoviesMenu />
        <TvShowsMenu />
        <PopularMenu />
        <div className=" flex  px-20 items-center gap-5 font-bold ">
          <NavLink to="/search-results">
            <MdSearch className='btn py-2 w-12 h-12 text-white    rounded   type="button'/>           
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header