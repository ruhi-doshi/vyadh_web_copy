import React, { useEffect, useRef } from 'react';
import styles from './Domains.module.css';
import GCSImage from "../Assets/gcs.jpeg";
import Autonomous from "../Assets/autonomous.jpeg"; 
import Mechanical from "../Assets/mechanical.jpeg"; 
import Electrical from "../Assets/electrical.jpeg"; 
import RoboticArm from "../Assets/roboticarm.jpeg";

const domains = [
  {
    name: "GCS",
    image: GCSImage,
    top: -8,
    left: 0,
    details: [
      "Intel NUC 8i7BEH with 32GB RAM.",
      "Foxglove-Studio for rover control.",
      "Publisher-subscriber WebSocket.",
      "Manage commands, data, and feeds."
    ]
  },
  {
    name: "Autonomous",
    image: Autonomous,
    top: 0,
    left: 0,
    details: [
      "ROS 2 Nav2 and ROS 2 Control.",
      "Mars rover navigation autonomy.",
      "Advanced motion control systems.",
      "Seamless Martian surface operation."
    ]
  },
  {
    name: "Payload",
    image: Electrical,
    top: 0,
    left: 0,
    details: [
      "Design and layout rover PCBs.",
      "Develop reliable power systems.",
      "Motor control for precise actuation.",
      "Prototyping with Arduino platforms."
    ]
  },
  {
    name: "Mechanical",
    image: Mechanical,
    top: 0,
    left: 25,
    details: [
      "Design products and select materials.",
      "Oversee manufacturing and assembly.",
      "Maintain and troubleshoot systems.",
      "Collaborate with other teams."
    ]
  },
  {
    name: "Robotic Arm",
    image: RoboticArm,
    top: 0,
    left: 20,
    details: [
      "Design and developing Robotic Arm.",
      "Design and implement dependable power systems.",
      "Develop motor control systems for actuation.",
      "Prototype using Arduino platforms."
    ]
  }
];

const Domains = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (containerRef.current) {
        containerRef.current.style.backgroundPositionY = `${scrollPosition * 0.001}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      <div className={styles.titleSection}>
        <h1>DOMAINS</h1>
      </div>

      <main className={styles.domainsContainer} ref={containerRef}>
        {domains.map((domain, index) => (
          <div className={styles.wrapper} key={index}>
            <div className={`${styles.card} ${styles.frontFace}`}>
              <img 
                src={domain.image} 
                alt={domain.name} 
                className={styles.cardImage} 
                loading='lazy'
                style={{ 
                  objectFit: 'cover',
                  objectPosition: `calc(50% + ${domain.left}px) calc(50% + ${domain.top}px)`
                }}
              />
              <div className={styles.title}>{domain.name}</div>
            </div>
            <div className={`${styles.card} ${styles.backFace}`}>
              <div className={styles.info}>
                <ol>
                  {domain.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default Domains;
