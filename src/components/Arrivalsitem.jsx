import React, { useContext } from 'react'
import Pitem from '../assets/pitem.png'
import { CiHeart } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch } from 'react-redux';

const Arrivalsitem = ({item}) => {
   
    

   
    




    
    
    return (

        <>
            <div className="">
                <div className='lg:w-[90%] w-full px-2 py-5 group shadow-lg'>
                    <div className="relative bg-[#F6F7FB]    w-full h-[236px] flex items-center justify-center  group overflow-hidden cursor-pointer">
                        <img src={item.thumbnail} className='h-[278px] w-[278px] ' alt="" />
                        <div className="  absolute left-[-100px] top-0 duration-700 ease-in-out w-full flex items-center justify-start group-hover:left-0 ">

                            <ul className='flex pr-5 space-x-4'>
                                <li className=' text-[#2F1AC4] rounded justify-between items-center gap-x-4 font-sans text-[16px]'><CiShoppingCart /></li>
                                <li className=' text-[#2F1AC4] rounded justify-between items-center gap-x-4 font-sans text-[16px] '><CiHeart /></li>
                                <li className='  text-[#2F1AC4] rounded justify-between items-center gap-x-4 font-sans text-[16px] '><IoMdSearch /></li>

                            </ul>

                        </div>
                    </div>


                    <div className="hover:bg-[#5b51a1] duration-700 group-hover:text-[#fff]">
                        <h2 className='flex justify-center pt-[40px] pb-[14px] text-[#262626] font-sans text-[16px] group-hover:text-[#fff] font-bold'>{item.title}</h2>
                        <div className="flex justify-center space-x-2 mt-[12px]">
                            <div className="w-3 h-1 rounded-full bg-[#05E6B7] group-hover:bg-[#04c7a1] duration-500 ease-in-out"></div>

                                    <div className="w-3 h-1 rounded-full bg-[#F701A8] group-hover:bg-[#d50191] duration-500 ease-in-out"></div>

                                <div className="w-3 h-1 rounded-full bg-[#00009D] group-hover:bg-[#FFF] duration-500 ease-in-out"></div>
                                 </div>
                                
                        <p className=' font-bold  font-josef text-[14px] text-[#00009D] mt-3 text-center group-hover:text-[#fff]'>code-{item.id}</p>
                        <div className="mt-3 text-center w-full">
                        <p className=' text-[#00009D] font-josef font-bold group-hover:text-[#fff]'>{item.discountPercentage}%</p>
                        </div>
                        
                    </div>




                </div>
            </div>


        </>

    )
}

export default Arrivalsitem