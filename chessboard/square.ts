
export class Square {
    colour: boolean;
    name: string;
    /**
     * Single square
     * @param Colour of the square White or Black (true or false)
     * @param Name of the square
     * @param Piece piece 
     */
    constructor(squareColour: boolean, squareName: string) {
        this.colour = squareColour;
        this.name = squareName;
    }
}