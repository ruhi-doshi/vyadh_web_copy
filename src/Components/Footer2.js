import React from "react";
import VIT from "../Assets/VITLogo.png";
import Vyadh from "../Assets/Vyadh.png";
import SEDS from "../Assets/SEDS.png";

const Footer = () => {
    return (
        <footer className="bg-vyadhColor-100 text-white ml-4 text-center md:text-left py-10 px-8 grid gap-8 md:grid-cols-3">
            {/* Contact Us Section */}
            <div className="font-DM text-[1.2rem]">
                <h6 className="text-[1.4rem] font-bold mb-4">CONTACT US</h6>
                <p className="mb-4 flex items-center gap-2">
                    <svg
                        width="24"
                        height="18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                    >
                        <path
                            d="M3 1H19C20.1 1 21 1.9 21 3V15C21 16.1 20.1 17 19 17H3C1.9 17 1 16.1 1 15V3C1 1.9 1.9 1 3 1Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M21 3L11 10L1 3"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <a href="mailto:teamvyadh@vit.ac.in" className="text-gray-400 hover:text-white">teamvyadh@vit.ac.in</a>
                </p>
                <p className="mb-4 flex flex-col">
                    <span>Captain: <a href="tel:+918249963669" className="text-gray-400 hover:text-white">+918249963669</a></span>
                    <span>Vice Captain: <a href="tel:+918186045981" className="text-gray-400 hover:text-white">+918186045981</a></span>
                </p>
                <h6 className="text-[1.4rem] font-bold mb-4">SOCIALS</h6>
                <div className="flex space-x-4">
                    {/* Add social media icons here */}
                    <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
                    <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
                   <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
                </div>
                <img src={VIT} alt="VIT Logo" className="w-200 h-50 mx-auto md:mx-0" />
            </div>

            {/* Website Links Section */}
            <div className="font-DM text-[1.2rem]">
                <h6 className="text-[1.4rem] font-bold mb-4">WEBSITE</h6>
                <ul>
                    <li className="mb-2">
                        <a href="/" className="text-gray-400 hover:text-white">About Us</a>
                    </li>
                    <li className="mb-2">
                        <a href="/achievementsandcompetitions" className="text-gray-400 hover:text-white">Achievements</a>
                    </li>
                    <li className="mb-2">
                        <a href="/achievementsandcompetitions" className="text-gray-400 hover:text-white">Competitions</a>
                    </li>
                    <li className="mb-2">
                        <a href="/board" className="text-gray-400 hover:text-white">Board</a>
                    </li>
                    <li>
                        <a href="/contactus" className="text-gray-400 hover:text-white">Contact Us</a>
                    </li>
                </ul>
                <img src={Vyadh} alt="Vyadh Logo" className="w-200 h-40 mx-auto md:mx-0" />
            </div>

            {/* Address Section */}
            <div className="font-Jost text-[1.2rem]">
                <h6 className="text-[1.4rem] font-bold mb-4">CONTACT ADDRESS</h6>
                <address className="not-italic text-gray-400">
                    VIT, Vellore Campus, <br />
                    Tiruvalam Rd, <br />
                    Katpadi, Vellore, <br />
                    Tamil Nadu 632014
                </address>
                <img src={SEDS} alt="SEDS Logo" className="w-200 mt-12 h-40 mx-auto md:mx-0" />
            </div>

        </footer>
    );
};

export default Footer;
