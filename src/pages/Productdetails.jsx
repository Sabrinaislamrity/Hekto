import React from 'react';
import Container from '../components/Container';
import pro01 from "../assets/pro01.png";
import pro02 from "../assets/pro02.png";
import pro03 from "../assets/pro03.png";
import pro001 from "../assets/pro001.png";
import men01 from "../assets/men01.png";
import men02 from "../assets/men02.png";
import men03 from "../assets/men03.png";
import men04 from "../assets/men04.png";
import chair01 from "../assets/get02.png";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Productdetails = () => {
    return (
        <>
            <section className='py-[100px] px-3 bg-[#F6F5FF]'>
                <Container>
                    <div className="text-center">
                        <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43] mb-4'>Product Details</h3>
                        <div className="flex justify-center space-x-2 text-[#0D0E43]">
                            <h4 className='font-Sans font-bold text-[16px]'>Home</h4>
                            <span className='font-Sans font-bold text-[16px]'>/ Pages</span>
                            <p className='font-Sans font-bold text-[16px] text-[#FB2E86]'>Shop Grid Default</p>
                        </div>
                    </div>
                </Container>

                <Container>
                    <div className="lg:flex lg:space-x-8 mt-[50px] bg-white shadow-md rounded-lg p-6">
                        <div className="lg:w-1/4 w-full flex flex-col items-center">
                            <img className='w-full mb-2' src={pro01} alt="Product Thumbnail 1" />
                            <img className='w-full mb-2' src={pro02} alt="Product Thumbnail 2" />
                            <img className='w-full' src={pro03} alt="Product Thumbnail 3" />
                        </div>
                        <div className="lg:w-1/2 w-full flex justify-center">
                            <img className='w-full h-auto rounded-lg shadow-lg' src={pro001} alt="Main Product" />
                        </div>
                        <div className="lg:w-1/4 w-full mt-6 lg:mt-0">
                            <h2 className='font-Sans font-bold text-[36px] text-[#0D0E43] mb-4'>Playwood Arm Chair</h2>
                            <div className="flex mb-4 items-center text-[#FFC416]">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <h5 className='font-Sans font-semibold text-[18px] text-[#0D0E43] ml-2'>(22)</h5>
                            </div>
                            <div className="flex mb-4">
                                <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43] mr-2'>$26.00</h3>
                                <h4 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>$26.00</h4>
                            </div>
                            <h3 className='font-Sans font-bold text-[18px] text-[#0D0E43] mb-2'>Color</h3>
                            <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                            <Link to="/addtocart">
                            <button className='py-[12px] px-[30px] bg-[#FB2E86] text-white font-Sans font-bold text-[16px]
                             rounded-lg shadow-lg transition-transform transform hover:scale-105'>Add To Cart</button>
                            </Link>
                            <h4 className='font-Sans font-bold text-[18px] text-[#0D0E43] mt-6'>Categories:</h4>
                            <h5 className='font-Sans font-bold text-[18px] text-[#0D0E43] mt-2'>Tags</h5>
                        </div>
                    </div>
                </Container>

                <div className="py-[100px] bg-[#F9F8FE]">
                    <Container>
                        <div className="text-center">
                            <ul className='flex justify-center space-x-6 border-b-2 border-[#0D0E43] pb-4'>
                                <li className='font-Sans font-bold text-[24px] text-[#151875] cursor-pointer'>Description</li>
                                <li className='font-Sans font-bold text-[24px] text-[#151875] cursor-pointer'>Additional Info</li>
                                <li className='font-Sans font-bold text-[24px] text-[#151875] cursor-pointer'>Reviews</li>
                                <li className='font-Sans font-bold text-[24px] text-[#151875] cursor-pointer'>Video</li>
                            </ul>
                        </div>
                        <div className="mt-[50px]">
                            <h3 className='font-Sans font-bold text-[22px] text-[#151875] mb-4'>Varius Tempor.</h3>
                            <p className='font-Sans font-semibold text-[16px] text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.</p>
                        </div>
                        <div className="mt-[50px]">
                            <h3 className='font-Sans font-bold text-[22px] text-[#151875] mb-4'>More Details</h3>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <FaArrowRight className='text-[#A9ACC6] mr-2' />
                                    <p className='font-Sans font-semibold text-[16px] text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.</p>
                                </div>
                                <div className="flex items-center">
                                    <FaArrowRight className='text-[#A9ACC6] mr-2' />
                                    <p className='font-Sans font-semibold text-[16px] text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.</p>
                                </div>
                                <div className="flex items-center">
                                    <FaArrowRight className='text-[#A9ACC6] mr-2' />
                                    <p className='font-Sans font-semibold text-[16px] text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.</p>
                                </div>
                                <div className="flex items-center">
                                    <FaArrowRight className='text-[#A9ACC6] mr-2' />
                                    <p className='font-Sans font-semibold text-[16px] text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>

                <Container>
                    <div className="text-center">
                        <h2 className='font-Sans font-bold text-[36px] text-[#0D0E43] mb-6'>Related Products</h2>
                        <div className="lg:flex lg:justify-between lg:space-x-4 mt-[40px]">
                            {[men01, men02, men03, men04].map((img, index) => (
                                <div key={index} className="lg:w-1/4 w-full mb-6 lg:mb-0 bg-white shadow-md rounded-lg overflow-hidden">
                                    <img className='w-full h-80 object-cover' src={img} alt={`Related Product ${index + 1}`} />
                                    <div className="p-4">
                                        <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43] mb-2'>Product Title</h4>
                                        <div className="flex mb-2 items-center text-[#FFC416]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <h5 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>$43.00</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>

                <div className="mt-[50px] text-center">
                    <img src={chair01} alt="Additional Decoration" className='w-full' />
                </div>
            </section>
        </>
    );
};

export default Productdetails;
