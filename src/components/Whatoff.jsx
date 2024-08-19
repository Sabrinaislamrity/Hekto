import React from 'react'
import Container from './Container'
import Free from "../assets/free.png"
import Cash from "../assets/cash.png"
import Pre from "../assets/pre.png"
import Hour from "../assets/hour.png"

const Whatoff = () => {
  return (
    <>
    <section>
        <Container>
            <div className="mt-14 mb-40">
            <div className="mx-auto">
                <h1 className='font-JosefinSans text-center text-[#1A0B5B] text-[42px] font-bold mb-20'>What Shopex Offer!</h1>
                <div className="flex items-center justify-center">
                    <div className="md:columns-4 sm:columns-2 columns-1 gap-y-4">

                        <div className="flex flex-col items-center justify-center h-[420px] drop-shadow-lg bg-white px-7">
                            <img src={Free} alt=""  className='mb-2'/>
                            <h4 className='mb-4 font-josef font-[22px] text-[#00009D]'>24/7 Support</h4>
                             <p className='text-center font-serif font-bold text-base text-[#1A0B5B4D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>

                       </div>

                       <div className="flex flex-col items-center justify-center h-[420px] drop-shadow-lg bg-white px-7">
                            <img src={Cash} alt=""  className='mb-2'/>
                            <h4 className='mb-4 font-josef font-[22px] text-[#00009D]'>24/7 Support</h4>
                             <p className='text-center font-serif font-bold text-base text-[#1A0B5B4D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>

                       </div>

                       <div className="flex flex-col items-center justify-center h-[420px] drop-shadow-lg bg-white px-7">
                            <img src={Pre} alt=""  className='mb-2'/>
                            <h4 className='mb-4 font-josef font-[22px] text-[#00009D]'>24/7 Support</h4>
                             <p className='text-center font-serif font-bold text-base text-[#1A0B5B4D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>

                       </div>

                       <div className="flex flex-col items-center justify-center h-[420px] drop-shadow-lg bg-white px-7">
                            <img src={Hour} alt=""  className='mb-2'/>
                            <h4 className='mb-4 font-josef font-[22px] text-[#00009D]'>24/7 Support</h4>
                             <p className='text-center font-serif font-bold text-base text-[#1A0B5B4D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>

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

export default Whatoff