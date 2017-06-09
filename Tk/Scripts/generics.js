// type variable
function identity(arg) {
    return arg;
}
var output = identity("myString"); // type of output will be 'string'
var output2 = identity("myString"); // more common, we use type argument inference
// array
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
// or
function loggingIdentity2(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
// function type
var myIdentity = identity;
// or use object literal
var myIdentity1 = identity;
var myIdentity2 = identity;
var myIdentity3 = identity;
// generic classes
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
function loggingIdentity3(arg) {
    console.log(arg.length);
    return arg;
}
// Using Class Types in Generics
// refer to class types by their constructor function
function create(c) {
    return new c();
}
// or use object literal
function create2(c) {
    return new c();
}
