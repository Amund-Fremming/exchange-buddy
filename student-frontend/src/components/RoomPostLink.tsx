import React from "react";
import RoomPost from "./RoomPost";
import { Link } from "react-router-dom";
import { RoomPostProps } from "./RoomPost";

const RoomPostLink: React.FC<{ roomPostProps: RoomPostProps }> = ({ roomPostProps }) => {
    
    console.log(roomPostProps.rpostid);
    
    return(
        <div onClick={() => localStorage.setItem("rpostid", roomPostProps.rpostid + "")}>
            <Link to="/roompostprofile">
                <RoomPost roomPostProps={roomPostProps} />
            </Link>
        </div>
    );
}

export default RoomPostLink;