// Typescript
// tsc.cmd <file-name> --watch
export{}

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
class Trainee {
    traineeName: string;
    constructor(name: string) {
        this.traineeName = name;
    }

    display() {
        console.log(this.traineeName);
    }
}


let t = new Trainee("Yong");
console.log(t.traineeName);
t.display();

















