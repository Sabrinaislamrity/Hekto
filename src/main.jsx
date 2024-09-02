import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import store from "./store"
import { Provider } from 'react-redux'
import "./index.css";
import Rootlayout from "./components/Rootlayout";
import Home from "./pages/Home";
import { ContextApi } from "./components/ContextApi";
import "slick-carousel/slick/slick.css";
import Page from "./pages/Page";
import Shoplist from "./pages/Shoplist";
import Productdetails from "./pages/Productdetails";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Addtocart from "./pages/Addtocart";
import Proceed from "./pages/Proceed";
import Yourorder from "./pages/Yourorder";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Rootlayout />}>
    <Route index path='/' element={<Home/>}></Route>
    <Route index path='/page' element={<Page/>}></Route>
    <Route index path='/product/:id' element={<Shoplist/>}></Route>
    <Route index path='/productdetails' element={<Productdetails/>}></Route>
    <Route index path='/products' element={<Products/>}></Route>
    <Route index path='/blog' element={<Blog/>}></Route>
    <Route index path='/addtocart' element={<Addtocart/>}></Route>
    <Route index path='/proceed' element={<Proceed/>}></Route>
    <Route index path='/yourorder' element={<Yourorder/>}></Route>
    <Route index path='/contact' element={<Contact/>}></Route>
    <Route index path='/aboutus' element={<AboutUs/>}></Route>





    <Route index path='*' element={<Error/>}></Route>
    
    

   
     




  </Route>
))

ReactDOM.createRoot(document.getElementById("root")).render(

 
  <React.StrictMode>
     <ContextApi> 
      <Provider store={store}>
       <RouterProvider router={router} />
       </Provider>
     </ContextApi>
  
  </React.StrictMode>
  
);

