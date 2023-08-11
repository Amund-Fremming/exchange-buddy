import React from "react";

export interface Userrpost {
    upostid: number;
    term: string;
    city: string;
    country: string;
    active: boolean;
    bio: string;
    minprice: string;
    maxprice: string;
    img: string;
    namee: string;
    mobile: string;
}

export interface UserrpostRes {
    active: boolean;
    bio: string;
    city: string;
    country: string;
    img: string;
    maxPrice: string;
    maxprice: string;
    minPrice: string;
    minprice: string;
    mobile: {
        fdate: string;
        fname: string;
        lname: string;
        mobile: string;
        password: string;
        profilepic: string;
        salt: string;
        sex: string;
    };
    namee: string;
    term: string;
    upostid: number;
}

export interface UserrpostResToBackend {
    active: boolean;
    bio: string;
    city: string;
    country: string;
    img: string;
    maxPrice: string;
    maxprice: string;
    minPrice: string;
    minprice: string;
    mobile: {
        fdate: string;
        fname: string;
        lname: string;
        mobile: string;
        password: string;
        profilepic: string;
        salt: string;
        sex: string;
    };
    namee: string;
    term: string;
}

const UserPost: React.FC<{ userpost: Userrpost }> = ({ userpost }) => {    

    return(
        <>
            {/* Userpost container */}
            <div className="w-[500px] h-[350px] bg-gray-200 rounded-md shadow-xl hover:shadow-2xl my-6 mx-6 pb-4 overflow-hidden">
                <div className="flex justify-between mx-8 my-6">
                    <img className="mt-3 shadow-xl rounded-full object-cover align-middle h-32 w-32" src={userpost.img} />
                    <div className="mt-8 flex flex-col">
                        <h2 className="text-xl text-green-800"><b>{userpost.namee}</b></h2>
                        <p>{userpost.country}</p>
                        <p>{userpost.city}</p>
                    </div>
                    <div className="mt-8 flex flex-col">
                        <p>Min price: <b>{userpost.minprice},-</b></p>
                        <p>Max price: <b>{userpost.maxprice},-</b></p>
                        <p>Term: <b>{userpost.term}</b></p>
                    </div>
                </div>
                <div className="mx-10 my-8 flex flex-col">
                    <h2 className=""><b>About me</b></h2>
                    <p className="overflow-hidden">{userpost.bio}</p>
                </div>
            </div>
        </>
    );
}

export default UserPost;