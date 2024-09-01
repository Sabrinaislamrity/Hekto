import React from 'react'
import blog001 from "../assets/blog001.png"
import blog002 from "../assets/blog002.png"
import blog003 from "../assets/blog003.png"
import blog004 from "../assets/blog004.png"
import blog005 from "../assets/blog005.png"
import blog006 from "../assets/blog006.png"
import blog007 from "../assets/blog007.png"
import blog008 from "../assets/blog008.png"
import blog009 from "../assets/blog009.png"
import blog000 from "../assets/blog000.png"
import { FaArrowRight } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import Container from '../components/Container'
import { Link } from 'react-router-dom'


const Blog = () => {
    return (
        <>
            <section className=' py-24 px-3 '>
                <Container>
                    <div className="">
                        <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>Shopping Curt</h3>
                    </div>
                    <div className=" flex">
                        <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Home ,</h4>
                        <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Pages ,</h3>
                        <p className='font-Sans font-bold text-[16px] text-[#FB2E86]'>Shopping Curt</p>
                    </div>

                    <div className="lg:flex  justify-between py-12 px-3 ">
                        <div className="lg:w-[69%] w-full">
                            <div className="">
                                <img src={blog001} alt="" />
                                <div className="lg:w-[40%] flex justify-around mt-5">
                                    <h3 className='font-Sans font-bold text-[16px] text-[#3F509E] py-2 px-5 bg-[#FFE7F9]'>Surf Auxion</h3>
                                    <h3 className='font-Sans font-bold text-[16px] text-[#3F509E] py-2 px-5 bg-[#FFE7F9]'>Aug 09 2020</h3>
                                </div>
                                <h2 className='font-Sans font-bold text-[30px] text-[#151875] mt-5'>Mauris at orci non vulputate diam tincidunt nec.</h2>
                                <p className='font-Sans font-semibold text-[16px] text-[#3F509E] mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                                <div className="flex mt-8 items-center ">
                                    <Link to="/aboutus" >
                                <button className='absolute -bottom-12 text-[30px] font-medium py-[10px] px-[15px]
                                 bg-[#08D15F] rounded-md text-white group-hover:bottom-3 duration-500 ease-in-out font-lato'>About us</button>
                                 </Link>
                                </div>
                            </div>

                            <div className="mt-16">
                                <img src={blog002} alt="" />
                                <div className="lg:w-[40%] flex justify-around mt-5">
                                    <h3 className='font-Sans font-bold text-[16px] text-[#3F509E] py-2 px-5 bg-[#FFE7F9]'>Surf Auxion</h3>
                                    <h3 className='font-Sans font-bold text-[16px] text-[#3F509E] py-2 px-5 bg-[#FFE7F9]'>Aug 09 2020</h3>
                                </div>
                                <h2 className='font-Sans font-bold text-[30px] text-[#151875] mt-5'>Aenean vitae in aliquam ultrices lectus. Etiam.</h2>
                                <p className='font-Sans font-semibold text-[16px] text-[#3F509E] mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                                <div className="flex mt-8 items-center ">
                                    <h4 className='font-Sans font-semibold text-[24px] text-[#FB2E86] '>Read More  </h4>
                                    <FaArrowRight />

                                

                                </div>

                            </div>

                            <div className="mt-16">
                                <img src={blog003} alt="" />
                                <div className="lg:w-[40%] flex justify-around mt-5">
                                    <h3 className='font-Sans font-bold text-[16px] text-[#3F509E] py-2 px-5 bg-[#FFE7F9]'>Surf Auxion</h3>
                                    <h3 className='font-Sans font-bold text-[16px] text-[#3F509E] py-2 px-5 bg-[#FFE7F9]'>Aug 09 2020</h3>
                                </div>
                                <h2 className='font-Sans font-bold text-[30px] text-[#151875] mt-5'>Sit nam congue feugiat nisl, mauris amet nisi. </h2>
                                <p className='font-Sans font-semibold text-[16px] text-[#3F509E] mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                                <div className="flex mt-8 items-center ">
                                    <h4 className='font-Sans font-semibold text-[24px] text-[#FB2E86] '>Read More  </h4>
                                    <FaArrowRight />

                                </div>


                            </div>


                        </div>




                        <div className="lg:w-[28%] w-full">
                            <div className="">
                                <h3 className='font-Sans font-bold text-[24px] text-[#151875]'>Search</h3>
                                <div className=" relative items-center">
                                    <input type="search" placeholder='search...' className='w-[81%]  outline-none rounded-lg h-[40px] bg-[#D9D9D9] pl-2  ' />
                                    <div className=" absolute top-[50%] translate-y-[-50%] right-[10%] w-[40px] h-[40px] bg-[#FB2E86] rounded-r-lg">
                                        <IoSearchOutline className=' absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-[#fff] text-[22px]' />
                                    </div>
                                </div>

                                <h3 className='font-Sans font-bold text-[24px] text-[#151875] mt-8'>Categories</h3>
                                <div className="mt-6 flex justify-between">
                                    <div className="w-[48%]">
                                        <h4 className='font-Sans font-bold text-[16px] text-[#3F509E] py-2 px-8 hover:bg-[#FB2E86] rounded-lg ' >Hobbies (14)</h4>
                                    </div>
                                    <div className="w-[48%]">
                                        <h4 className='font-Sans font-bold text-[16px] text-[#3F509E] py-2 px-8 hover:bg-[#FB2E86]  rounded-lg' >Hobbies (14)</h4>
                                    </div>

                                </div>
                                <div className="mt-6 flex justify-between">
                                    <div className="w-[48%]">
                                        <h4 className='font-Sans font-bold text-[16px] text-[#3F509E] py-2 px-8 hover:bg-[#FB2E86] rounded-lg ' >Women (21)</h4>
                                    </div>
                                    <div className="w-[48%]">
                                        <h4 className='font-Sans font-bold text-[16px] text-[#3F509E] py-2 px-8 hover:bg-[#FB2E86]  rounded-lg' >Women (21)</h4>
                                    </div>

                                </div>
                                <div className="mt-6 flex justify-between">
                                    <div className="w-[48%]">
                                        <h4 className='font-Sans font-bold text-[16px] text-[#3F509E] py-2 px-8 hover:bg-[#FB2E86] rounded-lg ' >Hobbies (14)</h4>
                                    </div>
                                    <div className="w-[48%]">
                                        <h4 className='font-Sans font-bold text-[16px] text-[#3F509E] py-2 px-8 hover:bg-[#FB2E86]  rounded-lg' >Hobbies (14)</h4>
                                    </div>

                                </div>

                                <h3 className='font-Sans font-bold text-[24px] text-[#151875] mt-8'>Recent Post</h3>

                                <div className="mt-6 flex justify-between">
                                    <div className="w-[20%]">
                                        <img src={blog004} alt="" />
                                    </div>
                                    <div className="w-[78%]">
                                        <h3 className='font-Sans font-bold text-[18px] text-[#3F509E] '>It is a long established fact</h3>
                                        <h3 className='font-Sans font-semibold text-[16px] text-[#8A8FB9] '>Aug 09 2020</h3>
                                    </div>

                                </div>
                                <div className="mt-6 flex justify-between">
                                    <div className="w-[20%]">
                                        <img src={blog005} alt="" />
                                    </div>
                                    <div className="w-[78%]">
                                        <h3 className='font-Sans font-bold text-[18px] text-[#3F509E] '>It is a long established fact</h3>
                                        <h3 className='font-Sans font-semibold text-[16px] text-[#8A8FB9] '>Aug 09 2020</h3>
                                    </div>

                                </div>
                                <div className="mt-6 flex justify-between">
                                    <div className="w-[20%]">
                                        <img src={blog004} alt="" />
                                    </div>
                                    <div className="w-[78%]">
                                        <h3 className='font-Sans font-bold text-[18px] text-[#3F509E] '>It is a long established fact</h3>
                                        <h3 className='font-Sans font-semibold text-[16px] text-[#8A8FB9] '>Aug 09 2020</h3>
                                    </div>

                                </div>
                                <div className="mt-6 flex justify-between">
                                    <div className="w-[20%]">
                                        <img src={blog006} alt="" />
                                    </div>
                                    <div className="w-[78%]">
                                        <h3 className='font-Sans font-bold text-[18px] text-[#3F509E] '>It is a long established fact</h3>
                                        <h3 className='font-Sans font-semibold text-[16px] text-[#8A8FB9] '>Aug 09 2020</h3>
                                    </div>

                                </div>

                                <h3 className='font-Sans font-bold text-[24px] text-[#151875] mt-10'>Recent Post</h3>

                                <div className="mt-6 flex justify-between">
                                    <div className="w-[20%]">
                                        <img src={blog004} alt="" />
                                    </div>
                                    <div className="w-[78%]">
                                        <h3 className='font-Sans font-bold text-[18px] text-[#3F509E] '>Elit ornare in enim mauris.</h3>
                                        <h3 className='font-Sans font-semibold text-[16px] text-[#8A8FB9] '>Aug 09 2020</h3>
                                    </div>

                                </div>
                                <div className="mt-6 flex justify-between">
                                    <div className="w-[20%]">
                                        <img src={blog005} alt="" />
                                    </div>
                                    <div className="w-[78%]">
                                        <h3 className='font-Sans font-bold text-[18px] text-[#3F509E] '>Viverra pulvinar et enim.</h3>
                                        <h3 className='font-Sans font-semibold text-[16px] text-[#8A8FB9] '>Aug 09 2020</h3>
                                    </div>

                                </div>
                                <div className="mt-6 flex justify-between">
                                    <div className="w-[20%]">
                                        <img src={blog006} alt="" />
                                    </div>
                                    <div className="w-[78%]">
                                        <h3 className='font-Sans font-bold text-[18px] text-[#3F509E] '>Mattis varius donec fdsfd</h3>
                                        <h3 className='font-Sans font-semibold text-[16px] text-[#8A8FB9] '>Aug 09 2020</h3>
                                    </div>

                                </div>



                                <h3 className='font-Sans font-bold text-[24px] text-[#151875] mt-8'>Offer product</h3>

                                <div className="mt-6 flex justify-between">
                                    <div className="w-[49%] text-center">
                                        <img className='w-full' src={blog007} alt="" />
                                        <h3 className='font-Sans font-bold text-[16px] text-[#3F509E] '>Duis lectus est.</h3>
                                        <h3 className='font-Sans font-semibold text-[14px] text-[#8A8FB9] '>$12.00 - $15.00</h3>
                                    </div>
                                    <div className="w-[49%] text-center">
                                        <img className='w-full' src={blog008} alt="" />
                                        <h3 className='font-Sans font-bold text-[16px] text-[#3F509E] '>Sed placerat.</h3>
                                        <h3 className='font-Sans font-semibold text-[14px] text-[#8A8FB9] '>$12.00 - $15.00</h3>
                                    </div>

                                </div>
                                <div className="mt-6 flex justify-between">
                                    <div className="w-[49%] text-center">
                                        <img className='w-full' src={blog009} alt="" />
                                        <h3 className='font-Sans font-bold text-[16px] text-[#3F509E] '>Netus proin.</h3>
                                        <h3 className='font-Sans font-semibold text-[14px] text-[#8A8FB9] '>$12.00 - $15.00</h3>
                                    </div>
                                    <div className="w-[49%] text-center">
                                        <img className='w-full' src={blog000} alt="" />
                                        <h3 className='font-Sans font-bold text-[16px] text-[#3F509E] '>Platea in.</h3>
                                        <h3 className='font-Sans font-semibold text-[14px] text-[#0D0E43] '>$12.00 - $15.00</h3>
                                    </div>

                                </div>



                                <h3 className='font-Sans font-bold text-[24px] text-[#151875] mt-48'>Follow</h3>

                                <div className=" w-[60%] flex justify-between mt-8">
                                    <div className="py-4 px-4 bg-[#0D0E43] hover:bg-[#FB2E86]   text-[#fff] text-[28px] rounded-full ">

                                        < FaFacebookSquare />
                                    </div>
                                    <div className="py-4 px-4 bg-[#0D0E43] hover:bg-[#FB2E86]   text-[#fff] text-[28px] rounded-full ">

                                        <FaLinkedin />
                                    </div>
                                    <div className="py-4 px-4 bg-[#0D0E43] hover:bg-[#FB2E86]  text-[#fff] text-[28px] rounded-full ">

                                        <FaTwitter />
                                    </div>




                                </div>

                                <h3 className='font-Sans font-bold text-[24px] text-[#151875] mt-8'>Tags</h3>

                                <div className="flex justify-between w-[80%] mt-5">
                                    <h3 className='font-Sans font-bold text-[18px] text-[#3F509E] duration-300 ease-in-out hover:text-[#FB2E86] hover:underline'>General</h3>
                                    <h3 className='font-Sans font-bold text-[18px] text-[#3F509E] duration-300 ease-in-out hover:text-[#FB2E86] hover:underline'>Atsanil</h3>
                                    <h3 className='font-Sans font-bold text-[18px] text-[#3F509E] duration-300 ease-in-out hover:text-[#FB2E86] hover:underline'>Insas.</h3>
                                </div>
                                <div className="flex justify-between w-[52%] mt-5">
                                    <h3 className='font-Sans font-bold text-[18px] text-[#3F509E] duration-300 ease-in-out hover:text-[#FB2E86] hover:underline'>Bibsaas</h3>
                                    <h3 className='font-Sans font-bold text-[18px] text-[#3F509E] duration-300 ease-in-out hover:text-[#FB2E86] hover:underline'>Nulla.</h3>
                                </div>




                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Blog