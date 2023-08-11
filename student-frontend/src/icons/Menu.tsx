import React from "react";

const Menu : React.FC = () => {

    return(
        <div className="text-4xl absolute right-8 items-center mt-5 flex top-6 cursor-pointer md:hidden hover:text-white transition-all duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>
    );
}

export default Menu;