"use strict";
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
