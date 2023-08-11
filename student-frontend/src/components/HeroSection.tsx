import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function HeroSection() {

    let navigate = useNavigate();

    const routeChange = (path: string) => {
        navigate(path);
    }

    return (
        <>

            <div className="mt-8 bg-gray-300 overflow-y-hidden" style={{ minHeight: 200 }}>
                {/* Code block starts */}
                <div className="bg-gray-300">
                    <div className="container mx-auto flex flex-col items-center py-12 pt-24 mt-12 sm:py-24">
                        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                                Welcome To 
                                <span className="text-pink-400"> Exchange </span>
                                Buddy!
                            </h1>
                            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 font-normal text-center text-sm sm:text-lg">What do you want to do? </p>
                        </div>
                        <div className="flex justify-center items-center">
                            {/**Jada må værra links, hold kjeft*/}
                            <button onClick={x => routeChange("/searchroom")} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-pink-200 transition 
                            duration-150 ease-in-out hover:bg-pink-700 hover:border-gray-800 lg:text-xl lg:font-bold  rounded text-gray-800 px-4 sm:px-10 border border-pink-400 
                            py-2 sm:py-4 text-sm">Find Room</button>

                            <button onClick={x => routeChange("/searchuser")} className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-pink-200 transition 
                            duration-150 ease-in-out hover:border-gray-800 lg:text-xl lg:font-bold rounded border border-pink-400 
                            text-gray-800 px-4 sm:px-10 hover:bg-pink-700 py-2 sm:py-4 text-sm">Find Person</button>

                        </div>
                    </div>
                </div>
                {/* Code block ends */}
            </div>



        </>
    );
}

export default HeroSection;