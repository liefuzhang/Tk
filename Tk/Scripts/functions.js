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
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
// this and arrow functions
