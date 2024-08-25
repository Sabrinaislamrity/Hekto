import React from 'react'
import Container from '../components/Container'
import pro01 from "../assets/pro01.png"
import pro02 from "../assets/pro02.png"
import pro03 from "../assets/pro03.png"
import pro001 from "../assets/pro001.png"
import men01 from "../assets/men01.png"
import men02 from "../assets/men02.png"
import men03 from "../assets/men03.png"
import men04 from "../assets/men04.png"
import chair01 from "../assets/get02.png"
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom'



const Productdetails = () => {
    return (
        <>
            <section className='py-[100px] px-3 '>
                <div className="bg-[#F6F5FF] py-[100px]">
                    <Container>

                        <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>Product Details</h3>
                        <div className=" flex">
                            <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Home .</h4>
                            <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Pages .</h3>
                            <p className='font-Sans font-bold text-[16px] text-[#FB2E86]'>Shop Grid Default</p>
                        </div>

                    </Container>
                </div>
               <Container>

                <div className="lg:flex justify-around mt-[50px] shadow-lg py-[10px] px-3">
                    <div className="lg:w-[15%] w-full">
                        <div className="">
                            <img className='' src={pro01} alt="" />
                            <img className='my-[12px]' src={pro02} alt="" />
                            <img className='' src={pro03} alt="" />
                        </div>
                    </div>
                    <div className="lg:w-[30%] w-full">
                        <div className="">
                            <img className='w-full' src={pro001} alt="" />
                        </div>
                    </div>
                    <div className="lg:w-[50%] w-full">
                        <div className="mt-[20px]">
                            <h2 className='font-Sans font-bold text-[36px] text-[#0D0E43]'>Playwood arm chair</h2>
                            <div className="flex mt-[20px] gap-2  items-center text-[#FFC416] ">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <h5 className='font-Sans font-semibold text-[18px] text-[#0D0E43]'>(22)</h5>
                            </div>
                            <div className="flex mt-[20px] gap-2">
                                <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>$26.00</h3>
                                <h4 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>$26.00</h4>
                            </div>
                            <h3 className='font-Sans font-bold text-[18px] text-[#0D0E43] mt-[20px]'>Color</h3>
                            <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                            {/* <Link to="/addtocart"> */}

                            <button className='py-[10px] px-[25px] bg-[#FB2E86] mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>Add To cart</button>
                            
                            {/* </Link> */}
                                
                            
                            <h4 className='font-Sans font-bold text-[18px] text-[#0D0E43] mt-[20px]'>Categories:</h4>
                            <h5 className='font-Sans font-bold text-[18px] text-[#0D0E43] mt-[20px]'>Tags</h5>
                        </div>
                    </div>
                </div>
                </Container>




                <div className="py-[100px] bg-[#F9F8FE] ">
                    <div className="w-[60%]">
                        <ul className='lg:flex justify-between'>
                            <li className=' relative font-Sans font-bold text-[24px] text-[#151875] mt-[50px] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[130px] after:bg-[#0D0E43]'>Description</li>
                            <li className=' relative font-Sans font-bold text-[24px] text-[#151875] mt-[50px] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[170px] after:bg-[#0D0E43]'>Additional Info</li>
                            <li className=' relative font-Sans font-bold text-[24px] text-[#151875] mt-[50px] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[90px] after:bg-[#0D0E43]'>Reviews</li>
                            <li className=' relative font-Sans font-bold text-[24px] text-[#151875] mt-[50px] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[70px] after:bg-[#0D0E43]'>Video</li>
                        </ul>
                    </div>
                    <div className="mt-[70px]">
                        <h3 className='font-Sans font-bold text-[22px] text-[#151875] '>Varius tempor.</h3>
                        <p className='font-Sans font-semibold text-[16px] text-[#A9ACC6] mt-[20px] '>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>

                    </div>
                    <div className="mt-[70px] ">
                        <h3 className='font-Sans font-bold text-[22px] text-[#151875] '>More details</h3>
                        <div className="flex items-center mt-[15px]">
                            <FaArrowRight />
                            <p className='font-Sans font-semibold text-[16px] text-[#A9ACC6]  '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                        </div>
                        <div className="flex items-center mt-[10px]">
                            <FaArrowRight />
                            <p className='font-Sans font-semibold text-[16px] text-[#A9ACC6]  '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                        </div>
                        <div className="flex items-center mt-[10px]">
                            <FaArrowRight />
                            <p className='font-Sans font-semibold text-[16px] text-[#A9ACC6]  '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                        </div>
                        <div className="flex items-center mt-[10px]">
                            <FaArrowRight />
                            <p className='font-Sans font-semibold text-[16px] text-[#A9ACC6]  '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                        </div>
                    </div>
                </div>
                
                <Container>
                <div className="px-3">
                    <h2 className='font-Sans font-bold text-[36px] text-[#0D0E43] mt-[20px] '>Related Products</h2>
                    <div className="lg:flex justify-between mt-[40px]">
                        <div className="lg:w-[24%] w-full">
                            <img className='w-full' src={men01} alt="" />
                            <div className="flex justify-between px-2">
                                <div className="">
                                    <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43] mt-[20px] '>Mens Fashion Wear</h4>
                                </div>
                                <div className="flex mt-[20px] gap-1  items-center text-[#FFC416] ">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                            <h5 className='font-Sans font-bold text-[16px] text-[#0D0E43] mt-[10px] px-2 '>$43.00</h5>
                        </div>
                        <div className="lg:w-[24%] w-full">
                            <img className='w-full' src={men02} alt="" />
                            <div className="flex justify-between px-2">
                                <div className="">
                                    <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43] mt-[20px] '>Women’s Fashion</h4>
                                </div>
                                <div className="flex mt-[20px] gap-1  items-center text-[#FFC416] ">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                            <h5 className='font-Sans font-bold text-[16px] text-[#0D0E43] mt-[10px] px-2 '>$43.00</h5>
                        </div>
                        <div className="lg:w-[24%] w-full">
                            <img className='w-full' src={men03} alt="" />
                            <div className="flex justify-between px-2">
                                <div className="">
                                    <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43] mt-[20px] px-2'>Wolx Dummy Fashion</h4>
                                </div>
                                <div className="flex mt-[20px] gap-1  items-center text-[#FFC416] ">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                            <h5 className='font-Sans font-bold text-[16px] text-[#0D0E43] mt-[10px] '>$43.00</h5>
                        </div>
                        <div className="lg:w-[24%] w-full">
                            <img className='w-full' src={men04} alt="" />
                            <div className="flex justify-between px-2">
                                <div className="">
                                    <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43] mt-[20px] '>Top Wall Digital Clock</h4>
                                </div>
                                <div className="flex mt-[20px] gap-1  items-center text-[#FFC416] ">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                            <h5 className='font-Sans font-bold text-[16px] text-[#0D0E43] mt-[10px] px-2 '>$43.00</h5>
                        </div>
                    </div>
                </div>
                </Container>

                <div className=" mt-[50px]">
                    <div className="lg:flex justify-between">
                        <div className="w-[15%]"></div>
                        <div className="lg:w-[70%] w-full">
                            <img src={chair01} alt="" />
                        </div>
                        <div className="w-[15%]"></div>

                    </div>
                </div>










            </section>

        </>
    )
}

export default Productdetails