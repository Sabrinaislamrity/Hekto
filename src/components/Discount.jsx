import React from 'react'
import Container from './Container'
import { GrCheckmark } from "react-icons/gr";
import brown from "../assets/brown.png"

const Discount = () => {
  return (
    <>

    <section>
        <Container>

        <div className=" text-center">
                <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>Discount Item</h3>
                
            </div>
            <div className="flex mt-[20px]">
                <div className="w-[30%]"></div>
                <div className="w-[40%]  ">
            <ul className='flex  justify-around'>
                    <li  className=' relative  cursor-pointer items-center font-Sans font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86] after:absolute after:contain-[""] after:bottom-0 after:left-0  after:h-[5px] after:w-[40px] after:bg-[#FB2E86] after:duration-300 after:ease-in-out after:hover:w-[90px]'>Wood Chair</li>
                    <li  className=' relative  cursor-pointer items-center font-Sans font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86] after:absolute after:contain-[""] after:bottom-0 after:left-0  after:h-[5px] after:w-[0px] after:bg-[#FB2E86] after:duration-300 after:ease-in-out after:hover:w-[90px]'>Plastic Chair</li>
                    <li  className=' relative  cursor-pointer items-center font-Sans font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86] after:absolute after:contain-[""] after:bottom-0 after:left-0  after:h-[5px] after:w-[0px] after:bg-[#FB2E86] after:duration-300 after:ease-in-out after:hover:w-[105px]'>Sofa Colletion</li>
                    
                    
                </ul>
            </div>
                <div className="w-[30%]"></div>
            </div>
            <div className=" lg:flex justify-between px-3">
            <div className="lg:w-[50%] w-full mt-[100px]">
                <h2 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>20% Discount Of All Products</h2>
                <h3 className='font-Sans font-bold text-[22px] text-[#FB2E86]'>Eams Sofa Compact</h3>
                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[40px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                <div className="flex justify-between mt-[30px]">
                <div className="flex items-center">
                    <GrCheckmark/>
                    <h5 className='font-Sans font-semibold text-[16px] text-[#0D0E43] '> Material expose like metals</h5>
                </div>
                <div className="flex items-center">
                <GrCheckmark/>
                <h5 className='font-Sans font-semibold text-[16px] text-[#0D0E43] '> Clear lines and geomatric figures</h5>
                </div>
                </div>
                <div className="flex justify-between">
                <div className="flex items-center">
                    <GrCheckmark/>
                    <h5 className='font-Sans font-semibold text-[16px] text-[#0D0E43] '> Simple neutral colours.</h5>
                </div>
                <div className="flex items-center">
                <GrCheckmark/>
                <h5 className='font-Sans font-semibold text-[16px] text-[#0D0E43] '> Material expose like metals</h5>
                </div>
                </div>
                <button className='py-[10px] px-[25px] bg-[#FB2E86] mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>Shop Now</button>
            </div>
            <div className="lg:w-[50%] w-full">
                <img src={brown} alt="" />
            </div>
            </div>


        </Container>


    </section>
    
    </>
  )
}

export default Discount