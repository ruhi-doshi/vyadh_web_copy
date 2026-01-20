import React from "react";
import { Chart } from "react-google-charts";
import a from "../Assets/urc1.png";
import b from "../Assets/urc2.png";
import c from "../Assets/URC-finals.jpg";
import d from "../Assets/urc3.jpg";


// Main App Component
export default function App() {
  return (

    <div className="min-h-screen bg-[#03002A] p-6 mt-8">
        {/* Heading */}
        <h1
        className="text-6xl text-center mb-8 sm:mb-12 mt-16"  // Added mt-16
          style={{
                      backgroundImage: 'linear-gradient(180deg, #4CA1AF 0%, #3d6a7a 33%, #334d5c 66%, #2C3E50 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontFamily: "sans-serif",
                      fontWeight: '400',
                      filter: 'drop-shadow(0 4px 8px rgba(27, 38, 59, 0.5))'
            }}
    >
        UNIVERSITY ROVER CHALLENGE
    </h1>

      <div className="bg-[#03002A] p-6 rounded-lg mb-16">
                <div className="flex items-center justify-center gap-4 mb-6">
                    {/* <img
                        src={spros}
                        alt="SPROS"
                        loading="lazy"
                        className="w-16 h-16 object-contain"
                    /> */}
                    <h2 className="text-white text-3xl font-bold font-lobster">
                        About URC
                    </h2>
                </div>
                
                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/50 rounded-lg p-8 text-white">
                    <p className="text-lg leading-relaxed text-center">
                        The University Rover Challenge (URC) is the world's premier robotics competition for college students.  Held annually in the desert of southern Utah in the United States, URC challenges student teams to design and build the next generation of Mars rovers that will one day work alongside astronauts exploring the Red Planet.
                    </p>
                </div>
            </div>

            {/* First Section: Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                {[a, b, c, d].map((img, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md flex items-center justify-center overflow-hidden w-[78%] h-[100%] mx-auto"
                    >
                        <img
                            src={img}
                            alt={`Image ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>


    </div>
  );
}