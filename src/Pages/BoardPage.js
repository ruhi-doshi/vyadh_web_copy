import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Board from "../Components/Board";
import Board22_23 from "../Components/Board22_23";
import Board24_25 from "../Components/Board24_25";
import Board25_26 from "../Components/Board25_26";
import styles from "./BoardPage.module.css";

const TimelineBar = ({ boards, selectedBoard, setSelectedBoard }) => {
    return (
        <div className={styles.timelineSection}>
            <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                    <h1 className={styles.timelineTitle}>TEAM LEADERSHIP</h1>
                </div>

                {/* Timeline slider */}
                <div className={styles.timelineSliderWrapper}>

                    <div className={styles.timelineItems}>
                        {boards.map((board, index) => {
                            const isSelected = selectedBoard === board.id;
                            return (
                                <motion.div
                                    key={board.id}
                                    className={`${styles.timelineItem} ${isSelected ? styles.active : ""}`}
                                    onClick={() => setSelectedBoard(board.id)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.4,
                                    }}
                                >
                                    {/* Dot */}
                                    <div className={styles.timelineDot}>
                                        {isSelected && (
                                            <motion.div
                                                className={styles.dotPulse}
                                                animate={{
                                                    scale: [1, 1.5],
                                                    opacity: [1, 0],
                                                }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                }}
                                            />
                                        )}
                                    </div>

                                    {/* Label */}
                                    <motion.div
                                        className={styles.timelineLabel}
                                        animate={{
                                            y: isSelected ? -10 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className={styles.labelYear}>
                                            {board.year}
                                        </div>
                                        <div className={styles.labelText}>
                                            {board.label}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContentDisplay = ({ selectedBoard, boards }) => {
    const getBoardComponent = () => {
        switch (selectedBoard) {
            case "board25_26":
                return <Board25_26 />;
            case "board23_24":
                return <Board />;
            case "board22_23":
                return <Board22_23 />;
            case "board24_25":
            default:
                return <Board24_25 />;
        }
    };

    return (
        <div className={styles.contentSection}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedBoard}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    {getBoardComponent()}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

function BoardPage() {
    const [selectedBoard, setSelectedBoard] = useState("board25_26");

    const boards = [
        { id: "board25_26", label: "Board 25-26", year: "2025-2026" },
        { id: "board24_25", label: "Board 24-25", year: "2024-2025" },
        { id: "board23_24", label: "Board 23-24", year: "2023-2024" },
        { id: "board22_23", label: "Board 22-23", year: "2022-2023" },
    ];

    return (
        <>
            <TimelineBar
                boards={boards}
                selectedBoard={selectedBoard}
                setSelectedBoard={setSelectedBoard}
            />

            <ContentDisplay selectedBoard={selectedBoard} boards={boards} />
        </>
    );
}

export default BoardPage;
