import React, { useState, useEffect } from "react";
import { UserrpostResToBackend } from "../components/UserPost";
import { NewtonsCradle } from '@uiball/loaders';
import UserService from "../util/UserService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UserPostProfile = () => {

    const [userpost, setUserpost] = useState<UserrpostResToBackend>({} as UserrpostResToBackend);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUserpost();
    }, []);

    const fetchUserpost = async() => {
        const mob: string = localStorage.getItem("userpostmob")!;
        console.log("BAASHHH " + mob);
        try {
            await UserService.getUserpostById(JSON.parse(localStorage.getItem("upostid")!)).then(response => {
                console.log(response.data);
                setUserpost(response.data);
                setLoading(false);
            });
        } catch {
            console.log("Failed to fetch userpost");
        }
    }

    if(loading) {
        return(
            <div className="flex items-center justify-center mt-96">
                <NewtonsCradle 
                    size={70}
                    speed={1.4} 
                    color="pink" 
                />
            </div>
        );
    }

    return(
        <>
            <Navbar />

            {/* Container */}
            <div className="flex items-center justify-center ml-6">
                {/* Login Info */}
                
                <div className="flex flex-col w-1/2 justify-center items-center mt-32">
                    <img
                        src={userpost.img}
                        alt={"room picture"} 
                        className="rounded-full w-[300px] h-[300px] tranform scale-100 hover:scale-110 duration-300 object-cover"
                    />

                    {/* Roominfo / login Container */}
                    <div className="flex justify-between w-full">
                        {/* Room info */}
                        <div className="mt-8 w-full">
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <h1 className="font-bold text-2xl">Rent this room</h1>
                                    <h2 className="">{userpost.country}, {userpost.city}</h2>
                                </div>
                                <div className="mt-4">
                                    <button className="w-20 bg-green-600 rounded-xl h-10 mx-2 border-b-4 border-green-900 hover:bg-gray-500 hover:border-gray-700">Save</button>
                                    <button className="w-20 bg-green-600 rounded-xl h-10 mx-2 border-b-4 border-green-900 hover:bg-gray-500 hover:border-gray-700">Share</button>
                                </div>
                                <div className="flex flex-col text-center">
                                    <h1 className="font-bold text-xl">Contact:</h1>
                                    <p className="text-[14px]">Mobile: {userpost.mobile.mobile}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                                        
                    <hr className="w-full h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
                    
                    {/* INFO */}
                    <div className="w-full flex justify-between">
                        <div className="flex flex-col mx-8">
                            <p className="text-md m-1 space"><b>Country:</b> &nbsp; &nbsp; &nbsp; {userpost.country}</p>
                            <p className="text-md m-1 space"><b>Term:</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {userpost.term}</p>
                        </div>
                        <div className="flex flex-col mx-8">
                            <p className="text-md m-1 space"><b>Min-price:</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {userpost.minPrice} kr</p>
                            <p className="text-md m-1 space"><b>Max-price:</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {userpost.maxPrice} kr</p>
                            <p className="text-md m-1 space"><b>Deposit:</b> &nbsp; &nbsp; &nbsp; &nbsp; {Number(userpost.maxPrice) * 3} kr</p>
                        </div>
                    </div>

                    <hr className="w-full h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>

                    {/* Outfilling info */}
                    <div className="flex flex-col items-start w-full">
                        <h1 className="mb-4 font-bold text-2xl">Outfilling information</h1>
                        <p className="w-1/2">{userpost.bio}</p>
                    </div>

                    <hr className="w-full h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>

                </div>
            </div>

            <Footer />  
        </>
    );
}

export default UserPostProfile;