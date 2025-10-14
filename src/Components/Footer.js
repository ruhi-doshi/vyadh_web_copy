import React, { useEffect, useId, useState, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
 Wifi,
 Facebook,
 Linkedin,
 Instagram,
 Waves,
 Globe
} from "lucide-react";
import VIT from "../Assets/VITLogo2.png";
import Vyadh from "../Assets/Vyadh.png";
import SEDS from "../Assets/SEDS.png";

// Helper function for className merging
const cn = (...inputs) => twMerge(clsx(inputs));

const SparklesCore = ({
 id,
 className,
 background,
 minSize = 0.4,
 maxSize = 1,
 speed = 4,
 particleColor = "#FFFFFF",
 particleDensity = 500,
}) => {
 const [init, setInit] = useState(false);
 const controls = useAnimation();
 const generatedId = useId();

 useEffect(() => {
 initParticlesEngine(async (engine) => {
 await loadSlim(engine);
 }).then(() => {
 setInit(true);
 });
 }, []);

 const particlesLoaded = async (container) => {
 if (container) {
 controls.start({
 opacity: 1,
 transition: { duration: 1 },
 });
 }
 };

 return (
 <motion.div animate={controls} className={cn("opacity-0", className)}>
 {init && (
 <Particles
 id={id || generatedId}
 className={cn("h-full w-full")}
 particlesLoaded={particlesLoaded}
 options={{
 background: {
 color: { value: background || "#0d47a1" },
 },
 fullScreen: { enable: false, zIndex: 1 },
 fpsLimit: 120,
 particles: {
 color: { value: particleColor },
 number: {
 density: {
 enable: true,
 width: 400,
 height: 400,
 },
 value: particleDensity,
 },
 opacity: {
 value: { min: 0.1, max: 1 },
 animation: {
 enable: true,
 speed: speed,
 sync: false,
 },
 },
 size: {
 value: { min: minSize, max: maxSize },
 },
 move: {
 enable: true,
 speed: { min: 0.1, max: 1 },
 },
 },
 detectRetina: true,
 }}
 />
 )}
 </motion.div>
 );
};

const Beam = ({
 className,
 delay,
 duration,
 hovered,
 width = 600,
 ...svgProps
}) => {
 const id = useId();

 return (
 <motion.svg
 width={width}
 height="1"
 viewBox={`0 0 ${width} 1`}
 fill="none"
 xmlns="http://www.w3.org/2000/svg"
 className={cn("absolute inset-x-0 w-full", className)}
 {...svgProps}
 >
 <motion.path d={`M0 0.5H${width}`} stroke={`url(#svgGradient-${id})`} />
 <defs>
 <motion.linearGradient
 id={`svgGradient-${id}`}
 gradientUnits="userSpaceOnUse"
 initial={{
 x1: "0%",
 x2: hovered ? "-10%" : "-5%",
 y1: 0,
 y2: 0,
 }}
 animate={{
 x1: "110%",
 x2: hovered ? "100%" : "105%",
 }}
 transition={{
 duration: hovered ? 0.5 : duration ?? 2,
 ease: "linear",
 repeat: Infinity,
 delay: hovered ? Math.random() * 0.8 + 0.2 : delay ?? 1,
 }}
 >
 <stop stopColor="#2EB9DF" stopOpacity="0" />
 <stop stopColor="#3b82f6" />
 <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
 </motion.linearGradient>
 </defs>
 </motion.svg>
 );
};

const Cover = ({ children, className }) => {
 const [hovered, setHovered] = useState(false);
 const ref = useRef(null);
 const [containerWidth, setContainerWidth] = useState(0);
 const [beamPositions, setBeamPositions] = useState([]);

 useEffect(() => {
 if (ref.current) {
 setContainerWidth(ref.current.clientWidth);
 const height = ref.current.clientHeight;
 const numberOfBeams = Math.floor(height / 10);
 const positions = Array.from(
 { length: numberOfBeams },
 (_, i) => (i + 1) * (height / (numberOfBeams + 1))
 );
 setBeamPositions(positions);
 }
 }, [ref.current]);

 return (
 <div
 onMouseEnter={() => setHovered(true)}
 onMouseLeave={() => setHovered(false)}
 ref={ref}
 className="relative hover:bg-neutral-#03002A group/cover inline-block dark:bg-neutral-900 bg-[#03002A] px-2 py-2 transition duration-200 rounded-sm"

 >
 <AnimatePresence>
 {hovered && (
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{ opacity: { duration: 0.2 } }}
 className="h-full w-full overflow-hidden absolute inset-0"
 >
 <motion.div
 animate={{ translateX: ["-50%", "0%"] }}
 transition={{
 translateX: {
 duration: 10,
 ease: "linear",
 repeat: Infinity,
 },
 }}
 className="w-[200%] h-full flex"
 >
 <SparklesCore
 background="transparent"
 minSize={0.4}
 maxSize={1}
 particleDensity={500}
 className="w-full h-full"
 particleColor="#FFFFFF"
 />
 <SparklesCore
 background="transparent"
 minSize={0.4}
 maxSize={1}
 particleDensity={500}
 className="w-full h-full"
 particleColor="#FFFFFF"
 />
 </motion.div>
 </motion.div>
 )}
 </AnimatePresence>
 {beamPositions.map((position, index) => (
 <Beam
 key={index}
 hovered={hovered}
 duration={Math.random() * 2 + 1}
 delay={Math.random() * 2 + 1}
 width={containerWidth}
 style={{ top: `${position}px` }}
 />
 ))}
 <motion.span
 animate={{
 scale: hovered ? 0.8 : 1,
 x: hovered ? [0, -30, 30, -30, 30, 0] : 0,
 y: hovered ? [0, 30, -30, 30, -30, 0] : 0,
 }}
 transition={{
 duration: 0.2,
 x: { duration: 0.2, repeat: Infinity, repeatType: "loop" },
 y: { duration: 0.2, repeat: Infinity, repeatType: "loop" },
 }}
 className={cn(
 "dark:text-white inline-block text-neutral-900 relative z-20 group-hover/cover:text-white transition duration-200",
 className
 )}
 >
 {children}
 </motion.span>
 </div>
 );
};

const Footer = () => {
 return (
<footer className="footer-custom relative text-white-300 py-12 px-6 overflow-hidden">
<div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
 {/* Logo and About Section */}
 <div className="space-y-4 text-center md:text-left">
 <h2 className="text-2xl font-bold text-white">
 <Cover>Team Vyadh</Cover>
 </h2>
 <p className="text-gray-400">Explore The Unexplored</p>
 <div className="flex justify-center md:justify-start space-x-3 mt-4">

 <a
 href="https://in.linkedin.com/company/teamvyadh"
 className="text-blue-400 transform hover:scale-110 transition"
 >
 <Linkedin size={24} />
 </a>
 <a
 href="https://www.instagram.com/teamvyadh/?hl=en"
 className="text-pink-500 transform hover:scale-110 transition"
 >
 <Instagram size={24} />
 </a>
 </div>
 </div>

 {/* Useful Links Section */}
 <div className="space-y-3 text-center md:text-left">
 <h6 className="text-xl font-semibold text-white">Useful Links</h6>
 <ul className="space-y-2 text-gray-400">
 <li><a href="/" className="hover:text-gray-100 transition">Home</a></li>
 <li><a href="/achievementsandcompetitions" className="hover:text-gray-100 transition">Achievements</a></li>
 <li><a href="/achievementsandcompetitions" className="hover:text-gray-100 transition">Competitions</a></li>
 <li><a href="/board" className="hover:text-gray-100 transition">Boards</a></li>
 <li><a href="/contactus" className="hover:text-gray-100 transition">ContactUs</a></li>
 </ul>
 </div>

 {/* Subscribe Section */}
 <div className="space-y-3 text-center md:text-left">
 <h6 className="text-xl font-semibold text-white">Subscribe</h6>
 <p className="text-gray-400">
 Don't miss to subscribe to our new feeds, kindly fill the form below.
 </p>
 <form className="flex items-center space-x-2">
 <input
 type="email"
 placeholder="Email Address"
 className="px-4 py-2 rounded text-gray-800 w-full focus:outline-none"
 />
 <button
 type="submit"
 className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
 >
 &#9658;
 </button>
 </form>
 </div>

 {/* Contact Address Section */}
 <div className="space-y-3 text-center md:text-left">
 <h6 className="text-xl font-semibold text-white">Contact Address</h6>
 <address className="not-italic text-gray-400">
 VIT, Vellore Campus,<br />
 Tiruvalam Rd, Katpadi,<br />
 Vellore, Tamil Nadu 632014,<br />
 <br/>

 Captain : +917540012837,<br />
 Vice Captain : +919354384597
 
 </address>
 </div>
 </div>

 {/* Logos Section */}
 <div className="relative z-10 flex justify-center items-center mt-8 space-x-8">
 <img
 src={VIT}
 alt="VIT Logo"
 className="w-32 h-28 object-contain transform hover:scale-110 transition ease-in-out duration-300"
 />
 <img
 src={Vyadh}
 alt="Vyadh Logo"
 className="w-24 h-24 object-contain transform hover:scale-110 transition ease-in-out duration-300"
 />
 <img
 src={SEDS}
 alt="SEDS Logo"
 className="w-24 h-24 object-contain transform hover:scale-110 transition ease-in-out duration-300"
 />
 </div>

 {/* Footer Bottom */}
 <div className="relative z-10 border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
 <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
 <p>&copy; {new Date().getFullYear()} Team Vyadh. All Rights Reserved.</p>
 
 </div>
 </div>
 </footer>
 );
};

export default Footer;


