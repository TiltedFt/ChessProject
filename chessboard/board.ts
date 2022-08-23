import { Square } from './square';

export class Board {
    static letters: Array<string> = new Array<string>(8);
    static numbers: Array<number> = new Array<number>(8);
    private result: Array<Square> = new Array<Square>(64);
    

    constructor(ls: Array<string>, ns: Array<number>) {
        Board.letters = ls;
        Board.numbers = ns;
        this.result = Board.defineBoard();
    }
    /** 
     * Returns list of Squares
     */
    static defineBoard(): Array<Square> {
        let tempList: Array<Square> = new Array<Square>();
        let counter: number = 0;
        let color: boolean;
        for (let i = 0; i < Board.numbers.length; i++) {
            for(let j = 0; j < Board.letters.length; j++) {
                let notation: string = String(Board.numbers[i]) + Board.letters[j];
                counter % 2 == 0 ? color = false : color = true;
                counter++;
                let square = new Square(color, notation);
                tempList.push(square);
            }
        }
        return tempList;
    }
}
