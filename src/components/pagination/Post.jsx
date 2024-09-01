import React, { useContext } from 'react'
import { apiData } from '../ContextApi'
import { CiHeart } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom'
const Post = ({allData}) => {

    
    return (
        <>

            {allData.map((item) => (
                <div key={item.id} className="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6">
                    <Link to={`/product/${item.id}`}>




                        <div className="">
                            <div className="relative py-[30px] px-[30px] bg-[#EBF4F3] group">
                                <img src={item.thumbnail} alt={item.title} className="w-full transition-transform duration-500 transform group-hover:scale-75" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#00000080]">
                                    <ul className='flex space-x-4'>
                                        <li className='text-[#FFF] text-[44px]'>
                                            <CiShoppingCart />
                                        </li>
                                        <li className='text-[#FFF] text-[44px]'>
                                            <CiHeart />
                                        </li>
                                        <li className='text-[#FFF] text-[44px]'>
                                            <IoMdSearch />
                                        </li>
                                    </ul>
                                </div>
                            </div>


                            <div className="text-center mt-[30px]">
                                <h2 className='pt-[40px] pb-[14px] text-[#262626] font-sans text-[16px] font-bold group-hover:text-[#fff]'>{item.title}</h2>
                                <div className="flex justify-center space-x-2 mt-[12px]">
                                    <div className="w-3 h-1 rounded-full bg-[#05E6B7] group-hover:bg-[#04c7a1] duration-500 ease-in-out"></div>
                                    <div className="w-3 h-1 rounded-full bg-[#F701A8] group-hover:bg-[#d50191] duration-500 ease-in-out"></div>
                                    <div className="w-3 h-1 rounded-full bg-[#00009D] group-hover:bg-[#FFF] duration-500 ease-in-out"></div>
                                </div>
                                <p className='font-bold font-josef text-[14px] text-[#00009D] mt-3 text-center group-hover:text-[#fff]'>code-{item.id}</p>
                                <div className="mt-3 text-center w-full">
                                    <p className='text-[#00009D] font-josef font-bold group-hover:text-[#fff]'>{item.discountPercentage}%</p>
                                </div>
                            </div>
                        </div>

                    </Link>


                </div>
            ))}



        </>
    )
}

export default Post