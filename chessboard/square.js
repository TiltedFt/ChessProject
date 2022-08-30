"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
class Square {
    /**
     * Single square
     * @param Colour of the square White or Black (true or false)
     * @param Name of the square
     */
    constructor(squareColour, squareName) {
        this.colour = squareColour;
        this.name = squareName;
    }
}
exports.Square = Square;
