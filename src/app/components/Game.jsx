import React, { useState } from 'react';
import Board from './Board';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  const moves = history.map((squares, move) => {
    const description = move ? 'Go to move #' + move : 'Go to game start';
    return (
      <li key={move}>
        <button className="btn btn-ghost" onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex h-full flex-col sm:flex-row"> {/* Add flex-col for mobile */}
        <div className="game-board">
          <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
        </div>
        <div className="game-info flex flex-col justify-center h-full ml-0 sm:ml-4 mt-4 sm:mt-0"> {/* Adjust margin for mobile */}
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
}