import React from "react";
import { motion } from "framer-motion";
import altium from "../Assets/Altium.png";
import protocase from "../Assets/protocase.png";
import solidworks from "../Assets/solidworks.png";
import pcbway from "../Assets/pcbway.png";
import Ansys from "../Assets/ansys.png";
import DP from "../Assets/DP.png";
import UIS from "../Assets/UIS.png";
import "./Sponsers.css";

const sponsors = [
    {
        href: "https://www.altium.com/in",
        imgSrc: altium,
        altText: "Altium Logo",
    },
    {
        href: "https://www.protocase.com/",
        imgSrc: protocase,
        altText: "Protocase Logo",
    },
    {
        href: "https://solidworks.com/",
        imgSrc: solidworks,
        altText: "SolidWorks Logo",
    },
    {
        href: "https://www.pcbway.com/",
        imgSrc: pcbway,
        altText: "PCBWay Logo",
    },
    { href: "https://www.ansys.com/", imgSrc: Ansys, altText: "Ansys Logo" },
    { href: "https://dreampolymers.com/", imgSrc: DP, altText: "DP Logo" },
    { href: "https://uis.edu/", imgSrc: UIS, altText: "UIS Logo" },
];

const Sponsors = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className="sponsors-wrapper">
            {/* Decorative elements */}
            <div className="sponsors-decoration">
                <div className="deco-blur deco-1"></div>
                <div className="deco-blur deco-2"></div>
            </div>

            {/* Title Section */}
            <div className="sponsors-header">
                <h1 className="sponsors-title">SPONSORS</h1>
            </div>

            {/* Sponsors Grid */}
            <motion.div
                className="sponsors-grid-wrapper"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {sponsors.map((sponsor, index) => (
                    <motion.a
                        key={index}
                        href={sponsor.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sponsor-link"
                        variants={cardVariants}
                        whileHover={{ y: -15, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="sponsor-card">
                            <div className="card-glow"></div>
                            <div className="card-content">
                                <img
                                    src={sponsor.imgSrc}
                                    alt={sponsor.altText}
                                    loading="lazy"
                                />
                            </div>
                            <div className="card-border"></div>
                        </div>
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
};

export default Sponsors;
