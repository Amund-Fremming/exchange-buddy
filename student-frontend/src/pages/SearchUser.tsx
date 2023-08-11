import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserPost from "../components/UserPost";
import { UserrpostSearchEntity } from "../util/UserService";
import { NewtonsCradle } from '@uiball/loaders'
import UserService from "../util/UserService";
import { Userrpost } from "../components/UserPost";
import { Link } from "react-router-dom";

const SearchUser: React.FC = () => {

    const [cities, setCities] = useState([]);
    const [countries, setCountries] = useState([]);
    const [searchResults, setSearchResults] = useState<Userrpost[]>([]);

    // Må ha type
    const [loading, setLoading] = useState(false);

    /* Search parameters */
    const [searchbar, setSearchbar] = useState("");
    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState("");
    const [term, setTerm] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    useEffect(() => {
        getCountriesAndCities();
        setLoading(true)
        initSearch();
    }, []);

    const getCountriesAndCities = async () => {
        console.log("Fetching data")
        await UserService.getUserCountries().then((response) => {
            setCountries(response.data);
        })
        await UserService.getUserCities().then((response) => {
            setCities(response.data);
        })
    }

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();

        const search: UserrpostSearchEntity = {
            term: term,
            city: city,
            country: country,
            active: true,
            pricefrom: priceFrom,
            priceto: priceTo
        }
        
        console.log("Sending userpost search request to backend");
        console.log(search);

        await UserService.searchUser(search).then((response) => {
            console.log(response.data);
            setSearchResults(response.data);
            clearInputs();
        })

        setTimeout(() => setLoading(false), 50);

    }

    const initSearch = async() => {
        await UserService.getAllUsers().then(response => {
            console.log(response.data);
            setSearchResults(response.data);
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
                <form onSubmit={e => handleSearch(e)} className="flex flex-col mt-20">
                    {/* Search rooms */}
                    <div className="flex flex-col my-2">
                        <label>Search Buddies</label>
                        <input onChange={e => setSearchbar(e.target.value)} className="border-2 rounded-md h-10 w-64" />
                    </div>
                    {/* Search Country */}
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
                                countries.map(country => {
                                    return <option key={country} value={country} >{country}</option>
                                })
                            }
                        </select>
                    </div>
                    {/* Search city */}
                    <div className="flex flex-col my-2">
                        <label>City</label>
                        <select onChange={e => setCity(e.target.value)} className="border-2 rounded-md h-10 w-64">
                            <option value=""></option>
                            {
                                cities.map(city => {
                                    return <option key={city} value={city}>{city}</option>
                                })
                            }
                        </select>
                    </div>
                    {/* Pricing */}
                    <label>Price</label>
                    <div className="flex my-2">
                        <div className="flex flex-col">
                            <input type="number" onChange={e => setPriceFrom(e.target.value)} className="h-10 w-20 border-2 rounded-md" />
                            <label>From kr</label>
                        </div>
                        <div className="flex flex-col mx-4">
                            <input type="number" onChange={e => setPriceTo(e.target.value)} className="h-10 w-20 border-2 rounded-md" />
                            <label>To kr</label>
                        </div>
                        <div className="flex flex-col">
                            <button type="submit" className="h-10 w-16 border-2 rounded-md">Search</button>
                        </div>
                    </div>
                    {/*
                     Age
                    <div className="flex flex-col">
                        <label>Age</label>
                        <input onChange={e => setDate(e.target.value)} className="border-2 rounded-md h-10 w-20" />
                    </div>
                    */}
                    <input type="submit" className="w-1/2 h-9 rounded-md border-b-4 border-black bg-gray-300 items-center justify-center flex my-2" value="Search" />
                </form>

                {/* Results */}
                <div className="flex flex-wrap justify-center items-center w-8/12">

                    {
                        searchResults.map((userpost: Userrpost) => {
                            return(
                                <div onClick={() => localStorage.setItem("upostid", userpost.upostid + "")}>                     
                                    <Link to="/userpostprofile">
                                        <UserPost key={userpost.upostid} userpost={userpost} />
                                    </Link>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <Footer />
        </>
    );
}

export default SearchUser;