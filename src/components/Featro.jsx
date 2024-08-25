import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import Arrivalsitem from './Arrivalsitem'
import { apiData } from './ContextApi'
import Slider from "react-slick";


const Featro = () => {
  let data = useContext(apiData)


  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    arrows: false,

};
  
  

  
  





  return (
    <>
    <section className='mx-auto mt-20 mb-14'>
        <Container >
        <h2 className=' font-josef text-center text-[#1A0B5B] text-[42px] font-bold mb-10 items-center'>Featured Products</h2>
            <div className="flex-wrap">

            <Slider {...settings}>
           
            {data.map((item)=>(

                    <Arrivalsitem item={item}/>
                 
              
            ))}
            </Slider>
           
            </div>
        
        </Container>
    </section>
    </>
  )
}

export default Featro