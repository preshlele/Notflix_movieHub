import React,{useState, useEffect} from 'react'
import {FaSearch} from 'react-icons/fa'
import  axios  from 'axios';
import { requestSearch } from '../Requests'
import { useDebouncer } from '../hooks/useDebouncer';


const SearchBar = () => {
    // const apiSearch = requests.searchApi
    const [searchKey,setSearchKey] = useState('')
    const [data, setData]= useState([])
    const [page, setPage]= useState(1)
    
  const debounce = useDebouncer(searchKey)
    const searchMovies = async () => {
            axios.get(requestSearch(debounce,page)).then((response) =>{
                setData(response?.data?.results)
            })
        console.log(data)
    }

    useEffect(() => {
      searchMovies()
    }, [debounce])
    
    
  return (
    <div className="flex gap-3 items-center">
        <FaSearch/>
        <input type="text" 
        placeholder="Search Movies"
        className='text-slate-700 outline-none rounded  px-6 py-2 cursor-pointer'
        onChange={(e)=>setSearchKey(e.target.value)}
         />

    </div>
   
  )
}

export default SearchBar