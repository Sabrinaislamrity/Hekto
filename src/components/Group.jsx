import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Gro1 from "../assets/gro1.png"
import Gro2 from "../assets/gro2.png"

const Group = () => {
  return (
    <>
   <section className='py-6'>
                <Container>
                    <div className="flex justify-center">
                        <div className="w-[29%]">
                            <div className="w-[420px] h-[270px] bg-[#FFF6FB] relative px-8">
                                <h2 className='text-[26] text-[#151875] font-semibold pt-[34px]'>23% off in all products</h2>
                                <p className=' font-normal text-[16px] hover:underline hover:text-[#FB2E86]'>Shop Now</p>
                                <img src={Gro1} className=' absolute right-0 bottom-0 mb-1 w-[213px] h-[207px]' />
                            </div>
                        </div>
                        <div className="w-[29%]">
                            <div className="w-[420px] h-[270px] bg-[#FFF6FB] relative px-8">
                                <h2 className='text-[26] text-[#151875] font-semibold pt-[34px]'>23% off in all products</h2>
                                <p className='font-normal text-[16px] hover:underline hover:text-[#FB2E86]'>View Collection</p>
                               <img src={Gro2} className=' absolute right-0 bottom-0 mb-1 w-[213px] h-[207px]' />
                            </div>
                        </div>
                        
                        <div className="w-[20%] flex flex-col justify-between">
                            <div className="flex justify-between items-center">
                                <div className="bg-[#F5F6F8] w-[107px] h-[74px] flex justify-center">
                                    <img src={Gro1} alt="" />
                                </div>
                                <div className="">
                                    <h1 className='font-normal text-[#151875] text-[14px]'>Executive Seat chair</h1>
                                    <p className='font-normal text-[#151875] text-[12px]'>$3200</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="bg-[#F5F6F8] w-[107px] h-[74px] flex justify-center">
                                    <img src={Gro1}/>
                                </div>
                                <div className="">
                                    <h1 className='font-normal text-[#151875] text-[14px]'>Executive Seat chair</h1>
                                    <p className='font-normal text-[#151875] text-[12px]'>$3200</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="bg-[#F5F6F8] w-[107px] h-[74px] flex justify-center">
                                   <img src={Gro1}/>
                                </div>
                                <div className="">
                                    <h1 className='font-normal text-[#151875] text-[14px]'>Executive Seat chair</h1>
                                    <p className='font-normal text-[#151875] text-[12px]'>$3200</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

    </>
  )
}

export default Group