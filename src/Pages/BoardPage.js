import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {motion} from 'framer-motion';
import Board from '../Components/Board';
import Board22_23 from '../Components/Board22_23';
import Board24_25 from '../Components/Board24_25';
import './BoardPage.css'; // Updated CSS file

// function BoardPage() {
//   const [selectedBoard, setSelectedBoard] = useState('board24_25');

//   const handleSwitch = (board) => {
//     setSelectedBoard(board);
//   };

//   return (
//     <div className="board-page">
//       <div className="switch-container">
//       <div
//           className={`switch-div ${selectedBoard === 'board24_25' ? 'active' : ''}`}
//           onClick={() => handleSwitch('board24_25')}
//         >
//           Board 24-25
//         </div>
//         <div
//           className={`switch-div ${selectedBoard === 'board23_24' ? 'active' : ''}`}
//           onClick={() => handleSwitch('board23_24')}
//         >
//           Board 23-24
//         </div>
//         <div
//           className={`switch-div ${selectedBoard === 'board22_23' ? 'active' : ''}`}
//           onClick={() => handleSwitch('board22_23')}
//         >
//           Board 22-23
//         </div>
        
//       </div>

      


//       <TransitionGroup>
//         <CSSTransition
//           key={selectedBoard}
//           timeout={500}
//           classNames="fade"
//         >
//           <div>
//             {selectedBoard === 'board23_24' ? <Board /> : 
//              selectedBoard === 'board22_23' ? <Board22_23 /> : 
//              <Board24_25 />}
//           </div>
//         </CSSTransition>
//       </TransitionGroup>
//     </div>
//   );
// }

function HeaderOption4({ boards, selectedBoard, setSelectedBoard }) {
  return (
    <div className="relative bg-slate-950 text-white overflow-hidden">
      {/* Nebula effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      </div>
       <div className="relative container mx-auto px-4 py-14">
        <div className="max-w-7xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Horizontal line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            
            {/* Timeline nodes */}
            <div className="relative flex justify-around items-center gap-64">
              {boards.map((board, index) => {
                const isSelected = selectedBoard === board.id;
                
                return (
                  <motion.div
                    key={board.id}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => setSelectedBoard(board.id)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {/* Node circle */}
                    <motion.div
                      className={`relative w-32 h-32 rounded-full flex items-center justify-center border-2 transition-all duration-500 z-10 ${
                        isSelected
                          ? 'border-blue-400 bg-blue-500/20 scale-110'
                          : 'border-slate-700 bg-slate-900 hover:border-slate-600'
                      }`}
                      whileHover={{ scale: isSelected ? 1.1 : 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Pulse effect for selected */}
                      {isSelected && (
                        <>
                          <motion.div
                            className="absolute inset-0 rounded-full border-2 border-blue-400"
                            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <div className="absolute inset-0 rounded-full bg-blue-400 blur-xl opacity-30" />
                        </>
                      )}
                      
                      {/* Year display */}
                      <span className={`text-sm font-light z-10 ${
                        isSelected ? 'text-blue-400' : 'text-slate-500'
                      }`}>
                        {board.year || board.label.split(' ')[1]}
                      </span>
                    </motion.div>
                    
                    {/* Connecting line to label */}
                    <div className={`w-0.5 h-8 my-4 ${
                      isSelected ? 'bg-blue-400' : 'bg-slate-700'
                    }`} />
                    
                    {/* Label */}
                    <motion.div
                      className={`text-center px-6 py-3 rounded-lg transition-all duration-300 ${
                        isSelected
                          ? 'bg-blue-500/10 border border-blue-400/30'
                          : 'bg-slate-900/50 border border-slate-800'
                      }`}
                      whileHover={{ y: -5 }}
                    >
                      <div className={`text-lg font-light whitespace-nowrap ${
                        isSelected ? 'text-white' : 'text-slate-400'
                      }`}>
                        {board.label}
                      </div>
                      {board.year && (
                        <div className={`text-xs mt-1 tracking-wider ${
                          isSelected ? 'text-blue-400' : 'text-slate-600'
                        }`}>
                          {board.year}
                        </div>
                      )}
                    </motion.div>
                    

                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BoardPage() {
  const [selectedBoard, setSelectedBoard] = useState('board24_25');
  
  const boards = [
    { id: 'board24_25', label: 'Board 24-25', year: '2024-2025' },
    { id: 'board23_24', label: 'Board 23-24', year: '2023-2024' },
    { id: 'board22_23', label: 'Board 22-23', year: '2022-2023' }
  ];

  return (
    <div className="board-page">
      <HeaderOption4 
        boards={boards}
        selectedBoard={selectedBoard}
        setSelectedBoard={setSelectedBoard}
      />
      
      <TransitionGroup>
        <CSSTransition
          key={selectedBoard}
          timeout={500}
          classNames="fade"
        >
          <div>
            {selectedBoard === 'board23_24' ? <Board /> : 
             selectedBoard === 'board22_23' ? <Board22_23 /> : 
             <Board24_25 />}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default BoardPage;
