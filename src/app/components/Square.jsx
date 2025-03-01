import React from 'react';

export default function Square({ value, onSquareClick }) {
  return (
    <button
      className="btn btn-outline w-16 h-16 text-2xl"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
