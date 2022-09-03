import { useState } from "react";
import { Header } from "./index";
import Link from "next/link";
const notFound = () => {
    return (
        <div className="">
        <div className="outline outline-bag-def outline-1">
        <Header />

        </div>
        <div className="h-screen text-center flex flex-col items-center justify-center"> 
            <img src='/images/404.png' className="w-1/3 mx-auto" />
            <h1 className="  text-xl md:text-4xl font-bold text-gray-700">Under Construction</h1>
            <p className="text-xs md:text-base font-light text-gray-700 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsa ducimus nobis neque, inventore doloribus.</p>
            <Link href="/"><a className="mt-10 px-32 md:px-48 py-2 md:py-3 bg-bag-def font-semibold tracking-wide text-white rounded-md text-xs md:text-base">Back Home</a></Link>
        </div>
        
        </div>
    );
    
    }

export default notFound;