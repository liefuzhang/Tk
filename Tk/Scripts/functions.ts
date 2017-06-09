// TypeScript can figure the return type out by looking at the return statements,
// so we can also optionally leave this off in many cases.
function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function (x: number, y: number): number { return x + y; };


// add function type
let myAdd1: (x1: number, y: number) => number =
    function (x: number, y: number): number { return x + y; }


// Inferring the types: TypeScript compiler can figure out the type 
// if you have types on one side of the equation
let myAdd2 = function (x: number, y: number): number { return x + y; };
let myAdd3: (baseValue: number, increment: number) => number =
    function (x, y) { return x + y; };


//Optional and Default Parameters
function buildName(firstName: string, lastName?: string) { // optional param has to be last
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

function buildName1(firstName: string, lastName = "Smith") { // default param can be front
    return firstName + " " + lastName;
}

function buildName1b(lastName = "Smith", firstName: string) { // default param can be front
    return firstName + " " + lastName;
}
buildName1b(undefined, 'bob'); // return bob Smith


// rest param ...
function buildName2(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}


// this and arrow functions
// Arrow functions capture the this where the function is created rather than where it is invoked
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        // NOTE: the line below is now an arrow function, 
        // allowing us to capture 'this' right here, which is deck object
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);


// Overloads: With this change, the overloads now give us type-checked calls to the pickCard function.
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: { suit: string; card: number; }[]): number;
function pickCard(x: number): { suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);