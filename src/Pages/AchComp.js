import React from 'react';
import Achievements from '../Components/Achievements';
import Competitions from '../Components/Competitions';
import Flipper from '../Components/Flipper';
import Carousel from '../Components/Carousel';
import AboutUs from '../Components/AboutUs';
import IRC from '../Components/IRC';

function AchComp() {
  return (
    <div className="w-full min-h-screen flex flex-col font-sans bg-[#03002A] text-white px-4 lg:px-16 scroll-smooth">
      <Competitions />
      <div
        id="ach"
        className="mt-100 px-100 lg:mt-12 lg:px-8" 
      >
        <Carousel />
      </div>
    </div>
  );
}

export default AchComp;
