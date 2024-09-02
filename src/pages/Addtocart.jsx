import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import cart01 from "../assets/cart01.png"
import cart02 from "../assets/cart02.png"
import { useDispatch, useSelector } from 'react-redux'
import { productDecrement, productIncrement } from '../components/slice/productSlice'

const Addtocart = () => {
    let dispatch = useDispatch()
    let data = useSelector((state) => state.product.cartItem)
   let handleIncrement = (index) =>{
    dispatch(productIncrement(index))
    
   }
   let handleDecrement = (index) =>{
    dispatch(productDecrement(index))
    
   }
   let handleRemove = (index) =>{
    console.log(index);
    
   }
    return (
        <>

            <section className='py-[100px] px-3 '>
                <div className="bg-[#F6F5FF] py-[100px]">
                    <Container>

                        <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>Shopping Curt</h3>
                        <div className=" flex">
                            <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Home .</h4>
                            <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Pages .</h3>
                            <p className='font-Sans font-bold text-[16px] text-[#FB2E86]'>Shopping Curt</p>
                        </div>

                    </Container>
                </div>
                <Container>



                    <div className="mt-[100px] px-3 ">
                        <div className=" lg:flex w-full justify-between">
                            <div className="lg:w-[65%] w-full">
                                <div className=" relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#0D0E43]">
                                    <div className=" flex justify-between">
                                        <h3 className='font-Sans font-bold text-[20px] text-[#0D0E43]'>Product</h3>
                                        <h3 className='font-Sans font-bold text-[20px] text-[#0D0E43]'>Price</h3>
                                        <h3 className='font-Sans font-bold text-[20px] text-[#0D0E43]'>Quantity</h3>
                                        <h3 className='font-Sans font-bold text-[20px] text-[#0D0E43]'>Total</h3>
                                    </div>
                                    {data.map((item,index) => (

                                        <div className="flex justify-between items-center mt-[50px]">
                                            <div className="w-[28%]  flex justify-between">
                                                <div className="">
                                                    <img src={item.thumbnail} alt="" />
                                                </div>
                                                <div className=" hidden lg:block ">
                                                   
                                                <h3>{item.title}</h3>
                                                    
                                                </div>
                                            </div>
                                            <div className="w-[70%] flex justify-between">
                                                <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43] mr-[30px]'>${item.price}</h3>
                                                <div className="">
                                                    <button onClick={()=>handleDecrement(index)} className='font-Sans font-bold text-[20px] text-[#0D0E43]'>-</button>
                                                    <button className='font-Sans font-bold text-[16px] text-[#0D0E43] px-3'>{item.qun}</button>
                                                    <button onClick={()=>handleIncrement(index)} className='font-Sans font-bold text-[20px] text-[#0D0E43]'>+</button>
                                                </div>
                                                <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>£{item.price * item.qun}</h3>
                                            </div>
                                        </div>

                                    ))}


                                </div>

                                <div className="flex justify-between">
                                    <button className='py-[10px] px-[30px] bg-[#FB2E86] mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>Update Curt</button>
                                    <button onClick={()=>handleRemove(index)} className='py-[10px] px-[30px] bg-[#FB2E86] mt-[50px] font-Sans
                                     font-bold text-[16px] text-[#fff] rounded-lg'>Clear Curt</button>
                                </div>
                            </div>
                            <div className="lg:w-[30%] w-full">
                                <div className=" text-center">
                                    <h3 className='font-Sans font-bold text-[20px] text-[#0D0E43]'>Cart Totals</h3>
                                    <div className="py-[20px] px-[20px] bg-[#F4F4FC] mt-[40px] rounded-md">
                                        <div className="flex justify-between   relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#0D0E43]">
                                            <h3 className='font-Sans font-semibold text-[18px] text-[#0D0E43]'>Subtotals:</h3>
                                            <h3 className='font-Sans font-semibold text-[18px] text-[#0D0E43]'>£219.00</h3>
                                        </div>
                                        <div className="flex justify-between mt-[30px]   relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#0D0E43]">
                                            <h3 className='font-Sans font-semibold text-[18px] text-[#0D0E43]'>Totals:</h3>
                                            <h3 className='font-Sans font-semibold text-[18px] text-[#0D0E43]'>£219.00</h3>
                                        </div>
                                        <div className="flex  gap-3 mt-[40px]  ">
                                            <input type="radio" name='yes' />
                                            <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>Shipping & taxes calculated at checkout</p>
                                        </div>
                                        <div className="mt-[30px]">
                                            <Link to="/proceed">
                                                <button className='py-[10px] px-[80px] bg-[#19D16F] mt-[50px] font-Sans font-bold text-[16px] text-[#0D0E43] rounded-lg'>Proceed To Checkout</button>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                                <div className="  mt-[50px]">
                                    <div className="text-center">
                                        <h3 className='font-josef font-bold text-[20px] text-[#0D0E43]'>Calculate Shopping</h3>
                                    </div>
                                    <div className="py-[20px] px-[20px] bg-[#0D0E43] mt-[20px] rounded-md">
                                        <div className="  relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#fff]">
                                            <h3 className='font-Sans font-semibold text-[18px] text-[#fff]'>Bangladesh</h3>

                                        </div>
                                        <div className=" mt-[30px]   relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#fff]">
                                            <h3 className='font-Sans font-semibold text-[18px] text-[#fff]'>Mirpur Dhaka - 1200</h3>

                                        </div>
                                        <div className=" mt-[30px]   relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#fff]">
                                            <h3 className='font-Sans font-semibold text-[18px] text-[#fff]'>Postal Code</h3>

                                        </div>

                                        <div className="mt-[30px] ">
                                            <button className='py-[10px] px-[30px] bg-[#FB2E86] mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>Calculate Shiping</button>
                                        </div>
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

export default Addtocart