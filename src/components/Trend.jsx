import React from 'react'
import Box1 from "../assets/box1.png"
import Box2 from "../assets/box2.png"
import Box3 from "../assets/box3.png"
import Box4 from "../assets/box4.png"
import Container from './Container'
import Flex from './Flex'

const Trend = () => {
    return (
        <>
            <section className='mx-auto mt-20 mb-14'>
                <Container>
                    <h2 className=' font-josef text-center text-[#1A0B5B] text-[42px] font-bold mb-10 items-center'>Trending Products</h2>
                    <Flex>
                       <div className="flex justify-center space-x-6">

                       <div className="">
                            <div className='lg:w-[99%] w-full px-4 py-5 shadow-lg'>
                                <div className="relative group overflow-hidden cursor-pointer">
                                    <img src={Box1} className='h-[376px] w-[376px]' alt="" />
                                    <div className="bg-white absolute left-0 h-[130px] duration-700 ease-in-out bottom-[-130px] w-full flex items-center justify-end">



                                    </div>
                                </div>


                                <div className="">
                                    <h2 className='flex justify-between pt-[25px] pb-[14px] text-[#262626] font-sans text-[16px] font-bold'>Cantilever chair<span className='text-[#26262689] 
                                       font-sans text-[16px] font-bold'>$26.00 </span></h2>
                                    <p className='text-[#26262669] font-sans text-[16px] font-bold'>$42.00</p>
                                </div>




                            </div>
                        </div>

                        <div className="">
                            <div className='lg:w-[99%] w-full px-4 py-5 shadow-lg'>
                                <div className="relative group overflow-hidden cursor-pointer">
                                    <img src={Box2} className='h-[376px] w-[376px]' alt="" />
                                    <div className="bg-white absolute left-0 h-[130px] duration-700 ease-in-out bottom-[-130px] w-full flex items-center justify-end">



                                    </div>
                                </div>


                                <div className="">
                                    <h2 className='flex justify-between pt-[25px] pb-[14px] text-[#262626] font-sans text-[16px] font-bold'>Cantilever chair<span className='text-[#26262689] 
                                       font-sans text-[16px] font-bold'>$26.00 </span></h2>
                                    <p className='text-[#26262669] font-sans text-[16px] font-bold'>$42.00</p>
                                </div>




                            </div>
                        </div>

                        <div className="">
                            <div className='lg:w-[99%] w-full px-4 py-5 shadow-lg'>
                                <div className="relative group overflow-hidden cursor-pointer">
                                    <img src={Box3} className='h-[376px] w-[376px]' alt="" />
                                    <div className="bg-white absolute left-0 h-[130px] duration-700 ease-in-out bottom-[-130px] w-full flex items-center justify-end">



                                    </div>
                                </div>


                                <div className="">
                                    <h2 className='flex justify-between pt-[25px] pb-[14px] text-[#262626] font-sans text-[16px] font-bold'>Cantilever chair<span className='text-[#26262689] 
                                       font-sans text-[16px] font-bold'>$26.00 </span></h2>
                                    <p className='text-[#26262669] font-sans text-[16px] font-bold'>$42.00</p>
                                </div>




                            </div>
                        </div>


                        <div className="">
                            <div className='lg:w-[99%] w-full px-4 py-5 shadow-lg'>
                                <div className="relative group overflow-hidden cursor-pointer">
                                    <img src={Box4} className='h-[376px] w-[376px]' alt="" />
                                    <div className="bg-white absolute left-0 h-[130px] duration-700 ease-in-out bottom-[-130px] w-full flex items-center justify-end">



                                    </div>
                                </div>


                                <div className="">
                                    <h2 className='flex justify-between pt-[25px] pb-[14px] text-[#262626] font-sans text-[16px] font-bold'>Cantilever chair<span className='text-[#26262689] 
                                       font-sans text-[16px] font-bold'>$26.00 </span></h2>
                                    <p className='text-[#26262669] font-sans text-[16px] font-bold'>$42.00</p>
                                </div>




                            </div>
                        </div>
                       </div>


                    </Flex>
                </Container>
            </section>
        </>
    )
}

export default Trend