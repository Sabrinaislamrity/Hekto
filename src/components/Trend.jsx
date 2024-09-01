import React from 'react';
import Box1 from "../assets/box1.png";
import Box2 from "../assets/box2.png";
import Box3 from "../assets/box3.png";
import Box4 from "../assets/box4.png";
import Container from './Container';
import Flex from './Flex';
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LuZoomIn } from "react-icons/lu";

const Trend = () => {
    return (
        <section className='mx-auto mt-20 mb-14'>
            <Container>
                <h2 className='font-josef text-center text-[#1A0B5B] text-[42px] font-bold mb-10'>Trending Products</h2>
                <Flex>
                    <div className="flex justify-center space-x-6">
                        {[Box1, Box2, Box3, Box4].map((box, index) => (
                            <div key={index} className="w-full lg:w-[99%] px-4 py-5 shadow-lg">
                                <div className="relative group overflow-hidden cursor-pointer">
                                    <img  src={box} className='h-[376px] w-[376px] transition-transform duration-700 ease-in-out hover:scale-75'  alt={`Trending Product ${index + 1}`} />
 
                                        <div className="">

                                        <div className="flex absolute top-4 left-[-150px] group-hover:left-2 duration-700 ease-in-out text-[20px] text-[#1389FF]">
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                            </div>
                                        </div>
                                    <div className="bg-white absolute left-0 h-[130px] duration-700 ease-in-out bottom-[-130px] w-full flex items-center justify-end">
                                        {/* Additional content or overlay can go here */}
                                    </div>
                                </div>
                                <div className="pt-[25px] pb-[14px]">
                                    <h2 className='flex justify-between text-[#262626] font-sans text-[16px] font-bold'>
                                        Cantilever chair
                                        <span className='text-[#26262689] font-sans text-[16px] font-bold'>$26.00</span>
                                    </h2>
                                    <p className='text-[#26262669] font-sans text-[16px] font-bold'>$42.00</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Flex>
            </Container>
        </section>
    );
}

export default Trend;
