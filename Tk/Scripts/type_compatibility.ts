module type_compatibility {
    // Type compatibility in TypeScript is based on structural subtyping
    // only the structure matters
    // The basic rule for TypeScript’s structural type system is that 
    // x is compatible with y if y has at least the same members as x
    interface Named {
        name: string;
    }

    class Person {
        name: string;
    }

    let p: Named;
    // OK, because of structural typing
    p = new Person();


    // private and protected members in classes
    // For two types to be considered compatible, if one of them has a private member,
    // then the other must have a private member that originated in the same declaration.
    class Animal {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }

    class Rhino extends Animal {
        constructor() { super("Rhino"); }
    }

    class Employee {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }

    let animal = new Animal("Goat");
    let rhino = new Rhino();
    let employee = new Employee("Bob");

    animal = rhino;
    animal = employee; // Error: 'Animal' and 'Employee' are not compatible
}
