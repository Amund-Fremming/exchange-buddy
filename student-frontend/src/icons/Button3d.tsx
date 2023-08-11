import React from "react";

interface PropText {
    text: string;
}

const Button3d = ({text}: PropText) => {
    return(
        <>
            <div className='button font-semibold w-20 h-8 bg-pink-200 rounded-lg cursor-pointer select-none
                active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
                active:border-b-[0px]
                transition-all duration-150 [box-shadow:0_10px_0_0_#de5499]
                border-b-[1px] border-pink-300
            '>
                <span className='flex flex-col justify-center items-center h-full text-black font-marker '>{text}</span>
            </div>
        </>
    );
}

export default Button3d;