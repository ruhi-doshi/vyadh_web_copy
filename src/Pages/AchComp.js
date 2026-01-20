import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Competitions from '../Components/Competitions';
import Carousel from '../Components/Carousel';

function AchComp() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash-based navigation when component mounts
    if (location.hash) {
      // Increased timeout to ensure page content is fully rendered
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 300);
    }
  }, [location]);

  return (
    <div className="w-full min-h-screen flex flex-col font-sans bg-[#03002A] text-white px-4 lg:px-16 scroll-smooth">
      <Competitions />
      <div
        id="achievements"
        className="mt-100 px-100 lg:mt-12 lg:px-8" 
      >
        <Carousel />
      </div>
    </div>
  );
}

export default AchComp;
