import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Logo from "../assets/logo.png"

const Footer = () => {
  return (
    <>
     <footer className='py-[58px] bg-[#EEEFFB] px-2'>
    <Container>
        <Flex className="flex-wrap">
        <div className="lg:w-[15%] w-[30%]">
                            <h3 className='font-sans text-[16px] font-bold text-[#262626] uppercase leading-[23px]'>menu</h3>
                            <ul className='mt-4'>
                                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Home</li>
                                <li className='font-dmsans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Shop</li>
                                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>About</li>
                                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Contacts</li>
                                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Journal</li>
                            </ul>
                        </div>
                        <div className="lg:w-[15%] w-[30%]">
                            <h3 className='font-sans text-[16px] font-bold text-[#262626] uppercase leading-[23px]'>shop</h3>
                            <ul className='mt-4'>
                                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Category 1</li>
                                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Category 2</li>
                                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Category 3</li>
                                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Category 4</li>
                                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Category 5</li>
                            </ul>
                        </div>
                        <div className="lg:w-[15%] w-[40%]">
                            <h3 className='font-sans text-[16px] font-bold text-[#262626] uppercase leading-[23px]'>help</h3>
                            <ul className='mt-4'>
                                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Privacy Policy</li>
                                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Terms & Conditions</li>
                                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Special E-shop</li>
                                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Shipping</li>
                                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Secure Payments</li>
                            </ul>
                        </div>
                        <div className="lg:w-[30%] w-[50%] mt-5 lg:mt-0">
                            <div className="font-sans text-[16px] font-bold text-[#262626] leading-[27px]"><a href="tel:+052">(052) 611-5711</a></div>
                            <div className="font-sans text-[16px] font-bold text-[#262626] leading-[27px]"><a href="mailto:">company@domain.com</a></div>
                            <p className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] mt-4'>575 Crescent Ave. Quakertown, PA 18951</p>
                        </div>
                        <div className="lg:w-[25%]  w-[50%] flex justify-end lg:justify-start items-center lg:items-start">
                            <div className="lg:w-[121px] w-[100px] lg:h-[27px] h-[20px]">
                                <img src={Logo} className='w-full h-full' alt="logo" />
                            </div>
                        </div>
        </Flex>
    </Container>
   </footer>
    
    </>
  )
}

export default Footer