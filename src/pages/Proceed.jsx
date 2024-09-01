import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import cart01 from "../assets/cart01.png"
import cart02 from "../assets/cart02.png"

const Proceed = () => {
  return (
    <>

<section className=' py-24 px-3 bg-[#F6F5FF]'>
                <Container>
                    <div className="">
                        <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>Hekto Demo</h3>
                    </div>
                    <div className="mt-24">
                        <h3 className='font-Sans font-bold text-[36px] text-[#0D0E43]'>Hekto Demo</h3>
                        <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>Cart/ Information/ Shipping/ Payment</p>
                    </div>
                    <div className="">
                        <div className="lg:flex justify-between">
                            <div className="lg:w-[63%] w-full py-9 px-5 bg-[#C1C8E1] rounded-lg">
                                <form className='' action=''>
                                    <div className=" flex justify-between items-center">
                                        <h3 className='font-Sans font-bold text-[24px] text-[#0D0E43]'>Contact Information</h3>
                                        <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Already have an account? <span>Log in</span></h3>
                                    </div>
                                    <input className='w-full h-[50px] border-b-2 outline-none bg-[#C1C8E1] mt-5' type="Email" placeholder='Email or mobile phone number...' />

                                    <div className=" flex items-center gap-3">
                                        <input className='mt-9' type="radio" name='yes' />
                                        <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-9'>Keep me up to date on news and excluive offers</p>
                                    </div>

                                    <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43] mt-16'>Shipping address</h3>


                                    <div className="flex justify-between">
                                        <div className="w-[48%]">
                                            <input className='w-full h-[50px] border-b-2 outline-none bg-[#C1C8E1] mt-5' type="Email" placeholder='First name (optional)' />
                                        </div>
                                        <div className="w-[48%]">
                                            <input className='w-full h-[50px] border-b-2 outline-none bg-[#C1C8E1] mt-5' type="Email" placeholder='First name (optional)' />
                                        </div>

                                    </div>

                                    <input className='w-full h-[50px] border-b-2 outline-none bg-[#C1C8E1] mt-5' type="Email" placeholder='Address' />

                                    <input className='w-full h-[50px] border-b-2 outline-none bg-[#C1C8E1] mt-5' type="Email" placeholder='Appaetnentment,suit,e.t.c (optinal)' />

                                    <input className='w-full h-[50px] border-b-2 outline-none bg-[#C1C8E1] mt-5' type="Email" placeholder='City' />

                                    <div className="flex justify-between">
                                        <div className="w-[48%]">
                                            <input className='w-full h-[50px] border-b-2 outline-none bg-[#C1C8E1] mt-5' type="Email" placeholder='Bangladesh' />
                                        </div>
                                        <div className="w-[48%]">
                                            <input className='w-full h-[50px] border-b-2 outline-none bg-[#C1C8E1] mt-5' type="Email" placeholder='Postal Code' />
                                        </div>

                                    </div>

                                    <div className="mt-24">
                                        <button className='py-[10px] px-[30px] bg-[#FB2E86]  font-Sans font-bold text-[16px] text-[#fff] rounded-lg '>Continue Shipping</button>
                                    </div>


                                </form>
                            </div>
                            <div className="lg:w-[35%] w-full px-4  ">
                               <div className="flex justify-between items-center relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#0D0E43]">
                               
                                    
                                    <div className="lg:w-[55%] w-[80%] sm:w-[55%] mt-10 lg:mt-0 flex justify-between">
                                        <div className="">
                                            <img src={cart01} alt="" />
                                        </div>
                                        <div className="">
                                            <h3>Ut diam consequat</h3>
                                            <h3>Color: Brown</h3>
                                            <h3>Size:XL</h3>
                                        </div>
                                   
                                    
                                    </div>
                                
                                <div className="w-[15%]">
                                    <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>£219.00</h3>
                                    </div>
                               </div>
                               <div className="flex justify-between  items-center mt-9 relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#0D0E43]">
                               
                                    
                                    <div className=" lg:w-[55%] w-[80%] sm:w-[55%] flex justify-between">
                                        <div className="">
                                            <img src={cart02} alt="" />
                                        </div>
                                        <div className="">
                                            <h3>Ut diam consequat</h3>
                                            <h3>Color: Brown</h3>
                                            <h3>Size:XL</h3>
                                        </div>
                                   
                                    
                                    </div>
                                
                                <div className="w-[15%]">
                                    <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>£219.00</h3>
                                    </div>
                               </div>
                               <div className="flex justify-between  items-center mt-9 relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#0D0E43]">
                               
                                    
                                    <div className="lg:w-[55%] w-[80%] sm:w-[55%] flex justify-between">
                                        <div className="">
                                            <img src={cart01} alt="" />
                                        </div>
                                        <div className="">
                                            <h3>Ut diam consequat</h3>
                                            <h3>Color: Brown</h3>
                                            <h3>Size:XL</h3>
                                        </div>
                                   
                                    
                                    </div>
                                
                                <div className="w-[15%]">
                                    <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>£219.00</h3>
                                    </div>
                               </div>
                               <div className="py-[20px] px-[20px] bg-[#0D0E43] mt-12 rounded-md">
                                    <div className="flex justify-between   relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#fff]">
                                        <h3 className='font-Sans font-semibold text-[18px] text-[#fff]'>Subtotals:</h3>
                                        <h3 className='font-Sans font-semibold text-[18px] text-[#fff]'>£219.00</h3>
                                    </div>
                                    <div className="flex justify-between mt-[30px]   relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#fff]">
                                        <h3 className='font-Sans font-semibold text-[18px] text-[#fff]'>Totals:</h3>
                                        <h3 className='font-Sans font-semibold text-[18px] text-[#fff]'>£219.00</h3>
                                    </div>
                                    <div className="flex  gap-3 mt-[40px]  ">
                                        <input type="radio" name='yes' />
                                        <p className='font-Sans font-semibold text-[16px] text-[#fff]'>Shipping & taxes calculated at checkout</p>
                                    </div>
                                    <div className="mt-[30px]">
                                    
                                   <Link to="/yourorder">
                                   <button className=' py-4 px-10 bg-[#19D16F] mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>Proceed To Checkout</button>
                                   </Link>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Container>
            </section>
    
    
    
    
    
    
    </>
  )
}

export default Proceed