import React from 'react'

const FooterItemsContainer = () => {
  return (
    <>
      <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading normal font-semibold md:w-2/5">
        <span className="text-red-500">Free</span> until you're ready join us
      </h1>
      <div>
        <input
          type="text"
          placeholder="Enter your email address"
          className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 pl-3 lg:mb-0 mb-4 py-2.5 rounded focus:outline-none"
        />
        <button className="bg-red-500 hover:bg-red-600 duration-300 px-5 py-2.5 font-bold rounded-md text-white   sm:w-[258px] md:w-auto w-full">
          Mail Us
        </button>
      </div>
      

    </>
  );
}

export default FooterItemsContainer