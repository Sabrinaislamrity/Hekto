import React from 'react'
import Container from './Container'
import Cair from "../assets/cair.png"

const Unique = () => {
    return (
        <section >
            <Container>
                <div className="mt-14 mb-40">
                    <div className="bg-[#F1F0FF] pb-7 lg:pb-0">
                        <div className="mx-auto">
                            <div className="flex items-center flex-wrap lg:flex-nowrap">
                                <div className="flex items-center justify-center w-full relative">
                                    <img src={Cair} alt="" className='' />

                                </div>

                                <div className="w-full ml-10">
                                    <p className='text-[#00009D] text-[35px] font-bold mb-4'>Unique Features Of leatest &
                                        Trending Poducts</p>
                                    <ul className='space-y-2 mb-4'>
                                        <li className='flex items-start space-x-2'>
                                            <span className='w-3 h-3 rounded-full bg-[#F701A8] hover:bg-[#d50191] duration-500 ease-in-out'></span>
                                            <span>All frames constructed with hardwood solids and laminates</span>
                                        </li>
                                        <li className='flex items-start space-x-2'>
                                            <span className='w-3 h-3 rounded-full bg-[#F701A8] hover:bg-[#d50191] duration-500 ease-in-out'></span>
                                            <span>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</span>
                                        </li>
                                        <li className='flex items-start space-x-2'>
                                            <span className='w-3 h-3 rounded-full bg-[#F701A8] hover:bg-[#d50191] duration-500 ease-in-out'></span>
                                            <span>Arms, backs and seats are structurally reinforced</span>
                                        </li>
                                    </ul>
                                    <div className="mt-4 flex items-center">
                                        <button className='font-josef text-base rounded-sm bg-[#F701A8] px-6 py-2 text-white'>Add To Cart</button>
                                        <div className="flex flex-col ml-4">
                                            
                                            <p className='text-[14px] font-semibold font-JosefinSans text-navy-blue leading-4'>B&B Italian Sofa </p>
                                            <p className='font-Lato text-[14px] text-navy-blue leading-4'>$32.00</p>
                                        </div>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default Unique