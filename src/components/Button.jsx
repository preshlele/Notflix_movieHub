import React from 'react'
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";


const Button = () => {
    const navigate = useNavigate()
    // history.goBack()
  return (
    <MdArrowBack
      class="  bg-red-500 text-white w-auto m-3 p-2 rounded hover:bg-red-800 h-10 absolute top-0"
      onClick={() => navigate(-1)}
    >
      Button
    </MdArrowBack>
  );
}

export default Button