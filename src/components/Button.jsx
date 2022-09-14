import React from 'react'
import { useNavigate } from "react-router-dom";

const Button = () => {
    const navigate = useNavigate()
    // history.goBack()
  return (
    <button
      class="  bg-red-500  hover:bg-red-800 text-white  font-semibold hover:text-white py-2 px-6 m-2 border hover:border-transparent rounded"
      onClick={() => navigate(-1)}
    >
      Button
    </button>
  );
}

export default Button