// type variable
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");  // type of output will be 'string'

let output2 = identity("myString");  // more common, we use type argument inference


// array
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
// or
function loggingIdentity2<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

// function type
let myIdentity: <T>(arg: T) => T = identity;
// or use object literal
let myIdentity1: {<T>(arg: T) : T} = identity;

// interface
interface GenericIdentityFn {
    <T>(arg: T): T;
}

let myIdentity2: GenericIdentityFn = identity;

// make generic interface
interface GenericIdentityFn1<T> {
    (arg: T): T;
}

let myIdentity3: GenericIdentityFn1<string> = identity;


// generic classes
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };

// generic constraint
interface Lengthwise {
    length: number;
}

function loggingIdentity3<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// Using Class Types in Generics
// refer to class types by their constructor function
function create<T>(c: new () => T): T {
    return new c();
}
// or use object literal
function create2<T>(c: { new (): T }): T {
    return new c();
}

