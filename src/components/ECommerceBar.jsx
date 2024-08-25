import React from 'react'
import { FaThList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

const ECommerceBar = () => {
  return (
    <>
      <div className="lg:flex mt-[100px] bg-[#fff] py-[50px] px-3">
                <div className="lg:w-[40%] w-full">
                    <h2 className='font-Sans font-bold text-[22px] text-[#151875]'>Ecommerce Acceories & Fashion item </h2>
                    <h5 className='font-Sans font-semibold text-[16px] text-[#3F509E]'>About 9,620 results (0.62 seconds)</h5>
                </div>
                <div className="lg:w-[60%] w-full lg:flex">
                    <div className="lg:w-[25%] w-full lg:flex items-center justify-between my-[20px] lg:my-0">
                        <h4 className='font-Sans font-semibold text-[16px] text-[#3F509E]'>per page </h4> 
                            <input className='h-[25px] lg:w-[60%] w-[70%] border-2 border-[#3F509E] rounded-lg ' type="text" />
                    </div>
                    <div className="lg:w-[25%] w-full lg:flex items-center justify-around mb-[20px] lg:mb-0">
                    <h4 className='font-Sans font-semibold text-[16px] text-[#3F509E] lg:ml-[10px]'>Sort By: </h4> 
                    <input className='h-[25px] lg:w-[60%] w-[70%] border-2 border-[#3F509E] rounded-lg ' type="text" />
                    </div>
                    <div className="lg:w-[50%] w-full flex items-center justify-around">
                    <h4 className='font-Sans font-semibold text-[16px] text-[#3F509E] lg:ml-[10px]'>View: </h4> 
                    <IoGrid className='text-[#3F509E]'/>
                    <FaThList className='text-[#3F509E]'/>
                    <input className='h-[25px] w-[60%] border-2 border-[#3F509E] rounded-lg ' type="text" />
                    </div>
                    
                    
                </div>
            </div>
    </>
  )
}

export default ECommerceBar