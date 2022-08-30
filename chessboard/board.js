"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const square_1 = require("./square");
class Board {
    constructor(ls, ns) {
        this.result = new Array(64);
        Board.letters = ls;
        Board.numbers = ns;
        this.result = Board.defineBoard();
    }
    /**
     * Returns list of Squares
     */
    static defineBoard() {
        let tempList = new Array();
        let counter = 0;
        let color;
        for (let i = 0; i < Board.numbers.length; i++) {
            for (let j = 0; j < Board.letters.length; j++) {
                let notation = String(Board.numbers[i]) + Board.letters[j];
                counter % 2 == 0 ? color = false : color = true;
                counter++;
                let square = new square_1.Square(color, notation);
                tempList.push(square);
            }
        }
        return tempList;
    }
}
exports.Board = Board;
Board.letters = new Array(8);
Board.numbers = new Array(8);
