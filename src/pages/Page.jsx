import React, { useContext, useState } from 'react'
import Container from '../components/Container'
import ECommerceBar from '../components/ECommerceBar'
import get02 from "../assets/get02.png"
import { Link } from 'react-router-dom'
import { apiData } from '../components/ContextApi'
import { CiHeart } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import Post from '../components/pagination/Post'
import PaginationArea from '../components/pagination/PaginationArea'

const Page = () => {
    let data = useContext(apiData)

    let[currentPage, setCunnetPage] = useState(1)
    let [perPage, setPerPage] = useState(8)
    let lastPage = currentPage * perPage
    let firstPage = lastPage - perPage
   

    let allData = data.slice(firstPage, lastPage)

    let pageNumber = []

    for(let i= 0; i < Math.ceil(data.length / perPage); i++){
        pageNumber.push(i)
        
    }
    

    let paginate = (pageNumber)=>{
        setCunnetPage(pageNumber + 1);
        
    }
    
    let next = () =>{
        if (currentPage < pageNumber.length) {
            setCunnetPage((state) => state + 1) 
        }
      
     }
     let prev = () =>{
        if(currentPage > 1){
            setCunnetPage((state) => state -1)
        }
    }
    
    

    return (
        <>
            <section className='py-[100px] px-3'>
                <div className="bg-[#F6F5FF] py-[100px]">
                    <Container>
                        <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>Shop Grid Default</h3>
                        <div className="flex">
                            <h4 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Home .</h4>
                            <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Pages .</h3>
                            <p className='font-Sans font-bold text-[16px] text-[#FB2E86]'>Shop Grid Default</p>
                        </div>
                    </Container>
                </div>

                <Container>
                    <div className="">
                        <ECommerceBar />
                    </div>

                    <div className="flex flex-wrap -mx-3 mt-[50px]">

                        <Post allData={allData}/>
                

                    </div>
                    <div className="text-end">
                        <PaginationArea pageNumber={pageNumber} paginate={paginate} currentPage={currentPage}
                        next={next} prev={prev}/>
                    </div>

                    <div className="pt-[100px] px-3">
                        <div className="lg:flex justify-between">
                            <div className="w-[15%]"></div>
                            <div className="lg:w-[70%] w-full">
                                <img src={get02} alt="" />
                            </div>
                            <div className="w-[15%]"></div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Page
