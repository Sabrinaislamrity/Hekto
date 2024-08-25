// import React from 'react'
// import Container from './Container'
// import Slider from "react-slick";
// import top from "../assets/top.png"
// import top01 from "../assets/top01.png"
// import top02 from "../assets/top02.png"
// import top03 from "../assets/top03.png"
// import get from "../assets/get.png"






// const TopCategories = () => {

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 2000,
//         autoplaySpeed: 4000,
//         arrows: false,

//         appendDots: dots => (
//             <div
//                 style={{
//                       borderRadius: "10px",
//                       padding: "10px",
//                       position:'absolute',
//                       left:'50%',
//                       bottom:'-50px',
//                       transform:'translateX(-50%)',

//                 }}
//             >
//                 <ul style={{ margin: "0px", display: 'flex' }}> {dots} </ul>
//             </div>
//         ),
//         customPaging: i => (
//             <div
//                 style={{
//                     width: "30px",
//                     color: "blue",
//                     padding: "0  20px",
//                     borderBottom: "5px #F6F7FB solid"
//                 }}
//             >

//             </div>
//         )
//     };






//     return (
//         <>
//             <section className=''>
//                 <Container>

//                     <div className=" text-center ">
//                         <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>Top Categories</h3>
//                     </div>

//                     <Slider {...settings}>


//                         <div className="relative group w-[200px] mr-[50px]">
                            
//                             <div className="bg-[#F6F7FB] rounded-full h-[269px] flex items-center justify-center overflow-hidden relative z-30">
//                                 <img className='w-[178px] h-[178px] z-20' src={top} alt="Product Image" />
//                                 <a className='absolute font-JosefinSans w-[88px] h-[29px] text-[12px] left-[50%] translate-x-[-50%] bottom-8 rounded-sm bg-[#08D15F] text-white group-hover:bottom-5 duration-300 flex justify-center items-center' href="">View Shop</a>
//                             </div>

                            
//                             <div className="absolute inset-0 rounded-full w-[95%] h-[269px] bg-[#9575e5] z-10 group-hover:left-1 group-hover:top-[7px] duration-300">
//                                 <div className="flex flex-col items-center justify-center h-full">
//                                     <h5 className='line-clamp-1 w-10/12 font-JosefinSans text-xl text-navy-blue text-center'>Cypress Ivory Faux Flokati Upholstered Chair</h5>
//                                     <p className='text-base text-navy-blue mt-2'>$56.00</p>
//                                 </div>
//                             </div>
//                         </div>


                      

//                     </Slider>

//                 </Container>

//                 <div className=" mt-[50px] px-3 ">
//                     <img className=' ' src={get} alt="" />
//                     <div className=" text-center mt-[30px]">
//                         <h3 className='font-Sans font-bold lg:text-[42px] text-[32px] text-[#0D0E43]'>Get Leatest Update By Subscribe
//                             0ur Newslater</h3>
//                         <button className='py-[10px] px-[25px] bg-[#FB2E86] mt-[0px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>Shop Now</button>
//                     </div>
//                 </div>
//             </section>


//         </>
//     )
// }

// export default TopCategories