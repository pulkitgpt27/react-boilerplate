import React, { useState } from "react";
import Cell from "../Cell/Cell";
import "./Board.scss";
import { N } from "../../constants";

const initialBoard = Array.from(Array(N), () => new Array(N).fill(" "));
const Board = () => {
  const [gameBoard, setGameBoard] = useState<string[][]>(initialBoard);
  const [turn, setTurn] = useState<"X" | "O">("X");

  const checkWinner = (row: number, col: number): boolean => {
    //check row
    let count = 0;
    for (let i = 0; i < N; i++) {
      if (gameBoard[row][i] == turn) {
        count++;
      }
      if (count == N) return true;
    }
    count = 0;
    //check col
    for (let i = 0; i < N; i++) {
      if (gameBoard[i][col] == turn) {
        count++;
      }
      if (count == N) return true;
    }
    count = 0;
    //check first diagonal
    for (let i = 0; i < N; i++) {
      if (gameBoard[i][i] == turn) {
        count++;
      }
      if (count == N) return true;
    }

    //check second diagonal
    for (let i = 0; i < N; i++) {
      if (gameBoard[i][N - i - 1] == turn) {
        count++;
      }
      if (count == N) return true;
    }
    return false;
  };

  const onReset = () => {
    const newBoard = Array.from(Array(N), () => new Array(N).fill(" "));
    setGameBoard(newBoard);
    setTurn("X");
  };
  const onMove = (row: number, col: number) => {
    const tempBoard = gameBoard;
    if (gameBoard[row][col] !== " ") {
      return;
    }
    tempBoard[row][col] = turn;
    setGameBoard(tempBoard);
    // sendRequest(params).then((data) => {
    //   setGameBoard(data.newBoard);
    // });
    if (checkWinner(row, col)) {
      alert(`${turn} wins`);
      onReset();
    } else {
      setTurn(turn === "X" ? "O" : "X");
    }
  };
  return (
    <div className="board-wrapper">
      {gameBoard.map((row, row_index) => {
        return (
          <div key={row_index} className="board-row">
            {row.map((col, col_index) => {
              return (
                <Cell
                  key={col_index}
                  value={col}
                  row={row_index}
                  col={col_index}
                  onClick={onMove}
                />
              );
            })}
          </div>
        );
      })}
      <div>{`Turn: ${turn}`}</div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Board;
