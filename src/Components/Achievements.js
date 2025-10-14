import React, { useEffect, useState } from 'react';

const Achievements = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
    <main className='w-full min-h-screen flex flex-col'>
    <div className="flex flex-col items-center bg-[#03002A] min-h-screen">
      <h1 className="text-white text-center text-6xl font-bold mt-2">ACHIEVEMENTS</h1>
      <div className="relative flex justify-center items-center mt-16">
        <button 
          onClick={handlePrev} 
          className="w-[80px] h-[200px] bg-black bg-opacity-50 text-white text-6xl md:left-[160px] md:top-[100px] md:mr-16"
        >
          &lt;
        </button>
        <div className="bg-[#03002A] w-full md:w-[1600px] h-[800px] overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div className="flex-none w-full md:w-[1600px] flex" key={index}>
                <div 
                  className="hidden md:flex w-[400px] h-[400px] bg-[#03002A] mt-[100px] items-center justify-center overflow-hidden"
                >
                  <img 
                    src={images[(index - 1 + images.length) % images.length]} 
                    alt={`Slide ${index - 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="w-full md:w-[800px] mx-16 h-[800px] bg-[#03002A] flex items-center justify-center overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Slide ${index}`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div 
                  className="hidden md:flex w-[400px] h-[400px] bg-[#03002A] mt-[100px] items-center justify-center overflow-hidden"
                >
                  <img 
                    src={images[(index + 1) % images.length]} 
                    alt={`Slide ${index + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button 
          onClick={handleNext} 
          className="w-[80px] h-[200px] bg-black bg-opacity-50 text-white text-6xl md:right-[160px] md:top-[100px] md:ml-16"
        >
          &gt;
        </button>
      </div>
    </div>
    </main>
    </>
  );
};

export default Achievements;
