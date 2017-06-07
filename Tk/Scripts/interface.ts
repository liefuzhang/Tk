// optional properties
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

interface Point {
    readonly x: number;
    readonly y: number;
}
// readonly vs const
// The easiest way to remember whether to use readonly or const 
// is to ask whether you’re using it on a variable or a property.
// Variables use const whereas properties use readonly.


//interfaces are also capable of describing function types.
interface SearchFunc {
    (source: string, subString: string): boolean;
}

//the names of the parameters do not need to match
let mySearch: SearchFunc;
mySearch = function (src: string, subStr: string) {
    let result = src.search(subStr);
    return result > -1;
}

//Indexable Types
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

// class type
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

// Extending Interfaces
