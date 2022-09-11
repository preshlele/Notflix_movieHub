import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import SingleMovie from './SingleMovie'

const Row = ({title, fetchUrl, RowID}) => {
   

    const [movies,setMovies] = useState([])
    // const [searchTerm,setSearchTerm] = useState([])
    // console.log(searchTerm)

    useEffect(() => {
        axios.get(fetchUrl).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchUrl]);
    //  console.log( movies);

    const slideLeft = ()=>{
        var slider =document.getElementById('slider'+ RowID);
        slider.scrollLeft = slider.scrollLeft-500;
    } 
    const slideRight = ()=>{
        var slider =document.getElementById('slider'+ RowID);
        slider.scrollLeft = slider.scrollLeft+ 500;
    }

  return (
    <>
      <h2 className="font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group ">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-primary rounded-full text-white opacity-50 hover:opacity-100 relative z-10
         cursor-pointer group-hover:block"
          size={30}
        />
        <div
          id={"slider" + RowID}
          className="w-full h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((item, id) => (
            <div key={id} item={item} className="overscroll-none cursor-pointer w-[160px] sm:w-[200px] md:w-60 lg:w-[300px] inline-block relative p-1">
                <img className='w-full h-auto block rounded-md'
                 src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                 alt={item.title} />
            <div className='absolute p-1 left-0 top-0 w-full h-full hover:bg-primary/80 opacity-0 hover:opacity-100 rounded-md text-white'>
                <div className='whitespace-normal text-xs md:text-sm font-bold block justify-center items-center h-full text-center text-white py-12'>
                    <p>{item.name?item.name:item.title}</p>
                    <p className="text-gray-400 text-xs py-2">{item.release_date?item.release_date:item.first_air_date}</p>
                    <p className="text-gray-300 absolute top-4 left-4">{item.vote_average*10}%</p>

                </div>

            </div>

            </div>
            // <SingleMovie item={item} id={id} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-primary rounded-full text-white  opacity-50 hover:opacity-100 relative z-10
     cursor-pointer group-hover:block"
          size={30}
        />
      </div>
    </>
  );
}

export default Row