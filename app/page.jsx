"use client";
import { Fragment } from "react";
import Header from "./components/Header/Header";
import { MainProvider } from "./components/Context/MainContext";


const HomePage = () =>{
  return(
    <Fragment>
      <MainProvider>
      <Header/>
      </MainProvider>
   
    </Fragment>
  )
}
export default HomePage