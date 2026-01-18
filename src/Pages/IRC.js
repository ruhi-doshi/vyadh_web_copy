import React from "react";
import { Chart } from "react-google-charts";
import a from "../Assets/instapic1.jpeg";
import b from "../Assets/instapic2.jpeg";
import c from "../Assets/instapic3.jpeg";
import d from "../Assets/instapic4.jpeg";

// Pie Chart Data and Options
const pieChartData = [
    ["Task", "Number of Tasks"],
    ["ABEx", 1],
    ["RADO", 1],
    ["IDMO", 1],
];
const pieChartOptions = {
    title: "Tasks Distribution",
    pieHole: 0.4,
    is3D: true,
    backgroundColor: "#03002A",
    legend: {
        position: "bottom",
        alignment: "center",
        textStyle: { color: "#ffffff", fontSize: 14 },
    },
    titleTextStyle: { color: "#ffffff" },
    colors: ["#8AD1C2", "#D18A99", "#BCD18A", "#D1C28A"],
};

// "#9F8AD1"
// Bar Chart Data and Options
const barChartData = [
    ["Element", "Density", { role: "style" }, { role: "annotation", type: "string" }],
    ["ABEx", 245, "#b87333", "ABEx"],
    ["RADO", 185, "silver", "Ag"],
    ["ID&MO", 185, "gold", "Au"],
];
const barChartOptions = {
    title: "Points Distribution",
    width: "100%",
    height: 400,
    bar: { groupWidth: "95%" },
    backgroundColor: "#03002A",
    titleTextStyle: { color: "#ffffff" },
};

const IRC = () => {
    const titles = ["ABex", "RADO", "IDMO", "BPP", "PIMA"];
    const paragraphs = [
        "The rover must act as a mobile science lab, collecting and analyzing subsurface soil and atmospheric samples to detect microbial life or its signs. It requires onboard instruments for testing, sealed sample caching, and data documentation, including panoramas, site details, and high-resolution images, all within a 30-minute mission.",
        "The rover must conduct reconnaissance and delivery operations over varied terrain, locating, documenting, and storing objects, then delivering them to designated GPS locations. Equipped with a gripper and storage, the rover will navigate challenging terrains, handle diverse object sizes, and complete tasks within set time limits for each stage.",
        "The mission involves two stages: Instrument Maintenance and Deployment. The rover must perform precise tasks like operating panels, placing caches, flipping switches, and reading codes. Deployment requires placing caches in designated spots and relaying codes via video feed. Tasks demand robotic manipulators and can be completed in any order.",
        "The BPP aims to assess the team's business acumen and foster industry-academia partnerships to support their rover project. The business plan must focus on the specific rover and team participating in the competition, promoting strategic development and collaboration.",
        "Create a presentation detailing your team's management framework. Include the team's mission and vision, organizational structure, and key roles. Discuss recruitment, skill transfer, financial stability, and testing methods. Outline project management practices like task allocation and risk management. Conclude with your approach to educational outreach and community engagement.",
    ];

    return (
        <div className="min-h-screen bg-[#03002A] p-6">
            {/* Heading */}
            <h1
            className="text-4xl text-center mb-8 sm:mb-12 mt-16 orbitron-title"  // Added mt-16
            style={{
                backgroundImage: 'linear-gradient(180deg, #0a1128 0%, #1e3a5f 20%, #4a5f7f 40%, #7a8a9f 60%, #a8b4c5 80%, #d1d5db 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',

                fontWeight: 'bold',
                filter: 'drop-shadow(0 4px 8px rgba(27, 38, 59, 0.5))'
            }}
        >
            INTERNATIONAL ROVER CHALLENGE
        </h1>

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




            {/* 2nd Section: Pie and Bar Charts */}
            <div className="bg-[#03002A] p-6 rounded-lg">
                <h2 className="text-white text-3xl font-bold text-center mb-9">
                    Visual Representation
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    {/* Bar Chart */}
                    <div className="flex justify-center items-center">
                        <Chart
                            chartType="BarChart"
                            width="100%"
                            height="400px"
                            data={barChartData}
                            options={barChartOptions}
                        />
                    </div>
                    {/* Pie Chart */}
                    <div className="flex justify-center items-center">
                        <Chart
                            chartType="PieChart"
                            width="100%"
                            height="400px"
                            data={pieChartData}
                            options={pieChartOptions}
                        />
                    </div>
                </div>

                
            </div>    
            
            {/* 3rd Section: Dynamic Divs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 mb-16">
                {titles.map((title, index) => (
                    <div
                        key={index}
                        className="bg-black border border-blue-400 border-4 rounded-lg p-4 sm:p-6 text-center relative overflow-hidden h-[50px] hover:h-[200px] transition-all duration-500 ease-in-out"
                    >
                        <p className="text-white text-xl sm:text-2xl lg:text-3xl font-bold absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300 hover:opacity-0">
                            {title}
                        </p>
                        <div className="absolute inset-0 bg-blue-300 p-4 sm:p-6 flex items-center justify-center rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100 overflow-auto break-words">
                            <p className="text-white text-xs sm:text-sm lg:text-base text-justify">
                                {paragraphs[index]}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            
        </div>
    );
};

export default IRC;
