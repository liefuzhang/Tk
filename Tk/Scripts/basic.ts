/// <reference path="typings/knockout/knockout.d.ts" />

class Guess {
    public name: KnockoutObservable<string>;

    constructor(name: string) {
        this.name = ko.observable<string>(name);
    }

    public let() {
        for (let i = 0; i < 10; i++) {
            setTimeout(function () { console.log(i); }, 100 * i);
        }
    }

    public const() {
        const numLivesForCat = 9;
        const kitty = {
            name: "Aurora",
            numLives: numLivesForCat,
        }

        //// Error
        //kitty = {
        //    name: "Danielle",
        //    numLives: numLivesForCat
        //};

        // all "okay"
        kitty.name = "Rory";
        kitty.name = "Kitty";
        kitty.name = "Cat";
        kitty.numLives--
    }

    public destructuring() {
        //destructuring
        let input = [1, 2];
        let [first, second] = input;
        console.log(first); // outputs 1
        console.log(second); // outputs 2

        let [one, ...rest] = [1, 2, 3, 4];

        let o = {
            a: "foo",
            b: 12,
            c: "bar"
        };
        let { a, b } = o;
    }

    public spread() {
        let first = [1, 2];
        let second = [3, 4];
        let bothPlus = [0, ...first, ...second, 5];

        let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
        let obj = { ...defaults, food: "override" };
    }

    public readonlyArray() {
        let a: number[] = [1, 2, 3, 4];
        let ro: ReadonlyArray<number> = a;
        //ro[0] = 12; // error!
        //ro.push(5); // error!
        //ro.length = 100; // error!
        //a = ro; // error!
    }

}

ko.applyBindings(new Guess('Leif'));