import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
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

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Rootlayout />}>
    <Route index path='/' element={<Home/>}></Route>
    <Route index path='/page' element={<Page/>}></Route>
    <Route index path='/shoplist' element={<Shoplist/>}></Route>
    <Route index path='/productdetails' element={<Productdetails/>}></Route>
    <Route index path='/products' element={<Products/>}></Route>
    <Route index path='/blog' element={<Blog/>}></Route>
    

   
     




  </Route>
))

ReactDOM.createRoot(document.getElementById("root")).render(

 
  <React.StrictMode>
     <ContextApi> 
       <RouterProvider router={router} />
     </ContextApi>
  
  </React.StrictMode>
  
);

