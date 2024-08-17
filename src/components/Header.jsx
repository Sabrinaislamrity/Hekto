import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { CiMail } from "react-icons/ci";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";


const Header = () => {
  return (
    <>
    <section className='bg-[#7E33E0] text-white '>
        <Container>
            <Flex>
              <div className="flex justify-between py-[15px] items-center">
              <div className="w-[40%] flex gap-x-10">
              <div className="flex gap-x-2 items-center text-[16px]">
                            <CiMail />
                            <h3>sabrinaislam@gmail.com</h3>
                        </div>
              </div>
              <div className="flex gap-x-2 items-center text-[16px]">
                            <MdOutlineWifiCalling3 />
                            <h3>+880 17000333</h3>
                        </div>
              

             
              
              
              </div>
        
              <div className="w-[60%] flex justify-end py-[15px] text-end">
                        <ul className='flex gap-x-6'>
                            <li>
                                <select name="" id="" className='bg-[#7E33E0] outline-none'>
                                    <option value="">English</option>
                                    <option value="">Bengali</option>
                                </select>
                            </li>
                            <li>
                                <select name="" id="" className='bg-[#7E33E0] outline-none'>
                                    <option value="">USD</option>
                                    <option value="">BDT</option>
                                </select>
                            </li>
                            <li className='flex gap-x-2'>Login <FaRegUser /></li>
                            <li className='flex gap-x-2'>Wishlist <FaRegHeart /></li>
                            <li className='text-[22px]'><FiShoppingCart /></li>
                        </ul>
                    </div>

            </Flex>
        </Container>
    </section>

    </>
  )
}

export default Header