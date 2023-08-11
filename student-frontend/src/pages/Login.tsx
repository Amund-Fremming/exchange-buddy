import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UserService from "../util/UserService";

// Login page for the webapp

const Login : React.FC = () => {

    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

    const clearInput = () => {
        setMobile("");
        setPassword("");
    }

    const handleUserSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const userr = {
            mobile: mobile,
            fname: "",
            lname: "",
            fdate: "",
            profilepic: "",
            sex: "",
            salt: "",
            password: password
        }

        console.log("Sending user to backend");

        await UserService.loginUser(userr).then((response) => {
            console.log(response);
        })
          
        setTimeout(() => clearInput(), 1000);
        handleResponseMessage(userr.mobile);
    }

    const handleResponseMessage = async(userMobile: any) => {
        console.log("Getting response message from backend");

        await UserService.getLoginResponseMessage().then((response) => {
            console.log(response.data);
            if(response.data != "Valid") {
                alert(response.data);
            } else {
                alert("Login successful");
                localStorage.setItem("user", JSON.stringify(userMobile));
                // Legg til logget inn bruker på localstorage/session for videre validering
                window.location.replace("http://localhost:3000/");
            }
        });
    }
        

    return(
        <> 
            <Navbar />
            <div className="justify-center items-center flex">
                <div className="justify-center items-center flex sd:flex-col bg-pink-200 rounded-xl shadow-md hover:shadow-2xl mt-64">
                    {/* Image */}
                    <div className="w-1/2 py-4">
                        <img alt="login image" src={require("../images/login.png")} />
                    </div>

                    {/* Form */}
                    <form className="w-1/4" onSubmit={e => handleUserSubmit(e)}>
                        <h1 className="font-bold text-2xl text-center mb-8">Login</h1>
                        <p className="my-0 mx-2">Mobile</p>
                        <input 
                            className="bg-pink-200 text-green-700 border-b-2 rounded border-b-black m-2 outline-none"
                            onChange={e => setMobile(e.target.value)}
                        />
                        <p className="my-0 mx-2">Password</p>
                        <input
                            className="bg-pink-200 text-green-700 border-b-2 rounded border-b-black m-2 outline-none"
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <br/>
                        <input className="w-44 bg-green-500 border-b-4 border-green-900 h-9 hover:bg-gray-500 hover:border-gray-900 mx-2 my-4 rounded-xl " type="submit" value="Login"/>
                    </form> 
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;