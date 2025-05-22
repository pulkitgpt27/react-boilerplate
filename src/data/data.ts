import { N } from "../constants";

const board = Array.from(Array(N), () => new Array(N).fill(" "));

export type Params = {
  row: number;
  col: number;
  value: string;
}

export type Response = {
  newBoard: string[][]
}
export const sendRequest = (params: Params) => {
  return new Promise<Response>((resolve) => {
    setTimeout(() => {
      board[params.row][params.col] = params.value;
      const data = {
        newBoard: board
      }
      resolve(data);
    },1000)
  })
}