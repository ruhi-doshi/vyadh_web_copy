import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Pages/Home';
import AchComp from './Pages/AchComp';
import BoardPage from './Pages/BoardPage';
import ContactUsPage from './Pages/ContactUsPage';
import IRC from './Components/IRC';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// import Loader from './Components/loader/Loader';


function App() {
    // const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     setIsLoading(true); // Show loader initially
    //     const fakeDataFetch = () => {
    //         setTimeout(() => {
    //             setIsLoading(false); // Hide loader after 4 seconds
    //         }, 2000);
    //     };
    //     fakeDataFetch();
    // }, []);

    // if (isLoading) {
    //     return <Loader />;
    // }

    return (
        <>
            <div>
                <Navbar />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/achievementsandcompetitions" element={<AchComp />} />
                <Route path="/board" element={<BoardPage />} />
                <Route path="/contactus" element={<ContactUsPage />} />
                <Route path="/irc" element={<IRC/>} />
                

            </Routes>
            <Footer />
        </>
    );
}

export default App;
