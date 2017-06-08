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
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

// this and arrow functions

