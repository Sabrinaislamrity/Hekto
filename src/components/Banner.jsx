import React from 'react'
import Container from './Container'
import promotional from "../assets/promotional.png"
import Second from "../assets/second.png"
import Third from "../assets/third.png"
import Slider from "react-slick";


const Banner = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: dots => (
      <div
        style={{
        
          // borderRadius: "10px",
          // padding: "10px",
          // position: "absolute",
          // left: "70px",
          // top: "50%",
          // transform: "translateY(-50%)"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
        <div className='ami'
        style={{
            width: "30px",
            color: "transparent",
            padding: "10px 0",
            borderRight: "3px #fff solid"
        }}
    >
        0{i + 1}
    </div>
)
};




  return (
    <>
    <div className="w-full">
 <Slider {...settings}>

               

<div className=''> 
<img className='w-full' src={promotional} alt="" />
 </div>

 <div className=''> 
<img className='w-full' src={Second} alt="" />
 </div>

 <div className=''> 
<img className='w-full' src={Third} alt="" />
 </div>

 

 
</Slider>
 </div>
    </>
  )
}

export default Banner