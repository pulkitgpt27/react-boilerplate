import React, { useState } from "react";
import Cell from "../Cell/Cell";
import "./Board.scss";
import { N } from "../../constants";
import { sendRequest } from "../../data/data";

const Board = () => {
  const [gameBoard, setGameBoard] = useState<string[][]>(
    Array.from(Array(N), () => new Array(N).fill(" "))
  );
  const [turn, setTurn] = useState("X");

  const checkWinner = (): boolean => {
    let p1 = 0,
      p2 = 0;
    for (let i = 0; i < N; i++) {
      (p1 = 0), (p2 = 0);
      for (let j = 0; j < N; j++) {
        if (i == 0) console.log("row 0", gameBoard[i][j]);
        if (gameBoard[i][j] === "X") p1++;
        if (gameBoard[i][j] === "O") p2++;
      }
      if (p1 === N || p2 === N) return true;
    }
    //check col
    for (let i = 0; i < N; i++) {
      p1 = 0;
      p2 = 0;
      for (let j = 0; j < N; j++) {
        if (gameBoard[j][i] === "X") p1++;
        if (gameBoard[j][i] === "O") p2++;
      }
      if (p1 === N || p2 === N) return true;
    }

    //check diag
    (p1 = 0), (p2 = 0);
    for (let i = 0; i < N; i++) {
      if (gameBoard[i][N - i - 1] === "X") p1++;
      if (gameBoard[i][N - i - 1] === "O") p2++;
      if (p1 === N || p2 === N) return true;
    }

    //check diag
    (p1 = 0), (p2 = 0);
    for (let i = N - 1; i >= 0; i--) {
      if (gameBoard[i][i] === "X") p1++;
      if (gameBoard[i][i] === "O") p2++;
      if (p1 === N || p2 === N) return true;
    }
    return false;
  };

  const onMove = (row: number, col: number) => {
    const tempBoard = gameBoard;
    if (gameBoard[row][col] === "X" || gameBoard[row][col] === "O") {
      return;
    }
    const params = {
      row,
      col,
      value: turn,
    };
    if (turn == "X") {
      tempBoard[row][col] = "X";
      setGameBoard(tempBoard);
      const params = {
        row,
        col,
        value: turn,
      };
      sendRequest(params).then((data) => {
        setGameBoard(data.newBoard);
      });
      if (checkWinner()) {
        alert("X wins");
      }
      setTurn("O");
    } else {
      tempBoard[row][col] = "O";
      setGameBoard(tempBoard);

      sendRequest(params).then((data) => {
        setGameBoard(data.newBoard);
      });
      if (checkWinner()) {
        alert("O wins");
      }
      setTurn("X");
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
    </div>
  );
};

export default Board;
