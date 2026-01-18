import React from 'react';
import './Board24_25.css';

import Dalton from "../Assets/dalton1.png";
import Tanmay from "../Assets/tanmay.jpg";
import Abiram from "../Assets/abiram.jpg";
import Sarthak from "../Assets/sarthak.jpg";
import Jishnu from "../Assets/jishnu.jpg";
import Rishit from "../Assets/rishit.jpg";
import Spoorthi from "../Assets/spoorthi.jpg";
import Meenakshi from "../Assets/meenakshi.jpg";
import Anirudh from "../Assets/anirudh.jpg";
import Raghav from "../Assets/raghav.jpg";



const Board = () => {
  return (
    <>
    
    <main className='container '>
      <div className='container'>
     <h1 className="heading"> </h1>
    </div>


      {/* card 1 */}
    <div className="wrapper">
      <div className="card front-face">
        <img src={Dalton} alt=" " loading='lazy'/>
      </div>
      <div className="card back-face">
        <img src={Dalton} alt="Back" loading='lazy' />
        
        <div className="info">
          <div className="title text-sm pt-8">"Guided by vision, we master the cosmos"</div>
          
        </div>
        <ul>
          <a href="https://github.com/daltonar05"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/daltonarofficial/"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/whosdaaarucksis?igsh=MTlweDNraDJ5Y3Zjcw=="><i className="fab fa-instagram"></i></a>
         
        </ul>
      </div>
     </div>


  {/* card 2 */}
    <div className="wrapper">
    <div className="card front-face">
      <img src={Tanmay} alt=" " loading='lazy' />
       
    </div>
    <div className="card back-face">
      <img src={Tanmay} alt="Back" loading='lazy' />
      
      <div className="info">
        <div className="title text-sm pt-8">"United, we transform challenges into victories"</div>
        
      </div>
      <ul>
        <a href="https://github.com/PandaMunda"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/tanmay-pahuja-43b8b9208/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/tanmay.nhk?igsh=MW1uYm1pNnEycDlnag=="><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>


  {/* card 3 */}
  <div className="wrapper">
    <div className="card front-face">
      <img src={Abiram} alt=" " loading='lazy' />
    </div>
    <div className="card back-face">
      <img src={Abiram} alt="Back" loading='lazy' />
      
      <div className="info">
        <div className="title text-sm pt-8">"Every move blends innovation with execution"</div>
        
      </div>
      <ul>
        <a href="https://github.com/Obi-ram"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/abiram-gaddey-551201280/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/abii.lol?igsh=MTRnOXY4dWpkdXB2dQ%3D%3D&utm_source=qr"><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>


  {/* card 4 */}
  <div className="wrapper">
    <div className="card front-face">
      <img src={Sarthak} alt=" " loading='lazy' />
    </div>
    <div className="card back-face">
      <img src={Sarthak} alt="Back" loading='lazy' />
      
      <div className="info">
        <div className="title text-sm pt-8">"Each gear, each mechanism, brings us closer to success"
        </div>
        
      </div>
      <ul>
        {/* <a href="https://github.com/Yogavarshni"><i className="fab fa-github"></i></a> */}
        <a href="https://www.linkedin.com/in/sarthak-aggarwal-95578026a/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/yogavarshni._.0512?igsh=MTNxbjViZWYyeDJ1MA=="><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>

{/* card 5 */}
<div className="wrapper">
    <div className="card front-face">
      <img src={Jishnu} alt=" " loading='lazy' />
    </div>
    <div className="card back-face">
      <img src={Jishnu} alt="Back" loading='lazy' />
      
      <div className="info">
        <div className="title text-sm pt-8">"Enabling machines to reason, act, and discover"</div>
        
      </div>
      <ul>
        <a href="https://github.com/jishnu1711"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/rudraraju-jishnu-690b22261/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/jishnu_rudraraju?igsh=c3RhOGpvMWd5ZDl3"><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>

{/* card 6 */}
<div className="wrapper">
    <div className="card front-face">
      <img src={Rishit} alt=" " loading='lazy' />
    </div>
    <div className="card back-face">
      <img src={Rishit} alt="Back" loading='lazy' />
      
      <div className="info">
        <div className="title text-sm pt-8">"Programming the journey to the stars"</div>
        
      </div>
      <ul>
        <a href="https://github.com/Rish0999"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/rishitmohan/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/rishit_mohan/"><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>


{/* card 7 */}
<div className="wrapper">
    <div className="card front-face">
      <img src={Spoorthi} alt=" " loading='lazy' />
    </div>
    <div className="card back-face">
      <img src={Spoorthi} alt="Back" loading='lazy' />
      
      <div className="info">
        <div className="title text-sm pt-8">"Illuminating the way to discovery"</div>
        
      </div>
      <ul>
        <a href="https://github.com"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/spoorthinanda/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/x_inspoor?igsh=MWt5dDI4eXlnbDFsZw=="><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>


{/* card 8 */}
<div className="wrapper">
    <div className="card front-face">
      <img src={Meenakshi} alt=" " loading='lazy'/>
    </div>
    <div className="card back-face">
      <img src={Meenakshi} alt="Back" loading='lazy'/>
      
      <div className="info">
        <div className="title text-sm pt-8">"Data and discovery lie at the core of our mission"</div>
        
      </div>
      <ul>
        <a href="https://www.linkedin.com/in/muthumeenakshim/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/muthu._.meenakshi?igsh=ZWNxcTljMHM0ZThw"><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>
    {/* card 9 */}
<div className="wrapper">
    <div className="card front-face">
      <img src={Anirudh} alt=" " loading='lazy'/>
    </div>
    <div className="card back-face">
      <img src={Anirudh} alt="Back" loading='lazy'/>
      
      <div className="info">
        <div className="title text-sm pt-8">"Teamwork is the cornerstone of our cosmic achievements"</div>
        
      </div>
      <ul>
        <a href="https://github.com/Anirudh0304"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/konduri-anirudh/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/anirudh_konduri/"><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>

  {/* card 10 */}
<div className="wrapper">
    <div className="card front-face">
      <img src={Raghav} alt=" " loading='lazy'/>
    </div>
    <div className="card back-face">
      <img src={Raghav} alt="Back"loading='lazy' />
      
      <div className="info">
        <div className="title text-sm pt-8">"Collaboration is the foundation of our stellar success"</div>
        
      </div>
      <ul>
        <a href="https://github.com/Psycho-72"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/raghavbharadia/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/raghavbharadia"><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>

  </main>
  </>
  );
};

export default Board;

