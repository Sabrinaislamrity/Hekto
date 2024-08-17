import React from 'react'
import Container from './Container'

import Logo from "../assets/logo.png"

const Footer = () => {
  return (
    <>
      <section className='pt-[95px] pb-[142px] bg-[#EEEFFB]'>
            <Container>
                <div className='font-josef flex text-[#8A8FB9]'>
                    <div className="w-[40%]">
                        <div className="pb-[31px]">
                        <img src={Logo} alt="" className='w-[98px] h-[30px]' />
                        </div>
                        <div className="flex pb-[25px]">
                            <input type="email" name="" id="" className='w-[266px] h-[40px] bg-[#D9D9D9] border rounded pl-2 outline-none' placeholder='Enter Email Address' />
                            <p className='w-[100px] bg-[#FB2E86] h-[40px] py-[10px] text-white text-center cursor-pointer border rounded'>Sign Up</p>
                        </div>
                        <p className='text-[20px]'>Contact Info</p>
                        <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                    </div>
                    <div className="w-[20%]">
                        <ul>
                            <h2 className='text-[#000000] text-[20px] mb-[42px]'>Catagories</h2>
                            <li className='pb-[21px]'>Laptops & Computers</li>
                            <li className='pb-[21px]'>Cameras & Photography</li>
                            <li className='pb-[21px]'>Smart Phones & Tablets</li>
                            <li className='pb-[21px]'>Video Games & Consoles</li>
                            <li className='pb-[21px]'>Waterproof Headphones</li>
                        </ul>
                    </div>
                    <div className="w-[20%]">
                        <ul>
                            <h2 className='text-[#000000] text-[20px] mb-[42px]'>Customer Care</h2>
                            <li className='pb-[21px]'>My Account</li>
                            <li className='pb-[21px]'>Discount</li>
                            <li className='pb-[21px]'>Returns</li>
                            <li className='pb-[21px]'>Orders History</li>
                            <li className='pb-[21px]'>Order Tracking</li>
                        </ul>
                    </div>
                    <div className="w-[20%]">
                        <ul>
                            <h2 className='text-[#000000] text-[20px] mb-[42px]'>Pages</h2>
                            <li className='pb-[21px]'>Blog</li>
                            <li className='pb-[21px]'>Browse the Shop</li>
                            <li className='pb-[21px]'>Category</li>
                            <li className='pb-[21px]'>Pre-Built Pages</li>
                            <li className='pb-[21px]'>Visual Composer Elements</li>
                            <li className='pb-[21px]'>WooCommerce Pages</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    
    </>
  )
}

export default Footer