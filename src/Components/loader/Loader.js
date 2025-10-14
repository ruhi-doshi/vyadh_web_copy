import React, { useState } from 'react';
import './loader.css';

const Loader = () => {
    const [text, setText] = useState('Loading...');
    const [showImg, setShowImg] = useState(true);

    return (
        <div class="loader">
  <div class="cube">
    <div class="side front"></div>
    <div class="side back"></div>
    <div class="side left"></div>
    <div class="side right"></div>
    <div class="side top"></div>
    <div class="side bottom"></div>
  </div>
</div>

        // <div className="loader-container">
        //     {showImg ? (
        //         // Render the SVG loader
        //         <svg
        //             className="hourglass"
        //             viewBox="0 0 56 56"
        //             width="56px"
        //             height="56px"
        //             role="img"
        //             aria-label="Hourglass animation"
        //         >
        //             {/* SVG content here */}
        //             <g transform="translate(2,2)">
        //                 <g
        //                     fill="none"
        //                     stroke="hsl(0,0%,100%)"
        //                     stroke-dasharray="153.94 153.94"
        //                     stroke-dashoffset="153.94"
        //                     stroke-linecap="round"
        //                     transform="rotate(-90,26,26)"
        //                 >
        //                     <circle
        //                         className="hourglass__motion-thick"
        //                         strokeWidth="2.5"
        //                         cx="26"
        //                         cy="26"
        //                         r="24.5"
        //                         transform="rotate(0,26,26)"
        //                     />
        //                     <circle
        //                         className="hourglass__motion-medium"
        //                         strokeWidth="1.75"
        //                         cx="26"
        //                         cy="26"
        //                         r="24.5"
        //                         transform="rotate(90,26,26)"
        //                     />
        //                     <circle
        //                         className="hourglass__motion-thin"
        //                         strokeWidth="1"
        //                         cx="26"
        //                         cy="26"
        //                         r="24.5"
        //                         transform="rotate(180,26,26)"
        //                     />
        //                 </g>
        //             </g>
        //         </svg>
        //     ) : (
        //         // Render the text loader
        //         <div className="text-loader">
        //             <h3>{text}</h3>
        //         </div>
        //     )}
        // </div>
    );
};

export default Loader;















// import React, { useState } from 'react';

// const Loader = () => {
//     const [text, setText] = useState('');
//     const [showImg, setShowImg] = useState(true);

//     return (
//         <div>
//             {showImg ? (
//                 <video src="./rover.mp4" autoPlay loop muted>
                    
//                 </video>
//             ) : (
//                 <h3>{text}</h3>
//             )}
//         </div>
//     );
// };

// export default Loader;
