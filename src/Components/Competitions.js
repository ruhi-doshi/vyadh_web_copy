import React from 'react';
import './Competitions.css';

const CompetitionCard = ({ frontImage, backImage, link, altText }) => (
  <div className="group relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] [perspective:1000px] z-10 hover:z-20 mx-auto transition-all duration-500">
    <a href={link}>
      <div className="relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* Front Side */}
        <div className="absolute inset-0">
          <img
            src={frontImage}
            alt={`${altText} Front`}
            className="w-full h-full object-cover rounded-lg shadow-xl"
          />
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          
          {/* Larger Back Image for Normal Screens */}
          <div className="hidden sm:block absolute sm:w-[560px] sm:h-[480px] sm:-left-[130px] sm:-top-[100px] sm:-right-[130px] sm:-bottom-[100px] transition-transform duration-500 group-hover:scale-110">
            <img
              src={backImage}
              alt={`${altText} Back`}
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Slightly Enlarged for Small Screens */}
          <div className="block sm:hidden absolute w-[130%] h-[130%] left-[-15%] top-[-15%] transition-transform duration-500 group-hover:scale-110">
            <img
              src={backImage}
              alt={`${altText} Back`}
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </a>
  </div>
);

const Competitions = () => {
  return (
    <div className="bg-[#03002A] bg-opacity-0 min-h-screen flex flex-col items-center justify-center text-white p-4 sm:p-8">
      
      {/* Title */}
      <h1 className="competitions-heading text-center">COMPETITIONS</h1>

      <style jsx>{`
        .competitions-heading {
          font-weight: bold;
          margin: 20px 0;
          background: -webkit-linear-gradient(white, #03002A);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: sans-serif;
        }

        @media (min-width: 768px) {
          .competitions-heading {
            font-size: 50px;
            letter-spacing: 15px;
          }
        }

        @media (max-width: 768px) {
          .competitions-heading {
            font-size: 40px;
            letter-spacing: 10px;
          }
        }

        @media (max-width: 425px) {
          .competitions-heading {
            font-size: 30px;
            letter-spacing: 8px;
          }
        }

        @media (max-width: 375px) {
          .competitions-heading {
            font-size: 25px;
            letter-spacing: 6px;
          }
        }
      `}</style>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-20 lg:gap-24 w-full max-w-7xl px-4 sm:px-16 mx-auto">
        <CompetitionCard
          frontImage="templates/front1.jpg"
          backImage="templates/back1.jpg"
          link="/irc"
          altText="Competition 1"
        />
        <CompetitionCard
          frontImage="templates/front2.jpg"
          backImage="templates/back2.jpg"
          link="/irc"
          altText="Competition 2"
        />
        <CompetitionCard
          frontImage="templates/front3.jpg"
          backImage="templates/back3.jpg"
          link="/irc"
          altText="Competition 3"
        />
        <CompetitionCard
          frontImage="templates/front4.jpg"
          backImage="templates/back4.jpg"
          link="/urc"
          altText="Competition 4"
        />
      </div>
    </div>
  );
};

export default Competitions;
