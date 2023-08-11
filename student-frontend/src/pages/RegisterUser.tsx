import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { UserrpostRes, UserrpostResToBackend } from "../components/UserPost";
import UserService, { Userr } from "../util/UserService";

const RegisterUser = () => {

    const [user, setUser] = useState<Userr>({} as Userr);

    /* States for userpost / userinput */
    const [active, setActive] = useState(true);
    const [bio, setBio] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [img, setImg] = useState("");
    const [maxprice, setMaxprice] = useState("");
    const [minprice, setMinprice] = useState("");
    const [term, setTerm] = useState("");

    const handleSubmitUserpost = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(img === "" || country === "" || city === "" || minprice === "" || maxprice === "" || bio === "") {
            alert("Fill out input!");
            return;
        }

        const userpost: UserrpostResToBackend = {
            active: active,
            bio: bio,
            city: city,
            country: country,
            img: img,
            maxPrice: maxprice,
            maxprice: maxprice,
            minPrice: minprice,
            minprice: minprice,
            mobile: {
                fdate: user.fdate,
                fname: user.fname,
                lname: user.lname,
                mobile: user.mobile,
                password: user.password,
                profilepic: user.profilepic,
                salt: user.salt,
                sex: user.sex
            },
            namee: user.fname + " " + user.lname,
            term: term
        }

        await UserService.postUserPost(userpost);
        console.log(userpost);
        console.log("Sending userpost to backend");
        window.location.replace("http://localhost:3000/");

    }

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

    return(
        <>
            <Navbar />
            <div className="flex justify-left ml-64 items-center mt-64">
                <div className="w-1/4">
                    <img className="transform scale-100 hover:scale-120 duration-300" src={require("../images/faq.png")} />
                </div>
                <form
                    onSubmit={e => handleSubmitUserpost(e)}
                    className="flex flex-col justify-center items-center bg-pink-200 m-8 shadow-2xl rounded-xl "
                >
                    <h1 className="textblack text-center flex justify-center items-center mt-8 text-2xl font-bold">Create userpost!</h1>
                    <div className="flex mt-4 mx-6">
                        <div className="flex flex-col">
                            <input
                                className="w-40 shadow-md bg-pink-200 border-b-2 border-black rounded m-4 mt-5 outline-none text-black"  
                                placeholder="img"
                                onChange={e => setImg(e.target.value)}
                            />
                            <input
                                className="w-40 shadow-md bg-pink-200 border-b-2 border-black rounded m-4 outline-none h-8 text-black"
                                placeholder="country"
                                onChange={e => setCountry(e.target.value)}
                            />
                            <input
                                className="w-40 shadow-md bg-pink-200 border-b-2 border-black rounded m-4 outline-none h-8 text-black" 
                                placeholder="city"
                                onChange={e => setCity(e.target.value)}
                            />
                            <input 
                                className="w-40 shadow-md bg-pink-200 border-b-2 border-black rounded m-4 outline-none h-8 text-black" 
                                placeholder="Min price"
                                onChange={e => setMinprice(e.target.value)}
                            />
                            <input
                                className="w-40 shadow-md bg-pink-200 border-b-2 border-black rounded m-4 outline-none h-8 text-black" 
                                placeholder="Max price"
                                onChange={e => setMaxprice(e.target.value)}
                            />  
                        </div>
                        <div className="flex flex-col">
                            <select
                                className="bg-pink-200 shadow-md border-b-2 border-black rounded m-4 outline-none h-8 text-grey"
                                onChange={(e) => setTerm(e.target.value)}
                                defaultValue={"2023H"}
                            >
                                <option onChange={e => setTerm("2022V")} value="2022V">2022V</option>
                                <option onChange={e => setTerm("2022H")} value="2022H">2022H</option>
                                <option onChange={e => setTerm("2023V")} value="2023V">2023V</option>
                                <option onChange={e => setTerm("2023H")} value="2023H">2023H</option>
                                <option onChange={e => setTerm("2024V")} value="2024V">2024V</option>
                                <option onChange={e => setTerm("2024H")} value="2024H">2024H</option>
                                <option onChange={e => setTerm("2025V")} value="2025V">2025V</option>
                                <option onChange={e => setTerm("2025H")} value="2025H">2025H</option>
                            </select>
                            <select
                                className="w-40 shadow-md bg-pink-200 border-b-2 border-black rounded-md m-4 outline-none h-8 text-black" 
                            >
                                <option onChange={e => setActive(true)}>active</option>
                                <option onChange={e => setActive(false)}>not active</option>
                            </select>
                            <textarea
                                className="bg-pink-200 shadow-md border-2 border-black rounded-md m-4 outline-none h-40 text-black" 
                                placeholder="Bio"
                                onChange={e => setBio(e.target.value)}
                            />
                        </div>
                    </div>
                    <input 
                        className="shadow-md justify-center items-center text-center my-8 bg-green-500 border-b-4 rounded-xl border-green-900 h-10 w-32 hover:bg-gray-500 hover:border-gray-900 flex "
                        type="submit"
                        value="Register"
                    />
                </form>
            </div>
            <Footer />
        </>
    );
}


export default RegisterUser;