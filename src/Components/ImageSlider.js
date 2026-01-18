import React, { useState, useEffect, useRef, useCallback } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Homepage.css';
import Vyadh from "../Assets/Vyadh.png";


const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const sliderRef = useRef(null);
  const timerRef = useRef(null);

  const content = [
    {
      bgImage: '/templates/bg1.jpeg',
      heading: 'WE ARE TEAM VYADH',
      paragraph: 'Welcome to our website! Discover the beauty of nature and adventure.',
      carouselImage: '/templates/carousel1.png',
    },
    {
      bgImage: '/templates/bg2.jpeg',
      heading: 'ISRO SCIENTISTS AT VYADH WORKSPACE',
      paragraph: 'With ISRO scientists Dr. HN Suresh Kumar ,Deputy Director of Mechanical Systems (Chandrayaan Mission) and Dr. Kiran Kumar Konduri , Project Manager (Landing Module)',
      carouselImage: '/templates/carousel2.png',
    },
    {
      bgImage: '/templates/bg3.jpeg',
      heading: 'VYADH X ALTAIR',
      paragraph: 'Shared a special time with Bangladesh Rover team - ALTAIR at IRC24',
      carouselImage: '/templates/carousel3.png',
    },
    {
      bgImage: '/templates/bg4.jpeg',
      heading: 'VYADH :  EXPLORING THE UNEXPLORED',
      carouselImage: '/templates/carousel4.png',
    },
    {
      bgImage: '/templates/bg5.jpeg',
      heading: 'Unleashing the Potential of Our Planets Neighbor.',
      carouselImage: '/templates/carousel5.png',
    },
  ];

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [resetTimer]);

  useEffect(() => {
    setFadeIn(false);
    setTimeout(() => setFadeIn(true), 300);
  }, [currentIndex]);

  const handleAfterChange = (index) => {
    setCurrentIndex(index);
    setFadeIn(false);
    setTimeout(() => setFadeIn(true), 300);
    resetTimer();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    afterChange: handleAfterChange,
    variableWidth: true,
    autoplay: false,
    autoplaySpeed: 3000,
    swipe: true,
    draggable: true,
    beforeChange: () => resetTimer(),

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="homepage mt-[-50]">
      {/* Logo added on the top-left */}
      <img src={Vyadh} alt="Vyadh Logo" className="logo-top-left" loading='lazy'/>

      <div 
        className="background-image" 
        style={{ backgroundImage: `url(${content[currentIndex].bgImage})` }}
      ></div>
      <div className={`paragraph ${fadeIn ? 'fade-in' : 'fade-out'}`}>
        <h2>{content[currentIndex].heading}</h2>
        <p>{content[currentIndex].paragraph}</p>
      </div>
      <div className="carousel">
        <Slider {...settings} ref={sliderRef}>
          {content.map((item, index) => (
            <div key={index} className={`slide ${index === 0 ? 'first-slide' : ''}`}>
              <div className="image-container">
                <img src={item.carouselImage} alt={`Carousel ${index + 1}`} loading='lazy'/>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
