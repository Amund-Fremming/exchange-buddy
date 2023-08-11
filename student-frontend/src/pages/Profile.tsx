import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import UserService, { Userr } from "../util/UserService";
import RoomPostService from "../util/RoomPostService";
import { NewtonsCradle } from '@uiball/loaders'
import RoomPost, { RoomPostProps } from "../components/RoomPost";
import UserPost from "../components/UserPost";
import { Userrpost } from "../components/UserPost";
import { RoomPostFromBackend, RoomRes } from "./SearchRoom";
import { UserrpostRes } from "../components/UserPost";
import RoomPostLink from "../components/RoomPostLink";

const Profile = () => {

    const [user, setUser] = useState<Userr>({} as Userr);
    const [roomPosts, setRoomPosts] = useState<RoomPostFromBackend>({} as RoomPostFromBackend);
    const [userPosts, setUserPosts] = useState<UserrpostRes>({} as UserrpostRes);
    const [loading, setLoading] = useState(false);
    const [roomPostProps, setRoomPostProps] = useState<RoomPostProps>({} as RoomPostProps);
    const [userPostProps, setUserPostProps] = useState<Userrpost>({} as Userrpost);
    const [hasRoompost, setHasRoompost] = useState(false);
    const [hasUserpost, setHasUserpost] = useState(false);

    useEffect(() => {
        // Fetches all the data for User profile and user posts
        setLoading(true);
        fetchUser();
        fetchRoompost();
        fetchUserpost();

        setTimeout(() => setLoading(false), 2000);
    }, []);

    useEffect(() => {
        handleRoomPostData();
        handleUserPostData();
    }, [loading]);

    const handleRoomPostData = () => {
        const roomProps: RoomPostProps = {
            rpostid: roomPosts.rpostid,
            address: roomPosts.address,
            term: roomPosts.term,
            city: roomPosts.city,
            country: roomPosts.country,
            active: roomPosts.active,
            roomates: roomPosts.roomates,
            bio: roomPosts.bio,
            wifi: roomPosts.wifi,
            appliances: roomPosts.appliances,
            mobile: user.mobile,
            fname: user.fname,
            lname: user.lname,
            price: roomPosts.price,
            kvm: roomPosts.kvm,
            picture: roomPosts.picture,
        }
        setRoomPostProps(roomProps);
    }

    const handleUserPostData = () => {
        
        const userProps: Userrpost = {
            upostid: userPosts.upostid,
            term: userPosts.term,
            city: userPosts.city,
            country: userPosts.country,
            active: userPosts.active,
            bio: userPosts.bio,
            minprice: userPosts.minprice, 
            maxprice: userPosts.maxprice,
            img: user.profilepic,
            namee: user.fname + " " + user.lname,
            mobile: user.mobile,
        }

        setUserPostProps(userProps);
    }

    const fetchRoompost = async() => {
        console.log("Fetching roompost ...");
        try {
            await RoomPostService.getRoompostByMobile(JSON.parse(localStorage.getItem("user")!)).then(response => {
                console.log(response.data);
                setRoomPosts(response.data);
                setTimeout(() => handleRoomPostData(), 1000);
                if(response.data.address !== "none") {
                    setHasRoompost(true);
                }
            });
        } catch {
            console.log("Failed to fetch roompost");
        }
    }

    const fetchUserpost = async() => {
        console.log("Fetching userpost ...");
        try {
            await UserService.getUserpostByMobile(JSON.parse(localStorage.getItem("user")!)).then(response => {
                console.log(response.data);
                setUserPosts(response.data);
                setTimeout(() => handleUserPostData());
                if(response.data.city !== "none" || response.data.city === undefined) {
                    setHasUserpost(true);
                }
            });
        } catch {
            console.log("Failed to fetch userpost");
        }
    }

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

    return (
        <>
            <div>
                <Navbar />
                <div className="items-center pt-40 flex flex-col">
                    {/*Profile header*/}
                    <div className="ml-8">
                        <div className="flex m-2">
                            <img src={user.profilepic} className="rounded-full h-36 transform scale-100 hover:scale-110 duration-300"/>
                            <div className="my-auto px-10 flex flex-col">
                                <h2 className="text-4xl">{user.fname} {user.lname}</h2>
                                <div className="ml-4 mt-2">
                                    <ul className="list-disc list-inside">
                                        <li>Mobile: {user.mobile}</li>
                                        <li>{user.sex}  |  {user.fdate}</li>
                                    </ul>
                                </div>
                            </div>
                            <button className="bg-d-green hover:bg-green-900 text-white font-bold py-4 mt-32 px-6 rounded" onClick={() => {
                                localStorage.removeItem("user");
                                window.location.replace("http://localhost:3000/");
                                }}>
                                Sign out
                            </button>
                        </div>
                    </div>
                    {/* Container for profile ads */}
                    <div className="shadow-xl bg-slate-100 mt-16 p-14 w-full flex flex-col">
                        <h1 className="text-4xl mb-10">My Posts</h1>
                        <div className="flex justify-start">
                            
                            <div className="mr-32">
                                <h4 className="text-2xl">Posts for your rooms</h4>

                                {
                                    hasRoompost
                                    ? <RoomPostLink roomPostProps={roomPostProps} />      
                                    : <div className="flex flex-col">
                                        <p className="">Looks like you have no current posts! Click here to create one:</p>
                                        <NavLink to="/RegisterRoom">
                                            <button className="bg-d-green hover:bg-green-900 text-white font-bold py-2 my-5 px-4 rounded">Create add</button>
                                        </NavLink>
                                    </div>
                                }
                            </div>

                            <div className="">
                                <h4 className="text-2xl">Posts for your user</h4>
                                {
                                    hasUserpost
                                    ? <UserPost userpost={userPostProps} />      
                                    : <div className="flex flex-col">
                                        <p className="">Looks like you have no current posts! Click here to create one:</p>
                                        <NavLink to="/registeruser">
                                            <button className="bg-d-green hover:bg-green-900 text-white font-bold py-2 my-5 px-4 rounded">Create post</button>
                                        </NavLink>
                                    </div>
                                }
                            </div>
                            

                        </div>
                    </div>
                    
                </div>
                
                <Footer />
            </div>
        </>
        )
}

export default Profile;