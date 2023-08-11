import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RoomPostService from "../util/RoomPostService";
import { RoomPostFromBackend } from  "./SearchRoom";
import { NewtonsCradle } from '@uiball/loaders';

const RoomPostProfile = () => {

    const [roompost, setRoompost] = useState<RoomPostFromBackend>({} as RoomPostFromBackend);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRoom();
    }, []);

    const fetchRoom = async() => {
        try {
            await RoomPostService.getRoompostByRpostid(Number(localStorage.getItem("rpostid"))).then(response => {
                console.log(response.data);
                setRoompost(response.data);
                setLoading(false);
            });
        } catch(err) {
            console.log("Error in fetching user");
            console.log(err);
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
                        src={roompost.picture}
                        alt={"room picture"} 
                        className="rounded-2xl tranform scale-100 hover:scale-110 duration-300 w-full object-cover"
                    />

                    {/* Roominfo / login Container */}
                    <div className="flex justify-between w-full">
                        {/* Room info */}
                        <div className="mt-8 w-full">
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <h1 className="font-bold text-2xl">Rent this room</h1>
                                    <h2 className="">{roompost.address}, {roompost.city}</h2>
                                </div>
                                <div className="mt-4">
                                    <button className="w-20 bg-green-600 rounded-xl h-10 mx-2 border-b-4 border-green-900 hover:bg-gray-500 hover:border-gray-700">Save</button>
                                    <button className="w-20 bg-green-600 rounded-xl h-10 mx-2 border-b-4 border-green-900 hover:bg-gray-500 hover:border-gray-700">Share</button>
                                </div>
                                <div className="flex flex-col text-center">
                                    <h1 className="font-bold text-xl">Contact:</h1>
                                    <p className="text-[14px]">Mobile: {roompost.mobile.mobile}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                                        
                    <hr className="w-full h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
                    
                    {/* INFO */}
                    <div className="w-full flex justify-between">
                        <div className="flex flex-col mx-8">
                            <p className="text-md m-1 space"><b>Country:</b> &nbsp; &nbsp; &nbsp; {roompost.country}</p>
                            <p className="text-md m-1 space"><b>Areal:</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {roompost.kvm}m<sup>2</sup></p>
                            <p className="text-md m-1 space"><b>Term:</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {roompost.term}</p>
                        </div>
                        <div className="flex flex-col mx-8">
                            <p className="text-md m-1 space"><b>Roommates:</b> &nbsp; &nbsp; &nbsp; &nbsp; {roompost.roomates}</p>
                            <p className="text-md m-1 space"><b>Price:</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {roompost.price} kr</p>
                            <p className="text-md m-1 space"><b>Deposit:</b> &nbsp; &nbsp; &nbsp; &nbsp; {Number(roompost.price) * 6} kr</p>
                        </div>
                    </div>

                    <hr className="w-full h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>

                    {/* Facilities */}
                    <div className="w-full">
                        <div className="pb-4">
                            <h1 className="font-bold text-2xl">Facilities</h1>
                        </div>
                        <div className="flex">
                            <p className="mr-32">Appliances: {roompost.appliances ? "✓" : "X"}</p>
                            <p className="mr-32">Wifi: {roompost.wifi ? "✓" : "X"}</p>
                        </div>
                    </div>

                    <hr className="w-full h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>

                    {/* Outfilling info */}
                    <div className="flex flex-col items-start w-full">
                        <h1 className="mb-4 font-bold text-2xl">Outfilling information</h1>
                        <p className="w-1/2">{roompost.bio}</p>
                    </div>

                    <hr className="w-full h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default RoomPostProfile;