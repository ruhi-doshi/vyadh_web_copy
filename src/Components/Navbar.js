import React, { useState } from "react";
import Vyadh_Logo from "../Assets/image.png";
import menu from "../Assets/menu.svg";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false); // Dropdown state

    return (
        <div className="relative">
            {/* Mobile Menu */}
            <div className="md:hidden absolute top-0 right-0 z-50">
                <button
                    id="trigger"
                    type="button"
                    onClick={() => setShow(!show)}
                    className="flex items-center justify-center bg-vyadhColor-100 rounded-full cursor-pointer p-[1.5vw] m-[3vw]"
                >
                    <img src={menu} alt="menu" className="w-[6vw]" />
                </button>
                <ul
                    id="menu"
                    className={`transition-[opacity,margin] duration-300 ease-in-out ${
                        show ? "opacity-100 block" : "opacity-0 hidden"
                    } absolute top-[4vw] right-[3vw] bg-vyadhColor-100 text-white rounded-md w-fit p-[2vw] z-50`}
                    aria-labelledby="trigger"
                >
                    <li>
                        <a href="/" className="hover:text-blue-400 hover:glow">Home</a>
                    </li>
                    
                    <li className="relative flex items-center">
                        <a href="/achievementsandcompetitions" className="hover:text-blue-400 hover:glow">Competitions</a>
                        <button
                            className="ml-2 text-white cursor-pointer hover:text-blue-400"
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            ▼
                        </button>
                        {showDropdown && (
                            <ul className="absolute top-[100%] left-0 bg-vyadhColor-100 text-white rounded-md p-[1vw] shadow-lg">
                                <li>
                                    <a href="irc" className="block hover:text-blue-400 p-1">
                                        IRC
                                    </a>
                                </li>
                                <li>
                                    <a href="irc" className="block hover:text-blue-400 p-1">
                                        URC
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <a href="/achievementsandcompetitions#ach" className="hover:text-blue-400 hover:glow">Achievements</a>
                    </li>
                    <li>
                        <a href="/board" className="hover:text-blue-400 hover:glow">Board</a>
                    </li>
                    <li>
                        <a href="/contactus" className="hover:text-blue-400 hover:glow">Contact Us</a>
                    </li>
                </ul>
            </div>

            {/* For medium and large screens */}
            <nav className="hidden md:block absolute top-0 right-0 z-50 mt-[calc(2vw-10px)] mr-[calc(2vw-5px)] w-[calc(70%-5px)] rounded-xl px-[calc(2vw-5px)] py-[calc(0.8vw-10px)] bg-vyadhColor-100 text-white drop-shadow-xl ">
                <ul className="md:flex justify-around text-[1.3vw]">
                    <li>
                        <a href="/" className="hover:text-blue-400 hover:glow">Home</a>
                    </li>
                   
                    <li className="relative flex items-center">
                        <a href="/achievementsandcompetitions" className="hover:text-blue-400 hover:glow">
                            Competitions
                        </a>
                        <button
                            className="ml-2 text-white cursor-pointer hover:text-blue-400"
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            ▼
                        </button>
                        {showDropdown && (
                            <ul className="absolute top-[100%] left-0 bg-vyadhColor-100 text-white rounded-md p-[0.5vw] shadow-lg w-[8vw]">
                                <li>
                                    <a href="irc" className="block hover:text-blue-400 p-1">
                                        IRC
                                    </a>
                                </li>
                                <li>
                                    <a href="irc" className="block hover:text-blue-400 p-1">
                                        URC
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <a href="/achievementsandcompetitions#achs" className="hover:text-blue-400 hover:glow">Achievements</a>
                    </li>
                    <li>
                        <a href="/board" className="hover:text-blue-400 hover:glow">Board</a>
                    </li>
                    <li>
                        <a href="/contactus" className="hover:text-blue-400 hover:glow">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
