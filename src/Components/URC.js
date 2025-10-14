import React from "react";
import { Chart } from "react-google-charts";

// Data and options for the Pie Chart
const pieChartData = [
  ["Task", "Number of Tasks"],
  ["ABEx", 1],
  ["R&DO", 1],
  ["ID&MO", 1],
  ["AutEx", 1],
];

const pieChartOptions = {
  title: "Tasks Distribution",
  pieHole: 0.4, // Creates a Donut Chart
  is3D: true, // Enables 3D view
  pieStartAngle: 100, // Rotates the chart
  sliceVisibilityThreshold: 0.02, // Hides slices smaller than 2%
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "#ffffff", // Set legend text to white for better visibility
      fontSize: 14,
    },
  },
  pieSliceText: "label", // Display task names on the slices
  colors: ["#8AD1C2", "#9F8AD1", "#D18A99", "#BCD18A", "#D1C28A"],
  backgroundColor: "#03002A", // Set background color for the chart
  titleTextStyle: {
    color: "#ffffff", // Set title text to white
  },
};

// Data and options for the Bar Chart
const barChartData = [
  [
    "Element",
    "Density",
    { role: "style" },
    { role: "annotation", type: "string" },
  ],
  ["ABEx", 245, "#b87333", "ABEx"],
  ["R&DO", 185, "silver", "Ag"],
  ["ID&MO", 185, "gold", "Au"],
  ["AutEx", 185, "color: #e5e4e2", "Pt"],
];

const barChartOptions = {
  title: "Points Distribution",
  width: 700,
  height: 400,
  bar: { groupWidth: "95%" },
  legend: { position: "none" },
  backgroundColor: "#03002A", // Set background color for the chart
  titleTextStyle: {
    color: "#ffffff", // Set title text to white
  },
};

// Main App Component
export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#03002A", // Set container background color
        paddingBottom: "40px", // Space for the bottom boxes
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
          backgroundColor: "#03002A", // Set container background color
          marginTop: "50px", // Add top margin
        }}
      >
        {/* Bar Chart */}
        <div style={{ flex: 1, marginRight: "10px" }}>
          <Chart
            chartType="BarChart"
            width="100%"
            height="400px"
            data={barChartData}
            options={barChartOptions}
          />
        </div>

        {/* Pie Chart */}
        <div style={{ flex: 1, marginLeft: "10px" }}>
          <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={pieChartData}
            options={pieChartOptions}
          />
        </div>
      </div>

      {/* Bottom Boxes */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          marginTop: "30px",
          height: "500px",
        }}
      >
        {/* Left Boxes */}
        <div style={{ display: "flex", flexDirection: "column", width: "48%" }}>
          <div
            className="box"
            style={{
              backgroundColor: "#2A2A2A", // Default background color
              marginBottom: "10px",
              padding: "20px",
              color: "white",
              textAlign: "center",
              borderRadius: "5px",
              transition: "transform 0.3s, box-shadow 0.3s", // Smooth transition
            }}
          >
            <h3>ABeX</h3>
            <p>The rover must act as a mobile science lab, collecting and analyzing subsurface soil and
               atmospheric samples to detect microbial life or its signs. It requires onboard instruments
                for testing, sealed sample caching, and data documentation, 
              including panoramas, site details, and high-resolution images, all within a 30-minute mission.</p>
          </div>
          <div
            className="box"
            style={{
              backgroundColor: "#2A2A2A", // Default background color
              marginBottom: "10px",
              padding: "20px",
              color: "white",
              textAlign: "center",
              borderRadius: "5px",
              transition: "transform 0.3s, box-shadow 0.3s", // Smooth transition
            }}
          >
            <h3>RECONNAISSANCE AND DELIVERY OPERATION (RDO)</h3>
            <p>The rover must conduct reconnaissance and delivery operations over 
              varied terrain, locating, documenting, and storing objects, then delivering
               them to designated GPS locations. Equipped with a gripper and storage, the 
               rover will navigate challenging terrains, handle diverse object sizes, 
               and complete tasks within set time limits for each stage.
            </p>
          </div>
        </div>

        {/* Right Boxes */}
        <div style={{ display: "flex", flexDirection: "column", width: "48%" }}>
          <div
            className="box"
            style={{
              backgroundColor: "#2A2A2A", // Default background color
              marginBottom: "10px",
              padding: "20px",
              color: "white",
              textAlign: "center",
              borderRadius: "5px",
              transition: "transform 0.3s, box-shadow 0.3s", // Smooth transition
            }}
          >
            <h3>AUTONOMOUS EXPEDITION (AutEx)</h3>
            <p>The rover must autonomously navigate rugged terrain by following arrow signs,
               pausing at marked circles, and reaching an endpoint. Teams can monitor data 
               but not control the rover. GPS coordinates and directional data must be 
               documented to create a competition site map, with penalties for hitting signs.</p>
          </div>
          <div
            className="box"
            style={{
              backgroundColor: "#2A2A2A", // Default background color
              marginBottom: "10px",
              padding: "20px",
              color: "white",
              textAlign: "center",
              borderRadius: "5px",
              transition: "transform 0.3s, box-shadow 0.3s", // Smooth transition
            }}
          >
            <h3>INSTRUMENT DEPLOYMENT AND MAINTENANCE OPERATION (IDMO)</h3>
            <p>The mission involves two stages: Instrument Maintenance and Deployment. The 
              rover must perform precise tasks like operating panels, placing caches, flipping 
              switches, and reading codes. Deployment requires placing caches in designated spots 
              and relaying codes via video feed. Tasks demand robotic manipulators and can be completed in any order.</p>
          </div>
        </div>
      </div>

      {/* Hover Effects for Boxes */}
      <style>
        {`
          .box:hover {
            transform: scale(1.05);
            box-shadow: 0 0 15px 2px rgba(255, 255, 255, 0.8); // Glowing white border
            border: 1px solid white; // Add white border on hover
          }
        `}
      </style>
    </div>
  );
}