import { useState } from "react";
import { Header } from "./index";

const notFound = () => {
    return (
        <div className="">
        <div className="outline outline-bag-def outline-1">
        <Header />

        </div>
        <div className="relative flex flex-col  h-screen justify-center items-center px-4 md:px-0 text-center"> 
            <div className="absolute top-10 md:top-1 bg-[url('/images/404.svg')] bg-cover w-[350px] h-[350px] md:w-[700px] md:h-[700px]"> </div>
            <h1 className="mt-48 md:mt-80 text-xl md:text-4xl font-bold text-gray-700">Under Construction</h1>
            <p className="text-xs md:text-base font-light text-gray-700 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsa ducimus nobis neque, inventore doloribus.</p>
            <button className="mt-10 px-32 md:px-48 py-2 md:py-3 bg-bag-def font-semibold tracking-wide text-white rounded-md text-xs md:text-base">Back Home</button>
        </div>
        
        </div>
    );
    
    }

export default notFound;