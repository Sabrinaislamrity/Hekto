import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import clock from "../assets/clock .png"
import clock00 from "../assets/clock00.png"
import clock01 from "../assets/clock01.png"

const Yourorder = () => {
  return (
    <>

<section className='py-[100px] px-3 bg-[#F6F5FF]'>
    <Container>
        <div className="">
                    <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>Order Completed</h3>
                </div>
                <div className=" flex">
                    <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Home ,</h4>
                    <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Pages ,</h3>
                    <p className='font-Sans font-bold text-[16px] text-[#FB2E86]'>Order Completed</p>
                </div>

                <div className="mt-[100px] ml-[100px]">
                    <img src={clock} alt="" />
                </div>
                

                <div className=" text-center">
                    <div className="">
                        <img className='ml-[50%] translate-x-[-50%] mt-[20px]' src={clock00} alt="" />
                        <h3 className='  font-Sans font-bold text-[36px] text-[#0D0E43] mt-[20px] '>Your Order Is Completed! </h3>
                        
                        <p className='  font-Sans font-semibold text-[14px] text-[#0D0E43] mt-[20px] lg:w-[40%] w-full lg:ml-[50%] lg:translate-x-[-50%] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                        
                        <Link to="/page">
                        
                        
                        <button className='py-[10px] px-[30px] bg-[#FB2E86] mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>Continue Shopping</button>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="w-[90%]"></div>
                    <div className="w-[10%]">
                    <img className=' mr-[10%]' src={clock01} alt="" />
                    </div>
                </div>
    </Container>
   </section>
    
    
    
    </>
  )
}

export default Yourorder