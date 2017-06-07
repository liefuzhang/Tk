/// <reference path="typings/knockout/knockout.d.ts" />
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var Guess = (function () {
    function Guess(name) {
        this.name = ko.observable(name);
    }
    Guess.prototype.let = function () {
        var _loop_1 = function (i) {
            setTimeout(function () { console.log(i); }, 100 * i);
        };
        for (var i = 0; i < 10; i++) {
            _loop_1(i);
        }
    };
    Guess.prototype.const = function () {
        var numLivesForCat = 9;
        var kitty = {
            name: "Aurora",
            numLives: numLivesForCat,
        };
        //// Error
        //kitty = {
        //    name: "Danielle",
        //    numLives: numLivesForCat
        //};
        // all "okay"
        kitty.name = "Rory";
        kitty.name = "Kitty";
        kitty.name = "Cat";
        kitty.numLives--;
    };
    Guess.prototype.destructuring = function () {
        //destructuring
        var input = [1, 2];
        var first = input[0], second = input[1];
        console.log(first); // outputs 1
        console.log(second); // outputs 2
        var _a = [1, 2, 3, 4], one = _a[0], rest = _a.slice(1);
        var o = {
            a: "foo",
            b: 12,
            c: "bar"
        };
        var a = o.a, b = o.b;
    };
    Guess.prototype.spread = function () {
        var first = [1, 2];
        var second = [3, 4];
        var bothPlus = [0].concat(first, second, [5]);
        var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
        var obj = __assign({}, defaults, { food: "override" });
    };
    Guess.prototype.readonlyArray = function () {
        var a = [1, 2, 3, 4];
        var ro = a;
        //ro[0] = 12; // error!
        //ro.push(5); // error!
        //ro.length = 100; // error!
        //a = ro; // error!
    };
    return Guess;
}());
ko.applyBindings(new Guess('Leif'));
