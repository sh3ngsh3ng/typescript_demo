"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// Abstraction
// interface Person {
//     name : string;
//     country : string;
// }
// function disp(person: Person) {
//     console.log(`${person.name} ${person.country}`)
// }
// let p = {
//     name: "Yong",
//     country: "Singapore"
// }
// disp(p)
// Inheritance
var Trainee = /** @class */ (function () {
    function Trainee(name) {
        this.traineeName = name;
    }
    Trainee.prototype.display = function () {
        console.log(this.traineeName);
    };
    return Trainee;
}());
var t = new Trainee("Yong");
console.log(t.traineeName);
t.display();
var JrTrainee = /** @class */ (function (_super) {
    __extends(JrTrainee, _super);
    function JrTrainee(jrName) {
        return _super.call(this, jrName) || this;
    }
    JrTrainee.prototype.receiveKT = function () {
        console.log("KT in progress");
    };
    return JrTrainee;
}(Trainee));
var jt = new JrTrainee("Yong2");
console.log(jt.traineeName);
jt.display();
jt.receiveKT();
