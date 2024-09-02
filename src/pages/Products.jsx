import React from 'react'
import ECommerceBar from '../components/ECommerceBar'
import Container from '../components/Container'
import get02 from "../assets/get02.png"
import { Link } from 'react-router-dom'
import shop1 from "../assets/shop1.png"
import { FaStar, FaRegHeart, } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

const Products = () => {
  return (
    <>


<section className='py-[100px] px-3'>
<div className="bg-[#F6F5FF] py-[100px]">
                    <Container>

                        <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>Shop Left Sidebar</h3>
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
              
                
                <div className="lg:flex justify-between px-3">
                    <div className="lg:w-[23%] w-full mt-[50px]">
                        <div className="">
                            <h2 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[3px] after:w-[150px] after:bg-[#0D0E43]'>Product Brand</h2>
                        </div>
                        <div className="mt-[30px]">
                            <div className="flex  gap-3 ">
                                <input type="checkbox" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#7E81A2]'>Coaster Furniture</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="checkbox" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#7E81A2]'>Fusion Dot High Fashion</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="checkbox" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#7E81A2]'>Unique Furnitture Restor</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="checkbox" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#7E81A2]'>Dream Furnitture Flipping</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="checkbox" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#7E81A2]'>Young Repurposed</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="checkbox" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#7E81A2]'>Green DIY furniture</p>
                            </div>
                        </div>
                        <div className="mt-[70px]">
                            <h2 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[3px] after:w-[150px] after:bg-[#0D0E43]'>Discount Offer</h2>
                        </div>
                        <div className="mt-[30px]">
                            <div className="flex  gap-3  ">
                                <input type="checkbox" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#7E81A2]'>20% Cashback</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="checkbox" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#7E81A2]'>5% Cashback Offer</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="checkbox" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#7E81A2]'>25% Discount Offer</p>
                            </div>

                        </div>
                        <div className="mt-[70px]">
                            <h2 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[3px] after:w-[130px] after:bg-[#0D0E43]'>Rating Item</h2>
                        </div>
                        <div className="mt-[30px]">
                            <div className="flex  gap-3  ">
                                <input type="checkbox" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#7E81A2]'>20% Cashback</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="checkbox" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#7E81A2]'>5% Cashback Offer</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="checkbox" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#7E81A2]'>25% Discount Offer</p>
                            </div>

                        </div>
                        <div className="mt-[70px]">
                            <h2 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[3px] after:w-[150px] after:bg-[#0D0E43]'>Product Brand</h2>
                        </div>
                        <div className="mt-[30px]">
                            <div className="flex  gap-3  ">
                                <input type="checkbox" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#7E81A2]'>Prestashop</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="checkbox" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#7E81A2]'>Magento</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="checkbox" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#7E81A2]'>Bigcommerce</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="checkbox" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#7E81A2]'>osCommerce</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="checkbox" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#7E81A2]'>3dcart</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="checkbox" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#7E81A2]'>Bags Accessories</p>
                            </div>
                            <div className="flex  gap-3 mt-[5px] ">
                                <input type="checkbox" name='yes' />
                                <p className='font-Sans font-semibold text-[16px] text-[#7E81A2]'>Watches</p>
                            </div>
                        </div>
                        <div className="mt-[70px]">
                            <h2 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[3px] after:w-[120px] after:bg-[#0D0E43]'>Price Filter</h2>
                        </div>
                    </div>
                    <div className=" lg:w-[73%] w-full">
                        <Link to="/product/:id">

                        <div className="lg:flex mt-[50px] shadow-lg space-x-4">
                    <div className="lg:w-[30%] w-full">
                        
                            <img className='w-full' src={shop1} alt="" />
                        
                    </div>
                    <div className="lg:w-[70%] w-full">
                        <div className="lg:mt-[80px]">
                            <div className="flex items-center space-x-2">
                            <h2 className='font-Sans font-bold text-[24px] text-[#0D0E43]'>Accumsan tincidunt</h2>
                            <div className="flex justify-center space-x-2">
                                <div className="w-4 h-4 rounded-full bg-[#DE9034] group-hover:bg-[#DE9034] duration-500 ease-in-out"></div>
                                <div className="w-4 h-4 rounded-full bg-[#F701A8] group-hover:bg-[#d50191] duration-500 ease-in-out"></div>
                                <div className="w-4 h-4 rounded-full bg-[#8568FF] group-hover:bg-[#FFF] duration-500 ease-in-out"></div>
                            </div>

                            </div>
                         

                            <div className="flex">
                                <div className="flex mt-[20px] gap-2">
                                    <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>$26.00</h3>
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
                        </div>
                    
                   
                </div>

                <div className="mt-[100px]">
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

export default Products