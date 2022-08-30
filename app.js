"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Square } from "./chessboard/square";
const board_1 = require("./chessboard/board");
let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const board = new board_1.Board(letters, numbers);
console.log(board.result);
