import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'


let apiData = createContext()

const ContextApi = ({children}) => {

    let [info, setinfo] = useState([])
    let getData = ()=> axios.get("https://dummyjson.com/products").then((response)=>{
      setinfo(response.data.products);
      
  
    })
  
  useEffect(()=>{
    getData()
  },[])
 

  return (
    <apiData.Provider value={info}>{children}</apiData.Provider>
  )
}

export  {ContextApi,apiData}