import React from "react";
import { Chart } from "react-google-charts";
import spros from '../Assets/SPROS1.png';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView , useScroll} from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Pie Chart Data and Options
const pieChartData = [
    ["Task", "Number of Tasks"],
    ["ABEx", 1],
    ["RADO", 1],
    ["IDMO", 1],
    ["BPP", 1],
    ["PIMA", 1],
    ["Exhibition", 1],
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
    colors: ["#ba5620", "#ba9120", "#60ba20", "#ba2094","#ba2020","#20ba91"],
};

// Bar Chart Data and Options
const barChartData = [
    ["Tasks", "Points", { role: "style" }, { role: "annotation", type: "string" }],
    ["ABEx", 300, "#ba5620", "ABEx"],
    ["RADO", 250, "#ba9120", "RADO"],
    ["IDMO", 250, "#60ba20", "IDMO"],
    ["BPP", 50, "#ba2094", "BPP"],
    ["PIMA", 100, "#ba2020", "PIMA"],
    ["Exhibition", 50, "#20ba91", "Exhibition"],
];
const barChartOptions = {
    title: "Points Distribution",
    width: "100%",
    height: 400,
    bar: { groupWidth: "95%" },
    backgroundColor: "#03002A",
    titleTextStyle: { color: "#ffffff" },
};

function TopicCard({ title, paragraph, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsExpanded(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setIsExpanded(false);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        {/* Topic Header */}
        <div className="p-6 bg-gradient-to-r from-slate-900 to-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-6 h-6 text-white" />
            </motion.div>
          </div>
        </div>

        {/* Expandable Content */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isExpanded ? 'auto' : 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="p-6 bg-[#1D2B4F]">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isExpanded ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-white text-base leading-relaxed"
            >
              {paragraph}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}




const IRC = () => {
    const titles = ["ABex", "RADO", "IDMO", "BPP", "PIMA"];
    const paragraphs = [
        "The mission focuses on identifying sites suitable for microbial life, collecting and analyzing samples using onboard instruments, and safely storing uncontaminated samples in sealed containers for future retrieval during RADO, with the goal of detecting signs of extinct or existing life.",
        "The rover explores an area to locate and photograph objects while recording their GPS coordinates, then autonomously picks up and delivers these objects (like small tools) to designated locations (color-coded cones) using a gripper mechanism across varied terrain.",
        "The mission involves two stages: Instrument Maintenance and Deployment. The rover must perform precise tasks like operating panels, placing caches, flipping switches, and reading codes. Deployment requires placing caches in designated spots and relaying codes via video feed. Tasks demand robotic manipulators and can be completed in any order.",
        "Evaluate Teams ability to develop Business acumen and inspire to build partnership with Industry and Academia for further development & deployment of this Project to greater heights. The Business plan is restrict & relate to this Specific Rover and the Team involved in the competition.",
        "Presentation featuring Teams Vision & Mission, Management aspects, Engagement of Sponsors & Mentors, Organization Structure, Key Roles & Responsibilities, Team formation, Skill development, Knowledge transfer, System Engineering, Project Management, Task allocation among the teams, Cross-functional collaborations, Project plan, Material alignment, assembly, mechanical completion of Rover, Testing, assessment of Rover Performance, Lesson learned during the life cycle of the development of Rover. Interactions among stake-holders and exciting information guiding inquisitiveness on specific question from Judges.",
    ];

const instagramPosts = [
        'DBrFgXnvN3g',  //Instagram post ID
        'CFPYgJthaod',
        'DA3qnvGSY90',
        'CErNNGehqRy'
    ];

useEffect(() => {
        // Load Instagram embed script
        const script = document.createElement('script');
        script.src = '//www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        // Process Instagram embeds after script loads
        script.onload = () => {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

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
    INTERNATIONAL ROVER CHALLENGE
</h1>

            {/* First Section: Images
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
            </div> */}

            {/* First Section: Instagram posts */}
            <div className="mb-16">
                <div className="flex justify-center items-center gap-6 flex-wrap px-4">
                    {instagramPosts.map((postId, index) => (
                        <div 
                            key={index}
                            className="w-80 rounded-2xl overflow-hidden bg-white shadow-lg"
                        >
                            <blockquote
                                className="instagram-media"
                                data-instgrm-permalink={`https://www.instagram.com/p/${postId}/`}
                                data-instgrm-version="14"
                                style={{
                                    background: '#FFF',
                                    border: 0,
                                    borderRadius: '16px',
                                    margin: '0 auto',
                                    padding: 0,
                                    width: '100%',
                                    maxWidth: '320px'
                                }}
                            >
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>

           {/* 2nd Section: About SPROS */}
           <div className="bg-[#03002A] p-6 rounded-lg mb-16">
                <div className="flex items-center justify-center gap-4 mb-6">
                    <img
                        src={spros}
                        alt="SPROS"
                        loading="lazy"
                        className="w-16 h-16 object-contain"
                    />
                    <h2 className="text-white text-3xl font-bold font-lobster">
                        About SPROS
                    </h2>
                </div>
                
                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/50 rounded-lg p-8 text-white">
                    <p className="text-lg leading-relaxed text-center">
                        Space Robotics Society (SPROS) is an international organisation dedicated to the advancement of space technology and allied fields. Driven by the belief that space technology and exploration have the power to equip human civilization with unparalleled sustainable solutions, we serve as a vibrant launchpad for space professionals and students to unlock their creative potential to propel next-generation inspiration, ideation and innovation across the entire spectrum of space technology and exploration. We support the development of budding space professionals by providing them with the opportunity to engage in space technology learning, research skills development and more through our global events and competitions.
                    </p>
                </div>
            </div>


            {/* 2nd Section: Pie and Bar Charts */}
            <div className="bg-[#03002A] p-6 rounded-lg">
                <h2 className="text-white text-3xl font-bold text-center mb-9 font-lobster">
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
            <div className="mb-32">
                    <h2 className="text- #F0F8FF text-3xl font-bold text-center mb-9 font-lobster">
                    Competition Tasks
                    </h2>
                    <div className="max-w-6xl mx-auto px-4 space-y-16">
                    {titles.map((title, index) => (
                        <TopicCard 
                        key={index} 
                        title={title} 
                        paragraph={paragraphs[index]} 
                        index={index} 
                        />
                    ))}
                    </div>
            </div>

        </div>
    );
};

export default IRC;
