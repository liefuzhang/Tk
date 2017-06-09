var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var type_compatibility;
(function (type_compatibility) {
    var Person = (function () {
        function Person() {
        }
        return Person;
    }());
    var p;
    // OK, because of structural typing
    p = new Person();
    // private and protected members in classes
    // For two types to be considered compatible, if one of them has a private member,
    // then the other must have a private member that originated in the same declaration.
    var Animal = (function () {
        function Animal(theName) {
            this.name = theName;
        }
        return Animal;
    }());
    var Rhino = (function (_super) {
        __extends(Rhino, _super);
        function Rhino() {
            return _super.call(this, "Rhino") || this;
        }
        return Rhino;
    }(Animal));
    var Employee = (function () {
        function Employee(theName) {
            this.name = theName;
        }
        return Employee;
    }());
    var animal = new Animal("Goat");
    var rhino = new Rhino();
    var employee = new Employee("Bob");
    animal = rhino;
    animal = employee; // Error: 'Animal' and 'Employee' are not compatible
})(type_compatibility || (type_compatibility = {}));
