import React, { useEffect } from 'react';
import './Domains.css';
import GCSImage from "../Assets/gcs.jpg";
import Autonomous from "../Assets/autonomous.jpg"; 
import Mechanical from "../Assets/mechanical.jpg"; 
import Management from "../Assets/management.jpg"; 
import Electrical from "../Assets/electrical.jpg"; 
import Astrobiology from "../Assets/astrobiology.jpg";
import RoboticArm from "../Assets/roboticarm.jpg";

const Domains = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const domainsContainer = document.querySelector('.domains-container');
      domainsContainer.style.backgroundPositionY = `${scrollPosition * 0.001}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      <div id="title">
  <h1>DOMAINS</h1>
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
    font-weight: bold; /* Ensure the text is bold */
    letter-spacing: 10px;
    background: -webkit-linear-gradient(white, #03002A);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 20px 0;
  }
`}</style>
  <main className="container domains-container">
        
        {/* Management */}
        <div className="wrapper">
          <div className="card front-face">
            <img src={Management} alt="Management" className="card-image" loading='lazy'/>
            <div className="title">Management</div>
          </div>
          <div className="card back-face">
            <div className="info">
              <ol>
                <li>Coordinate competition docs.</li>
                <li>Manage permissions and finances.</li>
                <li>Oversee social media and publicity.</li>
                <li>Facilitate communication and decisions.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Astrobiology */}
        <div className="wrapper">
          <div className="card front-face">
            <img src={Astrobiology} alt="Astrobiology" className="card-image" loading='lazy'/>
            <div className="title">Astrobiology</div>
          </div>
          <div className="card back-face">
            <div className="info">
              <ol>
                <li>Conduct experiments on samples.</li>
                <li>Detect life using sensors.</li>
                <li>Analyze chemicals via spectrometers.</li>
                <li>Collaborate on data collection.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* GCS */}
        <div className="wrapper">
          <div className="card front-face">
            <img src={GCSImage} alt="GCS" className="card-image" loading='lazy'/>
            <div className="title">GCS</div>
          </div>
          <div className="card back-face">
            <div className="info">
              <ol>
                <li>Intel NUC 8i7BEH with 32GB RAM.</li>
                <li>Foxglove-Studio for rover control.</li>
                <li>Publisher-subscriber WebSocket.</li>
                <li>Manage commands, data, and feeds.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Autonomous */}
        <div className="wrapper">
          <div className="card front-face">
            <img src={Autonomous} alt="Autonomous" className="card-image" loading='lazy'/>
            <div className="title">Autonomous</div>
          </div>
          <div className="card back-face">
            <div className="info">
              <ol>
                <li>ROS 2 Nav2 and ROS 2 Control.</li>
                <li>Mars rover navigation autonomy.</li>
                <li>Advanced motion control systems.</li>
                <li>Seamless Martian surface operation.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Electrical */}
        <div className="wrapper">
          <div className="card front-face">
            <img src={Electrical} alt="Electrical" className="card-image" loading='lazy'/>
            <div className="title">Electrical</div>
          </div>
          <div className="card back-face">
            <div className="info">
              <ol>
                <li>Design and layout rover PCBs.</li>
                <li>Develop reliable power systems.</li>
                <li>Motor control for precise actuation.</li>
                <li>Prototyping with Arduino platforms.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Mechanical */}
        <div className="wrapper">
          <div className="card front-face">
            <img src={Mechanical} alt="Mechanical" className="card-image" loading='lazy'/>
            <div className="title">Mechanical</div>
          </div>
          <div className="card back-face">
            <div className="info">
              <ol>
                <li>Design products and select materials.</li>
                <li>Oversee manufacturing and assembly.</li>
                <li>Maintain and troubleshoot systems.</li>
                <li>Collaborate with other teams.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* RoboticArm */}
        <div className="wrapper">
          <div className="card front-face">
            <img src={RoboticArm} alt="Electrical" className="card-image" loading='lazy'/>
            <div className="title">Robotic Arm</div>
          </div>
          <div className="card back-face">
            <div className="info">
              <ol>
                <li>Design and developing Robotic Arm.</li>
                <li>Design and implement dependable power systems.</li>
                <li>Develop motor control systems for actuation.</li>
                <li>Prototype using Arduino platforms.</li>
              </ol>
            </div>
          </div>
        </div>


        

      </main>
    </>
  );
};

export default Domains;