// import React from 'react';
// import Container from '../components/Container';
// import pro01 from "../assets/pro01.png";
// import pro02 from "../assets/pro02.png";
// import pro03 from "../assets/pro03.png";
// import pro001 from "../assets/pro001.png";
// import men01 from "../assets/men01.png";
// import men02 from "../assets/men02.png";
// import men03 from "../assets/men03.png";
// import men04 from "../assets/men04.png";
// import chair01 from "../assets/get02.png";
// import { FaStar, FaArrowRight } from "react-icons/fa";
// import { Link } from 'react-router-dom';

import get02 from "../assets/get02.png"

import ECommerceBar from '../components/ECommerceBar'
import shop1 from "../assets/shop1.png"
import { FaStar, FaRegHeart, } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

import Container from "../components/Container";
import { Link } from "react-router-dom";

const Productdetails = () => {
    
    return (
        <>

            <section className='py-[100px] px-3 '>
                <div className="bg-[#F6F5FF] py-[100px]">
                    <Container>

                        <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>Shop List</h3>
                        <div className=" flex">
                            <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Home .</h4>
                            <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Pages .</h3>
                            <p className='font-Sans font-bold text-[16px] text-[#FB2E86]'>Shop Grid Default</p>
                        </div>

                    </Container>
                </div>

                <div className="">
                    <ECommerceBar />
                </div>
                <Link to="/products">



                    <div className="lg:flex mt-[50px] shadow-lg space-x-4">
                       
                            <div className="lg:w-[30%] w-full">

                                <img className='w-full' src={shop1} alt="" />

                            </div>

                        

                        <div className="lg:w-[70%] w-full">
                            <div className="lg:mt-[80px]">
                                <div className="flex items-center space-x-2">
                                    <h2 className='font-Sans font-bold text-[24px] text-[#0D0E43]'>llll</h2>
                                    <div className="flex justify-center space-x-2">
                                        <div className="w-4 h-4 rounded-full bg-[#DE9034] group-hover:bg-[#DE9034] duration-500 ease-in-out"></div>
                                        <div className="w-4 h-4 rounded-full bg-[#F701A8] group-hover:bg-[#d50191] duration-500 ease-in-out"></div>
                                        <div className="w-4 h-4 rounded-full bg-[#8568FF] group-hover:bg-[#FFF] duration-500 ease-in-out"></div>
                                    </div>

                                </div>


                                <div className="flex">
                                    <div className="flex mt-[20px] gap-2">
                                        <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>$56</h3>
                                        <h4 className='font-Sans font-bold text-[16px] line-through text-[#FB2E86]'>$26.00</h4>
                                    </div>
                                    <div className="flex mt-[20px] gap-2 ml-[20px]">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px] lg:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                <div className="flex mt-[20px] gap-6">
                                    <FiShoppingCart />
                                    <FaRegHeart />
                                    <IoSearch />
                                </div>
                            </div>
                        </div>
                    </div>






                </Link>
                <div className="pt-[100px] px-3">
                    <div className="lg:flex justify-between">
                        <div className="w-[15%]"></div>
                        <div className="lg:w-[70%] w-full">
                            <img src={get02} alt="" />
                        </div>
                        <div className="w-[15%]"></div>

                    </div>
                </div>



            </section> 
        
        </>
    );
};

export default Productdetails;
