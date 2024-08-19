import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import Arrivalsitem from './Arrivalsitem'
import { apiData } from './ContextApi'


const Featro = () => {
  let data = useContext(apiData)
  
  

  
  





  return (
    <>
    <section className='mx-auto mt-20 mb-14'>
        <Container >
        <h2 className=' font-josef text-center text-[#1A0B5B] text-[42px] font-bold mb-10 items-center'>Featured Products</h2>
            <Flex className="justify-between flex-wrap">
           
            {data.map((item)=>(
                    <Arrivalsitem item={item}/>
              
            ))}
            
           
            </Flex>
        
        </Container>
    </section>
    </>
  )
}

export default Featro