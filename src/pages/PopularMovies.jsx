import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Header from '../components/Header'
import SingleMovie from '../components/SingleMovie'



const PopularMovies = () => {
  
  
  const [movies,setMovies] = useState([])
  const [pageNumber,setPageNumber] = useState(1)
  //const [lastPage,setLastPage] = useState(1)

    // axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9db476c7ff7210e3afa19a2a536f7af7&language=en-US&page=${pageNumber}`).then((response) =>{
    //   setLastPage(response.total_pages);
    // })

    useEffect(() => {
    const Api=`https://api.themoviedb.org/3/movie/popular?api_key=9db476c7ff7210e3afa19a2a536f7af7&language=en-US&page=${pageNumber}`
    
    // if(pageNumber < lastPage) {
      axios.get(Api).then((response) =>{
        // (response.total_pages)
     // setLastPage(response.total_pages)
      setMovies(movies.concat(response.data.results))
      // console.log(movies)
    })
    // }
    
  }, [pageNumber]);

  const fetchNextPage = () => {
    setPageNumber(pageNumber + 1)
  }


  return (
    <>
    <Header/>
    <div className='w-full h-full'>
      <p className='p-4 text-3xl font-semibold'>Popular Movies</p>
      {movies.map((item,id)=>(
        <SingleMovie item={item} id={id}/>
      ))}
      <div class="flex space-x-2 justify-center p-6">
  <button onClick={fetchNextPage} type="button" class="inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Load More</button>
</div>
    </div>
    </>
    
  )
}

export default PopularMovies