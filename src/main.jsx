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

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Rootlayout />}>
    <Route index path='/' element={<Home/>}></Route>
   
     




  </Route>
))

ReactDOM.createRoot(document.getElementById("root")).render(

 
  <React.StrictMode>
     <ContextApi> 
       <RouterProvider router={router} />
     </ContextApi>
  
  </React.StrictMode>
  
);

