import React,{useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import  axios  from 'axios';
import requests, { requestSearch } from '../Requests'


const SearchBar = () => {
    // const apiSearch = requests.searchApi
    const [searchKey,setSearchKey] = useState('')
    const [data, setData]= useState([])
    const [page, setPage]= useState(1)
    

    const searchMovies = async (e) => {
        e.preventDefault();
        setSearchKey(e.target.value)
            axios.get(requestSearch(searchKey,page)).then((response) =>{
                // setData(response.data.filter(oneData => {
                //     oneData.title.toLowerCase().contains(searchKey.toLowerCase())
                // }))
                setData(response.data)
            })
        console.log(data)
    }
    
    
  return (
    <div className="flex gap-3 items-center">
        <FaSearch/>
        <input type="text" 
        placeholder="Search Movies"
        className='text-slate-700 outline-none rounded  px-6 py-2 cursor-pointer'
        onChange={(e)=>searchMovies(e)}
         />

    </div>
   
  )
}

export default SearchBar