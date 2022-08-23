
export class Square {
    colour: boolean;
    name: string;
    /**
     * Single square
     * @colour Black or White
     * @name Example: A4
     */
    constructor(squareColour: boolean, squareName: string) {
        this.colour = squareColour;
        this.name = squareName;
    }
}