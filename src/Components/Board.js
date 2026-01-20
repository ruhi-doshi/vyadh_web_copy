import React from 'react';
import './Board.css';

import Shreemay from "../Assets/Shreemay.JPG";
import ShreemayFront from "../Assets/ShreemayFront.png";
import Ishaan from "../Assets/Ishaan.JPG";
import IshaanFront from "../Assets/IshaanFront.png";
import Arvind from "../Assets/Arvind.JPG";
import ArvindFront from "../Assets/ArvindFront.png";
import Dhruv from "../Assets/Dhruv.JPG";
import DhruvFront from "../Assets/DhruvFront.png";
import Jatin from "../Assets/Jatin.JPG";
import JatinFront from "../Assets/JatinFront.png";
import Sarthak from "../Assets/sarthak.jpg";
import SarthakFront from "../Assets/SarthakFront.png";
import Yashaswini from "../Assets/Yashaswini.JPG";
import YashaswiniFront from "../Assets/YashaswiniFront.png";
import Diksha from "../Assets/Diksha.JPG";
import DikshaFront from "../Assets/DikshaFront.png";


const Board = () => {
  return (
    <>
    
    <main className='container '>

      {/* card 1 */}
    <div className="wrapper">
      <div className="card front-face">
        <img src={ShreemayFront} alt=" " loading="lazy" />
      </div>
      <div className="card back-face">
        <img src={Shreemay} alt="Back" loading="lazy" />
        
        { <div className="info">
          <div className="title text-sm pt-8">"Guiding our mission beyond the stars,one vision at a time"</div>
          
        </div> }
        <ul>
          <a href="https://github.com"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/shreemay-kumar-bhuyan/"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/shreemay2?igsh=MW9qa2g4bWUyZW5qdQ=="><i className="fab fa-instagram"></i></a>
         
        </ul>
      </div>
     </div>


  {/* card 2 */}
    <div className="wrapper">
    <div className="card front-face">
      <img src={IshaanFront} alt=" " loading="lazy" />
       
    </div>
    <div className="card back-face">
      <img src={Ishaan} alt="Back" loading='lazy' />
      
      { <div className="info">
        <div className="title text-sm  pt-8">"Empowered by trust,driven by purpose,we achieve greatness"</div>
        
      </div> }
      <ul>
        <a href="https://github.com"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/ishaanpothapragada/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/ishaan_pothapragada?igsh=MWVqc2tlMXpwbHJyYg=="><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>

{/* card 4 */}
<div className="wrapper">
    <div className="card front-face">
      <img src={DhruvFront} alt=" " loading='lazy' />
    </div>
    <div className="card back-face">
      <img src={Dhruv} alt="Back" loading='lazy' />
      
      <div className="info">
        <div className="title text-sm pt-8">"With each connection,we channel the power to explore new worlds"</div>
        
      </div>
      <ul>
        <a href="https://github.com"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/dhruv-soni-322616226/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/_.dhruvsoni._?igsh=Zzd4eGIwMXY0bnY1"><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>
  {/* card 3 */}
  <div className="wrapper">
    <div className="card front-face">
      <img src={DikshaFront} alt=" " loading='lazy' />
    </div>
    <div className="card back-face">
      <img src={Diksha} alt="Back" loading='lazy' />
      
      <div className="info">
        <div className="title text-sm pt-8">"Orchestrating every detail,we turn complexity into triumph"</div>
        
      </div>
      <ul>
        <a href="https://github.com"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/dikshasinghal260503/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/interplanetaryspaceflight?igsh=aXZkdWV1cmdzamp6"><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>


  

{/* card 5 */}
<div className="wrapper">
    <div className="card front-face">
      <img src={JatinFront} alt=" " loading='lazy' />
    </div>
    <div className="card back-face">
      <img src={Jatin} alt="Back" loading='lazy' />
      
      <div className="info">
        <div className="title text-sm pt-8">"Engineering the future,where every component is a masterpiece of innovation"</div>
        
      </div>
      <ul>
        <a href="https://github.com"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/jatin-chhabra-b2530828b/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/jatin_053?igsh=MTZpZWNreHY0dWFlZQ=="><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>

{/* card 6 */}
<div className="wrapper">
    <div className="card front-face">
      <img src={SarthakFront} alt=" " loading='lazy' />
    </div>
    <div className="card back-face">
      <img src={Sarthak} alt="Back" loading='lazy' />
      
      <div className="info">
        <div className="title text-sm pt-8">"From Mars to beyond, our journey in astrobiology shapes the future"</div>
        
      </div>
      <ul>
        <a href="https://github.com"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/sarthak3011/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/sarthak301102?igsh=czRvMjc5d25mNjY4"><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>


{/* card 7 */}
<div className="wrapper">
    <div className="card front-face">
      <img src={YashaswiniFront} alt=" " loading='lazy' />
    </div>
    <div className="card back-face">
      <img src={Yashaswini} alt="Back" loading='lazy' />
      
      <div className="info">
        <div className="title text-sm pt-8">"Autonomy in action,fueled by relentless innovation and collaborative genius"</div>
        
      </div>
      <ul>
        <a href="https://github.com"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/yashaswini-shivathaya/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/yashaswini.fr?igsh=MWF6bjNwMXNsd2Nwdg=="><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>


{/* card 8 */}
<div className="wrapper">
    <div className="card front-face">
      <img src={ArvindFront} alt=" " loading='lazy' />
    </div>
    <div className="card back-face">
      <img src={Arvind} alt="Back" loading='lazy' />
      
      <div className="info">
        <div className="title text-sm pt-8">"With each connection, we electrify our mission and illuminate our path"</div>
        
      </div>
      <ul>
        <a href="https://github.com"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/thearvikumar/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/k_arvind_02?igsh=MW40c3V6MjBiMDV4Yw=="><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>
  </main>
  </>
  );
};

export default Board;

