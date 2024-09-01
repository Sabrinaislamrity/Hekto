import React from 'react'
import Container from './Container'
import Blog1 from '../assets/blog1.png'
import Blog2 from '../assets/blog2.png'
import Blog3 from '../assets/blog3.png'
import { FaPenNib } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const LatestBlog = () => {
  return (
    <>

<section className='py-[100px]'>
            <Container>
                <div className="text-center">
                    <h2 className='font-josef text-center text-[#1A0B5B] text-[42px] font-bold mb-10 items-center'>Leatest Blog</h2>
                </div>
                <div className="flex justify-between">
                    <div className="w-[30%] shadow-lg group">
                        <img src={Blog1} alt="blog_1" className='rounded-lg w-full' />
                        <div className="px-4 pt-5 pb-8">
                            <div className="flex gap-x-12 items-center pb-8">
                                <div className="flex gap-x-3 items-center">
                                    <FaPenNib className='text-[#FB2E86]'/>
                                    <h3 className='text-[14px] font-normal font-jsans text-[#151875]'>SaberAli</h3>
                                </div>
                                <div className="flex gap-x-3 items-center">
                                    <SlCalender className='text-[#FB2E86]'/>
                                    <h3 className='text-[14px] font-normal font-jsans text-[#151875]'>21 August,2020</h3>
                                </div>
                            </div>
                            <div className="">
                                <h3 className='text-[18px] font-bold font-jsans text-[#151875] pb-4 group-hover:text-[#FB2E86]'>Top esssential Trends in 2021</h3>
                                <p className='text-[#72718F] text-[16px] font-normal font-lato pb-3'>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                                <button className='text-[#151875] text-[16px] font-normal font-lato underline group-hover:text-[#FB2E86]'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[30%] shadow-lg group">
                        <img src={Blog2} alt="blog_2" className='rounded-lg w-full' />
                        <div className="px-4 pt-5 pb-8">
                            <div className="flex gap-x-12 items-center pb-8">
                                <div className="flex gap-x-3 items-center">
                                    <FaPenNib className='text-[#FB2E86]'/>
                                    <h3 className='text-[14px] font-normal font-jsans text-[#151875]'>Surfauxion</h3>
                                </div>
                                <div className="flex gap-x-3 items-center">
                                    <SlCalender className='text-[#FB2E86]'/>
                                    <h3 className='text-[14px] font-normal font-jsans text-[#151875]'>21 August,2020</h3>
                                </div>
                            </div>
                            <div className="">
                                <h3 className='text-[18px] font-bold font-jsans text-[#151875] pb-4 group-hover:text-[#FB2E86]'>Top esssential Trends in 2021</h3>
                                <p className='text-[#72718F] text-[16px] font-normal font-lato pb-3'>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                                <button className='text-[#151875] text-[16px] font-normal font-lato underline group-hover:text-[#FB2E86]'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[30%] shadow-lg group">
                        <img src={Blog3} alt="blog_3" className='rounded-lg w-full' />
                        <div className="px-4 pt-5 pb-8">
                            <div className="flex gap-x-12 items-center pb-8">
                                <div className="flex gap-x-3 items-center">
                                    <FaPenNib className='text-[#FB2E86]'/>
                                    <h3 className='text-[14px] font-normal font-jsans text-[#151875]'>SaberAli</h3>
                                </div>
                                <div className="flex gap-x-3 items-center">
                                    <SlCalender className='text-[#FB2E86]'/>
                                    <h3 className='text-[14px] font-normal font-jsans text-[#151875]'>21 August,2020</h3>
                                </div>
                            </div>
                            <div className="">
                                <h3 className='text-[18px] font-bold font-jsans text-[#151875] pb-4 group-hover:text-[#FB2E86]'>Top esssential Trends in 2021</h3>
                                <p className='text-[#72718F] text-[16px] font-normal font-lato pb-3'>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                                <button className='text-[#151875] text-[16px] font-normal font-lato underline group-hover:text-[#FB2E86]'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    
    
    
    </>
  )
}

export default LatestBlog