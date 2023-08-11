import React, { useState } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { NavLink } from "react-router-dom";

/**
interface Props {
  text: string;
}

function DropdownComponent() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative flex">
            <button 
            className="bg-pink-200 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
            onClick={() => setIsOpen((prev) => !prev)}
            >
                Dropdown
                {isOpen ? (
                <AiOutlineCaretDown className='h-8'/>
                ):(
                <AiOutlineCaretUp className='h-8'/>
                )}
            </button>
            {isOpen && 
                <div className="bg-pink-200 absolute">
                    <div>
                        <h3> hei</h3>
                        <h3> hei</h3>
                    </div>
                </div>}
            
        </div>
    );
};

export default DropdownComponent;  */


function DropdownComponent() {
    return (
        <>
            <div className="flex justify-center">
                <div>
                    <div className="relative" data-te-dropdown-ref>
                        <a
                            className="flex items-center whitespace-nowrap rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase 
                            leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 
                            hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 
                            focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0
                             active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
                            href=""
                            type="button"
                            id="dropdownMenuButton2"
                            data-te-dropdown-toggle-ref
                            aria-expanded="false"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Dropdown link
                            <span className="ml-2 w-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                        </a>
                        <ul
                            className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                            aria-labelledby="dropdownMenuButton2"
                            data-te-dropdown-menu-ref>
                            <li>
                                <a
                                    className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                    href="#"
                                    data-te-dropdown-item-ref
                                >Action</a>
                            </li>
                            <li>
                                <a
                                    className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                    href="#"
                                    data-te-dropdown-item-ref
                                >Another action</a>
                            </li>
                            <li>
                                <a
                                    className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                    href="#"
                                    data-te-dropdown-item-ref
                                >Something else here</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DropdownComponent;