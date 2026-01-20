import styles from "./Board.module.css";

import Avyaya from "../Assets/Avyaya.png";
import AvyayaMishraFront from "../Assets/AvyayaMishra_front.png";
import SriHari from "../Assets/SriHari.png";
import SriHariFront from "../Assets/SriHari_front.png";
import Apoorv from "../Assets/Apoorv.png";
import ApoorvGuptaFront from "../Assets/ApoorvGupta_front.png";
import Yogavarshini from "../Assets/Yogavarshini.png";
import YogavarshiniDFront from "../Assets/YogavarshiniD_front.png";
import Reovwin from "../Assets/Reovwin.png";
import ReovwinJohnFront from "../Assets/ReovwinJohn_front.png";
import Chikirsha from "../Assets/Chikirsha.png";
import ChikirshaGulatiFront from "../Assets/ChikirshaGulati_front.png";
import Dhanvanthri from "../Assets/Dhanvanthri.png";
import DhantanthriSFront from "../Assets/DhanvanthriS_front.png";
import Jashwanth from "../Assets/Jashwanth.png";
import JashwanthRajuFront from "../Assets/JashwanthRaju_front.png";
import Ashna from "../Assets/Ashna.png";
import AshnaChaudharyFront from "../Assets/AshnaChaudhary_front.png";

const board = [
    {
        role: "Captain",
        name: "Avyaya Mishra",
        frontImage: AvyayaMishraFront,
        backImage: Avyaya,
        quote: "Leading with vision, we conquer the cosmos",
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/avyaya-mishra-ab38a2248/",
        instagram: "https://www.instagram.com/avyayamishra?igsh=MzB5bHZiYnUyc2ho",
    },
    {
        role: "Vice Captain",
        name: "Sri Hari",
        frontImage: SriHariFront,
        backImage: SriHari,
        quote: "Together, we turn challenges into triumphs",
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/sharisri/",
        instagram: "https://www.instagram.com/sri_hari_be_chill?igsh=ajllcWc5cHF0YTBt",
    },
    {
        role: "Operations Head",
        name: "Apoorv Gupta",
        frontImage: ApoorvGuptaFront,
        backImage: Apoorv,
        quote: "Innovation meets execution in every move",
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/apoorv-gupta07/",
        instagram: "https://www.instagram.com/apoorv_gsw?igsh=MThpdDR3ZmRvOWN6cQ==",
    },
    {
        role: "Coordinator",
        name: "Yogavarshini D",
        frontImage: YogavarshiniDFront,
        backImage: Yogavarshini,
        quote: "Coordination is the key to our cosmic success",
        github: "https://github.com/Yogavarshni",
        linkedin: "https://www.linkedin.com/in/yogavarshni-d-b48837238",
        instagram: "https://www.instagram.com/_.yogavarshni._?igsh=MXhlaHh4dnF5MTY3aA==",
    },
    {
        role: "Autonomous Head",
        name: "Reovwin John",
        frontImage: ReovwinJohnFront,
        backImage: Reovwin,
        quote: "Empowering machines to think, move, and explore",
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/reovwin-john-a3a964205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/_.reoo._?igsh=M3pwZ2g1eDVnZ2xk",
    },
    {
        role: "Science Head",
        name: "Chikirsha Gulati",
        frontImage: ChikirshaGulatiFront,
        backImage: Chikirsha,
        quote: "Data and discovery, the heart of our mission",
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/chikirsha-gulati/",
        instagram: "https://www.instagram.com/chikishxtshow?igsh=dzZ4MWVoeWZzb3V4",
    },
    {
        role: "Mechanical Head",
        name: "Dhanvanthri S",
        frontImage: DhantanthriSFront,
        backImage: Dhanvanthri,
        quote: "Every gear, every mechanism, a step toward success",
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/dhanvanthri-s/",
        instagram: "https://www.instagram.com/_dhanvanthri22?igsh=MWN2cWF5cjJ0d2p1YQ==",
    },
    {
        role: "Electrical Head",
        name: "Jashwanth Raju",
        frontImage: JashwanthRajuFront,
        backImage: Jashwanth,
        quote: "Lighting the path to discovery",
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/jaswanth-raju/",
        instagram: "https://www.instagram.com/_jaswanth_raju?igsh=MXY1c3V5d2h6azQ1aQ==",
    },
    {
        role: "GCS Head",
        name: "Ashna Choudhary",
        frontImage: AshnaChaudharyFront,
        backImage: Ashna,
        quote: "Coding the path to the stars",
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/ashna-choudhary-b7b87723/",
        instagram: "https://www.instagram.com/_oki_bro_?igsh=MTVwZGU2d24xZ3o2ag==",
    },
];

const Board22_23 = () => {
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

export default Board22_23;
