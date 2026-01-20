import styles from "./Board.module.css";

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

const board = [
    {
        role: "Captain",
        name: "Dalton AR",
        image: Dalton,
        quote: "Guided by vision, we master the cosmos",
        github: "https://github.com/daltonar05",
        linkedin: "https://www.linkedin.com/in/daltonarofficial/",
        instagram: "https://www.instagram.com/whosdaaarucksis?igsh=MTlweDNraDJ5Y3Zjcw==",
    },
    {
        role: "Vice Captain",
        name: "Tanmay Pahuja",
        image: Tanmay,
        quote: "United, we transform challenges into victories",
        github: "https://github.com/PandaMunda",
        linkedin: "https://www.linkedin.com/in/tanmay-pahuja-43b8b9208/",
        instagram: "https://www.instagram.com/tanmay.nhk?igsh=MW1uYm1pNnEycDlnag==",
    },
    {
        role: "Operations Head",
        name: "Abiram Gaddey",
        image: Abiram,
        quote: "Every move blends innovation with execution",
        github: "https://github.com/Obi-ram",
        linkedin: "https://www.linkedin.com/in/abiram-gaddey-551201280/",
        instagram: "https://www.instagram.com/abii.lol?igsh=MTRnOXY4dWpkdXB2dQ%3D%3D&utm_source=qr",
    },
    {
        role: "Mechanical Head",
        name: "Sarthak Aggarwal",
        image: Sarthak,
        quote: "Each gear, each mechanism, brings us closer to success",
        linkedin: "https://www.linkedin.com/in/sarthak-aggarwal-95578026a/",
        instagram: "https://www.instagram.com/yogavarshni._.0512?igsh=MTNxbjViZWYyeDJ1MA==",
    },
    {
        role: "Autonomous Head",
        name: "Jishnu Rudraraju",
        image: Jishnu,
        quote: "Enabling machines to reason, act, and discover",
        github: "https://github.com/jishnu1711",
        linkedin: "https://www.linkedin.com/in/rudraraju-jishnu-690b22261/",
        instagram: "https://www.instagram.com/jishnu_rudraraju?igsh=c3RhOGpvMWd5ZDl3",
    },
    {
        role: "GCS Head",
        name: "Rishit Mohan",
        image: Rishit,
        quote: "Programming the journey to the stars",
        github: "https://github.com/Rish0999",
        linkedin: "https://www.linkedin.com/in/rishitmohan/",
        instagram: "https://www.instagram.com/rishit_mohan/",
    },
    {
        role: "Electrical Head",
        name: "Spoorthi Nanda",
        image: Spoorthi,
        quote: "Illuminating the way to discovery",
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/spoorthinanda/",
        instagram: "https://www.instagram.com/x_inspoor?igsh=MWt5dDI4eXlnbDFsZw==",
    },
    {
        role: "Science Head",
        name: "Meenakshi M",
        image: Meenakshi,
        quote: "Data and discovery lie at the core of our mission",
        linkedin: "https://www.linkedin.com/in/muthumeenakshim/",
        instagram: "https://www.instagram.com/muthu._.meenakshi?igsh=ZWNxcTljMHM0ZThw",
    },
    {
        role: "HR Head",
        name: "Anirudh Konduri",
        image: Anirudh,
        quote: "Teamwork is the cornerstone of our cosmic achievements",
        github: "https://github.com/Anirudh0304",
        linkedin: "https://www.linkedin.com/in/konduri-anirudh/",
        instagram: "https://www.instagram.com/anirudh_konduri/",
    },
    {
        role: "HR Head",
        name: "Raghav Bharadia",
        image: Raghav,
        quote: "Collaboration is the foundation of our stellar success",
        github: "https://github.com/Psycho-72",
        linkedin: "https://www.linkedin.com/in/raghavbharadia/",
        instagram: "https://www.instagram.com/raghavbharadia",
    },
];

const Board24_25 = () => {
    return (
        <>
            <main className={styles.container}>
                {board.map((member, index) => (
                    <div className={styles.wrapper} key={index}>
                        <div className={`${styles.card} ${styles.frontFace}`}>
                            <img
                                src={member.image}
                                alt={member.name}
                                loading="lazy"
                            />
                        </div>
                        <div className={`${styles.card} ${styles.backFace}`}>
                            <img
                                src={member.image}
                                alt={member.name}
                                loading="lazy"
                            />
                            <div className={styles.info}>
                                <div className={`${styles.title} ${styles.textSm}`}>
                                    {`"${member.quote}"`}
                                </div>
                            </div>
                            <ul className={styles.socialLinks}>
                                {member.github && (
                                    <a href={member.github} className={styles.socialLink}>
                                        <i className="fab fa-github"></i>
                                    </a>
                                )}
                                {member.linkedin && (
                                    <a href={member.linkedin} className={styles.socialLink}>
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                )}
                                {member.instagram && (
                                    <a href={member.instagram} className={styles.socialLink}>
                                        <i className="fab fa-instagram"></i>
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

export default Board24_25;
