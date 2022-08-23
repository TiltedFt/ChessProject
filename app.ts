// import { Square } from "./chessboard/square";
import { Board } from './chessboard/board';


let letters: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let numbers: Array<number> = [ 1,   2,   3,   4,   5,   6,   7,   8];
const board: Board = new Board(letters, numbers);
console.log(board);