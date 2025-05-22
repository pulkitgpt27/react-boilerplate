import React from "react";
import "./Cell.scss";
type Props = {
  value: string;
  row: number;
  col: number;
  onClick: (row: number, col: number) => void;
};

const Cell = ({ value, row, col, onClick }: Props) => {
  return (
    <div
      style={value == "X" || value == "O" ? { pointerEvents: "none" } : {}}
      className="board-cell"
      onClick={() => onClick(row, col)}
    >
      {value}
    </div>
  );
};

export default Cell;
