import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Board from '../Components/Board';
import Board22_23 from '../Components/Board22_23';
import Board24_25 from '../Components/Board24_25';
import './BoardPage.css'; // Updated CSS file

function BoardPage() {
  const [selectedBoard, setSelectedBoard] = useState('board24_25');

  const handleSwitch = (board) => {
    setSelectedBoard(board);
  };

  return (
    <div className="board-page">
      <div className="switch-container">
      <div
          className={`switch-div ${selectedBoard === 'board24_25' ? 'active' : ''}`}
          onClick={() => handleSwitch('board24_25')}
        >
          Board 24-25
        </div>
        <div
          className={`switch-div ${selectedBoard === 'board23_24' ? 'active' : ''}`}
          onClick={() => handleSwitch('board23_24')}
        >
          Board 23-24
        </div>
        <div
          className={`switch-div ${selectedBoard === 'board22_23' ? 'active' : ''}`}
          onClick={() => handleSwitch('board22_23')}
        >
          Board 22-23
        </div>
        
      </div>

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
