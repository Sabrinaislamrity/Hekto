import React from 'react'
import Container from '../components/Container'
import contact from "../assets/contact.png"

const Contact = () => {
  return (
    <>

<section className='py-[100px] px-3 '>
                <div className="bg-[#F6F5FF] py-[100px]">
                    <Container>

                        <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>Contact</h3>
                        <div className=" flex">
                            <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Home .</h4>
                            <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Pages .</h3>
                            <p className='font-Sans font-bold text-[16px] text-[#FB2E86]'>Contact</p>
                        </div>

                    </Container>
                </div>
        <Container>
      
                <div className="flex justify-between bg-[#fff] px-4 pb-24">
                    <div className="w-[49%]">
                        <div className="mt-12">
                            <div className=" relative after:absolute after:contain-[''] after:top-[150px] after:left-0 after:w-[20px] after:h-[20px] after:bg-[#0D0E43] after:rounded-full  before:absolute before:contain-[''] before:top-[150px] before:left-[30px] before:w-[20px] before:h-[20px] before:bg-[#FF27B7] before:rounded-full">
                            <h3 className='font-Sans font-bold text-[32px] text-[#0D0E43] relative after:absolute after:contain-[""] after:top-[150px] after:left-[60px] after:w-[20px] after:h-[20px] after:bg-[#37DAF3] after:rounded-full '>Information About us</h3>
                            <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                            </div>
                        </div>
                            <div className="mt-40">
                                <h3 className='font-Sans font-bold text-[32px] text-[#0D0E43] ' >Get in Touch</h3>
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                            </div>
                            <div className=" flex justify-between mt-14">
                                <div className="w-[48%]">
                                <input className='h-[50px] w-full border-2 border-[#0D0E43] rounded-lg pl-2' type="text" placeholder='Your Name*' />
                                </div>
                                <div className="w-[48%]">
                                <input className='h-[50px] w-full border-2 border-[#0D0E43] rounded-lg pl-2' type="text" placeholder='Your E-mail*' />
                                </div>
                               
                            </div>

                            <div className="w-full mt-5">
                                <input className='h-[50px] w-full border-2 border-[#0D0E43] rounded-xl pl-2' type="text" placeholder='Subject**' />
                                </div>
                            <div className="w-full mt-5">
                                <label for="">Type Your Messege :</label>
                                <textarea className='w-full border-2 border-[#0D0E43] resize-none rounded-xl pl-2 pt-2  '  ></textarea>
                               
                                </div>

                                <div className="w-full mt-5">
                        <button className='py-[10px] px-[30px] bg-[#FB2E86] mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>Send Mail</button>
                        </div>
                    </div>
                    <div className="w-[49%]">
                       <div className="mt-12">
                       <h2 className='font-Sans font-bold text-[32px] text-[#0D0E43]'>Contact Way</h2>
                        <div className="flex justify-between">
                           <div className="w-[50%]">
                           <div className=" relative after:absolute after:contain-[''] after:top-[5px] after:left-0 after:h-[35px] after:w-[35px] after:bg-[#5726DF] after:rounded-full">
                                <h3 className='font-Sans font-semibold text-[16px] text-[#0D0E43] ml-10'>Tel: 877-67-88-99</h3>
                                <h4 className='font-Sans font-semibold text-[16px] text-[#0D0E43] ml-10'> E-Mail: shop@store.com</h4>
                            </div>
                           </div>
                            <div className="w-[50%]">
                            <div className=" relative after:absolute after:contain-[''] after:top-[5px] after:left-0 after:h-[35px] after:w-[35px] after:bg-[#FF27B7] after:rounded-full">
                                <h3 className='font-Sans font-semibold text-[16px] text-[#0D0E43] ml-10'>Support Forum</h3>
                                <h4 className='font-Sans font-semibold text-[16px] text-[#0D0E43] ml-10'> For over 24hr</h4>
                            </div>
                            </div>
                            
                            
                        </div>
                        <div className="flex justify-between mt-14">
                            <div className="w-[50%]">
                            <div className=" relative after:absolute after:contain-[''] after:top-[5px] after:left-0 after:h-[35px] after:w-[35px] after:bg-[#FFB265] after:rounded-full">
                                <h3 className='font-Sans font-semibold text-[16px] text-[#0D0E43] ml-10'>20 Margaret st, London</h3>
                                <h4 className='font-Sans font-semibold text-[16px] text-[#0D0E43] ml-10'> Great britain, 3NM98-LK</h4>
                            </div>
                            </div>
                           <div className="w-[50%]">
                           <div className=" relative after:absolute after:contain-[''] after:top-[5px] after:left-0 after:h-[35px] after:w-[35px] after:bg-[#1BE982] after:rounded-full">
                                <h3 className='font-Sans font-semibold text-[16px] text-[#0D0E43] ml-10'>Free standard shipping</h3>
                                <h4 className='font-Sans font-semibold text-[16px] text-[#0D0E43] ml-10'> on all orders.</h4>
                            </div>
                           </div>
                            
                            
                        </div>
                       </div>
                    <div className="mt-40">
                        <img src={contact} alt="" />
                    </div>
                    </div>
                </div>
        </Container>
    </section>
    </>
  )
}

export default Contact