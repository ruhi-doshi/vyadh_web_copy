import React from "react";
import altium from "../Assets/Altium.png";
import protocase from "../Assets/protocase.png";
import solidworks from "../Assets/solidworks.png";
import pcbway from "../Assets/pcbway.png";
import Ansys from '../Assets/ansys.png';
import DP from '../Assets/DP.png';
import ACC from '../Assets/ACC.png';
import Greenko from '../Assets/Greenko.png';
import './Sponsers.css';

const sponsors = [
  { href: "https://www.altium.com/in", imgSrc: altium, altText: "Altium Logo" },
  { href: "https://www.protocase.com/", imgSrc: protocase, altText: "Protocase Logo" },
  { href: "https://solidworks.com/", imgSrc: solidworks, altText: "SolidWorks Logo" },
  { href: "https://www.pcbway.com/", imgSrc: pcbway, altText: "PCBWsy Logo" },
  { href: "https://www.ansys.com/", imgSrc: Ansys, altText: "Ansys Logo" },
  { href: "https://dreampolymers.com/", imgSrc: DP, altText: "DP Logo" },
  { href: "https://www.acclimited.com/", imgSrc: ACC, altText: "ACC Logo" },
  { href: "https://greenkogroup.com/", imgSrc: Greenko, altText: "Greenko Logo" },
  // Add more sponsors here
];

const Sponsers = () => {
  return (
    <div className="bg-vyadhColor-100 w-full p-[6.25vw] pt-[0.25vw] mt-[2vw] inline-block">
      <div id="title">
        <h1>SPONSORS</h1>
      </div>

      <style jsx>{`
        #title {
          text-align: center;
          color: #FFF;
          font-family: 'Lato', sans-serif;
          font-weight: 300;
          padding-left: 10px;
        }

        #title h1 {
          font-size: 50px;
          font-weight: bold;
          letter-spacing: 10px;
          background: -webkit-linear-gradient(white, #03002A);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 20px;
        }
      `}</style>

      <div className={`grid gap-[5vw] ${
        sponsors.length > 6 
          ? "grid-cols-4" 
          : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4" 
      } auto-rows-auto responsive-grid`}>
        {sponsors.map((sponsor, index) => (
          <a key={index} href={sponsor.href} target="_blank" rel="noopener noreferrer">
            <figure className="size-[40vw] bg-white rounded-[4vw] flex justify-center items-center md:size-[14.9vw] md:rounded-[1vw] sponsor-card">
              <img src={sponsor.imgSrc} alt={sponsor.altText} />
            </figure>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sponsers;