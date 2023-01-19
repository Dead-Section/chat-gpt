import React from "react";
import { Footer, Blog, Possibilty, Features, WhatGPT3, Header} from "./containers"
import { Brand, CTA, Navbar } from  "./components"
import './App .css'

function App(){
   return (
    <div className="App">   
        <div classNmae="gradient__bg">
            <Navbar />
            <Header />
        </div>
    </div>
   )
}  

export default App;


/* 
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibilty />
        <CTA />
        <Blog />
        <Footer />
*/