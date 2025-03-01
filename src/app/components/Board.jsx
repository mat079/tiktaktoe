import React from 'react';
import Square from './Square';

export default function Board({ squares, xIsNext, onPlay }) {
  const status = calculateWinner(squares) ? "Winner: " + calculateWinner(squares) : "Next player: " + (xIsNext ? "X" : "O");

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function renderSquare(i) {
    return <Square onSquareClick={() => handleClick(i)} value={squares[i]} />;
  }

  function renderBoard() {
    const boardRows = [];
    for (let i = 0; i < 9; i += 3) {
      boardRows.push(
        <div key={i} className="flex">
          {renderSquare(i)}
          {renderSquare(i + 1)}
          {renderSquare(i + 2)}
        </div>
      );
    }
    return <div>{boardRows}</div>;
  }

  return (
    <div className="flex flex-col items-center h-full justify-center">
      <p className="text-lg font-bold mb-2 ml-0 sm:ml-40">{status}</p> {/* Adjust margin for mobile */}
      <div className="grid grid-cols-3 gap-2">
        {renderBoard()}
      </div>
    </div>
  );
}