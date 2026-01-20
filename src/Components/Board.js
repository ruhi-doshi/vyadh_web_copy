import styles from "./Board.module.css";

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

const board = [
    {
        role: "Captain",
        name: "Shreemay Kumar Bhuyan",
        frontImage: ShreemayFront,
        backImage: Shreemay,
        quote: "Guiding our mission beyond the stars, one vision at a time",
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/shreemay-kumar-bhuyan/",
        instagram: "https://www.instagram.com/shreemay2?igsh=MW9qa2g4bWUyZW5qdQ==",
    },
    {
        role: "Vice Captain",
        name: "Ishaan Pothapragada",
        frontImage: IshaanFront,
        backImage: Ishaan,
        quote: "Empowered by trust, driven by purpose, we achieve greatness",
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/ishaanpothapragada/",
        instagram: "https://www.instagram.com/ishaan_pothapragada?igsh=MWVqc2tlMXpwbHJyYg==",
    },
    {
        role: "Electrical Head",
        name: "Dhruv Soni",
        frontImage: DhruvFront,
        backImage: Dhruv,
        quote: "With each connection, we channel the power to explore new worlds",
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/dhruv-soni-322616226/",
        instagram: "https://www.instagram.com/_.dhruvsoni._?igsh=Zzd4eGIwMXY0bnY1",
    },
    {
        role: "Operations Head",
        name: "Diksha Singhal",
        frontImage: DikshaFront,
        backImage: Diksha,
        quote: "Orchestrating every detail, we turn complexity into triumph",
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/dikshasinghal260503/",
        instagram: "https://www.instagram.com/interplanetaryspaceflight?igsh=aXZkdWV1cmdzamp6",
    },
    {
        role: "Mechanical Head",
        name: "Jatin Chhabra",
        frontImage: JatinFront,
        backImage: Jatin,
        quote: "Engineering the future, where every component is a masterpiece of innovation",
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/jatin-chhabra-b2530828b/",
        instagram: "https://www.instagram.com/jatin_053?igsh=MTZpZWNreHY0dWFlZQ==",
    },
    {
        role: "Science Head",
        name: "Sarthak",
        frontImage: SarthakFront,
        backImage: Sarthak,
        quote: "From Mars to beyond, our journey in astrobiology shapes the future",
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/sarthak3011/",
        instagram: "https://www.instagram.com/sarthak301102?igsh=czRvMjc5d25mNjY4",
    },
    {
        role: "Autonomous Head",
        name: "Yashaswini Shivathaya",
        frontImage: YashaswiniFront,
        backImage: Yashaswini,
        quote: "Autonomy in action, fueled by relentless innovation and collaborative genius",
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/yashaswini-shivathaya/",
        instagram: "https://www.instagram.com/yashaswini.fr?igsh=MWF6bjNwMXNsd2Nwdg==",
    },
    {
        role: "GCS Head",
        name: "Arvind Kumar",
        frontImage: ArvindFront,
        backImage: Arvind,
        quote: "With each connection, we electrify our mission and illuminate our path",
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/thearvikumar/",
        instagram: "https://www.instagram.com/k_arvind_02?igsh=MW40c3V6MjBiMDV4Yw==",
    },
];

const Board = () => {
    return (
        <>
            <main className={styles.container}>
                {board.map((member, index) => (
                    <div className={styles.wrapper} key={index}>
                        <div className={`${styles.card} ${styles.frontFace}`}>
                            <img
                                src={member.frontImage}
                                alt={member.name}
                                loading="lazy"
                            />
                        </div>
                        <div className={`${styles.card} ${styles.backFace}`}>
                            <img
                                src={member.backImage}
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

export default Board;
