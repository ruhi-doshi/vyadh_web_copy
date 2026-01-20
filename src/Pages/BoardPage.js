import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Board from "../Components/Board";
import Board22_23 from "../Components/Board22_23";
import Board24_25 from "../Components/Board24_25";
import Board25_26 from "../Components/Board25_26";
import "./BoardPage.css";

const TimelineBar = ({ boards, selectedBoard, setSelectedBoard }) => {
    return (
        <div className="timeline-section">
            <div className="timeline-content">
                <div className="timeline-header">
                    <h1 className="timeline-title">TEAM LEADERSHIP</h1>
                </div>

                {/* Timeline slider */}
                <div className="timeline-slider-wrapper">

                    <div className="timeline-items">
                        {boards.map((board, index) => {
                            const isSelected = selectedBoard === board.id;
                            return (
                                <motion.div
                                    key={board.id}
                                    className={`timeline-item ${isSelected ? "active" : ""}`}
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
                                    <div className="timeline-dot">
                                        {isSelected && (
                                            <motion.div
                                                className="dot-pulse"
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
                                        className="timeline-label"
                                        animate={{
                                            y: isSelected ? -10 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="label-year">
                                            {board.year}
                                        </div>
                                        <div className="label-text">
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
        <div className="content-section">
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
