import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Header from '../components/Header'
import SingleMovie from '../components/SingleMovie'

const TopRatedMovies = () => {

const [movies,setMovies] = useState([])
const [pageNumber,setPageNumber] = useState(1)


useEffect(() => {
  const Api =`https://api.themoviedb.org/3/movie/top_rated?api_key=9db476c7ff7210e3afa19a2a536f7af7&language=en-US&page=${pageNumber}`

  axios.get(Api).then((response) => {
    setMovies(movies.concat(response.data.results))
  })
  // console.log(movies)

}, [pageNumber,])


const fetchNextPage = () => {
    setPageNumber(pageNumber + 1)
  }

  return (
    <>
      <Header />
      <div className="w-full h-full">
        <p className="p-4 text-3xl font-semibold">Top Rated Movies</p>
        {movies.map((item, id) => (
          <SingleMovie item={item} id={id} />

          // <div key={id} item={item} className='cursor-pointer m-0  w-[160px] sm:w-[200px] md:w-60 lg:w-[300px] inline-block p-2'>
          //   <img className='w-full h-auto block rounded-md'
          //   src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
          //   alt={'Popular movies'}
          //   />
          // <div className='whitespace-normal bg-gray-100 rounded-md   py-8 drop-shadow-2xl font-semibold text-center'>
          //             <p className='truncate center px-5 scrollbar-hide h'>{item.name?item.name:item.title}</p>
          //             <p className="text-xs">{item.release_date?item.release_date:item.first_air_date}</p>

          // </div>
          // </div>
        ))}
        <div class="flex space-x-2 justify-center p-6">
          <button
            onClick={fetchNextPage}
            type="button"
            class="inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
}

export default TopRatedMovies