import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdWifi } from "react-icons/md";
import { GiWashingMachine } from "react-icons/gi";
import RoomPost, { RoomPostProps } from "../components/RoomPost";
import RoomPostService from "../util/RoomPostService";
import { NewtonsCradle } from '@uiball/loaders';
import { Link } from "react-router-dom";

export interface RoomRes {
    address: string;
    term: string; 
    city: string;
    country: string;
    active: boolean;
    roomates: string;
    bio: string;
    wifi: boolean;
    appliances: boolean;
    mobile: {
        mobile: string;
        fname: string;
        lname: string;
    };
    price: string;
    kvm: string;
    picture: string;
}

export interface RoomPostFromBackend {
    rpostid: number;
    term: string; 
    address: string;
    city: string;
    country: string;
    active: boolean;
    roomates: string;
    bio: string;
    wifi: boolean;
    appliances: boolean;
    price: string;
    kvm: string;
    picture: string;
    mobile: {
        mobile: string;
        fname: string;
        lname: string;
    };
}

const SearchRoom: React.FC = () => {
    
    const [loading, setLoading] = useState(false);

    /* Setter info til søke parametere */
    const [cities, setCities] = useState<string[]>([]);
    const [countries, setCountries] = useState<string[]>([]);

    // Mulig det må spesifiseres hordan type array det skal være sånn som i Student-test
    /* Search parameters */
    const [searchResults, setSearchResults] = useState<RoomPostFromBackend[]>([]);
    const [searchbar, setSearchbar] = useState("");
    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState("");
    const [term, setTerm] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [active, setActive] = useState("");
    const [roomates, setRoomates] = useState("");
    const [wifi, setWifi] = useState(false);
    const [appliances, setAppliances] = useState(true);
    const [roomsizeFrom, setRoomsizeFrom] = useState("");
    const [roomsizeTo, setRoomsizeTo] = useState("");
    
    useEffect(() => {
        getCountriesAndCities();
        setLoading(true)
        initSearch();
    }, []);

    const getCountriesAndCities = async() => {
        await RoomPostService.getCountries().then((response) => {
            setCountries(response.data);
        })
        await RoomPostService.getCities().then((response) => {
            setCities(response.data);
        })
    }

    // Her må det filtrers for:
        // - fra og til pris
        // - fra og til romstørrelse
    const handleSearch = async(e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        console.log(wifi);

        const Roompost = {
            term: term,
            address: "",
            city: city,
            country: country,
            active: true,
            roomates: roomates,
            bio: "",
            wifi: wifi,
            appliances: appliances,
            price: "",
            kvm: "",
            picture: "",
        }
        console.log("Sending roompost search request to backend");

        await RoomPostService.searchRoomPost(Roompost).then((response) => {
            console.log(response.data);
            setSearchResults(response.data);
            clearInputs();
        })

        setTimeout(() => setLoading(false), 50);

        // function to further filter the data
    }

    const initSearch = async() => {
        await RoomPostService.getAllRoomPosts().then(response => {
            console.log(response.data);
            setSearchResults(response.data);
            clearInputs();
            setLoading(false);
        })
    }

    const clearInputs = () => {
        setSearchbar("");
        setPriceFrom("");
        setPriceTo("");
        setTerm("");
        setCity("");
        setCountry("");
        setActive("");
        setRoomates("");
        setWifi(false);
        setAppliances(true);
        setRoomsizeFrom("");
        setRoomsizeTo("");
    }

    const handleRoomatesClick = (num: string) => {
        setRoomates(num);
        document.getElementById("10")?.classList.remove("text-pink-500");
        document.getElementById("10")?.classList.remove("bg-pink-500");
        document.getElementById("1")?.classList.remove("bg-pink-500");
        document.getElementById("2")?.classList.remove("bg-pink-500");
        document.getElementById("3")?.classList.remove("bg-pink-500");
        document.getElementById("4")?.classList.remove("bg-pink-500");
        document.getElementById("5")?.classList.remove("bg-pink-500");

        const btn = document.getElementById(num)?.classList.add("bg-pink-500");
        if(num === "0") {
            document.getElementById("10")?.classList.add("text-pink-500");
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
            <div className="flex justify-center mt-32">

                {/* Search specs */}
                <form onSubmit={e => handleSearch(e)} className="flex flex-col mx-6 mt-20">
                    {/* Search rooms */}
                    <div className="flex flex-col my-2">
                        <label>Search Rooms</label>
                        <input onChange={e => setSearchbar(e.target.value)} className="border-2 rounded-md h-10 w-64" />
                    </div>
                    {/* Search Term */}
                    <div className="flex flex-col my-2">
                        <label>Term</label>
                        <select onChange={e => setTerm(e.target.value)} className="border-2 rounded-md h-10 w-64">
                            <option value=""></option>
                            <option value="2022V">2022V</option>
                            <option value="2022H">2022H</option>
                            <option value="2023V">2023V</option>
                            <option value="2023H">2023H</option>
                            <option value="2024V">2024V</option>
                            <option value="2024H">2024H</option>
                            <option value="2025V">2025V</option>
                            <option value="2025H">2025H</option>
                        </select>
                    </div>
                    {/* Search Country */}
                    <div className="flex flex-col my-2">
                        <label>Country</label>
                        <select onChange={e => setCountry(e.target.value)} className="border-2 rounded-md h-10 w-64">
                            <option value=""></option>
                            {
                                countries.map((country) => {
                                    return(
                                        <option key={country} value={country}>{country}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    {/* Search City */}
                    <div className="flex flex-col my-2">
                        <label>City</label>
                        <select onChange={e => setCity(e.target.value)} className="border-2 rounded-md h-10 w-64">
                            <option value=""></option>
                            {
                                cities.map((city) => {
                                    return(
                                        <option key={city} value={city}>{city}</option>
                                    );
                                })
                            }
                        </select>
                    </div>
                    {/* Pricing */}
                    <label>Price</label>
                    <div className="flex my-2">
                        <div className="flex flex-col">
                            <input onChange={e => setPriceFrom(e.target.value)} className="h-10 w-20 border-2 rounded-md" />
                            <label>From kr</label>
                        </div>
                        <div className="flex flex-col mx-4">
                            <input onChange={e => setPriceTo(e.target.value)} className="h-10 w-20 border-2 rounded-md" />
                            <label>To kr</label>
                        </div>
                        <div className="flex flex-col">
                            <button type="submit" className="h-10 w-16 border-2 rounded-md">Search</button>
                        </div>
                    </div>
                    {/* Sizing */}
                    <label>Size</label>
                    <div className="flex my-2">
                        <div className="flex flex-col">
                            <input onChange={e => setRoomsizeFrom(e.target.value)} className="h-10 w-20 border-2 rounded-md" />
                            <label>From m<sup>2</sup></label>
                        </div>
                        <div className="flex flex-col mx-4">
                            <input onChange={e => setRoomsizeTo(e.target.value)} className="h-10 w-20 border-2 rounded-md" />
                            <label>To m<sup>2</sup></label>
                        </div>
                        <div className="flex flex-col">
                            <button type="submit" className="h-10 w-16 border-2 rounded-md">Search</button>
                        </div>
                    </div>
                    {/* number of roomates */}
                    <label>Roommates</label>
                    <div className="flex my-2">
                        <div id="10" onClick={() => handleRoomatesClick("0")} className="h-11 w-11 border-2 rounded-l flex justify-center items-center">None</div>
                        <div id="1" onClick={() => handleRoomatesClick("1")} className="h-11 w-11 border-2 flex justify-center items-center">1</div>
                        <div id="2" onClick={() => handleRoomatesClick("2")} className="h-11 w-11 border-2 flex justify-center items-center">2</div>
                        <div id="3" onClick={() => handleRoomatesClick("3")} className="h-11 w-11 border-2 flex justify-center items-center">3</div>
                        <div id="4" onClick={() => handleRoomatesClick("4")} className="h-11 w-11 border-2 flex justify-center items-center">4</div>
                        <div id="5" onClick={() => handleRoomatesClick("5")} className="h-11 w-11 border-2 rounded-r flex justify-center items-center">5+</div>
                    </div>
                    {/* Wifi and appliances */}                                                                                                     {/* MÅ ENDRE STATE TIL WIFI OG HVITVARER */}
                    <div className="flex my-2">
                        <input  type="radio" />
                        <MdWifi className="text-3xl mx-3" />
                        <input type="radio" />
                        <GiWashingMachine className="text-3xl mx-3" />
                    </div>
                    {/* Search button */}
                    <input type="submit" className="w-1/2 h-9 rounded-md border-b-4 border-black bg-gray-300 items-center justify-center flex my-2" value="Search" />
                </form>

                {/* Results */}
                <div className="flex flex-col w-1/2">
                    {
                        searchResults.map((room: RoomPostFromBackend) => {

                            const roomPost: RoomPostProps = {
                                rpostid: room.rpostid,
                                address: room.address,
                                term: room.term,
                                city: room.city,
                                country: room.country,
                                active: room.active,
                                roomates: room.roomates,
                                bio: room.bio,
                                wifi: room.wifi,
                                appliances: room.appliances,
                                mobile: room.mobile.mobile,
                                fname: room.mobile.fname,
                                lname: room.mobile.lname,
                                price: room.price,
                                kvm: room.kvm,
                                picture: room.picture,
                            }

                            return(
                                <div onClick={() => localStorage.setItem("rpostid", room.rpostid + "")}>
                                    <Link to="/roompostprofile">
                                        <RoomPost key={room.rpostid} roomPostProps={roomPost} />
                                    </Link>
                                </div>
                            );
                        })
                    }
                </div>

            </div>

            <Footer />
        </>
    );
}

export default SearchRoom;