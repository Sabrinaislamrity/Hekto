import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import Arrivalsitem from './Arrivalsitem'
import { apiData } from './ContextApi'
import Slider from "react-slick";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Link } from 'react-router-dom'





function SampleNextArrow(props) {
  const { onClick } = props;
  return (
      <div className='w-[64px] h-[64px] rounded-full bg-[#979797] leading-[60px] text-[25px] text-white text-center cursor-pointer absolute right-0 lg:right-[-30px] top-[50%]' onClick={onClick} ><IoIosArrowDroprightCircle  className='inline-block' /></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
      <div className='w-[64px] h-[64px] rounded-full bg-[#979797] leading-[60px] text-[25px] text-white text-center cursor-pointer absolute left-0 lg:left-[-30px] top-[50%] z-50' onClick={onClick} ><IoIosArrowDropleftCircle className='inline-block' /></div>
  );
}


const Featro = () => {
  let data = useContext(apiData)


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
      
        }
      },
  
    ]

};
  
  

  
  





  return (
    <>
    <section className='mx-auto mt-20 mb-14'>
        <Container >
        <h2 className=' font-josef text-center text-[#1A0B5B] text-[42px] font-bold mb-10 items-center'>Featured Products</h2>
            <div className="flex-wrap">

            <Slider {...settings}>
           
            {data.map((item)=>(

              <Link to="/page">

                    <Arrivalsitem item={item}/>
                 
                    </Link>
            ))}
            </Slider>
           
            </div>
        
        </Container>
    </section>
    </>
  )
}

export default Featro