import React from 'react'
import Banner from "../components/Banner"
import Featro from '../components/Featro'
import Whatoff from '../components/Whatoff'
import Leatest from '../components/Leatest'
import Unique from '../components/Unique'
import Trend from '../components/Trend'
import Group from '../components/Group'
import Discount from '../components/Discount'
import ECommerceBar from '../components/ECommerceBar'
// import TopCategories from '../components/TopCategories'
import LatestBlog from '../components/LatestBlog'


const Home = () => {
  return (
    <>
    <Banner/>
    <Featro/>
    <Leatest/>
    <Whatoff/>
    <Unique/>
    <Trend/>
    <Group/>
    <Discount/>
    {/* <TopCategories/> */}
    <LatestBlog/>
    
    </>
  )
}

export default Home