import React from "react";
import ImageSlider from "../Components/ImageSlider";
import Domains from "../Components/Domains";
import Sponsers from "../Components/Sponsers";
import AboutUs from "../Components/AboutUs";

function Home() {
    return (
        <>
            
            <div>
                <ImageSlider/>
            </div>
            <div>
                <AboutUs/>
            </div>
            <div>
                <Domains/>
            </div>
            <div>
                <Sponsers />
            </div>
            
        </>
    );
}

export default Home;
