// x is inferred to be number
var x = 3;
// Type inference also works in “the other direction” in some cases in TypeScript.
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.buton); //<- Error
};
// If this function expression were not in a contextually typed position, 
// the mouseEvent parameter would have type any
var f = function (mouseEvent) {
    console.log(mouseEvent.buton); //<- no Error
};
// use explicit type to override the contextual type
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.buton); //<- Now, no error is given
};
