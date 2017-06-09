// TypeScript can figure the return type out by looking at the return statements,
// so we can also optionally leave this off in many cases.
function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) { return x + y; };
// add function type
var myAdd1 = function (x, y) { return x + y; };
// Inferring the types: TypeScript compiler can figure out the type 
// if you have types on one side of the equation
var myAdd2 = function (x, y) { return x + y; };
var myAdd3 = function (x, y) { return x + y; };
//Optional and Default Parameters
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
function buildName1(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
function buildName1b(lastName, firstName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
buildName1b(undefined, 'bob'); // return bob Smith
// rest param ...
function buildName2(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
// this and arrow functions
// Arrow functions capture the this where the function is created rather than where it is invoked
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // NOTE: the line below is now an arrow function, 
        // allowing us to capture 'this' right here, which is deck object
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
// Overloads: With this change, the overloads now give us type-checked calls to the pickCard function.
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
