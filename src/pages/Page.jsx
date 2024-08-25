import React from 'react'
import Container from '../components/Container'
import ECommerceBar from '../components/ECommerceBar'
import gro1 from "../assets/gro1.png"
import get02 from "../assets/get02.png"
import { Link } from 'react-router-dom'

const Page = () => {
    return (
        <>

            <section className='py-[100px] px-3 '>
                <div className="bg-[#F6F5FF] py-[100px]">
                    <Container>
                        <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>Shop Grid Default</h3>
                        <div className=" flex">
                            <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Home .</h4>
                            <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Pages .</h3>
                            <p className='font-Sans font-bold text-[16px] text-[#FB2E86]'>Shop Grid Default</p>
                        </div>
                    </Container>
                </div>

                <Container>




                    <div className="">
                        <ECommerceBar />
                    </div>

                    <Link to={"/shoplist"}>
                    <div className="mt-[50px] lg:flex   justify-between px-3">
                        <div className="lg:w-[24%] w-full sm:w-[50%]">
                            <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                                <img src={gro1} alt="" />
                            </div>
                            <div className=" text-center mt-[30px]">
                                <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>Vel elit euismod</h3>
                                <div className="flex justify-center space-x-2 mt-[12px]">
                                    <div className="w-4 h-4 rounded-full bg-[#DE9034] group-hover:bg-[#DE9034] duration-500 ease-in-out"></div>
                                    <div className="w-4 h-4 rounded-full bg-[#F701A8] group-hover:bg-[#d50191] duration-500 ease-in-out"></div>
                                    <div className="w-4 h-4 rounded-full bg-[#8568FF] group-hover:bg-[#FFF] duration-500 ease-in-out"></div>
                                </div>

                               <div className="flex justify-center space-x-2">
                               <h4 className='font-Sans font-semibold text-[16px] text-[#000000]'>$26.00  </h4>
                               <h4 className='font-Sans font-semibold text-[16px] line-through text-[#FB2E86]'>$26.00  </h4>
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



                </Container>


            </section>



        </>
    )
}

export default Page