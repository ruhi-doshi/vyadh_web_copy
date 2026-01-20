import "./Board25_26.css";

import Aarushi from "../Assets/Aarushi.jpeg";
import Afham from "../Assets/Afham.jpeg";
import Anbu from "../Assets/Anbu.jpg";
import Gaurav from "../Assets/Gaurav.png"
import Mahendra from "../Assets/Mahendra.jpg";
import Ruhi from "../Assets/Ruhi.jpeg";
import Rakshith from "../Assets/Rakshith.jpeg";

const board = [
    {
        role: "Captain",
        name: "Aarushi Gupta",
        image: Aarushi,
        quote: "The universe waits for no one.\n Move anyway.",
        email: "mailto:aarushigupta2311@gmail.com",
        linkedin: "https://www.linkedin.com/in/aarushi-gupta1205",
    },
    {
        role: "Vice Captain",
        name: "Afham Faiyaz Ahmed",
        image: Afham,
        quote: "Stars don’t ask permission to shine.\n Neither should you.",
        github: "https://github.com/a-fham",
        linkedin: "https://www.linkedin.com/in/afhamahmad/",
    },
    {
        role: "Payload Head",
        name: "Anbu A",
        image: Anbu,
        quote: "Orbits look repetitive.\nThey still move forward.",
        github: "https://github.com/anbu-05",
        linkedin: "https://www.linkedin.com/in/anbu2005",
    },
    {
        role: "Mechanical Head",
        name: "Gaurav Arun Agarwal",
        image: Gaurav,
        quote: "Even light bends.\nAdapt and continue.",
        linkedin: "https://www.linkedin.com/in/gaurav-agrawal-1876b22a6",
        email: "mailto:agrawalgaurav0911@gmail.com",
    },
    {
        role: "Robotic Arm Head",
        name: "Mahendra Kumar",
        image: Mahendra,
        quote: "Building systems is the path to stronger engineering and broader perspective",
        github: "https://github.com/GitMasterLOL",
        linkedin: "https://www.linkedin.com/in/mahendra-potti-637b16314",
    },
    {
        role: "GCS Head",
        name: "Ruhi Doshi",
        image: Ruhi,
        quote: "The universe keeps expanding.\nNever stop growing.",
        github: "https://github.com/ruhi-doshi",
        linkedin: "https://www.linkedin.com/in/ruhi-doshi-69542628b",
    },
    {
        role: "Autonomous Head",
        name: "Rakshith Raj S",
        image: Rakshith,
        quote: "You are stardust.\nThink bigger",
        github: "https://github.com/rakshithrajs",
        linkedin: "https://www.linkedin.com/in/rakshithrajs/",
    },
];

const Board = () => {
    return (
        <>
            <main className="container">
                {board.map((member, index) => (
                    <div className="wrapper" key={index}>
                        <div className="card front-face">
                            <img
                                src={member.image}
                                alt={member.name}
                                loading="lazy"
                            />
                            <div className="name-overlay">
                                <div className="member-name">
                                    {member.name}
                                </div>
                                {member.role && (
                                    <div className="member-role">
                                        {member.role}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="card back-face">
                            <img
                                src={member.image}
                                alt={`Portrait of ${member.name}`}
                                loading="lazy"
                            />
                            <div className="info">
                                <div className="title text-sm pt-8">
                                    {`"${member.quote}"`}
                                </div>
                            </div>
                            <ul>
                                {member.github && (
                                    <a href={member.github}>
                                        <i className="fab fa-github"></i>
                                    </a>
                                )}
                                {member.linkedin && (
                                    <a href={member.linkedin}>
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                )}
                                {member.instagram && (
                                    <a href={member.instagram}>
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                )}
                                {member.email && (
                                    <a href={member.email}>
                                        <i className="fas fa-envelope"></i>
                                    </a>
                                )}
                            </ul>
                        </div>
                    </div>
                ))}
            </main>
        </>
    );
};

export default Board;
