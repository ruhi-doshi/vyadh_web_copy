import React from 'react';
import './Board22_23.css';

import Avyaya from "../Assets/Avyaya.png";
import ApoorvGuptaFront from "../Assets/ApoorvGupta_front.png";
import SriHari from "../Assets/SriHari.png";
import AshnaChaudharyFront from "../Assets/AshnaChaudhary_front.png";
import Reovwin from "../Assets/Reovwin.png";
import AvyayaMishraFront from "../Assets/AvyayaMishra_front.png";
import Jashwanth from "../Assets/Jashwanth.png";
import ChikirshaGulatiFront from "../Assets/ChikirshaGulati_front.png";
import Yogavarshini from "../Assets/Yogavarshini.png";
import DhantanthriSFront from "../Assets/DhanvanthriS_front.png";
import Apoorv from "../Assets/Apoorv.png";
import JashwanthRajuFront from "../Assets/JashwanthRaju_front.png";
import Ashna from "../Assets/Ashna.png";
import ReovwinJohnFront from "../Assets/ReovwinJohn_front.png";
import Chikirsha from "../Assets/Chikirsha.png";
import SriHariFront from "../Assets/SriHari_front.png";
import Dhanvanthri from "../Assets/Dhanvanthri.png";

import YogavarshiniDFront from "../Assets/YogavarshiniD_front.png"


const Board = () => {
  return (
    <>
    
    <main className='container '>


      {/* card 1 */}
    <div className="wrapper">
      <div className="card front-face">
        <img src={AvyayaMishraFront} alt=" " loading='lazy' />
      </div>
      <div className="card back-face">
        <img src={Avyaya} alt="Back" loading='lazy' />
        
        <div className="info">
          <div className="title text-sm pt-8">"Leading with vision,we conquer the cosmos"</div>
          
        </div>
        <ul>
          <a href="https://github.com"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/avyaya-mishra-ab38a2248/"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/avyayamishra?igsh=MzB5bHZiYnUyc2ho"><i className="fab fa-instagram"></i></a>
         
        </ul>
      </div>
     </div>


  {/* card 2 */}
    <div className="wrapper">
    <div className="card front-face">
      <img src={SriHariFront} alt=" " loading='lazy' />
       
    </div>
    <div className="card back-face">
      <img src={SriHari} alt="Back" loading='lazy' />
      
      <div className="info">
        <div className="title text-sm pt-8">"Together, we turn challenges into triumphs"</div>
        
      </div>
      <ul>
        <a href="https://github.com"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/sharisri/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/sri_hari_be_chill?igsh=ajllcWc5cHF0YTBt"><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>


  {/* card 3 */}
  <div className="wrapper">
    <div className="card front-face">
      <img src={ApoorvGuptaFront} alt=" " loading='lazy' />
    </div>
    <div className="card back-face">
      <img src={Apoorv} alt="Back" loading='lazy' />
      
      <div className="info">
        <div className="title text-sm pt-8">"Innovation meets execution in every move"</div>
        
      </div>
      <ul>
        <a href="https://github.com"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/apoorv-gupta07/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/apoorv_gsw?igsh=MThpdDR3ZmRvOWN6cQ=="><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>


  {/* card 4 */}
  <div className="wrapper">
    <div className="card front-face">
      <img src={YogavarshiniDFront} alt=" " loading='lazy' />
    </div>
    <div className="card back-face">
      <img src={Yogavarshini} alt="Back" loading='lazy' />
      
      <div className="info">
        <div className="title text-sm pt-8">"Coordination is the key to our cosmic success"
        </div>
        
      </div>
      <ul>
        <a href="https://github.com/Yogavarshni"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/yogavarshni-d-b48837238"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/_.yogavarshni._?igsh=MXhlaHh4dnF5MTY3aA=="><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>

{/* card 5 */}
<div className="wrapper">
    <div className="card front-face">
      <img src={ReovwinJohnFront} alt=" " loading='lazy' />
    </div>
    <div className="card back-face">
      <img src={Reovwin} alt="Back" loading='lazy' />
      
      <div className="info">
        <div className="title text-sm pt-8">"Empowering machines to think, move, and explore"</div>
        
      </div>
      <ul>
        <a href="https://github.com"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/reovwin-john-a3a964205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/_.reoo._?igsh=M3pwZ2g1eDVnZ2xk"><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>

{/* card 6 */}
<div className="wrapper">
    <div className="card front-face">
      <img src={ChikirshaGulatiFront} alt=" " loading='lazy' />
    </div>
    <div className="card back-face">
      <img src={Chikirsha} alt="Back" loading='lazy' />
      
      <div className="info">
        <div className="title text-sm pt-8">"Data and discovery, the heart of our mission"</div>
        
      </div>
      <ul>
        <a href="https://github.com"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/chikirsha-gulati/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/chikishxtshow?igsh=dzZ4MWVoeWZzb3V4"><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>


{/* card 7 */}
<div className="wrapper">
    <div className="card front-face">
      <img src={DhantanthriSFront} alt=" " loading='lazy' />
    </div>
    <div className="card back-face">
      <img src={Dhanvanthri} alt="Back" loading='lazy' />
      
      <div className="info">
        <div className="title text-sm pt-8">"Every gear, every mechanism, a step toward success"</div>
        
      </div>
      <ul>
        <a href="https://github.com"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/dhanvanthri-s/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/_dhanvanthri22?igsh=MWN2cWF5cjJ0d2p1YQ=="><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>


{/* card 8 */}
<div className="wrapper">
    <div className="card front-face">
      <img src={JashwanthRajuFront} alt=" " loading='lazy'/>
    </div>
    <div className="card back-face">
      <img src={Jashwanth} alt="Back" loading='lazy' />
      
      <div className="info">
        <div className="title text-sm pt-8">"Lighting the path to discovery"</div>
        
      </div>
      <ul>
        <a href="https://github.com"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/jaswanth-raju/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/_jaswanth_raju?igsh=MXY1c3V5d2h6azQ1aQ=="><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>
    {/* card 9 */}
<div className="wrapper">
    <div className="card front-face">
      <img src={AshnaChaudharyFront} alt=" " loading='lazy' />
    </div>
    <div className="card back-face">
      <img src={Ashna} alt="Back" loading='lazy' />
      
      <div className="info">
        <div className="title text-sm pt-8">"Coding the path to the stars"</div>
        
      </div>
      <ul>
        <a href="https://github.com"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/ashna-choudhary-b7b87723/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/_oki_bro_?igsh=MTVwZGU2d24xZ3o2ag=="><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>

  </main>
  </>
  );
};

export default Board;

