import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import UserService, { Userr } from "../util/UserService";
import Footer from "../components/Footer";
import { RoomRes } from "./SearchRoom";
import RoomPostService, { RoomPost } from "../util/RoomPostService";

const RegisterRoom: React.FC = () => {

    const [term, setTerm] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [roomates, setRoomates] = useState("");
    const [bio, setBio] = useState("");
    const [wifi, setWifi] = useState(false);
    const [active, setActive] = useState(true);
    const [appliances, setAppliances] = useState(false);
    const [price, setPrice] = useState("");
    const [kvm, setKvm] = useState("");
    const [picture, setPicture] = useState("");
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<Userr>({} as Userr);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        console.log("Fetching userdata ...");
        try {
            if(localStorage.getItem("user") !== null) {
                await UserService.getUserByMobile(JSON.parse(localStorage.getItem("user")!)).then(response => {
                    console.log(response.data);
                    setUser(response.data);
                });
            }
        } catch {
            console.log("Error fetching user data.");
        }
    }

    const handleUserSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();

        const roompost: RoomRes = {
            address: address,
            term: term, 
            city: city,
            country: country,
            active: active,
            roomates: roomates,
            bio: bio,
            wifi: wifi,
            appliances: appliances,
            mobile: {
                mobile: user.mobile, 
                fname: user.fname,
                lname: user.lname
            },
            price: price,
            kvm: kvm,
            picture: picture,
        }

        await RoomPostService.postRoomPost(roompost);
        console.log(roompost);
        console.log("Sending room to backend");
        window.location.replace("http://localhost:3000/");

    }

    return (
        <>
            <div>
                <Navbar/>
                {/* Container for form */}
                <div className="justify-center items-center flex mt-32">
                    {/* Form */}
                    <form className="bg-pink-200 rounded-2xl w-[700px] justify-center flex flex-col shadow-2xl pt-10 mt-4" onSubmit={e => handleUserSubmit(e)}>
                        {/* Header */}
                        <h1 className="text-center font-bold text-2xl mb-8">Register Room</h1>
                        <div className="flex justify-center">

                            <div className="flex flex-col">
                                <label className="mx-1">Term</label>
                                <select
                                    className="bg-pink-200 border-b-2 border-black rounded m-4 outline-none w-30 h-8 text-green-700 placeholder-white "
                                    onChange={e => setTerm(e.target.value)}
                                >
                                    <option className="w-30" value=""></option>
                                    <option onChange={e => setTerm("2022V")} value="2022V">2022V</option>
                                    <option onChange={e => setTerm("2022H")} value="2022H">2022H</option>
                                    <option onChange={e => setTerm("2023V")} value="2023V">2023V</option>
                                    <option onChange={e => setTerm("2023H")} value="2023H">2023H</option>
                                    <option onChange={e => setTerm("2024V")} value="2024V">2024V</option>
                                    <option onChange={e => setTerm("2024H")} value="2024H">2024H</option>
                                    <option onChange={e => setTerm("2025V")} value="2025V">2025V</option>
                                    <option onChange={e => setTerm("2025H")} value="2025H">2025H</option>
                                </select>
                                <label className="mx-1">Address</label>
                                <input
                                    className="bg-pink-200 rounded text-green-700 w-30 h-8 m-1 my-2 border-b-2 border-black outline-none"
                                    onChange={e => setAddress(e.target.value)}
                                    value={address}
                                />
                                <label className="mx-1">City</label>
                                <input
                                    className="bg-pink-200 rounded text-green-700 w-30 h-8 m-1 my-2 border-b-2 border-black outline-none"
                                    onChange={e => setCity(e.target.value)}
                                    value={city}
                                />
                                <label className="mx-1">Country</label>
                                <input
                                    className="bg-pink-200 rounded text-green-700 w-30 h-8 m-1 my-2 border-b-2 border-black outline-none"
                                    onChange={e => setCountry(e.target.value)}
                                    value={country}
                                />
                                <label className="mx-1">Roomates</label>
                                <input
                                    className="bg-pink-200 rounded text-green-700 w-30 h-8 m-1 my-2 border-b-2 border-black outline-none"
                                    onChange={e => setRoomates(e.target.value)}
                                    value={roomates}
                                    type="number"
                                />
                                <label className="mx-1">Price</label>
                                <input
                                    className="bg-pink-200 rounded text-green-700 w-30 h-8 m-1 my-2 border-b-2 border-black outline-none"
                                    onChange={e => setPrice(e.target.value)}
                                    value={price}
                                    type="number"
                                />
                                <label className="mx-1">Size of room (in sqm)</label>
                                <input
                                    className="bg-pink-200 rounded text-green-700 w-30 h-8 m-1 my-2 border-b-2 border-black outline-none"
                                    onChange={e => setKvm(e.target.value)}
                                    value={kvm}
                                    type="number"
                                />
                                <label className="mx-1">Picture</label>
                                <input
                                    className="bg-pink-200 rounded text-green-700 w-30 h-8 m-1 my-2 border-b-2 border-black outline-none"
                                    onChange={e => setPicture(e.target.value)}
                                    value={picture}
                                />
                                
                                
                            </div>
                            <div className="flex flex-col ml-10">
                                <label className="mx-1">Bio</label>
                                <textarea className="bg-pink-200 rounded text-green-700 w-72 h-72 m-1 my-2 border-2 border-black outline-none" 
                                name="" id="" cols={30} rows={10}
                                onChange={e => setBio(e.target.value)}
                                    value={bio}/>
                                <select
                                    className="bg-pink-200 rounded text-black w-30 h-8 m-1 my-4 border-b-2 border-black outline-none"
                                    name="active" id="active"
                                    onChange={e => setWifi(e.target.value === "Wifi" ? true : false)}
                                >
                                    <option onClick={() => setWifi(true)}>Wifi</option>
                                    <option onClick={() => setWifi(false)}>No wifi</option>
                                </select>
                                <select className="bg-pink-200 rounded text-black w-30 h-8 m-1 my-4 border-b-2 border-black outline-none"
                                    name="active"
                                    id="active"
                                    onChange={e => setAppliances(e.target.value === "Appliances" ? true : false)}
                                >
                                    <option onClick={() => setAppliances(true)}>Appliances</option>
                                    <option onClick={() => setAppliances(false)}>No appliances</option>
                                </select>
                                <select className="bg-pink-200 rounded text-black w-30 h-8 m-1 my-4 border-b-2 border-black outline-none" name="active" id="active">
                                    <option onChange={() => setActive(true)}>Active</option>
                                    <option onChange={() => setActive(false)}>Inactive</option>
                                </select>
                            </div>
                        </div>

                        <input 
                            className="shadow-md justify-center flex text-center my-8 bg-green-500 border-b-4 rounded-xl border-green-900 h-10 hover:bg-gray-500 hover:border-gray-900 mx-64"
                            type="submit"
                            value="Register"
                        />

                    </form>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default RegisterRoom;