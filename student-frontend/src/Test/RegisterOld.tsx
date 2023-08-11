import React, { useState } from "react";
import Navbar from "../components/Navbar";
import UserService from "../util/UserService";

const RegisterOld : React.FC = () => {

    const [mobile, setMobile] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [dateborn, setDateborn] = useState("");
    const [profilepicture, setProfilepicture] = useState("");
    const [sex, setSex] = useState("");
    const [password, setPassword] = useState("");

    const handleUserSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const userr = {
            mobile: mobile,
            fname: firstname,
            lname: lastname,
            fdate: dateborn,
            profilepic: profilepicture,
            sex: sex,
            salt: "",
            password: password
        }

        console.log("Sending user to backend");

        await UserService.postUser(userr).then((response) => {
            console.log(response);
        })

        alert("Bruker registrert!");
        clearInput();
        window.location.replace("http://localhost:3000/");
    }

    const clearInput = () => {
        setMobile("");
        setFirstname("");
        setLastname("");
        setDateborn("");
        setProfilepicture("");
        setSex("");
        setPassword("");
    }

    return(
        <>
            <Navbar />
            <div className="justify-center items-center flex sd:flex-col mt-64">
                {/* Image */}
                <div className="bg-pink-200 h-96 rounded-l-xl shadow-2xl">
                    <img src={require("../images/trans.png")} />
                </div>

                {/* Form */}
                <form
                    onSubmit={e => handleUserSubmit(e)}
                    className="bg-pink-200 h-96 w-96 rounded-r-xl shadow-2xl flex justify-center items-center"
                >
                    

                    <div>
                        {/* Text container */}
                        <div className="flex-col justify-center items-center">
                            <h1 className="text-bold text-2xl text-center mb-8">Register</h1>
                            <div>
                                {/* Left side */}
                                <div className="flex-col">
                                    <input
                                        className="bg-green-400 text-center rounded text-white w-30 h-8 m-1"
                                        placeholder="firstname"
                                        onChange={e => setFirstname(e.target.value)}
                                        value={firstname}
                                    />
                                    <input
                                        className="bg-green-400 text-center rounded text-white w-30 h-8 m-1"
                                        placeholder="mobile"
                                        onChange={e => setMobile(e.target.value)}
                                        value={mobile}
                                    />
                                    <input
                                        className="bg-green-400 text-center rounded text-white w-30 h-8 m-1"
                                        type="password"
                                        placeholder="passord"
                                        onChange={e => setPassword(e.target.value)}
                                        value={password}
                                    />
                                    <input
                                        className="bg-green-400 text-center rounded text-white w-30 h-8 m-1"
                                        placeholder="profilepicture url"
                                        onChange={e => setProfilepicture(e.target.value)}
                                        value={profilepicture}
                                    />
                                </div>

                                {/* Right side */}
                                <div className="flex-col">
                                    <input
                                        className="bg-green-400 text-center rounded text-white w-30 h-8 m-1"
                                        placeholder="lastname"
                                        onChange={e => setLastname(e.target.value)}
                                        value={lastname}
                                    />
                                    <input
                                        className="bg-green-400 text-center rounded text-white w-30 h-8 m-1"
                                        placeholder="date born"
                                        onChange={e => setDateborn(e.target.value)}
                                        value={dateborn}
                                    />
                                    <input
                                        className="bg-green-400 text-center rounded text-white w-30 h-8 m-1"
                                        type="password"
                                        placeholder="repeat passord"
                                        onChange={e => setPassword(e.target.value)}
                                        value={password}
                                    />
                                    <input
                                        className="bg-green-400 text-center rounded text-white w-30 h-8 m-1"
                                        placeholder="sex"
                                        onChange={e => setSex(e.target.value)}
                                        value={sex}
                                    />
                                </div>
                            </div>



                            <div className="w-32 m-1 hover:bg-slate-400 rounded-xl h-10 bg-green-600 shadow-xl text-center items-center flex justify-center">
                                <input type="submit"  />
                            </div>

                        </div>

                    </div>
                </form>
            </div>
        </>
    );
}

export default RegisterOld;